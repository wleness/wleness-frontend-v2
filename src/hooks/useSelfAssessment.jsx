import { useState } from "react";

export default function useSelfAssessment() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(true);

  // Assessment Slides
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  return {
    isOpen: isAssessmentModalOpen,
    open: openAssessmentModal,
    close: closeAssessmentModal,
  };
}
