import React from "react";

export default function ExpertsButton({ text, isActive, switchTo }) {
  return (
    <button
      className={`px-4 py-2 font-bold md:py-4 lg:text-xl ${
        isActive
          ? " bg-teal-500 text-white"
          : " border-b-4 border-b-teal-500 bg-teal-50"
      }`}
      onClick={switchTo}
    >
      {/* <span className={isActive ? "text-white" : "text-black"}> */}
      <span>
        <span>Expert's </span>
        <span className={isActive ? "" : "heading-primary"}>{text}</span>
      </span>
    </button>
  );
}
