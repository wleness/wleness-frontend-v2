import React from "react";
import { Link } from "react-router-dom";

export default function ServicesCard(props) {
  return (
    <>
      <div className="rounded-2xl bg-gradient-to-br from-secondary to-tertiary p-1 transition-all lg:hover:scale-105">
        <Link to={props.data.slug}>
          <figure className="relative flex h-full flex-col justify-between rounded-xl bg-white p-3 transition-all hover:bg-yellow-primary hover:shadow-xl hover:shadow-secondary/30 lg:p-5">
            <img
              src={props.data.image}
              alt={props.data.title}
              className="absolute -top-[15%] left-1/2 mx-auto w-16 -translate-x-1/2 translate-y-1/4 drop-shadow-lg lg:-top-1/4 lg:w-24"
            />
            <figcaption className="pb-2 pt-8 lg:pb-5 lg:pt-10">
              <h2 className="mb-2 text-center text-sm font-semibold lg:text-lg xl:text-xl">
                {props.data.title}
              </h2>
              <p className="text-center text-xs font-semibold text-slate-600 lg:text-base">
                {props.data.desc}
              </p>
            </figcaption>
            <button className="mx-auto block w-fit rounded-full bg-gradient-to-tr from-secondary to-tertiary px-5 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-lg lg:text-base">
              Explore More
            </button>
          </figure>
        </Link>
      </div>
      {/* <div className="rounded-2xl ">
        <Link to=>
          <figcaption className="pb-2 pt-8 lg:pb-5 lg:pt-10">
            <h2 className="mb-2 text-center text-sm font-semibold lg:text-lg xl:text-xl">
              
            </h2>
            <p className="text-center text-xs font-semibold text-slate-600 lg:text-base">
              
            </p>
          </figcaption>
          <button className="mx-auto block w-fit rounded-full bg-gradient-to-tr from-secondary to-tertiary px-5 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-lg lg:text-base">
            Explore More
          </button>
        </Link>
      </div> */}
    </>
  );
}
