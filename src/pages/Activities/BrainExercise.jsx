import React, { useRef } from "react";
// Data
import { brainExercise } from "../../data";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import GamesCard from "../../components/Cards/GamesCard";
import { Helmet } from "react-helmet";
import { get_canonical, get_title_text } from "../../utils";

export default function BrainExercise() {
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Helmet>
        <title>
          {brainExercise.name +
            " | " +
            get_title_text(brainExercise.header.title)}
        </title>
        <meta name="description" content="yoga and meditation description" />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <ActivityHeader
        key={brainExercise.id}
        title={brainExercise.header.title}
        image={brainExercise.header.image}
        alt={brainExercise.header.alt}
        desc={brainExercise.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        isEnquiry={true}
        displayButton={false}
        button={["Play Now"]}
      />
      {/* <FeaturesBlock data={activityFeatures} /> */}

      <section className="container mx-auto pb-6" ref={ref}>
        <div className="my-5 text-center lg:my-14">
          <h2 className="subheading text-primary-400">
            {brainExercise.activities.title}
          </h2>
          <p className="font-semibold lg:text-xl">
            {brainExercise.activities.desc}
          </p>
        </div>

        {/* Meditations */}
        <div className="space-y-10 pb-4">
          {brainExercise.activities.types.map((value, index) => {
            return <GamesCard key={index} data={value} />;
          })}
        </div>
      </section>

      {/* <ActivityVideos /> */}
      {/* <ActivityBlogs blogs={brainExercise.blogs} /> */}
    </>
  );
}
