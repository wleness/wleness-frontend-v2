import React, { useState } from "react";
// Data
import {
  internshipHeader,
  internshipIcon1,
  internshipIcon2,
  internshipIcon3,
  internshipIcon4,
  internshipIcon5,
  internshipWhy,
  iconCommitment,
  iconFacilities,
  iconExperience,
  internshipBanner,
} from "../../assets";
import { internshipClients } from "../../data/clients";
// Components
import HappyClient from "../../components/HappyClient";
import InternshipApply from "../../components/InternshipApply";
import { internshipFaqs } from "../../data/faqs";
import FaqWithImage from "../../components/FaqWithImage";
import { Helmet } from "react-helmet";
import { INTERNSHIP_META } from "../../data/meta";
import { get_canonical } from "../../utils";
import { Link } from "react-router-dom";
import { APPLY_INTERNSHIP_FORM_URL } from "../../data/urls";
import InternshipBanner from "./InternshipBanner";

const wlenessWork = [
  {
    image: internshipIcon1,
    title: "Kill deadlines, not your mental health:",
    desc: "Flexible timings for your Flexible creativity",
  },
  {
    image: internshipIcon2,
    title: "The perfect work life balance:",
    desc: "We work as a family where your priority matters to us.",
  },
  {
    image: internshipIcon3,
    title: "We spread smiles, not stress:",
    desc: "Unleash an ideal state of mind sans anxiety or stress.",
  },
  {
    image: internshipIcon4,
    title: "Break mental health barriers:",
    desc: "Well-being rules with wit, passion, and positive vibes!",
  },
  {
    image: internshipIcon5,
    title: "Stigma free zone:",
    desc: "Conquer the stigma and spread love and compassion.",
  },
];

const whyWleness = [
  [
    iconExperience,
    "Whether you're looking to assist therapists, conduct research or support community outreach programs, enjoy customized, diverse learning opportunities.",
    "true",
  ],
  [
    iconCommitment,
    "Our supportive and collaborative environment ensures you'll receive quality guidance and mentorship from experienced professionals dedicated to your growth.",
    "false",
  ],
  [
    iconFacilities,
    "Experience holistic development by working in a multi-disciplinary team with a positive work-life balance. There's a place for you wherever you excel.",
    "false",
  ],
];

export default function Internship() {
  const [internshipModal, setInternshipModal] = useState(false);

  const openInternshipModal = () => {
    setInternshipModal(true);
  };

  const closeInternshipModal = () => {
    setInternshipModal(false);
  };

  return (
    <>
      <Helmet>
        <title>{INTERNSHIP_META.title}</title>
        <meta name="description" content={INTERNSHIP_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <header className="mb-6 bg-primary-50/30 py-4 lg:mb-14 lg:py-16">
        <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
          {/* Image on the right */}
          <div className="md:w-1/2 lg:order-2 ">
            <img src={internshipHeader} alt="header" className="w-full" />
          </div>
          {/* Text items on the left */}
          <div className="px-4 py-4 text-center md:w-1/2 md:text-left lg:order-1">
            <h1 className="subheading heading-primary">
              Looking for an Internship
            </h1>
            <h3 className="text-3xl font-bold">Want to join us ?</h3>
            <p className="para py-4 pb-6">
              We seek passionate individuals willing to make a change and
              contribute to our noble cause. Are you someone who has the zest to
              combine your passion for mental health with real life? If yes,
              look no further! Join Wleness to embark on a rewarding journey
              promoting well-being and supporting individuals in need.
            </p>
            <Link
              target="_blank"
              to="https://docs.google.com/forms/d/e/1FAIpQLSdgYCChXTeQK01bfFM0_xS5Lq6MDesEPNN_JGkeVkiEtDu5QA/viewform"
              className="btn-one"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      <InternshipBanner url={APPLY_INTERNSHIP_FORM_URL} new_page={true} />

      {/* ==== why wleness===== */}
      <section className="container mx-auto overflow-x-hidden pt-10 lg:pb-7 lg:pt-12">
        <div>
          <hgroup className="items-center lg:text-center">
            <h1 className="text-center">
              <span className="subheading heading-primary">Why Wleness?</span>
            </h1>
          </hgroup>
        </div>
        <div className="flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="box-border p-4 sm:mx-auto sm:w-4/5 lg:w-[45%] lg:p-10">
            <img src={internshipWhy} alt="" />
          </div>
          <article className="mx-auto pb-10 sm:w-[580px] lg:w-[55%]">
            <div className="space-y-3 lg:ml-12">
              {whyWleness.map((value, i) => {
                return (
                  <figure
                    key={i}
                    className={`flex cursor-pointer rounded-xl rounded-br-[5rem] border-2 border-slate-200 p-4 shadow-md transition-all  hover:shadow-xl xs:flex-row lg:items-center lg:p-5 lg:py-3 xl:py-6 ${
                      value[2] == "true"
                        ? " border-transparent bg-primary-10"
                        : " hover:border-transparent hover:bg-primary-10"
                    }`}
                  >
                    <div className="mr-4 w-1/5 xs:w-1/5 xl:w-1/5">
                      <img
                        src={value[0]}
                        alt={value[1]}
                        className="w-full object-cover"
                      />
                    </div>
                    <figcaption className="w-4/5 xs:w-4/5 xl:w-4/5">
                      <p className="text-xs font-semibold leading-4 text-slate-600 xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:pr-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                        {value[1]}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      {/* Want to know what is like to work at WLENESS */}
      <section className="container mx-auto mb-8">
        <h2 className="text-center">
          <span className="subheading heading-primary">
            Want to know what it's like to work at WLENESS
          </span>
        </h2>

        <div className="mt-4 grid grid-cols-2 items-center gap-2 lg:gap-4 xl:grid-cols-5">
          {wlenessWork.map((value, index) => {
            return (
              <div
                key={index}
                className={`h-full cursor-pointer rounded-xl border-2 border-slate-100 p-4 shadow-xl hover:border-transparent hover:bg-secondary/20 ${
                  index === 4 ? "hidden-on-mobile" : ""
                }`}
              >
                <div>
                  <img
                    src={value.image}
                    alt={value.title}
                    className="mx-auto h-24 w-24 object-contain pb-1 lg:h-40 lg:w-40"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold leading-5 text-primary-400 lg:text-lg">
                    {value.title}
                  </h3>
                  <p className="text-xs font-semibold lg:text-base">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <HappyClient data={internshipClients} />
      <FaqWithImage data={internshipFaqs} />

      <InternshipApply
        isOpen={internshipModal}
        onClose={closeInternshipModal}
      />
    </>
  );
}
