import React from "react";

export default function MusicTracksCard(props) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 -z-10 mx-auto w-[90%] scale-y-110 bg-primary-100 p-[5px] transition-all group-hover:w-full group-hover:scale-x-110">
        <div className="h-full w-full bg-white"></div>
      </div>
      <figure className="grid h-full bg-[#E9FBF9]">
        <div className="relative mb-2 h-fit text-center">
          <img src={props.data.image} alt="" />
          <div className="absolute -bottom-3 left-1/2 w-full -translate-x-1/2">
            <span className="mx-auto inline-block rounded-2xl bg-primary-300 px-3 py-1 text-sm font-medium text-white">
              {props.data.name}
            </span>
          </div>
        </div>
        <figcaption className="flex flex-col items-center justify-between gap-y-2 px-2 py-5 text-center">
          <p className="text-center font-semibold">{props.data.desc}</p>
          <button
            onClick={() => props.onclick(props.data.audio)}
            className="btn-one !py-2"
          >
            Play Now
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
