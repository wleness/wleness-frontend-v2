import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
// Swiper
import { useSwiper } from "swiper/react";

export default function DoctorSliderBtns({ text, slug }) {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between">
      <button
        onClick={() => swiper.slidePrev()}
        className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-primary-300 transition-all hover:bg-primary-300 lg:h-12 lg:w-12"
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="text-2xl text-primary-300 group-hover:text-white lg:text-4xl"
        />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary-300 hover:border-2 hover:border-primary-300 hover:bg-white lg:h-12 lg:w-12"
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-2xl text-white group-hover:text-primary-300 lg:text-4xl"
        />
      </button>
    </div>
  );
}
