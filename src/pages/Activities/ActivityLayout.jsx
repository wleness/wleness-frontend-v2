import React, { useRef, useState } from "react";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ActivityTechniques from "../../components/ActivityTechniques";
import ActivityForm from "../../components/Forms/ActivityForm";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import { Helmet } from "react-helmet";
import { get_canonical, get_title_text } from "../../utils";

export default function ActivityLayout(props) {
  const ref = useRef(null);
  const { enquiryForm, toggleForm } = useEnquiryForm();

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>{props.name + " | " + get_title_text(props.header.title)}</title>
        <meta name="description" content="yoga and meditation description" />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <ActivityHeader
        title={props.header.title}
        image={props.header.image}
        desc={props.header.desc}
        alt={props.header.alt}
        handleScrollToComponent={() => handleScrollToComponent()}
        isEnquiry={true}
        displayButton={true}
        button={["Explore More"]}
        openEnquiry={toggleForm}
      />
      <ActivityTechniques
        ref={ref}
        title={props.activities.title}
        desc={props.activities.desc}
        types={props.activities.types}
        slug={props.activities.types.slug}
        openEnquiry={toggleForm}
      />
      {/* <FeaturesBlock data={activityFeatures} /> */}
      {/* <ActivityVideos /> */}
      {/* <ActivityBlogs blogs={props.blogs} /> */}
      <ActivityForm
        purpose={props.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}
