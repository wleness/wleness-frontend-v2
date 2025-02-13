import React from "react";
import PoliciesHeader from "../../components/headers/PoliciesHeader";
import Heading2xl from "../../components/Formatting/Heading2xl";
import Paragraphs from "../../components/Formatting/Paragraphs";
import List from "../../components/Formatting/List";

export default function StudentsPolicy() {
  return (
    <>
      <PoliciesHeader
        heading="Privacy Policy for Student Internship Program"
        desc="Our Students Policy have been updated on 18th August 2023 "
      />

      <section className="container mx-auto py-8 text-justify font-medium">
        <Heading2xl text="Introduction" />
        <Paragraphs
          texts={[
            `Welcome to Wleness, an online platform dedicated to mental health care services. This Privacy Policy outlines how we collect, use, disclose, and protect personal information provided by student interns participating in our internship program. We are committed to safeguarding the privacy and confidentiality of our interns' information.`,
          ]}
        />

        <Heading2xl text="Collection of Information" />
        <Paragraphs
          texts={[
            "We may collect the following types of information from student interns participating in our program:",
            "Personal Information: This includes names, contact details (email address, phone number), date of birth",
            "Educational and Professional Details: Information related to the student's educational background, internship preferences, and any relevant qualifications or certifications.",
          ]}
        />

        <Heading2xl text="Use of Information" />
        <Paragraphs
          texts={[
            "We use the collected information for the following purposes:",
          ]}
        />
        <List
          items={[
            "To evaluate and process internship applications.",
            "To communicate with interns and provide necessary program-related information.",
            "To monitor and supervise internship activities.",
            "To ensure the safety and well-being of interns and clients.",
            "To comply with legal and regulatory requirements.",
          ]}
        />

        <Heading2xl text="Disclosure of Information" />
        <Paragraphs
          texts={[
            "We may disclose intern information to the following parties:",
            "Supervisors and Mentors: Information may be shared with internship supervisors and mentors for program management and support.",
            "Educational Institutions: Information may be shared with the intern's educational institution for academic purposes.",
            "Legal and Regulatory Authorities: We may disclose information to comply with legal obligations or respond to regulatory inquiries. Clients: In providing mental health services, interns may have access to client information. In such cases, confidentiality and ethical standards will be strictly adhered to.",
          ]}
        />

        <Heading2xl text="Data Security" />
        <Paragraphs
          texts={[
            "We employ industry-standard security measures to protect intern information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission or storage can be guaranteed to be 100% secure, and we cannot ensure the security of information transmitted or stored on our platform.",
          ]}
        />

        <Heading2xl text="Retention of Information" />
        <Paragraphs
          texts={[
            "We retain intern information for the duration of the internship program and as required by applicable laws and regulations.",
          ]}
        />

        <Heading2xl text="Intern Rights" />
        <Paragraphs
          texts={[
            "Interns have the following rights regarding their personal information:",
            "Access: To access and review their personal information.",
            "Correction: To request corrections or updates to their personal information.",
            "Deletion: To request the deletion of their personal information, subject to legal and regulatory requirements.",
          ]}
        />

        <Heading2xl text="Changes to this Privacy Policy" />
        <Paragraphs
          texts={[
            "We may update this Privacy Policy to reflect changes in our practices or for legal or regulatory reasons. Any updates will be posted on our website, and we encourage interns to review this policy periodically.",
          ]}
        />

        <Heading2xl text="Contact Information" />
        <Paragraphs
          texts={[
            "If you have any questions or concerns about this Privacy Policy or the handling of your personal information, please contact us at hello@wleness.com",
          ]}
        />

        <Heading2xl text="Governing Law And Dispute Resolution" />
        <Paragraphs
          texts={[
            "The Privacy Policy will be governed by and constructed in accordance with the law of india. Any dispute arising out of relating to this Privacy Policy and/or Program will be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be in Delhi/Haryana.",
            "Date of Last Update: Sept 13, 2023",
          ]}
        />
      </section>
    </>
  );
}
