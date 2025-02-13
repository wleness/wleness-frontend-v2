import React, { useState } from "react";
import {
  blueFlower,
  circleArt,
  corporateHeader,
  employeeTriangleHub,
} from "../../assets";
import { ourOfferings, prioritizeCorporate } from "../../data/corporate";
import CorporateForm from "../../components/Forms/CorporateForm";
import { Helmet } from "react-helmet";
import { CORPORATE_WELLBEING_META } from "../../data/meta";
import { get_canonical } from "../../utils";

export default function index() {
  const [corporateForm, setCorporateForm] = useState(false);

  // Toggle form
  const toggleForm = () => {
    setCorporateForm(!corporateForm);
  };

  return (
    <>
      <Helmet>
        <title>{CORPORATE_WELLBEING_META.title}</title>
        <meta
          name="description"
          content={CORPORATE_WELLBEING_META.description}
        />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <header className="relative overflow-x-clip bg-tertiary/10 py-8 lg:py-28">
        <div className="container mx-auto xl:flex xl:items-center">
          <div className="mx-auto pb-2 text-center lg:order-2 lg:w-1/2">
            <img
              src={corporateHeader}
              alt="Wleness - Foster A Healthy and thriving work environment with Wleness"
              className="mb-2 w-full rounded-3xl"
            />
          </div>
          <div className="text-center lg:order-1 lg:w-1/2 lg:pr-7 lg:text-left">
            <h1 className="subheading mb-2 pt-3 lg:mb-6">
              <span>Foster a </span>
              <span className="text-[#0A99D6]">Healthy and thriving work </span>
              <span>environment with Wleness</span>
            </h1>
            <p className="mb-6 font-semibold lg:text-lg xl:text-xl">
              Create a Mental Health-Friendly Work Environment with Customized
              Solutions for Your Unique Workplace
            </p>

            <button
              onClick={toggleForm}
              className="btn-one !bg-[#0A99D6]  hover:!bg-[#0F7CAB]"
            >
              Enquiry now
            </button>
          </div>
        </div>
      </header>

      <section className="container mx-auto pt-6 text-center lg:py-6 ">
        <h2 className="subheading mb-4 lg:mb-8 lg:px-24">
          <span>Why prioritize </span>
          <span className="text-[#0A99D6]">Corporate Well-being</span>
        </h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {prioritizeCorporate.map((value, i) => {
            return (
              <figure key={i}>
                <div className="mb-2 lg:mb-4">
                  <img src={value.image} alt="" className="w-full" />
                </div>
                <figcaption>
                  <p className="px-2 text-xs font-semibold md:text-sm lg:text-base">
                    {value.desc.map((element, j) => {
                      return element.status ? (
                        <span className="text-[#0A99D6]" key={j}>
                          {element.text}
                        </span>
                      ) : (
                        <span key={j}>{element.text}</span>
                      );
                    })}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="py-5 text-center">
          <button
            className="btn-one !bg-[#0A99D6] hover:!bg-[#0F7CAB]"
            onClick={toggleForm}
          >
            Join Us Now
          </button>
        </div>
      </section>

      <section>
        <div className="relative overflow-x-clip">
          <div className="container mx-auto mb-4 rounded-2xl bg-tertiary/10 lg:py-6">
            <h2 className="grid py-2 text-center text-xl font-bold lg:text-3xl">
              <span className="mr-2 text-[#0A99D6]">
                Navigating from Burnout to Breakthrough:
              </span>
              <span>
                Prioritizing Employee Well-being Amid Rising Organizational
                Stress
              </span>
            </h2>

            <p className="py-2 text-center  font-semibold lg:px-8">
              Nourishing employee health and happiness helps to create a recipe
              for success and unleashes the full potential of a thriving
              workforce. Let our Workplace Wleness reveal the path to a better
              workplace for your team.
            </p>
          </div>

          <img
            src={blueFlower}
            alt="Wleness - Comprehensive Employee Well-Being Hub"
            className="absolute -right-20 -top-24 w-32 lg:-top-44 lg:w-56 2xl:w-72"
          />

          <img
            src={blueFlower}
            alt="Wleness - Comprehensive Employee Well-Being Hub"
            className="absolute -bottom-44 -left-20 w-32 lg:w-52 xl:-bottom-28 2xl:w-72"
          />
        </div>

        <div className="container mx-auto">
          <div className="items-center pb-6 text-center md:text-left lg:flex">
            <div className="py-2 lg:order-2 lg:w-1/2 lg:py-0">
              <img
                src={employeeTriangleHub}
                alt="Wleness - Comprehensive Employee Well-Being Hub"
                className="mx-auto w-3/5 object-cover"
              />
            </div>
            <div className="lg:order-1 lg:w-1/2">
              <h2 className="subheading mb-2 !grid">
                <span>Comprehensive Employee</span>
                <span className="text-[#0A99D6]"> Well-being Hub</span>
              </h2>
              <p className="pb-6 text-sm font-semibold lg:pr-8 lg:text-base">
                Discover a seamless solution for your employee well-being needs
                with our integrated corporate wellness platform. Equipped with
                state-of-the-art features, it offers a holistic approach to
                caring for your workforce. From physical wellness to mental
                health, our platform ensures all aspects of employee well-being
                are addressed effectively. Elevate productivity, satisfaction,
                and engagement through this cutting-edge tool to meet your
                company's unique requirements.
              </p>
              <button
                className="btn-one !bg-[#0A99D6] hover:!bg-[#0F7CAB]"
                onClick={toggleForm}
              >
                Enquiry now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-x-clip pb-12">
        <div className="container mx-auto text-center">
          <h2 className="subheading  lg:px-24">
            <span className="text-[#0A99D6]">Our Offerings </span>To Your
            Employees
          </h2>

          <div className="my-6 grid grid-cols-4 gap-2 rounded-xl bg-blue-100 p-2 lg:my-10 lg:gap-6 lg:p-4">
            {ourOfferings.map((value, i) => {
              return (
                <div className="group relative z-20" key={i}>
                  <div className="z-20 grid h-full cursor-pointer place-items-center rounded-xl bg-white p-1 text-center text-xs font-semibold group-hover:rounded-none group-hover:text-[#0A99D6] lg:px-8 lg:py-4 lg:text-lg">
                    <span>{value}</span>
                  </div>
                  <div className="absolute inset-0 -z-10 rounded-xl bg-[#0A99D6] transition-all group-hover:-inset-y-6 group-hover:lg:-inset-y-10"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              className="btn-one !bg-[#0A99D6] hover:!bg-[#0F7CAB]"
              onClick={toggleForm}
            >
              Enquiry now
            </button>
          </div>
        </div>

        <img
          src={circleArt}
          alt=""
          className="absolute -bottom-24 -right-80 lg:-right-[420px] lg:bottom-0 2xl:-right-96"
        />
        <img
          src={circleArt}
          alt=""
          className="absolute -left-80 -top-56 hidden md:block lg:-left-[410px] lg:-top-[380px] 2xl:-left-96"
        />
      </section>

      <CorporateForm isOpen={corporateForm} onClose={toggleForm} />
    </>
  );
}
