import React from "react";

const Calendly = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="-mt-12 h-screen w-screen rounded-lg shadow-slate-400">
        <iframe
          title="Calendly Widget"
          src="https://calendly.com/wleness111/45min"
          className="h-full w-full"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendly;
