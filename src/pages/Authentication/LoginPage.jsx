import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./FirebaseConfig";
// Data
import { GOOGLE_LOGIN_URI, LOGIN_USER_URI } from "../../data/api";
import { get_canonical } from "../../utils/index";
import { USERS_LOGIN_META } from "../../data/meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import BackButton from "../../components/Buttons/BackButton";

export default function LoginPage({ setToken, token }) {
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
        VerifyLoginData(user, GOOGLE_LOGIN_URI, "google");
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
        VerifyLoginData(user, GOOGLE_LOGIN_URI, "facebook");
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error);
      });
  };

  const VerifyLoginData = async (data, url, login_type) => {
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
            login_type: login_type,
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
      <section className="grid h-[100svh] place-items-center py-6">
        <div className="grid rounded-xl border-slate-100 shadow-2xl lg:w-3/4 lg:grid-cols-[1.8fr_3fr] lg:border-2">
          <div className="mb-8 grid place-items-center lg:order-2 lg:h-[600px]">
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-extrabold text-primary-400 lg:text-5xl">
                Sign in to Wleness
              </h2>
              <div className="mb-6 flex items-center justify-center gap-x-2 py-2">
                <button
                  onClick={handleGoogleSignIn}
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-slate-200"
                >
                  <FontAwesomeIcon icon={faGoogle} className="text-slate-500" />
                </button>
                <button
                  onClick={handleFacebookSignIn}
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-slate-200"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-slate-500"
                  />
                </button>
              </div>
              <span className="mb-6 inline-block font-semibold text-slate-500">
                or use your email for registration
              </span>
              {/* Login Form */}
              <form onSubmit={handleSubmit} className="mx-auto mb-4 lg:w-96">
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
                <div className="mb-4 flex items-center rounded-md bg-slate-100">
                  <label htmlFor="username">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="px-4 text-slate-400"
                    />
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Email or Mobile Number"
                    value={formInfo.username}
                    onChange={handleChange}
                    className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
                  />
                </div>
                <div className="mb-2 flex items-center rounded-md bg-slate-100">
                  <label htmlFor="password">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="px-4 text-slate-400"
                    />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formInfo.password}
                    onChange={handleChange}
                    className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
                  />
                </div>
                <div className="mb-6 text-right">
                  <Link
                    to="/forgot-password"
                    className="inline-block text-sm font-semibold text-primary-400"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <button className="rounded-full border-2 border-primary-300 px-5 py-2 text-sm font-bold text-primary-300 xl:px-12 xl:py-3">
                  SIGN IN
                </button>
              </form>
              <div className="font-semibold text-slate-500">
                <Link
                  to="/experts-login"
                  className="inline-block text-primary-400 underline underline-offset-2"
                >
                  Login
                </Link>
                <span> as an Expert</span>
              </div>
            </div>
          </div>

          <div className="grid place-items-center bg-gradient-to-bl from-primary-400 via-teal-400 to-primary-400 py-10 lg:order-1 lg:rounded-l-xl">
            <div className="px-4 text-center lg:px-8">
              <BackButton />
              <h2 className="text-2xl font-extrabold text-white lg:text-5xl">
                Hello Friend!
              </h2>
              <p className="my-4 text-lg font-semibold text-slate-100 xl:my-8">
                Enter you personal details and start journey with us
              </p>
              <Link
                to="/signup"
                className="rounded-full border-2 border-slate-100 px-5 py-2 text-sm font-semibold text-white xl:px-12 xl:py-3"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
