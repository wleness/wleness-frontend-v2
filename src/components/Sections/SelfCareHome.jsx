import React from "react";
import { Link } from "react-router-dom";
import { homeSelfCareImage } from "../../assets";

function SelfCareHome() {
  return (
    <section className="bg-primary-10 py-12 lg:pb-20">
      <div className="container mx-auto  grid items-center gap-x-12 lg:grid-cols-2">
        <div className="mb-6 lg:mb-0">
          <img
            src={homeSelfCareImage}
            alt="Why wleness wellbeing"
            className="rounded-3xl  shadow-primary-50"
          />
        </div>
        <div>
          <span className="mb-2 inline-block font-bold text-primary-300 lg:mb-4">
            Self Care
          </span>
          <h2>
            <span className="subheading">The Feel Good Zone</span>
          </h2>
          <p className="mb-6 mt-4 font-semibold text-slate-600">
            Get a self-care toolbox covering everything you need to take care of
            yourself. Have a self-care day every day. Access health and wellness
            resources for nurturing your mind, body, and spirit for better
            mental well-being from the comfort of your home today!
          </p>
          <Link to="/" className="btn-one inline-block">
            Explore Care Corner
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SelfCareHome;
