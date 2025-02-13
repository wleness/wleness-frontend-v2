import React from "react";

export default function CommunitySupportCard(props) {
  return (
    <figure className="grid justify-between rounded-xl rounded-br-[3rem] border-2 border-primary-300 p-5 transition-all hover:bg-primary-50/40 hover:shadow-xl focus:bg-none">
      <h3 className="text-center text-2xl font-bold text-primary-300">
        {props.data.title}
      </h3>
      <div className="mx-auto h-32 w-32">
        <img
          src={props.data.image}
          alt={props.data.title}
          className="h-full w-full object-contain"
        />
      </div>
      <figcaption>
        <p className="text-center font-semibold">{props.data.desc}</p>
      </figcaption>
    </figure>
  );
}
