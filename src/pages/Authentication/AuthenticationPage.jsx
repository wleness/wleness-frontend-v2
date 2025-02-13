import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function AuthenticationPage({ setToken, token }) {
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token && token !== "" && token !== undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/");
    }, []);
  }

  const [page, setPage] = useState(null);

  useEffect(() => {
    if (window.location.pathname == "/signup") {
      setPage({
        page: "signup",
        form_title: "Create an Account",
        form_button_text: "SIGN UP",
        title: "Welcome Back!",
        desc: "To keep connected with us please login with your personal info",
        button_text: ["SIGN IN", "/login"],
      });
    } else if (window.location.pathname == "/login") {
      setPage({
        page: "login",
        form_title: "Sign in to Wleness",
        form_button_text: "SIGN IN",
        title: "Hello Friend!",
        desc: "Enter you personal details and start journey with us",
        button_text: ["SIGN UP", "/signup"],
      });
    } else {
      console.log("Page not found");
    }
  }, [page]);

  if (!page) return null;
  return (
    <section className="grid h-[100svh] place-items-center py-6">
      <div
        className={`grid ${
          page?.page == "login"
            ? "lg:grid-cols-[1.8fr_3fr]"
            : "lg:grid-cols-[3fr_1.8fr]"
        } rounded-xl border-slate-100 shadow-2xl lg:w-3/4 lg:border-2`}
      >
        <div
          className={`mb-8 grid place-items-center lg:h-[600px] ${
            page?.page == "signup" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="text-center">
            <h2 className="mb-2 text-2xl font-extrabold text-primary-400 lg:text-5xl">
              {page?.form_title}
            </h2>
            <div className="mb-6 flex items-center justify-center gap-x-2 py-2">
              <Link
                to="/"
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-slate-200"
              >
                <FontAwesomeIcon icon={faGoogle} className="text-slate-500" />
              </Link>
              <Link
                to="/"
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-slate-200"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-slate-500" />
              </Link>
            </div>
            <span className="mb-6 inline-block font-semibold text-slate-500">
              or use your email for registration
            </span>
            {page?.page == "login" ? <LoginForm /> : <SignupForm />}
          </div>
        </div>

        <div
          className={`grid place-items-center bg-gradient-to-bl from-primary-400 via-teal-400 to-primary-400 py-10 ${
            page?.page == "signup"
              ? "lg:order-2 lg:rounded-r-xl"
              : "lg:order-1 lg:rounded-l-xl"
          }`}
        >
          <div className="px-4 text-center lg:px-8">
            <h2 className="text-2xl font-extrabold text-white lg:text-5xl">
              {page?.title}
            </h2>
            <p className="my-4 text-lg font-semibold text-slate-100 xl:my-8">
              {page?.desc}
            </p>
            <Link
              to={page?.button_text[1]}
              className="rounded-full border-2 border-slate-100 px-5 py-2 text-sm font-semibold text-white xl:px-12 xl:py-3"
            >
              {page?.button_text[0]}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthenticationPage;
