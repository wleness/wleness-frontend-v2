import React from "react";
import { Link } from "react-router-dom";

export default function YogaInstructorCard(props) {
  return (
    <div
      // className="place-self-center p-2 pt-24 lg:w-[400px]"
      className="p-2 pt-24"
      title={props.data.name}
    >
      <div className="flex flex-col items-center justify-center rounded-xl bg-primary-50 px-4 py-4 md:py-6">
        <div className="relative mb-12">
          <Link
            to={`/yoga/booking/${props.data.slug}`}
            // to="javascript:void()"
            className="absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-24 md:-translate-y-28 lg:h-36 lg:w-36"
          >
            <img
              loading="lazy"
              src={props.data.image}
              alt={`${props.data.name} - ${props.data.expertise}`}
              className="mx-auto mb-2 block h-full w-full rounded-full object-cover shadow-lg"
            />
          </Link>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 py-2 text-center font-bold  capitalize lg:text-2xl">
            {props.data.name}
          </h3>
          <ul>
            <li>
              <strong>Expertise: </strong>
              <span className="font-medium">{props.data.expertise}</span>
            </li>
            <li>
              <strong>Experience:</strong>
              <span className="font-medium"> {props.data.experience}</span>
            </li>
          </ul>
        </div>
        <Link
          to={`/yoga/booking/${props.data.slug}`}
          className="btn-one bg-teal-600 !text-sm !font-bold transition-colors hover:bg-teal-500 hover:bg-gradient-to-br hover:shadow-md"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
