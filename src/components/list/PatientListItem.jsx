import React from "react";

export default function PatientListItem(props) {
  return (
    <div className="flex gap-x-4">
      <div className="grid w-fit place-items-center">
        <span
          className={
            props.data.style.background +
            props.data.style.border +
            " block rounded-full border-2 p-2.5 text-sm font-semibold"
          }
        >
          SM
        </span>
      </div>
      <div className="w-full">
        <h5 className="flex items-center justify-between">
          <span className="font-semibold">{props.data.name}</span>
          <span
            className={
              props.data.style.background +
              props.data.style.text +
              " rounded-lg px-2 py-0.5 text-sm font-semibold "
            }
          >
            {props.data.timing}
          </span>
        </h5>
        <span className={props.data.style.text + " block text-sm font-medium"}>
          {props.data.status}
        </span>
      </div>
    </div>
  );
}
