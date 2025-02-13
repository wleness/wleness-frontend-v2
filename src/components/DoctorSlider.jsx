import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Data
import { textColorize } from "../utils";
import axios from "axios";
import { EXPERTS_URI } from "../data/api";
import DoctorSliderBtns from "./Buttons/DoctorSliderBtns";

export default function DoctorSlider(props) {
  const [swiper, setSwiper] = useState(null); // Store Swiper instance
  const [experts, setExperts] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch Doctors list
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI)
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

  // Show Active Image content
  const hideOtherImages = (e) => {
    let activeSlide = e.activeIndex;
    let doctorSlidesContent = document.querySelectorAll(
      ".doctor-slide-content",
    );
    if (doctorSlidesContent.length == 0) {
      console.log("Experts Content Not Found");
    } else {
      // Hide all slide content elements
      doctorSlidesContent.forEach((element) => {
        element.style.display = "none";
      });
      doctorSlidesContent[activeSlide].style.display = "block";
    }
  };

  const handleBookNow = (url) => {
    props.openAssessmentModal();

    props.setUrl({
      title: "Schedule a Session",
      name: "Book Now",
      url: url,
    });
  };

  const handleMouseEnter = () => {
    swiper ? swiper.autoplay.stop() : "";
  };

  const handleMouseLeave = () => {
    swiper ? swiper.autoplay.start() : "";
  };

  return (
    <section className="container relative mx-auto mb-5 mt-5 lg:mt-0">
      {/* ========== Soul Healers ========== */}
      <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
        <h1 className="subheading sm:pb-0 lg:mb-4">
          {textColorize(props.data.heading)}
        </h1>
        <p className="para">{props.data.desc}</p>
      </div>

      {/* Doctors */}
      <div
        className="doctorSlider relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper h-[420px] overflow-y-visible rounded-2xl lg:h-[500px]"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={15}
          slidesPerView={2}
          initialSlide={3}
          loop={true}
          loopedSlides={4}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            scale: 0.9,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={hideOtherImages}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
          speed={600}
        >
          {experts &&
            experts.map((value, index) => {
              let slug = `/experts/profile/${value.slug}`;
              let booking_slug = `/experts/booking/${value.slug}`;
              return (
                <SwiperSlide key={index}>
                  <figure>
                    <div
                      onClick={() => navigate(slug)}
                      className="rounded-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 p-1"
                    >
                      <div className="experts-profile-bg rounded-xl">
                        <img
                          src={value.image}
                          alt={`${value.name} - ${value.expertise}`}
                          className="box-border block w-full rounded-2xl object-cover"
                        />
                      </div>
                    </div>
                    <figcaption className="doctor-slide-content pb-3 pt-1 text-center">
                      <small className="block text-clip text-center font-quicksand font-semibold text-primary-400">
                        {value.certification}
                      </small>
                      <p className="expert-slug hidden">{value.bookingUrl}</p>
                      <h4 className="text-lg font-semibold leading-6 lg:text-xl">
                        {value.name}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 lg:text-base">
                        {value.experience}
                      </p>
                      <div className="text-xs lg:text-sm">
                        <p>
                          <span className="mr-1 font-semibold text-primary-400">
                            Expertise:
                          </span>
                          <span className="font-medium text-slate-500">
                            {value.expertise}
                          </span>
                        </p>
                        <p>
                          <span className="mr-1 font-semibold text-primary-400">
                            Speaks:
                          </span>
                          <span className="font-medium text-slate-500">
                            {value.languages}
                          </span>
                        </p>
                        <div className="mt-4">
                          {/* <Link
                          to={value.bookingUrl}
                          target="_blank"
                          className="btn-one mx-auto inline-block !py-2 !text-sm"
                        >
                          Book Now
                        </Link> */}
                          <button
                            onClick={() => handleBookNow(booking_slug)}
                            target="_blank"
                            className="btn-one mx-auto inline-block !py-2 !text-sm"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              );
            })}
          <DoctorSliderBtns />
        </Swiper>
      </div>
    </section>
  );
}
