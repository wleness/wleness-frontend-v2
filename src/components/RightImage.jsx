import React from "react";

export default function RightImage(props) {
  return (
    <div className="container mx-auto mb-8 flex flex-col lg:flex-row lg:items-center">
      <div className="mb-2 lg:order-2 lg:w-1/2">
        <img src={props.data.image} alt="" />
      </div>

      <p className="font-semibold lg:order-1 lg:w-1/2 lg:pr-12">
        <span className="text-xl font-bold text-primary-500">
          {props.data.title}
        </span>
        {props.data.desc}
      </p>
    </div>
  );
}
