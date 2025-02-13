import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperBtns() {
  const swiper = useSwiper();

  return (
    <div className="absolute -bottom-16 right-1/2 z-10 translate-x-1/2 lg:bottom-0 lg:right-0 lg:translate-x-0">
      <button
        onClick={() => swiper.slidePrev()}
        className="mr-6 h-12 w-12 cursor-pointer rounded-full border-2 border-primary-300 text-4xl text-primary-300 transition-all  hover:bg-primary-300 hover:text-white hover:shadow-lg hover:shadow-primary-50"
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="h-12 w-12 cursor-pointer rounded-full bg-primary-300 text-4xl text-white transition-all hover:border-2 hover:border-primary-300 hover:bg-white hover:text-primary-300 hover:shadow-lg hover:shadow-primary-50"
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
}
