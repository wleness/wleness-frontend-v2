import React, { useState } from "react";
import CoachesHeader from "../../components/headers/CoachesHeader";
import AboutCoach from "../../components/Coach/AboutCoach";
import WhyCoach from "../../components/Coach/WhyCoach";
import CoachExpertise from "../../components/Coach/CoachExpertise";
import CoachCertificates from "../../components/Coach/CoachCertificates";
import CoachRequestForm from "../../components/Forms/CoachRequestForm";
import HappyClient from "../../components/HappyClient";
import PricingCards from "../../components/Coach/PricingCards";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import CoachingUserDetailsForm from "../../components/Forms/CoachingUserDetailsForm";

const reviewsHeading = {
  heading: [
    {
      color: false,
      text: "Our Special ",
    },
    {
      color: true,
      text: "Testimonials ",
    },
  ],
};

export default function CoachSubpage(props) {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  const [plan, setPlan] = useState({
    coach_name: props.data.name,
  });

  const userDetailsForm = (data) => {
    setPlan({ ...plan, ...data });
    toggleForm();
  };

  return (
    <>
      <CoachesHeader
        name={props.data.name}
        profession={props.data.profession}
        image={props.data.image}
        desc={props.data.desc}
      />
      <AboutCoach name={props.data.about.title} paras={props.data.about.desc} />
      <WhyCoach
        name={props.data.whyCoach.title}
        image={props.data.whyCoach.image}
        lists={props.data.whyCoach.reason}
      />
      <CoachExpertise
        heading="Expertise"
        image={props.data.expertise.image}
        lists={props.data.expertise.list}
      />

      {props.data.displayPricing ? (
        <PricingCards
          packages={props.data.packages}
          openForm={userDetailsForm}
        />
      ) : null}

      <CoachCertificates certificates={props.data.certifications} />

      {props.data.reviews ? (
        <HappyClient
          data={{ ...reviewsHeading, clients: props.data.reviews }}
        />
      ) : null}

      <CoachRequestForm name={props.data.name} />

      {props.data.displayPricing ? (
        <CoachingUserDetailsForm
          plan={plan}
          isOpen={enquiryForm}
          onClose={toggleForm}
        />
      ) : null}
    </>
  );
}
