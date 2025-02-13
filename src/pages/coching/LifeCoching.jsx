import React, { useState } from "react";
import FaqWithImage from "../../components/FaqWithImage";
import { lifeStyleCoachingFaqs } from "../../data/faqs";
import { lifecoching, wlenessLifeCoaching } from "../../data";
import { lifeCoachingHeader, profileMask, rectangle3 } from "../../assets";
import LifeCoachingForm from "../../components/Forms/LifecoachingForm";
import CoachRequestForm from "../../components/Forms/CoachRequestForm";
import { Helmet } from "react-helmet";
import { LIFE_COACHING_META } from "../../data/meta";
import { get_canonical } from "../../utils";
import { Link } from "react-router-dom";
import { lifestyleCoaches } from "../../data/life-coaching";
import Confirmation from "../../components/Modals/Confirmation";

const results = [
  [
    "51% ",
    "of companies with a strong coaching culture have higher revenues than others",
  ],
  [
    "80% ",
    "clients felt improved self-esteem and self-confidence after coaching.",
  ],
  [
    "68% ",
    "individuals who hired coaches could make back their investment. The median ROI is around 7x the investment.",
  ],
  [
    "",
    "Clients reported decreased anxiety levels and depression levels with improved workplace relationships",
    " 79%.",
  ],
  [
    "67% ",
    "clients felt improved work/life balance and wellness after coaching.",
  ],
];
export default function LifeCoching() {
  const [lifecoachingForm, setLifeCoachingForm] = useState(false);

  // Toggle form
  const toggleForm = () => {
    setLifeCoachingForm(!lifecoachingForm);
  };

  return (
    <>
      <Helmet>
        <title>{LIFE_COACHING_META.title}</title>
        <meta name="description" content={LIFE_COACHING_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      {/* ===================== Header Section =====================  */}
      <header className="relative overflow-x-clip bg-secondary/10 pb-6 pt-12 xl:pb-10 xl:pt-16">
        <div className="container mx-auto xl:flex xl:items-center xl:gap-x-5">
          <div className="mb-5 flex justify-end xl:order-2 xl:mr-4 xl:w-1/2">
            <img
              className="w-full"
              src={lifeCoachingHeader}
              alt="Wleness Services - Lifestyle Coaching"
            />
          </div>
          <div className="xl:order-1 xl:w-1/2">
            <hgroup className="mb-6 xl:mb-8">
              <h1 className="subheading">Unleash Your Inner Champion</h1>
              <h2 className="text-2xl font-semibold">
                <span className="">Through Wleness </span>
                <span className="heading-primary ">Lifestyle Coaching</span>
              </h2>
            </hgroup>

            <ul className="rounded-2xl bg-primary-50 p-3 text-center font-semibold lg:text-left xl:text-lg">
              <li className="mb-6">
                Do you crave higher growth and confidence in your life,
                business, and leadership journey?
              </li>
              <li className="para">
                Discover the absolute confidence to find fulfillment and
                experience your desired joyous relationships.
              </li>
            </ul>

            <div className="mt-6">
              <button onClick={toggleForm} className="btn-one">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== Lifestyle coaches =====================  */}
      <section className="container mx-auto py-5 text-center">
        <h2 className="subheading mb-3 pt-10">
          <span>Our </span>
          <span className="heading-primary">Lifestyle Coaches</span>
        </h2>

        <div className="mt-4 flex flex-wrap justify-center gap-12 lg:grid-cols-3 lg:gap-24">
          {lifestyleCoaches.map((value, i) => {
            return (
              <Link key={i} to={value.slug} className="block">
                <div className="mb-4">
                  <img
                    src={value.image}
                    alt={value.alt}
                    className="mx-auto w-44"
                  />
                </div>
                <figcaption>
                  <h2 className="text-lg font-bold lg:text-2xl">
                    {value.name}
                  </h2>
                  <h4 className="font-semibold text-slate-600">
                    {value.profession}
                  </h4>
                  {/* <h4 className="font-semibold text-slate-600">
                    Certified by ICF
                  </h4> */}
                </figcaption>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===================== Wleness lifestyle coaching =====================  */}
      <section className="container mx-auto my-4 mb-8 pt-4 text-center">
        <h2 className="subheading">
          <span>Wleness </span>
          <span className=" heading-primary"> lifestyle coaching </span>
        </h2>
        <div className="container mx-auto mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          {wlenessLifeCoaching.map((value, i) => {
            return (
              <figure
                key={i}
                className="cursor-pointer rounded-2xl p-4 text-center hover:shadow-xl"
              >
                <div className="relative mx-auto mb-4 h-36 w-36 lg:h-40 lg:w-40">
                  <div className="h-full w-full rounded-full">
                    <img
                      src={value.image}
                      alt=""
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                  <img
                    src={profileMask}
                    alt=""
                    className="absolute left-1/2 top-0 -translate-x-[55%] scale-110 object-cover"
                  />
                </div>
                <figcaption className="font-semibold">
                  <h2 className="mb-2 text-xl font-bold text-primary-400">
                    {value.name}
                  </h2>
                  <p className="text-sm text-slate-500">{value.desc}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* ===================== Results Section =====================  */}
      <section className="relative bg-secondary/10 py-6">
        <div className="container mx-auto lg:flex lg:gap-x-5">
          <div className="mb-6 flex justify-end lg:order-2 lg:w-2/5">
            <img src={rectangle3} alt="" className="w-full xl:w-[90%]"></img>
          </div>
          <div className="my-auto lg:order-1 lg:w-3/5">
            <h2 className="subheading mb-4">
              <span>The </span>
              <span className=" heading-primary">results </span>
              <span>say it all</span>
            </h2>
            <ul className="list-outside list-disc px-4 font-semibold  text-primary-300">
              {results.map((value, i) => {
                return (
                  <li key={i} className="mb-4  p-2">
                    <p className="text-black">
                      <span className="text-primary-300">{value[0]}</span>
                      <span>{value[1]}</span>
                      <span className="text-primary-300">{value[2]}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== How can life coaching propel you forward? =====================  */}
      <section className="container mx-auto text-center">
        <h2 className="subheading mb-3 pt-10">
          <span>How can </span>
          <span className="heading-primary">life coaching</span>
          <span> propel you forward?</span>
        </h2>
        <p className="pb-12 font-medium md:text-lg lg:mx-auto">
          Life coaching is your personalized journey to growth and fulfillment.
          It's like having a trusted partner who helps you navigate life's
          challenges and capitalize on your strengths.
        </p>
        <div className="mb-14 grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 lg:gap-6 xl:gap-10">
          {lifecoching.map((value, i) => {
            return (
              <figure
                key={i}
                className="cursor-pointer rounded-xl border-[1px] border-slate-200 p-3 shadow-xl shadow-slate-300 hover:bg-primary-10 lg:p-5"
              >
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
            );
          })}
        </div>
      </section>

      {/* ===================== FAQ section =====================  */}
      <FaqWithImage data={lifeStyleCoachingFaqs} />

      {/* ===================== Forms =====================  */}
      <LifeCoachingForm isOpen={lifecoachingForm} onClose={toggleForm} />
      <CoachRequestForm name="Life Coaching" onClose={toggleForm} />
    </>
  );
}
