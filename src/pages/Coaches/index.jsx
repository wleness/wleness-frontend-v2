import React, { useState } from "react";
import {
  bgExecutiveApproach,
  executiveCoach1,
  executiveCoach2,
  executiveCoach3,
  executiveCoachingHeader,
  faq5,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { executiveCoachingFaqs } from "../../data/faqs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import {
  executiveApproach,
  executiveServices,
  individualServices,
  whyExecutiveCoachingSlider,
} from "../../data/executiveCoaching";
import { Link } from "react-router-dom";
import CoachRequestForm from "../../components/Forms/CoachRequestForm";
import ActivityForm from "../../components/Forms/ActivityForm";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import { Helmet } from "react-helmet";
import { EXECUTIVE_COACHING_META } from "../../data/meta";
import { get_canonical } from "../../utils";
import Confirmation from "../../components/Modals/Confirmation";

const executiveCoaches = [
  {
    name: "Saloni Gupta",
    profession: "Executive Coach",
    slug: "/coach/saloni-gupta",
    image: executiveCoach1,
    alt: "Saloni Gupta, Executive Coach Certified by ICF - Wleness",
  },
  {
    name: "Dr. Anju Chawla",
    profession: "Coach & Speaker",
    slug: "/coach/anju-chawla",
    image: executiveCoach2,
    alt: "Dr. Anju Chawla, Coach & Speaker, Certified by ICF - Wleness",
  },
  {
    name: "Andrea Bianchi",
    profession: "Executive Coach",
    slug: "/coach/andrea-bianchi",
    image: executiveCoach3,
    alt: "Andrea Bianchi, Executive Coach, Certified by ICF - Wleness",
  },
];

const transformalSuccess = [
  "International Coaches",
  "60+ years of expertise combined",
  "ICF PCC accredited coaches",
  "Trusted by over 60k+ individuals & 70+ organizations",
];

export default function ExecutiveCoaching() {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  const [openFAQ, setOpenFAQ] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [activeIndividualService, setIndividualService] = useState(0);

  // Toggle Faq's
  const toggleFAQ = (index) => {
    if (index !== openFAQ) {
      setOpenFAQ(index);
    }
  };

  // Handle Executive Services
  const handleServices = (i) => {
    setActiveService(i);
  };

  // Handle Individual Services
  const handleIndividualServices = (i) => {
    setIndividualService(i);
  };
  return (
    <>
      <Helmet>
        <title>{EXECUTIVE_COACHING_META.title}</title>
        <meta
          name="description"
          content={EXECUTIVE_COACHING_META.description}
        />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <header className="relative overflow-x-clip bg-secondary/10 pb-6 pt-12 xl:pb-10 xl:pt-16">
        <div className="container mx-auto xl:flex xl:items-center xl:gap-x-5">
          <div className="mb-5 flex justify-end xl:order-2 xl:mr-4 xl:w-1/2">
            <img
              className="w-full"
              src={executiveCoachingHeader}
              alt="Wleness Executive Coaching"
            />
          </div>
          <div className="xl:order-1 xl:w-1/2">
            <hgroup className="mb-6 xl:mb-8">
              <h1 className="subheading">
                <span>Wellness </span>
                <span className="heading-primary">Executive Coaching</span>
              </h1>
              <h2 className="text-2xl font-semibold">
                <span className="">Making Good Leaders Great </span>
              </h2>
            </hgroup>

            <ul className="text-center lg:text-left text-sm md:text-base">
              <li className="mb-6 rounded-2xl bg-primary-50 p-3 font-semibold">
                In the dynamic realm of modern business, leaders face fierce
                competition, complexity, and constant change. Not all leaders
                have mastered the agility required. Enter Wleness Executive
                Coaching - your strategic partner.
              </li>
              <li className="mb-6 rounded-2xl bg-primary-50 p-3 font-semibold">
                Our approach blends data-driven insights, business psychology,
                and cutting-edge tech to deliver a transformative experience. We
                don't just coach; we empower leaders to navigate change and
                confidently lead their organizations to success. At Wleness, we
                know the corporate world craves adaptable trailblazers.
              </li>
            </ul>

            <button className="btn-one" onClick={toggleForm}>
              Enquire Now
            </button>
          </div>
        </div>
      </header>

      <section className="container mx-auto text-center">
        <h2 className="subheading mb-3 pt-10">
          <span>Why </span>
          <span className="heading-primary">Executive Coaching</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          className="mt-5"
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 3000 }}
          speed={400}
          loop={true}
        >
          {whyExecutiveCoachingSlider.map((value, i) => {
            return (
              <SwiperSlide
                className="mb-2 cursor-pointer rounded-xl border-[1px] border-slate-200 p-3 py-8 shadow-xl shadow-slate-300 hover:bg-primary-10 lg:mb-12 lg:p-5"
                key={i}
              >
                <figure className="h-full">
                  <div>
                    <img
                      src={value.image}
                      alt=""
                      className="mx-auto mb-2 w-16 lg:w-28"
                    />
                  </div>
                  <figcaption>
                    <h2 className="heading-primary mb-1 inline-block font-bold text-primary-400 lg:mb-3 lg:text-xl">
                      {value.title}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 lg:text-base">
                      {value.desc}
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="container mx-auto py-5 text-center">
        <h2 className="subheading mb-3 pt-10">
          <span>Our </span>
          <span className="heading-primary">Executive Experts</span>
        </h2>

        <div className="mt-4 grid space-y-4 lg:grid-cols-3 lg:space-y-0">
          {executiveCoaches.map((value, i) => {
            return (
              <Link key={i} to={value.slug} className="block">
                <div className="mb-4">
                  <img src={value.image} alt="" className="mx-auto w-44" />
                </div>
                <figcaption>
                  <h2 className="text-lg font-semibold lg:text-2xl">
                    {value.name}
                  </h2>
                  <h4 className="font-semibold text-slate-600">
                    {value.profession}
                  </h4>
                  <h4 className="font-semibold text-slate-600">
                    Certified by ICF
                  </h4>
                </figcaption>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="pb-8 pt-12 lg:pb-0">
        <div className="px-4 py-4 text-center lg:px-0">
          <h2 className="subheading">
            <span>Guiding </span>
            <span className="heading-primary">Business and Leaders</span>
            <span> to Success</span>
          </h2>
        </div>

        <div className="container mx-auto py-2 lg:flex lg:py-10">
          <div className="mb-8 lg:order-2 lg:mb-0 lg:w-1/2">
            <img
              src={faq5}
              alt="Wleness - Guiding Business And Leaders to Success"
              className="mx-auto block object-cover lg:w-4/5"
            />
          </div>
          <div className="space-y-4 lg:order-1 lg:w-1/2">
            {executiveCoachingFaqs.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`cursor-pointer select-none rounded-lg p-4 shadow-lg lg:p-6 ${
                    openFAQ == index ? " bg-primary-50/50 " : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="flex w-full items-center justify-between text-lg font-bold text-primary-400">
                    <span>{value.question}</span>
                    <FontAwesomeIcon
                      icon={openFAQ == index ? faCaretUp : faCaretDown}
                    />
                  </h3>
                  <p
                    className={
                      openFAQ == index ? "block font-semibold" : "hidden "
                    }
                  >
                    {value.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-x-clip pb-6">
        <div className="container mx-auto text-center">
          <h2 className="subheading  lg:px-24">
            <span className="heading-primary">Wleness: </span>
            <span>Your Path to Transformational Success</span>
          </h2>

          <div className="my-6 grid grid-cols-2 gap-x-4 gap-y-10 rounded-xl bg-primary-50/60 p-2 py-4 lg:my-10 lg:grid-cols-4 lg:gap-6 lg:p-4">
            {transformalSuccess.map((value, i) => {
              return (
                <div className="group relative z-20" key={i}>
                  <div className="z-20 grid h-full cursor-pointer place-items-center rounded-xl bg-white p-1 py-4 text-center text-xs font-semibold group-hover:rounded-none group-hover:text-primary-300 lg:px-8 lg:py-4 lg:text-lg">
                    <span>{value}</span>
                  </div>
                  <div className="absolute inset-0 -z-10 rounded-xl bg-primary-300 transition-all group-hover:-inset-y-6 group-hover:lg:-inset-y-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container relative mx-auto overflow-x-clip pb-6">
        <div className="text-center">
          <h2 className="subheading lg:px-24">
            <span>Our Range of </span>
            <span className="heading-primary">services for Corporates</span>
          </h2>
        </div>

        <div className="my-6 rounded-xl p-2 lg:p-4">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
            {executiveServices.map((value, i) => {
              return (
                <div
                  key={i}
                  onMouseOver={() => handleServices(i)}
                  className={`grid cursor-pointer place-items-center rounded-2xl px-5 py-3 font-semibold transition-all hover:bg-primary-300 hover:text-white ${
                    activeService == i
                      ? " bg-primary-300 text-white"
                      : " bg-primary-10 "
                  }`}
                >
                  <h4 className="text-sm md:text-base">{value.title}</h4>
                </div>
              );
            })}
          </div>

          <div className="pt-8">
            <h2 className="mb-2 text-lg font-bold text-primary-400 lg:text-2xl">
              {executiveServices[activeService].title}
            </h2>
            <p className="font-medium">
              {executiveServices[activeService].desc}
            </p>
          </div>
        </div>
      </section>

      <section className="container relative mx-auto overflow-x-clip pb-6">
        <div className="text-center">
          <h2 className="subheading lg:px-24">
            <span>Our Range of </span>
            <span className="heading-primary">services for Individuals</span>
          </h2>
        </div>

        <div className="my-6 rounded-xl p-2 lg:p-4">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
            {individualServices.map((value, i) => {
              return (
                <div
                  key={i}
                  onMouseOver={() => handleIndividualServices(i)}
                  className={`grid cursor-pointer place-items-center rounded-2xl px-5 py-3 font-semibold transition-all hover:bg-primary-300 hover:text-white ${
                    activeIndividualService == i
                      ? " bg-primary-300 text-white"
                      : " bg-primary-10 "
                  }`}
                >
                  <h4 className="text-sm md:text-base">{value.title}</h4>
                </div>
              );
            })}
          </div>

          <div className="pt-8">
            <h2 className="mb-2 text-lg font-bold text-primary-400 lg:text-2xl">
              {individualServices[activeIndividualService].title}
            </h2>
            <p className="font-medium">
              {individualServices[activeIndividualService].desc}
            </p>
          </div>
        </div>
      </section>

      <section className="relative  overflow-x-clip pb-8">
        <div className="container mx-auto text-center">
          <h2 className="subheading lg:px-24">
            <span className="heading-primary">Our Approach</span>
            <span> to Crafting Your Leadership Journey </span>
          </h2>
        </div>

        <div className="relative mt-6">
          <img
            src={bgExecutiveApproach}
            alt="Wleness - Our Approach to Crafting Your Leadership Journey "
            className="h-[500px] w-full object-cover object-top"
          />
          <div className="absolute inset-0 w-full  bg-black/60 lg:flex">
            <div className="container mx-auto lg:grid lg:grid-cols-3">
              {executiveApproach.map((value, i) => {
                return (
                  <div
                    className="px-4 py-4 lg:flex lg:items-end lg:px-6 lg:py-8"
                    key={i}
                  >
                    <div className="group cursor-pointer">
                      <h2 className="mb-4 text-2xl font-semibold text-white">
                        {value.title}
                      </h2>
                      <ul className="hidden transition-all group-hover:block">
                        {value.list.map((element, j) => {
                          return (
                            <li key={j} className="text-sm text-slate-200">
                              {element}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto pb-6 pt-2 lg:mb-4 lg:px-28">
        <h2 className="mb-4 text-center text-2xl font-semibold text-primary-400 lg:text-3xl">
          Let's Bridge the Gap Between You and Your Work Before Creating an
          Impact on the World
        </h2>
        <p className="text-center font-medium lg:text-lg">
          Embrace Executive Coaching that Harnesses Insights, Business
          Psychology, and Technology to Navigate Today's Challenges and
          Tomorrow's Triumphs.
        </p>
      </section>

      <CoachRequestForm name="Executive Coaching" onClose={toggleForm} />

      <ActivityForm
        purpose="Executive Coaching"
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}
