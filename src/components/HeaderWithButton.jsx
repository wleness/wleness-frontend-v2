import React from "react";
import { textColorize } from "../utils";

export default function HeaderWithButton({
  title,
  desc,
  image,
  alt,
  openAssessmentModal,
}) {
  return (
    <header className="bg-primary-50/40 py-2 lg:py-6 2xl:mb-4 2xl:py-14">
      <div className="container mx-auto flex flex-col items-center lg:flex-row 2xl:justify-between">
        <div className="mb-6 lg:order-2 lg:mb-0 lg:w-1/2 2xl:flex 2xl:justify-end">
          {/* Desktop Image */}
          <img src={image} alt={alt} className="w-full object-cover" />
        </div>
        <div className="mb-6 md:mb-6 lg:order-1 lg:mb-0 lg:w-1/2 lg:pr-16 xl:pl-4">
          <hgroup className="md:mb-3 xl:mb-5">
            <h1 className="subheading">{textColorize(title)}</h1>
          </hgroup>
          <div className="xl:pr-12">
            {desc.map((value, index) => {
              return (
                <p className="mb-6 font-semibold" key={index}>
                  {value}
                </p>
              );
            })}
          </div>
          <div className="text-center xl:text-left">
            <button className="btn-one !px-14" onClick={openAssessmentModal}>
              Talk to Therapist
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
