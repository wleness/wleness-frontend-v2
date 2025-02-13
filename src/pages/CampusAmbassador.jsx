import React, { useState } from "react";
// Data
import {
  campusAmbassadorHeader,
  campusAmbassadorTeam,
  doodle2,
  roleCampus,
  roleProgram,
  roleSMM,
  roleSpreadAwareness,
} from "../assets";
import CampusAmbassadorForm from "../components/CampusAmbassadorForm";
import { whyToApplyCampus } from "../data/whyWleness";
import { Helmet } from "react-helmet";
import { CAMPUS_AMBASSADOR_META } from "../data/meta";
import { get_canonical } from "../utils";

const roles = [
  [roleSMM, "Social Media & Public Marketing"],
  [roleSpreadAwareness, "Spread Awareness About Wleness"],
  [roleCampus, "Develop an ecosystem around the campus"],
  [roleProgram, "Suggest ways to make better program"],
];

export default function CampusAmbassador() {
  const [campusModal, setcampusModal] = useState(false);

  const openCampusModal = () => {
    setcampusModal(true);
  };

  const closeCampusModal = () => {
    setcampusModal(false);
  };
  return (
    <>
      <Helmet>
        <title>{CAMPUS_AMBASSADOR_META.title}</title>
        <meta name="description" content={CAMPUS_AMBASSADOR_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <header className="relative overflow-y-auto overflow-x-hidden bg-gradient-to-b from-primary-50/30 to-transparent py-6 text-center">
        <div className="container mx-auto">
          <h1 className="subheading mb-4">
            <span className="heading-primary">Campus Ambassador</span>
          </h1>
          <img src={campusAmbassadorHeader} alt="" className="w-full" />
        </div>
      </header>

      {/* Our Program */}
      <section className="container mx-auto pb-10 pt-4">
        {/* <h2 className="text-center text-2xl font-bold text-primary-300 lg:px-44 lg:text-4xl"> */}
        <h2 className="subheading text-center !text-xl text-primary-300 lg:px-44 lg:!text-3xl">
          Welcome to our Health and Wellness Campus Ambassador Program!
        </h2>
        <p className="para my-7 text-center lg:my-8 lg:px-12">
          Are you passionate about promoting a peaceful & stress free lifestyle
          and inspiring others to prioritize their well-being? Join our dynamic
          team of Campus Ambassadors and become a driving force for positive
          change on your campus.
        </p>
        <div className="mb-6 text-center">
          <button className="btn-one" onClick={openCampusModal}>
            Join Us Now
          </button>
        </div>
        <div>
          <figure className="lg:flex lg:gap-x-5 lg:py-12">
            <div className="pb-8 lg:order-2 lg:w-2/5 lg:pb-0">
              <img
                src={campusAmbassadorTeam}
                alt=""
                className="mx-auto block w-fit object-cover"
              />
            </div>
            <figcaption className="self-center lg:order-1 lg:w-3/5">
              <div className="mr-10 rounded-2xl border-2 border-primary-50 px-6 py-3 text-sm md:text-base lg:mr-20">
                <p className="font-medium">
                  As an ambassador, you will have the opportunity to engage with
                  fellow students, organize exciting health-focused events,
                  share valuable wellness tips, and contribute to a thriving
                  community dedicated to fostering physical, mental, and
                  emotional wellness.
                </p>
              </div>
              <div className="-mt-2 ml-10 rounded-2xl rounded-br-[4rem] bg-primary-50 px-6 py-3 text-sm shadow-lg md:text-base lg:ml-20">
                <p className="font-medium">
                  By becoming a part of our Wellness Campus Ambassador Program,
                  you're not just joining a team - you're joining a movement.
                  Your passion for wellness will have a ripple effect, touching
                  the lives of your peers and creating a lasting legacy of
                  health consciousness.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Why to Apply */}
      <section className="container mx-auto text-center">
        <h2 className="subheading">
          <span>Why you should </span>
          <span className="heading-primary">Apply?</span>
        </h2>
        <div className="flex flex-wrap justify-between py-6">
          {whyToApplyCampus.map((value, i) => {
            return (
              <figure key={i}>
                <div>
                  <img src={value.image} alt="" className="w-40" />
                </div>
                <figcaption>
                  <h4 className="text-xl font-bold">
                    <span className="block">{value.title}</span>
                    <span className="heading-primary block">
                      {value.highlight}
                    </span>
                  </h4>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <img
          src={doodle2}
          alt=""
          className="absolute -bottom-40 right-0 w-32 -scale-100 opacity-25 lg:w-64"
        />
      </section>

      {/* Roles */}
      <section className="relative py-10  text-center">
        <h2 className="subheading mb-10">
          <span>Role and </span>
          <span className="heading-primary">Responsibility</span>
        </h2>
        <div className="container mx-auto grid grid-cols-2 gap-4 lg:gap-8 xl:grid-cols-4">
          {roles.map((value, index) => {
            return (
              <figure key={index} className="rounded-2xl bg-primary-50/50 p-5">
                <div>
                  <img
                    src={value[0]}
                    alt={value[1]}
                    className="mx-auto h-32 w-32 object-contain"
                  />
                </div>
                <figcaption>
                  <h5 className="text-center text-sm font-semibold text-primary-400 lg:text-lg">
                    {value[1]}
                  </h5>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* Who can join */}
      <section className="relative overflow-y-auto overflow-x-hidden py-4 lg:py-8">
        <div className="container mx-auto text-center">
          <h2 className="subheading mb-4">
            Who can join <span className="heading-primary">Wleness</span>
          </h2>
          <p className="mb-8 px-2 text-base font-semibold lg:px-10 lg:text-xl">
            An energetic passionate Psychology Students pursuing
            under-graduation & post-graduation from any university or college
            across India.
          </p>
          <div>
            <button className="btn-one" onClick={openCampusModal}>
              Join Us Now
            </button>
          </div>
        </div>
        {/* <img
          src={cloudWithDots}
          alt=""
          className="absolute -right-40 top-0 w-[400px]"
        />
        <img
          src={cloudWithDots}
          alt=""
          className="absolute -left-40 bottom-0 w-[400px]"
        /> */}
      </section>

      <CampusAmbassadorForm isOpen={campusModal} onClose={closeCampusModal} />
    </>
  );
}
