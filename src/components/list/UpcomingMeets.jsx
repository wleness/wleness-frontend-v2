import React from "react";

export default function UpcomingMeets() {
  return (
    <div className="flex gap-x-4 rounded-xl bg-sky-100 p-2">
      <div className="grid w-fit place-items-center">
        <span className="block rounded-full  bg-gradient-to-tr from-blue-400 via-cyan-500 to-blue-600 p-2.5 px-3.5 font-bold text-white">
          M
        </span>
      </div>
      <div>
        <h5 className="flex items-center justify-between">
          <span className="font-semibold">Monthly doctor's meet</span>
        </h5>
        <span className="rounded-lg py-0.5 text-sm font-medium text-slate-500">
          <span>8 April, 2021</span> | <span>04:00 PM</span>
        </span>
      </div>
    </div>
  );
}
