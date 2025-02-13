import React from "react";
// Swiper Js & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Data
import { textColorize } from "../utils";
import { doodle2, doodle3 } from "../assets";

export default function HappyClient(props) {
  return (
    <section className="relative overflow-clip px-4 py-6 text-center lg:px-0 lg:py-10">
      <h2 className="subheading">{textColorize(props.data.heading)}</h2>
      <div className="container mx-auto py-2 lg:py-4">
        <div className="relative pb-4 lg:!pr-0 lg:pb-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            className="!overflow-x-clip overflow-y-visible"
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            speed={400}
            loop={true}
          >
            {props.data.clients.map((value, i) => {
              return (
                <SwiperSlide key={i}>
                  <figure className="items-center lg:flex">
                    <div className="flex items-center justify-center p-4 lg:w-2/5">
                      <img
                        loading="lazy"
                        src={value.image}
                        alt={`${value.name} ${value.profession}`}
                        className="mt-4 w-52 rounded-2xl rounded-br-[4rem] object-cover shadow-[-12px_-16px_2px_4px_rgba(82,208,194,0.27)] md:my-4"
                      />
                    </div>
                    <figcaption className="lg:w-3/5">
                      <h4 className="text-center text-2xl font-semibold text-primary-300 lg:text-left lg:text-3xl">
                        {value.name}
                      </h4>
                      <h6 className="mb-4 text-center font-medium text-slate-400 lg:text-left xl:text-lg">
                        {value.profession}
                      </h6>
                      <p className="mb-1 text-center text-sm font-medium md:text-base md:leading-5 lg:pr-8 lg:text-left xl:text-lg">
                        {value.review}
                      </p>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <img
        loading="lazy"
        src={doodle3}
        alt=""
        className="absolute -right-20 top-0 -z-10 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-64 xl:w-72"
      />
      <img
        loading="lazy"
        src={doodle2}
        alt=""
        className="absolute -left-14 bottom-0 -z-10 w-20 object-cover opacity-20 xs:w-32 sm:w-40 md:w-56 lg:w-64"
      />
    </section>
  );
}
