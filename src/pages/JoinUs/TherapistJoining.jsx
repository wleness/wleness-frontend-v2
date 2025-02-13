import React from "react";
// Data
import { THERAPIST_JOIN_URI } from "../../data/api";
// Components
import ApplyHeader from "../../components/JoinUs/ApplyHeader";
import ApplyForm from "../../components/JoinUs/ApplyForm";
import HowItWorks from "../../components/JoinUs/HowItWorks";
import { therapistApplyHeader } from "../../assets";
import { Helmet } from "react-helmet";
import { JOIN_THERAPIST } from "../../data/meta";
import { get_canonical } from "../../utils";

export default function TherapistJoining() {
  return (
    <>
      <Helmet>
        <title>{JOIN_THERAPIST.title}</title>
        <meta name="description" content={JOIN_THERAPIST.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <ApplyHeader name="Therapists" image={therapistApplyHeader} />
      <ApplyForm name="Therapist" url={THERAPIST_JOIN_URI} />
      <HowItWorks />
    </>
  );
}
