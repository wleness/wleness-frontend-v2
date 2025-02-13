import React from "react";
import { objectives } from "../data";

function Objectives() {
  return (
    <section className="bg-primary-100/20 lg:mb-6">
      <div className="container mx-auto grid grid-cols-5 gap-1 py-6 !pl-1 lg:py-6">
        {objectives.map((value, i) => {
          return (
            <figure className="self-center" key={i}>
              <img
                loading="lazy"
                src={value.image}
                alt={"Objective " + value.name}
                className="mx-auto mb-2 h-6 w-6 object-cover sm:h-12 sm:w-12 lg:h-14 lg:w-14"
              />
              <figcaption>
                <h4 className="text-center text-xs font-medium md:text-xl">
                  {value.name}
                </h4>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default Objectives;
