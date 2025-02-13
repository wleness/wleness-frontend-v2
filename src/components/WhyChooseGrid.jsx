import React from "react";

export default function WhyChooseGrid(props) {
  return (
    <section className="mb-8 pt-2 text-center">
      <h2 className="subheading mx-auto mb-8 lg:w-[640px]">
        <span>Why Should I Choose </span>
        <span className="heading-primary">Wleness Therapy</span>
      </h2>

      <div className="container mx-auto grid grid-cols-2 gap-5 lg:grid-cols-4">
        {props.data.map((value, index) => {
          return (
            <figure key={index}>
              <div>
                <img
                  loading="lazy"
                  src={value.image}
                  alt={value.title}
                  className="mx-auto w-24 lg:w-40"
                />
              </div>
              <figcaption>
                <h4 className="my-2 px-2 text-center text-lg font-bold leading-6 text-primary-400 lg:px-6 lg:text-xl">
                  {value.title}
                </h4>
                <p className="text-center text-xs font-semibold md:text-sm lg:text-base">
                  {value.desc}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
