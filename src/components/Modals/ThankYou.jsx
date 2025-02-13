import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ThankYou({ status, assessmentResult, setStatus }) {
  if (!status) {
    return null;
  }

  const navigate = useNavigate();
  return (
    <section className="fixed inset-0 z-50 grid place-items-center bg-black/30">
      <div className="enquiry-form relative w-4/5 rounded-2xl bg-white p-6 lg:w-[500px]">
        <div className="text-center lg:px-8 lg:py-6">
          {/* <FontAwesomeIcon
            icon={faCheckCircle}
            className="mb-4 text-3xl text-primary-100 lg:text-6xl"
          /> */}
          <h2 className="mb-4 text-xl font-semibold text-primary-300 lg:text-3xl">
            Congratulations!
          </h2>
          <p className="mb-4 font-semibold">
            Now you are available to claim your session @599
          </p>
          <Link
            to="/experts/all"
            className="btn-one mx-auto mb-3 flex items-center space-x-2"
          >
            <span>Book Now</span> <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <p className="mb-4 font-medium">To see your result</p>
          <button
            onClick={() =>
              navigate("/assessment/result", {
                state: { data: assessmentResult },
              })
            }
            className="btn-one mx-auto flex items-center space-x-2"
          >
            <span>Continue</span> <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <button
          onClick={() => setStatus(false)}
          className="absolute -right-3 -top-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-3 text-2xl transition-all hover:bg-gray-300"
        >
          <FontAwesomeIcon
            icon={faClose}
            className="text-gray-500 lg:text-4xl"
          />
        </button>
      </div>
    </section>
  );
}

export default ThankYou;
