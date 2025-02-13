import React from "react";
import {
  musicalHealingBenefit1,
  musicalHealingBenefit2,
  musicalHealingBenefit3,
  musicalHealingBenefit4,
  musicalHealingBenefit5,
  musicalHealingBenefit6,
  musicalHealingBenefit7,
  musicalHealingBenefit8,
} from "../assets";

const dummyData = [
  {
    id: 1,
    image: musicalHealingBenefit1,
    heading: "Stress Reduction:",
    description:
      "Music can lower stress levels & induce relaxation, reducing anxiety, promote calmness.",
  },
  {
    id: 2,
    image: musicalHealingBenefit2,
    heading: "Emotional Expression:",
    description:
      "It provides creative channel for the expression of emotions and facilitates the processing of trauma.",
  },
  // {
  //   id: 3,
  //   image: musicalHealingBenefit3,
  //   heading: "Pain Management:",
  //   description:
  //     "Music has the ability to divert attention away from pain and discomfort, aiding in pain management.",
  // },
  {
    id: 4,
    image: musicalHealingBenefit4,
    heading: "Cognitive Enhancement:",
    description:
      "It can improve memory, attention, & cognitive skills, particularly in individuals with cognitive impairments.",
  },
  // {
  //   id: 5,
  //   image: musicalHealingBenefit5,
  //   heading: "Mood Regulation:",
  //   description:
  //     "Music helps regulate mood, boosting feelings of happiness and reducing depression.",
  // },
  {
    id: 6,
    image: musicalHealingBenefit6,
    heading: "Social Connection:",
    description:
      "Group music therapy fosters social interaction and fosters a profound sense of community.",
  },
  {
    id: 7,
    image: musicalHealingBenefit7,
    heading: "Physical Rehabilitation:",
    description:
      "It aids in physical rehabilitation by synchronizing movements with rhythmic cues.",
  },
  {
    id: 8,
    image: musicalHealingBenefit8,
    heading: "Self-Exploration:",
    description:
      "Music therapy serves as a powerful catalyst, inspiring profound self-reflection and personal growth.",
  },
];

export default function MusicalTherapyComponent() {
  const Card = ({ image, heading, description }) => (
    <div className="mx-auto max-w-md cursor-pointer overflow-hidden rounded-xl pt-4 transition-all hover:bg-gradient-to-br hover:from-secondary/50 hover:to-tertiary/50 hover:shadow-xl">
      <div>
        <img src={image} alt={heading} className="mx-auto w-24 lg:w-28" />
      </div>
      <div className="lg:p-4">
        <h2 className="font-semibold text-primary-500 lg:text-xl">{heading}</h2>
        <p className="text-xs font-semibold  lg:text-base">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-x-clip bg-secondary/5 pb-4  pt-6 text-center xl:pb-6 xl:pt-10">
      <h1 className="subheading pb-4 text-primary-500">
        Benefits of <span className="heading-primary">Music Healing</span>
      </h1>
      <div className="container mx-auto grid grid-cols-2 justify-center gap-4 !px-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-4">
        {dummyData.map((data) => (
          <Card
            key={data.id}
            image={data.image}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}
