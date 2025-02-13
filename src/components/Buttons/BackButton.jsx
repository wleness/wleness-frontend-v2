import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link
      to="/"
      className="left-1/2 top-5 mx-auto mb-4 flex w-fit cursor-pointer items-center rounded-full border-2 border-white px-2 py-2 text-xl text-white transition-colors hover:text-primary-300 md:left-10 md:translate-x-0 lg:absolute lg:h-12 lg:w-12 lg:-translate-x-1/2 lg:justify-center lg:border-primary-300 lg:p-0 lg:px-4 lg:text-xl lg:text-primary-400"
    >
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="text-2xl lg:text-3xl"
      />
    </Link>
  );
}

export default BackButton;
