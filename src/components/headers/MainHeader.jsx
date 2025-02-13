import React from "react";
// Data
import { mainHeaderImage } from "../../assets";

export default function MainHeader({ openAssessmentModal }) {
  return (
    <header className="mb-8 animate-fadeIn overflow-x-clip bg-primary-10 py-4 pb-8 pt-6 lg:mb-0 lg:!px-5 lg:py-10 xl:py-14 2xl:pb-28">
      <div className="container mx-auto items-center !px-0 text-center lg:flex lg:pb-2 lg:text-left">
        {/* Header Image */}
        <div className="relative mb-2 lg:order-2 lg:my-2 lg:w-1/2">
          <img
            loading="lazy"
            src={mainHeaderImage}
            alt="Holistic wellness"
            className="mx-auto"
          />
        </div>
        <div className="px-4 lg:order-1 lg:w-1/2 lg:px-0">
          <div className="mb-6 flex justify-between gap-x-2 lg:justify-start">
            <span className="rounded-lg bg-orange-200 px-3 py-1.5 text-xs font-bold lg:px-4">
              Psychologist
            </span>
            <span className="rounded-lg bg-blue-200 px-3 py-1.5 text-xs font-bold lg:px-4">
              Psychiatrist
            </span>
            <span className="rounded-lg bg-green-200 px-3 py-1.5 text-xs font-bold lg:px-4">
              Therapist
            </span>
          </div>
          <h1 className="subheading flex-col px-4 lg:mb-10 lg:!flex lg:px-0 lg:text-4xl xl:text-5xl">
            <span>
              <strong className="font-extrabold">Mental Health </strong>
              <span className="font-normal lowercase"> is not a </span>
            </span>
            <span className="font-normal">
              Destination, <span className="lowercase">but a </span>
            </span>
            <strong className="border-spacing-4 underline decoration-primary-300 decoration-wavy underline-offset-[12px]">
              Process
            </strong>
          </h1>
          <p className="mx-auto my-6 pr-4 text-sm font-semibold text-slate-700 md:text-base lg:text-lg">
            Our work has resulted in positive change. We have educated millions
            about mental health conditions and reduced barriers to treatments
            and services.
          </p>
          <div className="my-4 flex flex-col justify-center gap-x-4 lg:mt-10 lg:flex-row lg:justify-start">
            <div className="mb-6 flex items-center justify-center gap-x-2 lg:order-2 lg:mb-0">
              <button
                className="h-14 w-14 rounded-full border-4 border-primary-100 border-b-teal-100 bg-primary-50 text-center text-sm font-bold transition-all lg:text-base"
                onClick={openAssessmentModal}
              >
                95%
              </button>
              <span className="font-semibold">
                We have
                <span className="font-bold text-green-600"> success </span>
                <br />
                rate so far
              </span>
            </div>
            <button
              className="mx-auto block w-4/5 rounded-full border-2 border-primary-400 bg-[#73dfda] px-6 py-3 text-center text-sm font-bold transition-all hover:border-primary-100 hover:bg-primary-100 hover:text-white md:w-fit lg:order-1 lg:mx-0 lg:px-8 lg:text-base"
              onClick={openAssessmentModal}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
