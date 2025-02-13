import React from "react";
// Data
import { psychiatristApplyHeader } from "../../assets";
import { PSYCHIATRIST_JOIN_URI } from "../../data/api";
// Components
import ApplyHeader from "../../components/JoinUs/ApplyHeader";
import ApplyForm from "../../components/JoinUs/ApplyForm";
import HowItWorks from "../../components/JoinUs/HowItWorks";
import { get_canonical } from "../../utils";
import { Helmet } from "react-helmet";
import { JOIN_PSYCHIATRIST } from "../../data/meta";

export default function PsychiatristJoining() {
  return (
    <>
      <Helmet>
        <title>{JOIN_PSYCHIATRIST.title}</title>
        <meta name="description" content={JOIN_PSYCHIATRIST.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <ApplyHeader name="Psychiatrists" image={psychiatristApplyHeader} />
      <ApplyForm name="Psychiatrist" url={PSYCHIATRIST_JOIN_URI} />
      <HowItWorks />
    </>
  );
}
