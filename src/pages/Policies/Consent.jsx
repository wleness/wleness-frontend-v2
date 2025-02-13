import React from "react";
import PoliciesHeader from "../../components/headers/PoliciesHeader";
import Table from "../../components/Formatting/Table";

export default function Consent() {
  return (
    <>
      <PoliciesHeader
        heading="Consent"
        desc="I understand and agree to the following:"
      />

      <section className="container mx-auto -mt-10 text-justify font-medium">
        <Table
          ths={[
            "I have read and comprehended the information presented in this document.",
            "Yes",
          ]}
          trs={[
            [
              "I have had the opportunity to ask questions and seek clarification regarding any aspect of the therapy process.",
              "Null",
            ],
            [
              "I consent to participate in audio/video therapy sessions using the specified digital platforms.",
              "Null",
            ],
            [
              "I understand that the sessions will not be recorded or shared unless I provide explicit permission or in specific circumstances as outlined in the confidentiality section.",
              "Null",
            ],
            [
              "I am aware of the payment, cancellation, and rescheduling policies stated in this document.",
              "Null",
            ],
            [
              "I understand the nature and purpose of therapy, and I am willing to actively participate in the process to work towards my personal growth goals.",
              "Null",
            ],
            [
              "hereby provide my informed consent for audio/ video consultations for tele-psychotherapy with the chosen consultant / specialist.",
              "Null",
            ],
          ]}
        />
      </section>
    </>
  );
}
