import React from "react";
import { leaf } from "../assets";

export default function LeftVideoList(props) {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row lg:items-center">
      <div className="hidden lg:block lg:w-1/2">
        <iframe
          src={props.data.videoUrl}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
          className="mx-auto h-44 w-fit rounded-2xl lg:h-[300px] lg:w-[460px]"
        />
      </div>

      <div className="py-2 font-semibold lg:w-1/2 lg:p-8">
        <h2 className="mb-4 text-2xl font-bold text-primary-500">
          {props.data.title}
        </h2>
        <p>{props.data.desc}</p>
        <ul className="list-inside list-disc pt-4">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="flex items-start ">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-4 h-6 w-6 object-contain"
                />
                <span className="text-lg font-semibold text-black">
                  {value.subtitle}
                </span>
                <p>{value.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
