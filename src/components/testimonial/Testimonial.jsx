import React from "react";
// Swiper Js & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Testimonial(props) {
  return (
    <div className="container relative mx-auto lg:!pr-0">
      {/* Testimonials */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        grabCursor={true}
        className="!overflow-x-clip overflow-y-visible"
        autoplay={{ delay: 4000 }}
        speed={400}
        loop={true}
      >
        {props.data.map((value, i) => {
          return (
            <SwiperSlide key={i}>
              <figure className="items-center lg:flex">
                <div className="p-4 lg:w-2/5">
                  <img
                    src={value.image}
                    alt={value.name}
                    className="mx-auto w-3/4 object-cover drop-shadow-md lg:w-4/5"
                  />
                </div>
                <figcaption className="lg:w-3/5 lg:pl-4">
                  <h4 className="text-lg font-semibold sm:text-xl lg:text-3xl">
                    {value.name}
                  </h4>
                  <h6 className="mb-2 font-semibold text-primary-400 xl:text-lg">
                    {value.profession}
                  </h6>
                  <p className="mb-1 text-sm font-medium leading-6 sm:text-lg md:text-base md:leading-6">
                    {value.desc}
                  </p>
                </figcaption>
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
