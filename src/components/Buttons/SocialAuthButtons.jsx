import React from "react";
import { colorIconFacebook, colorIconGoogle } from "../../assets";

export default function SocialAuthButtons({ google, facebook }) {
  return (
    <div className="mb-4 grid grid-cols-2 justify-between gap-4">
      <button
        onClick={google}
        className="flex items-center justify-center rounded-lg border-2 border-primary-300 px-4 py-2"
      >
        <img src={colorIconGoogle} alt="" className="mr-1 w-6 lg:w-8" />
        <span className="text-sm font-medium md:text-base">Google</span>
      </button>
      <button
        onClick={facebook}
        className="flex items-center justify-center rounded-lg border-2 border-primary-300 px-4 py-2"
      >
        <img src={colorIconFacebook} alt="" className="mr-1 w-6 lg:w-8" />
        <span className="text-sm font-medium md:text-base">Facebook</span>
      </button>
    </div>
  );
}
