import React from "react";
import { benefits_of_yoga } from "../../assets";
import { textColorize } from "../../utils";

const benefits = [
  "Yoga promotes relaxation, reducing the impact of daily stressors.",
  "Regular practice enhances flexibility, helping in better overall body movement.",
  "Yoga encourages mindfulness, sharpening mental clarity and concentration.",
  "It boosts energy by improving circulation and promoting a sense of energy.",
  "Yoga poses strengthen core muscles, contributing to improved posture.",
  "The combination of breath control and movement helps regulate emotions.",
  "Yoga provides a holistic approach, benefiting both body and mind.",
];

function YogaBenefits() {
  return (
    <section>
      <div className="mb-6 bg-primary-10 text-center lg:mb-12">
        <h1 className="subheading !py-6">
          {textColorize([
            {
              color: false,
              text: "Benefits of ",
            },
            {
              color: true,
              text: "Yoga",
            },
          ])}
        </h1>
      </div>
      <div className="container mx-auto mb-4">
        <img
          src={benefits_of_yoga}
          alt="Benefits of yoga"
          className="mb-6 rounded-xl"
        />
      </div>
    </section>
  );
}

export default YogaBenefits;
