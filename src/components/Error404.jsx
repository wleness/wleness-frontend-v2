import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-teal-500">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring active:text-white">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-white transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
          <Link
            to="/"
            className="relative block border border-current bg-teal-500 px-8 py-3"
          >
            Go Home
          </Link>
        </a>
      </button>
    </main>
  );
}
