import React from "react";
import { textColorize } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";

export default function TherapyHeader(props) {
  return (
    <>
      <header className="bg-primary-100/20 py-4 lg:py-10">
        {/* <header className="bg-gradient-to-b from-primary-50/30 to-transparent"> */}
        <div className="container relative mx-auto flex flex-col items-center rounded-3xl py-2 lg:flex-row lg:bg-yellow-primary lg:px-10 lg:py-6 xl:py-14 2xl:justify-between">
          {/* Desktop Image */}
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
            slidesPerView={1}
            className="mb-4 w-full rounded-2xl lg:order-2 lg:mb-0 lg:w-[55%] 2xl:flex 2xl:justify-end"
            autoplay={{ delay: 2000 }}
            speed={400}
            loop={true}
          >
            {props.images.map((value, i) => {
              return (
                <SwiperSlide className="rounded-2xl">
                  <img
                    key={i}
                    src={value}
                    alt=""
                    className="block w-fit object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="mb-4 rounded-3xl py-5 text-center md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:w-[45%] lg:rounded-none xl:pl-0">
            <hgroup className="md:mb-3 xl:pr-6">
              <h1 className="subheading mb-4 lg:text-left">
                {textColorize(props.title)}
              </h1>
              <h5 className="mb-8 font-medium lg:text-left">{props.desc}</h5>
            </hgroup>
            <div className="lg:text-left">
              <button
                className="btn-one mr-2"
                onClick={props.openAssessmentModal}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* BreadCrump */}
        {/* <p className="absolute top-5 left-5 font-semibold text-lg">
          <span>Activities / </span>
          <span className="text-primary-400">Meditation</span>
        </p> */}
      </header>
    </>
  );
}
