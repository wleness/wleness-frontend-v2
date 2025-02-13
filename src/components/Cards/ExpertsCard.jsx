import React from "react";
import { Link } from "react-router-dom";

export default function ExpertsCard(props) {
  return (
    <figure className="mb-12 items-center lg:mb-2 lg:flex">
      <div className="mb-5 lg:mr-14 lg:w-[45%]">
        <Link to={props.data.slug}>
          <img
            src={props.data.image}
            alt="Therapy"
            className="w-[90%] object-cover"
          />
        </Link>
      </div>
      <figcaption className="lg:w-[55%]">
        <Link to={props.data.slug}>
          <h2 className="subheading mb-3 text-primary-400">
            {props.data.title}
          </h2>
        </Link>
        <p className="mb-8 text-justify font-medium">{props.data.desc}</p>
        <p className="text-right">
          <Link
            to={props.data.slug}
            // className="font-bold text-primary-400 underline underline-offset-4 transition-all hover:text-primary-500"
            className="btn-one"
          >
            Get Started
          </Link>
        </p>
      </figcaption>
    </figure>
  );
}
