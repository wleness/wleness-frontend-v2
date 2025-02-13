import React from "react";

export default function Buttons({ back, next }) {
  return (
    <div className="flex justify-center space-x-4 text-center">
      <div className="group box-border flex items-stretch rounded-lg bg-gradient-to-r from-secondary to-tertiary p-[3px]">
        <button
          className="flex w-full items-center justify-center rounded-md bg-white px-5 py-2 font-semibold text-primary-300 hover:bg-primary-300 hover:bg-transparent hover:text-white  lg:py-2.5"
          onClick={back}
        >
          Go Back
        </button>
      </div>
      <div className="group box-border flex items-stretch rounded-lg bg-gradient-to-r from-secondary to-tertiary p-[3px]">
        <button
          className="flex w-full items-center justify-center rounded-md bg-white px-5 py-2 font-semibold text-primary-300 hover:bg-primary-300 hover:bg-transparent hover:text-white  lg:py-2.5"
          onClick={next}
        >
          Save & Next
        </button>
      </div>
    </div>
  );
}
