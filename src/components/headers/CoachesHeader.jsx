import React from "react";

export default function CoachesHeader({ name, profession, desc, image }) {
  return (
    <>
      <header className=" relative overflow-x-clip bg-secondary/10  lg:py-28 ">
        <div className="container mx-auto my-8 flex flex-col md:flex-row">
          <div className="flex items-center justify-center md:w-2/5 md:justify-start">
            <img
              src={image}
              alt="Saloni Header"
              className="w-80 object-cover"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="subheading py-4">{name}</h2>
            <h3 className="py-4 text-lg font-bold">{profession}</h3>
            <p className="para text-justify">{desc}</p>
          </div>
        </div>
      </header>
    </>
  );
}
