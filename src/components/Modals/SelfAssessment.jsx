import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { selfAssessmentModal } from "../../assets";

export default function SelfAssessment({ isOpen, close }) {
  if (!isOpen) {
    return null;
  }
  return (
    <section className="fixed inset-0 z-50 grid place-items-center bg-slate-800/20 lg:pb-12">
      <div className="relative w-4/5 lg:w-[720px]">
        <div className="mx-auto grid  rounded-2xl bg-white shadow-2xl  lg:grid-cols-[3fr_4fr]">
          <div>
            <img
              src={selfAssessmentModal}
              alt="self assessment modal"
              className="h-full w-full rounded-t-2xl object-cover lg:rounded-l-2xl lg:rounded-tr-none"
            />
          </div>
          <div className="p-6 lg:p-8 lg:py-16">
            <h4 className="mb-4 text-sm font-semibold lg:mb-8 lg:text-base">
              Explore your inner self, take a comprehensive self assessment and
              get an online therapy session at a promotional price.
            </h4>
            <Link to="/assessment" className="btn-one inline-block">
              Free Self Assessment
            </Link>
          </div>
        </div>
        <button
          onClick={() => close(false)}
          className="absolute -right-3 -top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary-400 lg:-right-2 lg:-top-2"
        >
          <FontAwesomeIcon icon={faClose} className="text-xl text-white" />
        </button>
      </div>
    </section>
  );
}
