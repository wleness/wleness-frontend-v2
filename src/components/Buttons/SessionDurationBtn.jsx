import React from "react";

export default function SessionDurationBtn({
  data,
  selectDuration,
  handleDuration,
}) {
  return (
    <label
      htmlFor={data.value}
      className={
        selectDuration == data.value
          ? "block w-full cursor-pointer rounded-2xl bg-primary-300 px-5 py-2.5 text-center font-semibold text-white "
          : "block w-full cursor-pointer rounded-2xl border-2 border-primary-300 px-5 py-2.5 text-center font-semibold text-primary-300"
      }
    >
      <input
        type="radio"
        name="duration"
        id={data.value}
        checked={selectDuration == data.value}
        onChange={handleDuration}
        className="hidden"
      />
      <span className="block">{data.text}</span>
    </label>
  );
}
