import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeServiceCard({ data }) {
  return (
    <div className="container mx-auto flex flex-col items-center py-10 lg:mb-10 lg:flex-row lg:gap-x-10">
      <div
        className={`${
          data.ltr ? "order-1 lg:order-2" : "order-1"
        } p-6 lg:w-1/2`}
      >
        <img
          src={data.image}
          alt="Why wleness wellbeing"
          className={`${
            data.ltr
              ? "shadow-[30px_-30px_3px_-8px] lg:shadow-[50px_-50px_4px_-10px]"
              : "shadow-[30px_-30px_3px_-8px] lg:shadow-[-50px_50px_4px_-10px]"
          } rounded-3xl  shadow-primary-50 lg:shadow-primary-50`}
        />
      </div>
      <div className={`${data.ltr ? "order-1" : "order-2"} lg:w-1/2`}>
        <span className="mb-2 block font-bold text-primary-300">
          {data.subtitle}
        </span>
        <h2 className="subheading lg:pr-12">
          {data.title[0]}
          <span className="heading-primary"> {data.title[1]}</span>
        </h2>
        <p className="para mt-2">{data.description}</p>
        <ul className="my-6 space-y-2">
          {data.points.map((value, i) => {
            return (
              <li
                className="flex cursor-pointer rounded-xl transition-all"
                key={i}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-3 mt-1 block font-semibold text-primary-400"
                />
                <h2 className="font-semibold">{value}</h2>
              </li>
            );
          })}
        </ul>
        <Link to={data.button.slug} className="btn-one inline-block">
          {data.button.text}
        </Link>
      </div>
    </div>
  );
}
