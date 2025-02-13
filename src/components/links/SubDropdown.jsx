import React from "react";
import SubmenuLink from "./SubmenuLink";

export default function SubDropdown(props) {
  return (
    <ul className="absolute z-10 hidden w-52 rounded-xl border-[1px] border-slate-100 bg-white py-4 shadow-md group-hover:block xl:w-60">
      {props.subpages.map((value, index) => {
        return <SubmenuLink key={index} url={value[1]} text={value[0]} />;
      })}
    </ul>
  );
}
