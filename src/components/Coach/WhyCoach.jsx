import React from "react";

export default function WhyCoach({ name, image, lists }) {
  return (
    <section className="pt-4 lg:py-8">
      <div className="mb-6 mt-4 text-center lg:mb-8">
        <h2 className="subheading">
          Why work with <span className="heading-primary">{name}</span>
        </h2>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5">
          <img src={image} alt={name} className="mx-auto rounded-lg lg:w-96" />
        </div>
        <div className="my-9 w-full lg:ml-8 lg:w-3/5">
          {lists.map((value, i) => {
            return (
              <div
                key={i}
                className="mb-8 rounded-xl border-2 border-teal-400 bg-white p-4 text-sm shadow-md hover:bg-teal-400 hover:text-white md:p-8 md:text-base"
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
