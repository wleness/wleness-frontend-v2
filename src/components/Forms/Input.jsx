import React from "react";

export default function Input(props) {
  return (
    <label htmlFor={props.data.name} className={props.data.span}>
      <input
        type={props.data.type}
        placeholder={props.data.placeholder}
        className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
        value={props.data.value}
        name={props.data.name}
        onChange={props.data.onchange}
      />
    </label>
  );
}
