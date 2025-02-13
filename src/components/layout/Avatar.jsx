import React from "react";
import { avatars } from "../../data/dashboard";

export default function Avatar() {
  return (
    <div className="container mx-auto mt-12 grid justify-center">
      <div className="text-center">
        <h1 className="subheading">Choose your Avatar</h1>
      </div>
      <div className="mx-auto grid grid-cols-3 pt-4 lg:w-96">
        {avatars.map((value, i) => {
          return (
            <div
              key={i}
              className="grid w-fit cursor-pointer place-items-center rounded-full border-red-500 hover:border-4"
            >
              <img src={value} className="block w-full rounded-full" alt="" />
            </div>
          );
        })}
      </div>
      <div className="pt-4 ">
        <input
          className="h-12 w-full rounded-lg border-2 border-slate-400 px-4"
          type="text"
          placeholder="Create Username"
        />
      </div>
      <div className="mb-20 pt-4 ">
        <button className="btn-one !w-full !rounded-lg px-6 py-3">
          Let's go
        </button>
      </div>
    </div>
  );
}
