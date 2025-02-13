import React from "react";
import { bgDotsPattern } from "../../assets";

export default function PoliciesHeader({ heading, desc }) {
  return (
    <header className="relative overflow-x-clip bg-gradient-to-b from-secondary/10 to-transparent py-24">
      <div className="container mx-auto text-center">
        <h1 className="subheading heading-primary">{heading}</h1>
        <p className="text-lg font-semibold text-primary-400">{desc}</p>
      </div>

      {/* Dots  */}
      {/* <img
        src={bgDotsPattern}
        alt=""
        className="absolute -right-10 top-5 -z-10 w-60"
      />
      <img
        src={bgDotsPattern}
        alt=""
        className="absolute -left-20 bottom-0 -z-10 w-60"
      /> */}
    </header>
  );
}
