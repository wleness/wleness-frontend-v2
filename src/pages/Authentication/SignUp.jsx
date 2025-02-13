import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { colorIconFacebook, colorIconGoogle } from "../../assets";
import axios from "axios";
import { GOOGLE_SIGNUP_URI, SIGNUP_USER_URI, VERIFY_OTP } from "../../data/api";
import { auth, googleProvider, facebookProvider } from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import SocialAuthButtons from "../../components/Buttons/SocialAuthButtons";
import OtpModal from "../../components/Auth/OtpModal";
import { Helmet } from "react-helmet";
import { USERS_SIGNUP_META } from "../../data/meta";
import { get_canonical } from "../../utils";

export default function Signup({ setToken, token }) {
  const [otp, setOTP] = useState(null);
  const [OTPModal, setOTPModal] = useState(false);
  const [otpAlert, setOTPAlert] = useState("");
  const [newToken, setNewToken] = useState("");
  const [phone, setPhone] = useState(null);
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
    confirm_password: "",
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
  const handleGoogleSignIn = () => {
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
        const user = result.user;
        console.log(user);

        // Send user data to the backend
        sendUserDataToBackend(user);

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect to the home page
        navigate("/"); // Replace "/" with the appropriate home page route
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
      formInfo["password"] &&
      formInfo["confirm_password"]
    ) {
      // Check if passwords match
      if (formInfo["password"] !== formInfo["confirm_password"]) {
        setMessages("error", "Passwords don't match"); // Set error message
        return;
      }

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
          setPhone(formInfo["phone"]);
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
            confirm_password: "",
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
  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    if (otp == null) {
      setOTPAlert("Please Enter Your OTP");
    } else {
      const verifyOtp = await axios.post(VERIFY_OTP, { otp: otp });
      console.log(verifyOtp.data);
      if (verifyOtp.data.status == "success") {
        // Set login token after OTP Verification
        setToken(newToken);
        localStorage.setItem("phone", phone);
        navigate("/");
      } else {
        setOTPAlert(verifyOtp.data.message);
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <Helmet>
        <title>{USERS_SIGNUP_META.title}</title>
        <meta name="description" content={USERS_SIGNUP_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <div className="flex flex-col items-center justify-center md:w-1/2 md:px-12">
        <div className="w-80 rounded-xl bg-white px-6 py-8 shadow-[5px_5px_14px_3px] shadow-gray-300 sm:w-[400px]">
          <SocialAuthButtons
            google={handleGoogleSignIn}
            facebook={handleFacebookSignIn}
          />

          <div className="my-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-36 bg-slate-200"></span>
            <span className="text-sm font-medium">OR</span>
            <span className="h-[2px] w-36 bg-slate-200"></span>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="mb-4 px-4">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formInfo.name}
                onChange={handleChange}
                className="form-input-underline"
              />
            </label>

            <label htmlFor="phone">
              <input
                type="tel"
                maxLength={10}
                id="phone"
                name="phone"
                placeholder="Mobile"
                value={formInfo.phone}
                onChange={handleChange}
                className="form-input-underline"
              />
            </label>

            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formInfo.email}
                onChange={handleChange}
                className="form-input-underline"
              />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formInfo.password}
                onChange={handleChange}
                className="form-input-underline"
              />
            </label>

            <label htmlFor="confirm_password">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formInfo.confirm_password}
                onChange={handleChange}
                className="form-input-underline"
              />
            </label>
            <p
              className={`text-center font-semibold ${
                successMessage.status == "success"
                  ? " text-green-500 "
                  : " text-red-500 "
              }`}
            >
              {successMessage.message}
            </p>
            <div className="mt-6 text-center">
              <button className="btn-primary !w-full !py-3 !text-sm !font-semibold lg:!px-20">
                CREATE ACCOUNT
              </button>
            </div>
          </form>

          <div className="md:px-10">
            {/* Login Link */}
            <p className="text-center">
              <span> Already have an account? </span>
              <Link
                className="font-bold text-primary-100 hover:text-primary-500"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <OtpModal
        isOpen={OTPModal}
        msg={otpAlert}
        submit={handleVerifyOTP}
        otp={otp}
        setOTP={setOTP}
        phone={phone}
      />
    </>
  );
}
