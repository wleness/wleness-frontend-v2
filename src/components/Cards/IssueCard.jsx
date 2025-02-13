import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function IssueCard(props) {
  return (
    <div
      className="mx-auto w-full p-2 pt-14 lg:w-full lg:pt-24"
      title={props.data.title}
    >
      <div className="flex h-full flex-col items-center justify-center bg-primary-50 py-4 md:py-6">
        <Link to={props.data.slug}>
          <img
            loading="lazy"
            src={props.data.image}
            alt={`${props.data.title} Wleness Service`}
            className="mx-auto mb-2 block h-28 object-contain md:h-32 md:w-44 lg:h-20 lg:w-44 3xl:h-32 3xl:w-44"
            style={{ marginTop: "-50%", backgroundSize: "50%" }}
          />

          <h3 className="mb-4 py-2 text-center  font-bold md:py-4 lg:text-2xl">
            {props.data.name}
          </h3>
        </Link>
        <button
          className="btn-one bg-teal-600 !text-sm !font-bold transition-colors hover:bg-teal-500 hover:bg-gradient-to-br hover:shadow-md"
          onClick={props.openAssessmentModal}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="rounded-2xl ">
<Link to={props.data.slug}>
  <img src={props.data.image} className="" />
  {/* <figcaption className="pb-2 pt-8 lg:pb-5 lg:pt-10">
      <h2 className="mb-2 text-center text-sm font-semibold lg:text-lg xl:text-xl">
        {props.data.title}
      </h2>
      <p className="text-center text-xs font-semibold text-slate-600 lg:text-base">
        {props.data.desc}
      </p>
    </figcaption>
    <button className="mx-auto block w-fit rounded-full bg-gradient-to-tr from-secondary to-tertiary px-5 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-lg lg:text-base">
      Explore More
    </button> */
}
// </Link>
// </div> */}
