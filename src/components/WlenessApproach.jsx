import React from "react";
import { wlenessApproach } from "../data/issues";
import ApproachCard from "./Cards/ApproachCard";
import { Link } from "react-router-dom";
import {
  wlenessApproachIcon1,
  wlenessApproachIcon2,
  wlenessApproachIcon3,
} from "../assets";

export default function WlenessApproach({ issue, desc, approach }) {
  return (
    <section className="my-5 bg-gradient-to-b from-primary-50/40 to-transparent pt-5 xl:mt-10 xl:pt-10">
      <div className="container mx-auto text-center">
        <h2 className="subheading">
          {issue[0]}
          <span className="heading-primary"> {issue[1]}</span>
        </h2>
        <p className="text-xl font-medium">{desc}</p>

        <div className="my-6 grid grid-cols-3 gap-6 rounded-xl bg-yellow-primary p-2 lg:my-10 lg:grid-cols-3 lg:gap-6 lg:p-4">
          <ApproachCard
            data={{
              title: "Talk to a Therapist",
              desc: approach[0],
              image: wlenessApproachIcon1,
              slug: "/experts/all",
            }}
          />
          <ApproachCard
            data={{
              title: "Consult a Psychiatrist",
              desc: approach[1],
              image: wlenessApproachIcon2,
              slug: "",
            }}
          />
          <ApproachCard
            data={{
              title: "Join the community",
              desc: approach[2],
              image: wlenessApproachIcon3,
              slug: "/community",
            }}
          />
        </div>

        {/* <div className="text-center">
          <Link to="/experts/all" className="btn-one mx-auto block w-fit">
            Start the treatment
          </Link>
        </div> */}
      </div>
    </section>
  );
}
