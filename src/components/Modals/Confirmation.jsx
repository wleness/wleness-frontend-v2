import { faArrowLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <section className="z-50 grid place-items-center bg-slate-100 py-12 transition-all">
      <div className="relative w-4/5 rounded-xl bg-white p-6 shadow-lg lg:w-[480px]">
        <div className="text-center lg:px-8 lg:py-6">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mb-4 text-3xl text-primary-100 lg:text-6xl"
          />
          <h2 className="mb-4 text-xl font-semibold text-primary-300 lg:text-3xl">
            Thank You
          </h2>
          <p className="mb-5 font-semibold text-slate-500">
            Your request has been successfully received! We will get in touch
            within 2 days.
          </p>
          <Link to="/" className="btn-one mx-auto flex items-center space-x-2">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Confirmation;
