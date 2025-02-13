import React, { useEffect, useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// Data
import { textColorize } from "../../utils";
import YogaInstructorCard from "../Cards/YogaInstructorCard";
import { YOGA_EXPERTS_URI } from "../../data/api";
import axios from "axios";

export default function YogaSlider({ onclick }) {
  const [swiper, setSwiper] = useState(null); // Store Swiper instance

  const handleMouseEnter = () => {
    swiper ? swiper.autoplay.stop() : "";
  };

  const handleMouseLeave = () => {
    swiper ? swiper.autoplay.start() : "";
  };

  const [experts, setExperts] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Doctors list
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(YOGA_EXPERTS_URI)
      .then((response) => {
        let data = response.data["experts"];
        if (response.status == 200) {
          setExperts(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <section className="container relative mx-auto mb-5 mt-5 lg:mt-0">
      <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
        <h1 className="subheading sm:pb-0 lg:mb-4">
          {textColorize([
            {
              color: false,
              text: "Our ",
            },
            {
              color: true,
              text: "Yoga Instructors ",
            },
          ])}
        </h1>

        <p className="para mx-auto w-4/5">
          Meet the skilled and dedicated yoga instructors who guide you on your
          wellness journey with expertise and passion.
        </p>
      </div>

      {/* Yoga Instructors */}
      <div
        // className="justify-center md:grid md:grid-cols-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          className="mySwiper overflow-y-visible rounded-2xl pb-12"
          grabCursor={true}
          spaceBetween={15}
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
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
          speed={600}
        >
          {experts?.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <YogaInstructorCard data={value} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
