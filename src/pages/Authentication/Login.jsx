import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./FirebaseConfig";
// Data
import { GOOGLE_LOGIN_URI, LOGIN_USER_URI } from "../../data/api";
import SocialAuthButtons from "../../components/Buttons/SocialAuthButtons";
import { get_canonical } from "../../utils/index";
import { USERS_LOGIN_META } from "../../data/meta";

export default function Login({ setToken, token }) {
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token && token !== "" && token !== undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/");
    }, []);
  }

  // Handle Redirect Messsages
  useEffect(() => {
    const url = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get("source");

    if (paramValue == "passwordReset") {
      setMessages("success", "Password reset successfully! Please Login");
    }
  }, []);

  const [formInfo, setFormData] = useState({
    username: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // ===================Google Login ==========================//
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
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
    let request_data = {
      email: data.email,
      access_token: data.accessToken,
    };
    try {
      // Send user data to the backend
      const response = await axios.post(url, request_data);
      setMessages(response.data.status, response.data.message); // set success message

      // Empty form after successfully sending data
      if (response.data.status === "success") {
        setToken(response.data.access_token);

        localStorage.setItem(
          "wleness_user",
          JSON.stringify({
            key: "email",
            username: data.email,
            type: "user",
            login_type: "google",
          }),
        );

        navigate("/");
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

  const validateMobileNumberOrEmail = (username) => {
    // Regular expression for a valid email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Regular expression for a valid mobile number
    const mobileRegex = /^[0-9]{10}$/;

    if (emailRegex.test(username)) {
      return "email";
    } else if (mobileRegex.test(username)) {
      return "phone";
    } else {
      return "invalid";
    }
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (formInfo["username"] && formInfo["password"]) {
      let userType = validateMobileNumberOrEmail(formInfo["username"]);
      if (userType == "invalid") {
        setMessages("error", "Please enter email or phone"); // set success message
        return null;
      }

      // Append form fields to the FormData object
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }
      formData.append("value_type", userType);

      try {
        // Send user data to the backend
        const response = await axios.post(LOGIN_USER_URI, formData);
        setMessages(response.data.status, response.data.message); // set success message

        // Empty form after successfully sending data
        if (response.data.status === "success") {
          setToken(response.data.access_token);
          localStorage.setItem(
            "wleness_user",
            JSON.stringify({
              key: userType,
              username: formInfo["username"],
              type: "user",
              login_type: "password",
            }),
          );
          setFormData({
            username: "",
            password: "",
          });

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

  return (
    <>
      <Helmet>
        <title>{USERS_LOGIN_META.title}</title>
        <meta name="description" content={USERS_LOGIN_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <div className="flex items-center justify-center md:w-1/2 md:px-4">
        <div className="w-80 rounded-xl bg-white p-6 shadow-[5px_5px_14px_3px] shadow-gray-300 sm:w-[400px] lg:py-10">
          <SocialAuthButtons
            google={handleGoogleSignIn}
            facebook={handleFacebookSignIn}
          />

          <div className="my-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-36 bg-slate-200"></span>
            <span className="text-sm font-medium">OR</span>
            <span className="h-[2px] w-36 bg-slate-200"></span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mb-8 px-4">
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

            <label htmlFor="username" className="mb-5 block">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email or Mobile Number"
                className="form-input-underline"
                value={formInfo.username}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="form-input-underline"
                value={formInfo.password}
                onChange={handleChange}
              />
            </label>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="mb-6 inline-block text-sm font-medium text-primary-400"
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

          <div className="md:px-8">
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
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
