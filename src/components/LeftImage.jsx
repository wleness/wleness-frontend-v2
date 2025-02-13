import React from "react";

export default function LeftImage(props) {
  return (
    <div className="container mx-auto mb-8 flex flex-col items-center lg:flex-row">
      <div className="mb-2 lg:w-1/2">
        <img src={props.data.image} alt="" className="object-cover" />
      </div>

      <p className="font-semibold lg:w-1/2">
        <span className="text-xl font-bold text-primary-500">
          {props.data.title}
        </span>
        {props.data.desc}
      </p>
    </div>
  );
}
