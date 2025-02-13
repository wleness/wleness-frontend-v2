import React from "react";
import { Link } from "react-router-dom";

export default function ApproachCard(props) {
  return (
    <figure className="group relative z-20">
      <Link to={props.data.slug}>
        <div className="z-20 grid h-full cursor-pointer place-items-center rounded-xl border-2 border-slate-100 bg-white p-1 py-4 text-center text-xs font-semibold shadow-sm group-hover:rounded-none group-hover:text-primary-300 lg:px-8 lg:text-lg 2xl:py-14">
          <img src={props.data.image} alt="" className="mb-4 w-7 lg:w-fit" />
          <h4>{props.data.title}</h4>
          <p className="mt-2 text-sm text-slate-400">{props.data.desc}</p>
        </div>
      </Link>
    </figure>
  );
}
