import React, { useState } from "react";
// Components
import HeaderWithButton from "../../components/HeaderWithButton";
import Symptoms from "../../components/Symptoms";
import DoctorSlider from "../../components/DoctorSlider";
import Community from "../../components/Community";
import IssueQuote from "../../components/IssueQuote";
import Assessment from "../../components/Assessment";
import WlenessApproach from "../../components/WlenessApproach";
import { Helmet } from "react-helmet";
import { get_canonical } from "../../utils";

export default function IssueSubPageLayout({
  header,
  symptoms,
  doctors,
  quote,
  approach,
}) {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);
  const resetBookNow = () => {
    openAssessmentModal();

    setRediredurl({
      title: "Find a Therapist",
      name: "Find a Therapist",
      url: "/experts/all",
    });
  };
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {header.title.map((value) => {
            return value.text;
          })}
        </title>
        <meta name="description" content={header.desc} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <HeaderWithButton
        title={header.title}
        desc={header.desc}
        image={header.image}
        alt={header.alt}
        openAssessmentModal={() => resetBookNow()}
      />
      <Symptoms
        highlight={symptoms.highlight}
        image={symptoms.image}
        points={symptoms.points}
      />
      <WlenessApproach
        issue={symptoms.issue}
        desc={symptoms.desc}
        approach={approach}
      />
      <DoctorSlider
        data={doctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />
      <Community />
      <IssueQuote quote={quote} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      />
    </>
  );
}
