import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormatPrice from "../utils/FormatPrice";

export default function DoctorsCard(props) {
  const slug = `/experts/profile/${props.data.slug}`; // slug for profile
  const bookNow = `/experts/booking/${props.data.slug}`; // slug for booking

  return (
    <figure className="flex flex-col justify-between rounded-2xl rounded-br-[5rem] border-2 border-primary-300 bg-white p-3 transition-all hover:shadow-lg hover:shadow-primary-50">
      <div className="mb-1 flex">
        <div className="relative flex w-[35%] justify-center lg:w-2/5">
          <Link to={slug}>
            <div className="experts-profile-bg rounded-2xl lg:rounded-l-2xl">
              <img
                src={props.data.image}
                alt=""
                className="mb-1 block w-full rounded-2xl object-cover lg:w-40 lg:rounded-l-2xl"
              />
            </div>
            <small className="block text-clip text-center font-quicksand font-semibold text-primary-400">
              {props.data.certification}
            </small>
          </Link>
        </div>
        <figcaption className="w-[65%] px-4 lg:w-3/5 3xl:px-6">
          <hgroup>
            <h2 className="text-xl font-semibold lg:text-2xl">
              <span>{props.data.name}</span>
            </h2>
            <h5 className="font-semibold text-primary-400">
              {props.data.profession}
            </h5>

            <h4 className="text-sm font-semibold text-slate-500 lg:text-lg">
              {props.data.experience}
            </h4>
          </hgroup>
          <div className="text-xs font-medium lg:my-3 lg:text-base">
            <p className="leading-5 text-slate-600 lg:mb-2">
              <span className="font-semibold text-primary-400">
                Expertise:{" "}
              </span>
              {props.data.expertise}
            </p>
            <p className="leading-5 text-slate-600">
              <span className="font-semibold text-primary-400">Speaks: </span>
              {props.data.languages}
            </p>
            <h5 className="my-1 text-sm font-semibold text-primary-400 lg:text-lg">
              <span>Session Starts </span>
              <FormatPrice price={props.data.price} currency="INR" />
            </h5>
          </div>
        </figcaption>
      </div>
      <div className="flex">
        <div className="w-[35%] lg:w-2/5">
          <Link
            to={slug}
            className="mx-auto block w-fit rounded-full border-2 border-primary-400 px-3 py-2 text-center text-xs font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white lg:px-6 lg:text-sm"
          >
            View Profile
          </Link>
        </div>
        <div className="w-[65%] px-4 lg:w-3/5 3xl:px-6">
          <Link
            // to={props.data.bookingUrl}
            to={bookNow}
            className="block w-fit rounded-full bg-primary-400 px-4 py-2.5 text-center text-xs font-semibold text-white transition-all hover:bg-primary-300 lg:px-6 lg:py-2.5 lg:text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </figure>
  );
}
