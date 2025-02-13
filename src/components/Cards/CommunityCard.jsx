import React from "react";

export default function CommunityCard(props) {
  return (
    <div className="grid cursor-pointer content-between rounded-2xl p-4 transition-all hover:bg-gradient-to-br hover:from-secondary/50 hover:to-tertiary/50 hover:shadow-xl hover:shadow-primary-50 focus:bg-none">
      <h2 className="text-center text-lg font-bold lg:text-xl">
        {props.data.title}
      </h2>
      <img
        src={props.data.image}
        alt=""
        className="mx-auto my-2 object-cover"
      />
      <p className="text-center text-xs font-semibold md:text-base">
        {props.data.desc}
      </p>
    </div>
  );
}
