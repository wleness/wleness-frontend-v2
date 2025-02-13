import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// Data
import { psychiatristData } from "../../data/services";
import { psychiatristClient } from "../../data/clients";
import { bulb } from "../../assets";
// Components
import GridHeader from "../../components/GridHeader";
import SelectBest from "../../components/SelectBest";
import HappyClient from "../../components/HappyClient";
import DoctorsCard from "../../components/DoctorsCard";
import Assessment from "../../components/Assessment";
import { mythsAndFacts } from "../../data/faqs";
import axios from "axios";
import { EXPERTS_URI } from "../../data/api";

export default function Psychiatrist() {
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI)
      .then((response) => {
        // Handle the successful response
        setDoctorDetails(response.data["experts"]);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <GridHeader
        name={psychiatristData.name}
        image={psychiatristData.image}
        desc={psychiatristData.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
      />
      <SelectBest
        ref={ref}
        name={psychiatristData.name}
        heading={psychiatristData.bestTherapist.heading}
        image={psychiatristData.bestTherapist.featureImage}
        features={psychiatristData.bestTherapist.features}
        btn={psychiatristData.bestTherapist.startBtn}
        openAssessmentModal={openAssessmentModal}
        headingBg={false}
      />

      {/* Specialist Doctors */}
      <section>
        <div className="side-spacing grid-cols-[repeat(4, minmax(280, 1fr))] container mx-auto grid items-center gap-5 p-4 sm:grid-cols-2 lg:pb-12 3xl:gap-6">
          {doctorDetails.map((value, i) => {
            return <DoctorsCard key={i} data={value} />;
          })}
        </div>
      </section>

      <section className="container relative mx-auto my-8 px-8 text-center lg:my-12">
        <div className="mb-8 flex justify-center">
          <div className="z-10 grid h-28 w-28 -translate-y-8 translate-x-4 place-items-center rounded-full bg-tertiary/25 font-quicksand text-xl font-semibold">
            Myths
          </div>
          <div className="grid h-28 w-28 -translate-x-4 place-items-center rounded-full bg-primary-50/80 font-quicksand text-xl font-semibold">
            Facts
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          className="mythsAndFacts !overflow-x-clip overflow-y-visible"
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          speed={800}
          loop={true}
        >
          {mythsAndFacts.map((value, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="mx-2 flex flex-col gap-5 md:flex-row">
                  <div className="flex flex-col justify-center rounded-[3rem] rounded-br-none bg-tertiary/25 px-6 py-7 md:w-1/2 md:px-4 md:py-14 lg:px-14">
                    <h4 className="text-2xl font-bold">Myths</h4>
                    <p className="text-sm font-semibold md:text-lg">
                      {value[0]}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center rounded-[3rem] rounded-bl-none bg-primary-50/80 px-6 py-7 md:w-1/2 md:px-4 md:py-14 lg:px-14">
                    <h4 className="text-2xl font-bold">Facts</h4>
                    <p className="text-sm font-semibold md:text-lg">
                      {value[1]}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <HappyClient data={psychiatristClient} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />
    </>
  );
}
