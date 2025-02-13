import React from "react";
import { leaf } from "../assets";

export default function Symptoms({ highlight, image, points }) {
  return (
    <section className="container mx-auto pt-5 text-center">
      <h2 className="subheading mb-2">
        <span>Here's How Generalized</span>
        <p>
          <span className="heading-primary">{highlight} </span>
          <span>May Appear</span>
        </p>
      </h2>

      <div className="grid items-center lg:grid-cols-2">
        <div className="lg:order-2">
          <img src={image} alt="" className="object-cover" />
        </div>

        {/* Points */}
        <ul className="flex flex-col justify-between gap-y-4 pl-6 text-left text-2xl text-primary-300 lg:order-1 lg:py-7 xl:py-12 xl:pl-7 xl:pr-10">
          {points.map((value, index) => {
            return (
              <li key={index} className="flex items-start">
                <img src={leaf} alt="Leaf Icon" className="mr-2 h-6 w-6 " />
                <p className="text-lg font-semibold text-black">{value}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className="mt-5 py-2 text-center lg:mt-3">
        <button className="btn-one">Undergo an evaluation</button>
      </div> */}
    </section>
  );
}
