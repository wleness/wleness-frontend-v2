import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { bgAuth, loginLights, loginSofa } from "../../assets";
import Footer from "../layout/Footer";

export default function SignupLayout({ children }) {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center md:flex-row md:items-stretch">
        <aside className="hidden flex-col items-center justify-between md:flex md:w-1/2">
          <div>
            <div className="mx-auto w-96 pt-28 lg:w-[460px]">
              <h2 className="mb-4 text-3xl font-semibold text-primary-300 xl:text-4xl">
                Welcome to Wleness
              </h2>
              <p className="font-medium lg:text-lg">
                Mental health is vital—it's the foundation of our well-being,
                impacting relationships, productivity, and life's challenges.
                Recognizing its importance fosters a stigma-free society that
                supports happier, healthier lives for all.
              </p>
            </div>
            <img
              src={loginSofa}
              alt=""
              className="block w-[620px] object-cover"
            />
          </div>
        </aside>
        <Link
          to="/"
          className="absolute left-1/2 top-5 flex -translate-x-1/2 cursor-pointer items-center rounded-full border-2 border-primary-300 px-2 py-2 text-xl text-primary-400 transition-colors hover:text-primary-300 md:left-10 md:translate-x-0 lg:h-12 lg:w-12 lg:justify-center lg:p-0 lg:px-4 lg:text-xl"
        >
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="text-2xl lg:text-3xl"
          />
        </Link>

        {children}

        <img
          src={loginLights}
          alt=""
          className="absolute left-10 top-0 block w-14 -translate-x-1/2 object-cover lg:left-1/2 lg:w-36"
        />
        <img
          src={bgAuth}
          alt=""
          className="absolute right-0 -z-10 h-full w-full"
        />
      </main>
      <Footer />
    </>
  );
}
