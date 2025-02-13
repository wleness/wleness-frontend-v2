import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { auth, googleProvider, facebookProvider } from "./FirebaseConfig";
// Data
import { iconFacebookCircle, iconGoogle, login, logo } from "../../assets";
import { GOOGLE_LOGIN_URI, LOGIN_USER_URI } from "../../data/api";

export default function Login({ setToken, token }) {
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token && token !== "" && token !== undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/user/dashboard");
    }, []);
  }

  const [formInfo, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const [user, setUser] = useState(null);

  // ===================Google Login ==========================//
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        VerifyLoginData(user, GOOGLE_LOGIN_URI);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  // ===================Facebook Login ==========================//
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider) // Use the Facebook provider
      .then((result) => {
        const user = result.user;

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect to the home page
        navigate("/"); // Replace "/" with the appropriate home page route
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error);
      });
  };

  const VerifyLoginData = async (data, url) => {
    // Append form fields to the FormData object
    let formData = new FormData();
    formData.append("email", data.email);
    formData.append("access_token", data.accessToken);
    try {
      // Send user data to the backend
      const response = await axios.post(url, formData);
      setMessages(response.data.status, response.data.message); // set success message

      // Empty form after successfully sending data
      if (response.data.status === "success") {
        setToken(response.data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("wleness_user_type", "user");
        localStorage.setItem("login_type", "google");

        navigate("/user/dashboard");
      } else {
        setMessages(response.data.status, response.data.message);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setMessages("error", "Internal Server Error! Please try again later"); // set error message
    }
  };

  const location = useLocation();

  // Update form value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Set alert message
  const setMessages = (status, msg) => {
    setSuccessMessage({
      status: status,
      message: msg,
    });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (formInfo["phone"] && formInfo["password"]) {
      // Append form fields to the FormData object
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      try {
        // Send user data to the backend
        const response = await axios.post(LOGIN_USER_URI, formData);
        setMessages(response.data.status, response.data.message); // set success message

        // Empty form after successfully sending data
        if (response.data.status === "success") {
          setFormData({
            phone: "",
            password: "",
          });
          setToken(response.data.access_token);
          localStorage.setItem("phone", formInfo["phone"]);
          localStorage.setItem("wleness_user_type", "user");
          localStorage.setItem("login_type", "password");

          navigate("/");
        } else {
          setMessages(response.data.status, response.data.message);
        }
      } catch (error) {
        console.error("Error sending data:", error);
        setMessages("error", "Internal Server Error! Please try again later"); // set error message
      }
    } else {
      setMessages("error", "Please fill in your details properly!"); // set error message
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center md:flex-row md:items-stretch">
      <aside className="hidden items-center justify-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-contain bg-right bg-no-repeat md:flex md:w-1/2">
        <img src={login} alt="" className="block w-[648px] object-cover" />
      </aside>

      <div className="flex items-center justify-center md:w-1/2 md:px-4">
        <div className="w-80 sm:w-[400px]">
          <div className="mx-auto mb-3 w-64 sm:w-[280px]">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                loading="lazy"
                className="block w-full object-cover"
              />
            </Link>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            {successMessage.status == "" ? (
              location.state &&
              location.state.successMessage && (
                <p className="mb-3 text-center font-semibold text-red-500">
                  {location.state.successMessage}
                </p>
              )
            ) : (
              <p
                className={`mb-3 text-center font-semibold ${
                  successMessage.status == "success"
                    ? " text-green-500 "
                    : " text-red-500 "
                }`}
              >
                {successMessage.message}
              </p>
            )}

            <label htmlFor="phone" className="mb-5 block">
              <input
                type="tel"
                id="phone"
                maxLength={10}
                name="phone"
                placeholder="Mobile Number"
                className="form-input"
                value={formInfo.phone}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={formInfo.password}
                onChange={handleChange}
              />
            </label>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="mb-6 inline-block font-medium text-primary-400"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-primary !w-fit !px-28 !py-3">
                LOGIN
              </button>
            </div>
          </form>

          <div className="md:px-16">
            <div className="my-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-28 bg-slate-200"></span>
              <span className="text-sm font-medium">OR</span>
              <span className="h-[2px] w-28 bg-slate-200"></span>
            </div>
            <div className="mb-6 flex justify-center gap-x-4">
              <button
                className="rounded-lg bg-primary-50/80 px-4 py-2 transition-colors hover:bg-primary-50"
                onClick={handleGoogleSignIn}
              >
                <img src={iconGoogle} alt="" className="w-6" />
              </button>
              <button
                className="rounded-lg bg-primary-50/80 px-4 py-2 transition-colors hover:bg-primary-50"
                onClick={handleFacebookSignIn}
              >
                <img src={iconFacebookCircle} alt="" className="w-6" />
              </button>
            </div>
            <p className="text-center font-medium">
              <span>Don't have an account yet. </span>
              <Link className="font-semibold text-primary-400" to="/signup">
                Sign Up
              </Link>
            </p>
            <p className="text-center font-medium">
              <span>Login as an Expert. </span>
              <Link
                className="font-semibold text-primary-400"
                to="/experts-login"
              >
                Login In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
