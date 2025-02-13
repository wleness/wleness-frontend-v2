import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Faq({ question, answer, isOpen, toggleFAQ }) {
  return (
    <div
      className="bg-200/30 cursor-pointer select-none rounded-lg bg-primary-50 p-4 text-sm md:text-lg lg:p-6"
      onClick={toggleFAQ}
    >
      <h3 className="flex w-full items-center justify-between font-bold">
        <span>{question}</span>
        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
      </h3>
      <p className={isOpen ? "block font-semibold" : "hidden "}>{answer}</p>
    </div>
  );
}
