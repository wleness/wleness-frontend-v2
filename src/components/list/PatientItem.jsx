import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PatientItem(props) {
  return (
    <div className="rounded-2xl border-2 p-4">
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
            <span className="cursor-pointer rounded-full bg-slate-200 px-2 py-0.5 text-sm font-semibold transition-all hover:bg-slate-300">
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </h5>
          <span className="block text-sm font-medium">
            {props.data.gender + " - " + props.data.age}
          </span>
        </div>
      </div>

      <div>
        <div className="mb-2 mt-4 space-x-2 text-sm font-semibold">
          <span>Stress</span>
          <span>Anxiety</span>
        </div>
        <hr />
        <table className="my-4 space-y-3 text-sm">
          <tr className="flex">
            <td className="w-[30%] font-medium">Last Checked</td>
            <td className="w-[70%]">
              Dr. Everly on 21st April 2021 Prescription
            </td>
          </tr>
          <tr className="flex">
            <td className="w-[30%] font-medium">Observation</td>
            <td className="w-[70%]">
              Physiological signs of heightened anxiety, including rapid
              heartbeat, shallow breathing, and intermittent muscle tension.
            </td>
          </tr>
          <tr className="flex">
            <td className="w-[30%] font-medium">Prescription</td>
            <td className="w-[70%]">
              Take zefio tablets orally, two times per day, with meals.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
