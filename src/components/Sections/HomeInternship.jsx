import React from "react";
import { Link } from "react-router-dom";
import { homeInternshipSection } from "../../assets";

function HomeInternship() {
  return (
    <section className="flex items-center bg-primary-10 py-6 xl:py-14">
      <div className="container mx-auto flex flex-col items-center gap-x-10 lg:grid-cols-2 lg:flex-row">
        <div className="lg:order-2 lg:w-[52%] lg:p-10">
          <img
            src={homeInternshipSection}
            alt="Why wleness wellbeing"
            className="rounded-3xl shadow-primary-50"
          />
        </div>
        <div className="space-y-8 lg:order-1 lg:w-[48%] lg:space-y-12">
          <h2 className="subheading">
            <span className="heading-primary">Bridging Internship</span> <br />
            Opportunity in Psychology
          </h2>
          <p className="para">
            Gain practical experience through hands-on learning opportunities
            with our internship program. Be a mental health intern and learn the
            real-world application of psychological theories. Explore how you
            can kickstart your career in the mental health industry today!
          </p>
          <Link to="/internship" className="btn-one inline-block">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeInternship;
