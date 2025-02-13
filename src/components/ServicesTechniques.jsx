import React from "react";
import {
  musicalHealingChild,
  musicalHealingOld,
  musicalHealingYoung,
} from "../assets";

const ServicesTechniques = React.forwardRef((props, ref) => {
  const activityTypes = props.types.map((value, index) => {
    return (
      <figure key={index} className="mx-auto 2xl:w-80">
        <div>
          <img
            src={value.thumbnail}
            alt={value.title}
            loading="lazy"
            className="block w-full object-cover"
          />
        </div>
        <figcaption>
          <h4 className="py-2 text-lg font-bold text-primary-400 lg:text-xl">
            {value.title}
          </h4>
          <p className="pb-2 text-sm font-semibold text-slate-800 lg:text-base">
            {value.desc}
          </p>
          {/* <div className="mt-2 text-center">
            <Link
              to="https://deba-shree.dayschedule.com/talk-with-debashree-das-gupta"
              target="_blank"
              className="btn-one inline-block !py-2"
            >
              Book Now
            </Link>
          </div> */}
        </figcaption>
      </figure>
    );
  });

  return (
    <section className="container mx-auto py-6 lg:py-9" ref={ref}>
      <div className="text-center">
        <h1 className="subheading text-primary-400">{props.title}</h1>
        <p className="font-semibold text-slate-700 lg:text-xl">{props.desc}</p>
      </div>

      <div className="flex justify-center gap-2 py-6 lg:gap-5 lg:py-10">
        <img
          src={musicalHealingChild}
          alt=""
          className="w-24 object-cover lg:w-32"
        />
        <img
          src={musicalHealingYoung}
          alt=""
          className="w-24 object-cover lg:w-32"
        />
        <img
          src={musicalHealingOld}
          alt=""
          className="w-24 object-cover lg:w-32"
        />
      </div>

      {/* Meditations */}
      <div className="grid gap-6 px-5 pb-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-0">
        {activityTypes}
      </div>
      <div className="pt-5 text-center">
        <button className="btn-one" onClick={props.openEnquiry}>
          Enquire Now
        </button>
      </div>
    </section>
  );
});

export default ServicesTechniques;
