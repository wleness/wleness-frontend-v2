import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FORGOT_PASSWORD_URI } from "../../data/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { FORGOT_PASSWORD_META } from "../../data/meta";
import { get_canonical } from "../../utils";

const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const setMessage = (status, message) => {
    setSuccessMessage({
      status: status,
      message: message,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email == null || email == "") {
      setMessage("error", "Please Enter Your Email");
      setLoading(false);
      return null;
    }
    setLoading(true);
    let formData = new FormData();
    formData.append("email", email);

    axios
      .post(FORGOT_PASSWORD_URI, formData)
      .then((response) => {
        if (response.status == 200) {
          setMessage(response.data.status, response.data.message);
          setLoading(false);
          setEmail("");
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>{FORGOT_PASSWORD_META.title}</title>
        <meta name="description" content={FORGOT_PASSWORD_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <div className="flex items-center justify-center md:w-1/2 md:px-4">
        <div className="w-80 rounded-xl bg-white p-6 shadow-[5px_5px_14px_3px] shadow-gray-300 sm:w-[400px] lg:py-10">
          <div className="p-4">
            <div className="text-center">
              <h2 className="block text-2xl font-bold text-gray-800">
                Forgot password?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Remember your password? </span>
                <Link
                  to="/login"
                  className="font-bold text-teal-600 decoration-2 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label htmlFor="email" className="mb-2 ml-1 block text-sm">
                      <span className="mb-1 block font-semibold">
                        Email address
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        value={email}
                        onChange={handleChange} // Handle email input change
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
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-teal-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 "
                  >
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className={`animate-spin text-lg ${
                        loading ? "block" : "hidden"
                      }`}
                    />
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
