import React from "react";
import StatisticsBlock from "../StatisticsBlock";

export default function DoctorStatistics(props) {
  return (
    <section className="container mx-auto grid grid-cols-2 items-center justify-between gap-4 pb-14 lg:grid-cols-4">
      <StatisticsBlock
        number={`${props.rating}/5`}
        suffix=""
        subtitle="User Rating"
      />
      <StatisticsBlock
        number={props.recommend}
        suffix="+"
        subtitle="Users Recommend"
      />
      <StatisticsBlock
        number={props.last_booked}
        suffix=" Hr"
        subtitle="Last Booked"
      />
      <StatisticsBlock
        number={props.ongoing}
        suffix=""
        subtitle="Ongoing Sessions"
      />
    </section>
  );
}
