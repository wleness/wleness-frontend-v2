import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  debashreeDasLandscape,
  meenakshiMishraLandscape,
  purviBalasariaLandscape,
  swatiGhoshalLandscape,
} from "../../assets";

export const therapistDetails = [
  {
    name: "Swati Ghoshal",
    image: swatiGhoshalLandscape,
    exp: "8+ years of experience",
    expertise: "Couple Counselling, Corporate Training",
    speaks: "Hindi, English & Bengali",
  },
  {
    name: "Debashree Das Gupta",
    image: debashreeDasLandscape,
    exp: "8+ years of experience",
    expertise: "Musical Healing",
    speaks: "Hindi, English & Bengali",
  },
  {
    name: "Purvi Balasaria",
    image: purviBalasariaLandscape,
    exp: "5+ years of experience",
    expertise: "Approach",
    speaks: "Eng, Hindi, Bengali",
  },
  {
    name: "Meenakshi Mishra",
    image: meenakshiMishraLandscape,
    exp: "8+ years of experience",
    expertise: "CBT, BT, Counseling, Mindfulness meditations",
    speaks: "Hindi, English",
  },
];

export default function ApplyHeader({ name, image }) {
  return (
    <header className=" bg-primary-50/50 py-8 lg:py-28 xl:py-32">
      <div className="container mx-auto gap-x-6 py-4 lg:flex lg:gap-x-10">
        {/* <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          slidesPerView={1}
          className="mb-2 xl:order-2 xl:w-1/2"
          autoplay={{ delay: 2000 }}
          speed={400}
          loop={true}
        >
          {therapistDetails.map((value, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="mx-auto lg:w-[90%]">
                  <img
                    src={value.image}
                    alt=""
                    className=" rounded-lg drop-shadow-[15px_15px_2px_rgba(0,245,160,0.2)]"
                  />
                  <ul className="flex list-disc justify-center space-x-6 bg-[#d9f7f4] pt-6 text-sm font-semibold text-primary-300 lg:text-sm">
                    <li>
                      <span className="text-black">{value.name}</span>
                    </li>
                    <li>
                      <span className="text-black">{value.speaks}</span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}

        <div className="mx-auto mb-6 lg:order-2 lg:w-1/2">
          <img
            src={image}
            alt=""
            className="rounded-lg drop-shadow-[15px_15px_2px_rgba(0,245,160,0.2)]"
          />
        </div>

        <div className="text-center lg:order-1 xl:w-1/2 xl:self-center xl:text-left">
          <h1 className="subheading my-3 xl:mb-3">
            <span>Join Our Team of Compassionate </span>
            <span className="heading-primary">{name}</span>
          </h1>
          <p className="para">
            Join us in making a positive impact. We offer a nurturing
            environment for your expertise to shine. Your unique contributions
            matter. Join our team today.
          </p>
        </div>
      </div>
    </header>
  );
}
