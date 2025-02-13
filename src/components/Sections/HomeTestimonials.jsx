import React, { useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { homeTestimonials } from "../../data/testimonials";

function HomeTestimonials() {
  const [swiper, setSwiper] = useState(null); // Store Swiper instance

  const handleMouseEnter = () => {
    swiper ? swiper.autoplay.stop() : "";
  };

  const handleMouseLeave = () => {
    swiper ? swiper.autoplay.start() : "";
  };
  return (
    <section className="mb-12 bg-primary-10 pb-8">
      <div className="container mx-auto pt-6 text-center lg:py-8">
        <h2 className="subheading">
          Words from <span className="heading-primary">clients</span>
        </h2>
      </div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="py-6"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          className="mySwiper grid overflow-y-visible px-4 pb-8 lg:px-8 lg:pb-12"
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1666: {
              slidesPerView: 4,
            },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
          speed={600}
        >
          {homeTestimonials.map((value, i) => {
            return (
              <SwiperSlide
                key={i}
                className="relative flex flex-col justify-between rounded-xl bg-teal-600 px-7 py-3 xl:py-8"
              >
                <p className="mb-5 text-sm font-medium text-teal-50">
                  {value.desc}
                </p>
                <div>
                  <h5 className="text-lg font-semibold text-white">
                    {value.name}
                  </h5>
                  <p className="text-sm font-semibold text-teal-200">
                    {value.profession}
                  </p>
                </div>
                <img
                  src={value.image}
                  className="absolute bottom-0 right-0 w-20 lg:w-28"
                  alt={value.name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default HomeTestimonials;
