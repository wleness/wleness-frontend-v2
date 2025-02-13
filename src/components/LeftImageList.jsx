import React from "react";
import { precautions, leaf } from "../assets";

export default function LeftImageList(props) {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row lg:items-center">
      <div className="w-full object-cover lg:w-1/2">
        <img src={precautions} alt="" className="w-full object-cover" />
      </div>
      <div className="py-4 font-semibold lg:w-1/2 lg:p-8">
        <h2 className="mb-2 text-2xl font-bold text-primary-500 lg:mb-4">
          Precautions:
        </h2>
        <p className="pt-3">{props.data.desc}</p>
        <ul className=" pt-4">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="flex items-start">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-4 h-6 w-6 object-contain"
                />
                <p className="text-base font-semibold text-black">{value}</p>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 pt-4 font-semibold text-gray-800">
          {props.data.info}
        </p>
      </div>
    </div>
  );
}
