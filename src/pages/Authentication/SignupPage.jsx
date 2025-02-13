import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./FirebaseConfig";
// Data
import {
  GOOGLE_SIGNUP_URI,
  SIGNUP_USER_URI,
  VERIFY_OTP,
  VERIFY_SIGNUP_OTP,
} from "../../data/api";
import { get_canonical } from "../../utils/index";
import { USERS_LOGIN_META } from "../../data/meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import OtpModal from "../../components/Auth/OtpModal";
import BackButton from "../../components/Buttons/BackButton";

export default function SignupPage({ setToken, token }) {
  const [otp, setOTP] = useState(null);
  const [OTPModal, setOTPModal] = useState(false);
  const [otpAlert, setOTPAlert] = useState("");
  const [newToken, setNewToken] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token && token !== "" && token !== undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/");
    }, []);
  }

  const [formInfo, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // Update form value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };
  const [user, setUser] = useState(null);

  // ===================Google Login ==========================//
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        let user = result.user;
        user.login_type = "google";

        // Send user data to the backend
        sendUserDataToBackend(user, GOOGLE_SIGNUP_URI);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  // ===================Facebook Login ==========================//
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider) // Use the Facebook provider
      .then((result) => {
        let user = result.user;
        user.login_type = "facebook";

        // Send user data to the backend
        sendUserDataToBackend(user, GOOGLE_SIGNUP_URI);
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error);
      });
  };

  // Function to send user data to the backend
  const sendUserDataToBackend = async (user, url) => {
    let data = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      login_type: user.login_type,
      access_token: user.accessToken,
    };

    try {
      const response = await axios.post(url, data);
      if (response.data.status == "success") {
        // Set login token
        setToken(response.data.access_token);
        localStorage.setItem(
          "wleness_user",
          JSON.stringify({
            key: "email",
            username: data.email,
            type: "user",
            login_type: data.login_type,
          }),
        );
        navigate("/");
      } else {
        setMessages(response.data.status, response.data.message);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setMessages("error", "Internal Server Error! Please try again later"); // Set error message
    }
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
    if (
      formInfo["name"] &&
      formInfo["phone"] &&
      formInfo["email"] &&
      formInfo["password"]
    ) {
      // Append form fields to the FormData object
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      try {
        const response = await axios.post(SIGNUP_USER_URI, formData);
        setMessages(response.data.status, response.data.message); // Set success message

        // Empty form after successfully sending data
        if (response.data.status == "success") {
          setEmail(formInfo["email"]);
          localStorage.setItem(
            "wleness_user",
            JSON.stringify({
              key: "email",
              username: formInfo["email"],
              type: "user",
              login_type: "password",
            }),
          );
          // Empty Variable if success
          setFormData({
            name: "",
            phone: "",
            email: "",
            password: "",
          });
          setNewToken(response.data.access_token);
          setOTPModal(true);
        } else {
          setMessages(response.data.status, response.data.message);
        }
      } catch (error) {
        console.error("Error sending data:", error);
        setMessages("error", "Internal Server Error! Please try again later"); // Set error message
      }
    } else {
      setMessages("error", "Please fill in your details properly!"); // Set error message
    }
  };

  // Handle OTP Verification
  const handleVerifyOTP = (e) => {
    e.preventDefault();

    if (otp == null) {
      setOTPAlert("Please Enter Your OTP");
    } else {
      let otpBody = {
        otp: otp,
        email: email,
      };

      axios
        .post(VERIFY_SIGNUP_OTP, otpBody)
        .then((response) => {
          if (response.data.status == "success") {
            // Set login token after OTP Verification
            setToken(newToken);
            localStorage.setItem("phone", phone);
            navigate("/");
          } else {
            setOTPAlert(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Helmet>
        <title>{USERS_LOGIN_META.title}</title>
        <meta name="description" content={USERS_LOGIN_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <section className="grid h-[100svh] place-items-center py-6">
        <div className="grid rounded-xl border-slate-100 shadow-2xl lg:w-3/4 lg:grid-cols-[3fr_1.8fr] lg:border-2">
          <div className="mb-8 grid place-items-center lg:h-[600px]">
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-extrabold text-primary-400 lg:text-5xl">
                Create an Account
              </h2>
              <div className="mb-2 flex items-center justify-center gap-x-2 py-2">
                <button
                  onClick={handleGoogleSignUp}
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
              <span className="mb-4 inline-block font-semibold text-slate-500">
                or use your email for registration
              </span>
              {/* Login Form */}
              <form onSubmit={handleSubmit} className="mx-auto lg:w-96">
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
                  <label htmlFor="name">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="px-4 text-slate-400"
                    />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formInfo.name}
                    onChange={handleChange}
                    className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
                  />
                </div>
                <div className="mb-4 flex items-center rounded-md bg-slate-100">
                  <label htmlFor="phone">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="px-4 text-slate-400"
                    />
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Mobile"
                    value={formInfo.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
                  />
                </div>
                <div className="mb-4 flex items-center rounded-md bg-slate-100">
                  <label htmlFor="email">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="px-4 text-slate-400"
                    />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formInfo.email}
                    onChange={handleChange}
                    className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
                  />
                </div>
                <div className="mb-6 flex items-center rounded-md bg-slate-100">
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
                <button className="rounded-full border-2 border-primary-300 px-5 py-2 text-sm font-bold text-primary-300 xl:px-12 xl:py-3">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>

          <div className="grid place-items-center bg-gradient-to-bl from-primary-400 via-teal-400 to-primary-400 py-10 lg:rounded-r-xl">
            <div className="px-4 text-center lg:px-8">
              <BackButton />
              <h2 className="text-2xl font-extrabold text-white lg:text-5xl">
                Welcome Back!
              </h2>
              <p className="my-4 text-lg font-semibold text-slate-100 xl:my-8">
                To keep connected with us please login with your personal info
              </p>
              <Link
                to="/login"
                className="rounded-full border-2 border-slate-100 px-5 py-2 text-sm font-semibold text-white xl:px-12 xl:py-3"
              >
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </section>
      <OtpModal
        isOpen={OTPModal}
        msg={otpAlert}
        submit={handleVerifyOTP}
        otp={otp}
        setOTP={setOTP}
        email={email}
      />
    </>
  );
}
