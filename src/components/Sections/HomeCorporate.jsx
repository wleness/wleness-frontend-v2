import React from "react";
import { Link } from "react-router-dom";
import { homeCorporateImage, homeFeaturedIn } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faFlag } from "@fortawesome/free-solid-svg-icons";

function HomeCorporate() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-x-10 py-12 lg:grid-cols-2 lg:flex-row">
      <div className="mb-8 lg:order-2 lg:mb-0 lg:w-[45%] lg:p-7">
        <img
          src={homeCorporateImage}
          alt="Why wleness wellbeing"
          className="rounded-3xl object-cover shadow-primary-50"
        />
      </div>
      <div className="space-y-6 lg:order-1 lg:w-[55%] lg:space-y-8">
        <div className="subheading">
          <h2 className="grid">
            <span>Get the best service for</span>
            <span> your Team!</span>
          </h2>
        </div>
        <p className="para">
          <span className="text-slate-600">
            Wleness provides the best employee health and well-being services
            for your team. Unlock increased productivity, job satisfaction, and
            outcomes. Associate with your company and get mental health support
            for all employees. Take your corporate well-being to the next level
            with Wleness
          </span>
        </p>
        <div className="flex gap-x-2">
          <Link to="/corporate-wellbeing" className="btn-one inline-block">
            Let's get started together
          </Link>
        </div>

        <div className="grid gap-y-6 divide-x-2 border-t-2 pt-8 lg:w-[90%] lg:grid-cols-2 lg:gap-y-0">
          <div className="px-4">
            <h4 className="mb-1 font-bold">
              <FontAwesomeIcon
                icon={faBolt}
                className="mr-2 text-sm text-primary-300"
              />
              Quick Service
            </h4>
            <p className="text-sm font-semibold text-slate-400">
              Get services at your fingertips with Wleness's best psychologists
              and trainers.
            </p>
          </div>
          <div className="pl-6">
            <h4 className="mb-1 font-bold">
              <FontAwesomeIcon
                icon={faFlag}
                className="mr-2 text-sm text-primary-300"
              />
              24/7 Support
            </h4>
            <p className="text-sm font-semibold text-slate-400">
              Get support around the clock for your team’s non-stop growth and
              mastery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCorporate;
