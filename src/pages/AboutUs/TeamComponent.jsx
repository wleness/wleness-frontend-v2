import React from "react";
import {
  pgsir,
  asissir,
  kamalsir,
  pavansir,
  salonimaam,
  sreyashsir,
} from "../../assets";

const TeamComponent = () => {
  const teamMembers = [
    {
      name: "Prasenjit Gupta",
      designation: "CEO",
      imageSrc: pgsir,
    },
    {
      name: "Kamal Arora",
      designation: "COO",
      imageSrc: kamalsir,
    },
    {
      name: "Saloni Gupta",
      designation: "Chief Knowledge Officer",
      imageSrc: salonimaam,
    },
    {
      name: "Pawan Kumar Singh",
      designation: "Technology Lead",
      imageSrc: pavansir,
    },
    {
      name: "Dr. Sreyash Satpathy",
      designation: "Mentor (IIM C - Alumnus)",
      imageSrc: sreyashsir,
    },
    {
      name: "Asis Ray",
      designation: "Mentor (IIT Kanpur)",
      imageSrc: asissir,
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-2  pb-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3">
      {teamMembers.map((member, index) => (
        <div key={index} className="mx-auto my-auto p-1 lg:w-1/2  ">
          <img
            src={member.imageSrc}
            alt={member.name}
            className="mx-auto  h-24 w-24 rounded-full lg:h-36 lg:w-36"
          />
          <h2 className="text-xs font-bold lg:text-sm">{member.name}</h2>
          <p className="text-xs font-semibold">{member.designation}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamComponent;
