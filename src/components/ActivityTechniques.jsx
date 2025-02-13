import React from "react";
import { Link } from "react-router-dom";

const ActivityTechniques = React.forwardRef((props, ref) => {
  const activityTypes = props.types.map((value, index) => {
    return (
      <figure key={index} className="p-4">
        <div>
          <img
            src={value.thumbnail}
            alt={value.title}
            className="block w-full object-cover"
          />
        </div>
        <figcaption>
          <h4 className="py-2 text-xl font-bold text-primary-400">
            {value.title}
          </h4>
          <p className="pb-2 text-sm font-semibold text-slate-800">
            {value.desc}
          </p>
          <div className="text-right">
            <Link className="font-bold  text-primary-400" to={value.slug}>
              Read More
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  });

  return (
    <section className=" mb-10 bg-primary-10 pb-6" ref={ref}>
      <div className="container mx-auto">
        <div className="rounded-2xl py-4 pt-8 text-center lg:mb-4 lg:mt-10">
          <h2 className="subheading heading-primary">{props.title}</h2>
          <p className="font-semibold lg:text-lg">{props.desc}</p>
        </div>

        {/* Meditations */}
        <div className="grid gap-6 pb-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-0">
          {activityTypes}
        </div>

        <div className="py-4 text-center">
          <button onClick={props.openEnquiry} className="btn-one">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
});

export default ActivityTechniques;
