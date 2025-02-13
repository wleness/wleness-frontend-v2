import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { approveIcon } from "../assets";

const dummyData = [
  {
    heading: "Holistic Wellness Focus",
    paragraph: "Prioritizing mental wellness in all aspects of our approach.",
    answer:
      "Crafting personalized wellness plans for each individual, considering the severity of their concerns, their life circumstances, and mental wellness needs.Implementing well-established methods and incorporating the latest scientific advancements in mental wellness into our care options, tools, and resources.Monitoring the progress of each client and conducting regular assessments of treatment outcomes to ensure continual improvement and tailored care.",
    isOpen: false,
  },
  {
    heading: "Comprehensive Wellness Ecosystem:",
    paragraph:
      "Offering a unified platform that simplifies access to all mental wellness needs, including self-care, peer support, therapy sessions, and psychiatric care.",
    answer:
      "Delivering coordinated care by seamlessly integrating various treatment options to impact mental wellness progress positively.Providing lifelong care consistency, including assessment, diagnosis, treatment, recovery, and maintenance support, all adapted to the specific stage of an individual's wellness journey.",
    isOpen: false,
  },
  {
    heading: "Evidence-Based Wellness:",
    paragraph:
      "Continuous updates to ensure the best outcomes in mental wellness.",
    answer:
      "Offering clear explanations for wellness plans, underpinned by research and evidence, empowers informed mental well-being decisions.Commitment to evidence-based care, including ongoing assessments to enhance the effectiveness of treatment, ensuring high-quality support.Close monitoring of progress, with adaptations and refinements to treatment plans to align with unique needs and goals, guaranteeing meaningful results in the mental wellness journey.",
    isOpen: false,
  },
];

export default function AboutUsDropboxContainer() {
  const [faqData, setFaqData] = useState(dummyData);

  const toggleFAQ = (index) => {
    const updatedFaqData = faqData.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false,
    }));
    setFaqData(updatedFaqData);
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <AboutUsdropbox
          key={index}
          heading={item.heading}
          paragraph={item.paragraph}
          answer={item.answer}
          isOpen={item.isOpen}
          toggleFAQ={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
}

function AboutUsdropbox({ heading, paragraph, answer, isOpen, toggleFAQ }) {
  // Split the answer text into an array at every full stop
  const answerList = answer.split(".").filter((item) => item.trim() !== "");

  return (
    <div
      className={`mb-3 cursor-pointer select-none rounded-xl p-4 shadow-md lg:p-6 ${
        isOpen ? "bg-primary-10" : ""
      }`}
      onClick={toggleFAQ}
    >
      <div className="flex w-full flex-col items-start justify-between lg:flex-row lg:items-center">
        <div className="mt-4 lg:w-3/4">
          <h2 className="mb-3 text-2xl font-extrabold text-primary-400">
            {heading}
          </h2>
          <div className="flex items-start font-semibold text-primary-300">
            {/* Use flex for icon and text */}
            <img src={approveIcon} alt="Approve Icon" className="mr-2 " />{" "}
            {/* Use the custom PNG icon here */}
            <span>{paragraph}</span>
          </div>
        </div>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </div>
      {/* Map over the answerList to create list items with disc bullets */}
      <ul className={isOpen ? " font-semibold text-primary-300" : "hidden"}>
        {answerList.map((item, index) => (
          <li key={index}>
            <div className="flex items-start font-semibold text-primary-300">
              {/* Use flex for icon and text */}
              <img src={approveIcon} alt="Approve Icon" className="mr-2" />{" "}
              {/* Use the custom PNG icon here */}
              <span>{item.trim()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
