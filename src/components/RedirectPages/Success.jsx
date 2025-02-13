import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Success() {
  const [status, setStatus] = useState(true);
  // Handle Redirect Messsages
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get("source");

    if (paramValue != "booking") {
      window.location = "/";
    } else {
      setStatus(false);
    }
  }, []);

  if (status) {
    return null;
  }

  return (
    <section className="container mx-auto">
      <div className="mx-auto my-8 flex flex-col items-center justify-center rounded-lg bg-primary-10 px-5 py-8 text-center lg:w-[520px] lg:py-14">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="mb-4 text-7xl text-primary-300"
        />
        <h1 className="subheading heading-primary">Confirmed appointment</h1>
        <p className="mb-8 font-semibold text-slate-500">
          Your appointment has been confirmed! Please check your email for your
          appointment details.
        </p>
        <a href="/" className="btn-one inline-block">
          Back to home
        </a>
      </div>
    </section>
  );
}

export default Success;
