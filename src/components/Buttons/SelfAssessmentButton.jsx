import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useSelfAssessment from "../../hooks/useSelfAssessment";
import SelfAssessment from "../Modals/SelfAssessment";

function SelfAssessmentButton() {
  const { open, close, isOpen } = useSelfAssessment();

  return (
    <>
      <div className="fixed bottom-5 left-5">
        <button
          onClick={() => open()}
          className="h-12 w-12 rounded-full border-2 border-teal-300 bg-white shadow-lg transition-all hover:border-primary-300 hover:bg-primary-300 hover:text-white"
        >
          <FontAwesomeIcon icon={faUsers} />
        </button>
      </div>

      <SelfAssessment isOpen={isOpen} close={close} />
    </>
  );
}

export default SelfAssessmentButton;
