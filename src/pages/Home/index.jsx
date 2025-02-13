import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Data
import { community, designRing } from "../../assets";
import { get_canonical } from "../../utils";
import { homeFaqs } from "../../data/faqs";
import {
  homeCertified,
  home_service_banner,
  home_services,
  therapies,
} from "../../data";
import { HOME_META } from "../../data/meta";
import { homePageDoctors } from "../../data/doctors";
// Components
import Assessment from "../../components/Assessment";
import RequestForm from "../../components/Forms/RequestForm";
import MainHeader from "../../components/headers/MainHeader";
import HomeFaq from "../../components/Faq/HomeFaq";
import DoctorSlider from "../../components/DoctorSlider";
import HomeServiceCard from "../../components/Cards/HomeServiceCard";
import SelfCareHome from "../../components/Sections/SelfCareHome";
import IssueCard from "../../components/Cards/IssueCard";
import HomeFeaturedIn from "../../components/Sections/HomeFeaturedIn";
import HomeInternship from "../../components/Sections/HomeInternship";
import HomeWhyWleness from "../../components/Sections/HomeWhyWleness";
import HomeBlogs from "../../components/Sections/HomeBlogs";
import HomeTestimonials from "../../components/Sections/HomeTestimonials";
import HomeWlenessWork from "../../components/Sections/HomeWlenessWork";
import { ALL_EXPERTS } from "../../data/urls";

export default function Home() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);

  // Assessment Slides
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  const resetBookNow = () => {
    openAssessmentModal();

    setRediredurl({
      title: "Find a Therapist",
      name: "Find a Therapist",
      url: ALL_EXPERTS,
    });
  };

  return (
    <>
      <Helmet>
        <title>{HOME_META.title}</title>
        <meta name="description" content={HOME_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      {/* Hero Section */}
      <MainHeader openAssessmentModal={() => resetBookNow()} />

      {/* ========== Services Banner ========== */}
      <section className="container mx-auto mb-10 lg:mb-0 lg:-translate-y-24">
        <div className="grid gap-5 rounded-xl bg-primary-300 px-7 py-6 drop-shadow-lg md:grid-cols-2 lg:gap-0 lg:px-8 lg:py-10 xl:grid-cols-4">
          {home_service_banner.map((value, i) => {
            return (
              <div key={i} className="flex">
                <FontAwesomeIcon
                  icon={value.icon}
                  className="mr-3 mt-1 block font-semibold text-primary-200"
                />
                <div>
                  <div>
                    <h2 className="mb-3 font-semibold text-white">
                      {value.name}
                    </h2>
                    <p className="mb-4 text-sm font-medium text-teal-50">
                      {value.description}
                    </p>
                  </div>
                  <Link
                    to={value.slug}
                    className={`group inline-block rounded-2xl border-2  px-4 py-[2px] ${
                      value.selected
                        ? "border-white bg-white"
                        : "border-primary-50 hover:border-white hover:bg-white"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={`${
                        value.selected
                          ? "text-black"
                          : "text-white group-hover:text-black"
                      }`}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== Why Wleness ========== */}
      <HomeWhyWleness />

      {/* ========== How wleness work ========== */}
      <HomeWlenessWork />

      {/* ========== Our Services ========== */}
      <section className="mb-8 pb-4 lg:mb-0 lg:py-14 xl:pb-20">
        {home_services.map((value, i) => {
          return <HomeServiceCard data={value} key={i} />;
        })}
      </section>

      {/* ========== Featured In Section ========== */}
      <HomeFeaturedIn />

      {/* ========== Our Therapies ========== */}
      <section className="container mx-auto pt-8 lg:mb-12 lg:pt-12">
        <div className="text-center lg:mb-4">
          <h2 className="subheading">Our Therapies</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-6 lg:py-6 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-6">
          {therapies.slice(0, 8).map((value, index) => {
            return (
              <IssueCard
                openAssessmentModal={() => resetBookNow()}
                key={index}
                data={value}
              />
            );
          })}
        </div>
      </section>

      {/* ========== Doctors Slider ========== */}
      <DoctorSlider
        data={homePageDoctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />

      {/* ========== Our Certifications ========== */}
      <section className="bg-primary-10 py-10 lg:mt-20">
        <div className="container relative mx-auto mb-5 mt-5 lg:mt-0">
          <div className="mx-auto pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8">
            <h1 className="subheading sm:pb-0 lg:mb-4">
              We are <span className="heading-primary">Certified</span>
            </h1>
            <p className="para mb-4">
              We're certified as the top mental well-being platform, trusted by
              thousands for our proven results. Our expert team offers India’s
              best personalized support to enhance mental health and well-being.
              Experience the best mental online therapy and wellness with our
              comprehensive services tailored to your needs.
            </p>
          </div>
          <div className="grid gap-y-6 lg:grid-cols-3 lg:gap-x-8">
            {homeCertified.map((value, i) => {
              return (
                <figure
                  key={i}
                  className={`rounded-xl px-6 py-8 shadow-lg lg:px-8 ${
                    value.dark ? "bg-primary-400" : "bg-white"
                  }`}
                >
                  <div className={`mb-2 w-28 lg:mb-4 ${value.size} text-left`}>
                    <img
                      src={value.image}
                      alt={value.title}
                      className="aspect-video w-full object-contain"
                    />
                  </div>
                  <figcaption>
                    <h4
                      className={`mb-2 text-lg font-extrabold ${
                        value.dark ? "text-white" : "text-primary-400"
                      }`}
                    >
                      {value.title}
                    </h4>
                    <p
                      className={`text-sm font-semibold ${
                        value.dark ? "text-slate-100" : "text-slate-500"
                      }`}
                    >
                      {value.description}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== Corporate Section ========== */}
      {/* <HomeCorporate /> */}

      {/* ========== Self Care Section ========== */}
      <SelfCareHome />

      {/* ========== Community ========== */}
      <section className="relative overflow-x-clip py-6 xl:py-20">
        <div className="container mx-auto">
          <div className="relative flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="relative mb-8 lg:order-2 lg:mb-0 lg:w-2/5">
              <div className="mx-auto w-64 lg:w-72">
                <img
                  src={community}
                  alt="Join the community - Wleness"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>

              <img
                src={designRing}
                alt="India's Most Diverse Holistic Platform"
                loading="lazy"
                className="absolute right-1/2 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2 scale-125 object-cover xs:w-80 md:w-96 lg:w-[520px] lg:scale-150 xl:scale-125"
              />
            </div>
            <article className="mx-auto space-y-7 pb-4 lg:order-1 lg:w-3/5 lg:pb-10">
              <hgroup>
                <h1 className="subheading">
                  Join Our
                  <span className="heading-primary"> Community</span>
                </h1>
                <p className="para ml-1 text-lg"></p>
              </hgroup>
              <p className="ml-1 text-sm font-medium leading-6 lg:pr-28 lg:text-lg">
                At Wleness, the community is at the heart of our mission. We’re
                more than a platform; we're an active collection of individuals
                united by the effort of holistic well-being. Here, you'll find
                more than just a community.
              </p>
              <p className="ml-1 text-sm font-medium leading-6 lg:mb-8 lg:pr-28 lg:text-lg">
                You'll find a place where wellness wins and friendships grow.
                And the best part? You can be anonymous, as per your comfort.
                Join us and be part of a top community committed to holistic
                living.
              </p>
              <Link to="/community" className="btn-one inline-block">
                Join Us Now
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ========== Internship section ========== */}
      <HomeInternship />

      {/* ========== Blogs ========== */}
      <HomeBlogs />

      {/* ========== Our Testimonial ========== */}
      <HomeTestimonials />

      {/* ========== Request Form ========== */}
      <RequestForm />

      {/* ========== FAQ's ========== */}
      <HomeFaq data={homeFaqs} />

      {/* ========== Modals ========== */}
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      />
    </>
  );
}
