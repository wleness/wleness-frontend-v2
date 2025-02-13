import React from "react";
import { bubbleDoodles } from "../assets";

export default function StatisticsBlock(props) {
  return (
    <figure>
      <div className="relative">
        <div>
          <img
            src={bubbleDoodles}
            alt=""
            className="mx-auto w-24 object-cover md:w-36"
          />
        </div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold lg:text-2xl">
          <span>{props.number}</span>
          <span>{props.suffix}</span>
        </span>
      </div>
      <figcaption>
        <h4 className="text-center font-bold lg:text-xl">{props.subtitle}</h4>
      </figcaption>
    </figure>
  );
}
