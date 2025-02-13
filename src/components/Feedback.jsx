import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";

export default function Feedback({ isOpen, onClose }) {
  // Separate state for each question's rating
  const [sessionRating, setSessionRating] = useState(0);
  const [eventFeelingRating, setEventFeelingRating] = useState(0);
  const [expertUnderstandingRating, setExpertUnderstandingRating] = useState(0);
  const [comments, setComments] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any of the rating fields are still at their initial value of 0
    if (
      sessionRating === 0 ||
      eventFeelingRating === 0 ||
      expertUnderstandingRating === 0
    ) {
      setSubmissionStatus("error");
      return; // Prevent further execution of the submission process
    }

    const feedbackData = {
      sessionRating,
      eventFeelingRating,
      expertUnderstandingRating,
      comments,
    };

    console.log(feedbackData);

    try {
      const response = await axios.post(
        "http://localhost:3000/feedback",
        feedbackData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        setSubmissionStatus("success");
        setSessionRating(0);
        setEventFeelingRating(0);
        setExpertUnderstandingRating(0);
        setComments("");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    }
  };

  return (
    <section className="fixed inset-0 z-40 flex items-center justify-center backdrop-brightness-50">
      <div className="h-fit w-[640px] rounded-xl bg-white p-6">
        {submissionStatus === "success" && (
          <p className="mb-4 text-center font-medium text-green-500">
            Feedback submitted successfully!Thank you.
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="mb-4 text-center font-medium text-red-500">
            There was an error submitting your feedback. Please try again later.
          </p>
        )}

        <h4 className="mb-4 text-center text-2xl font-bold text-primary-300">
          Feedback Form
        </h4>
        <p className="text-center text-sm font-medium">
          Your valuable feedback is important to us!
        </p>

        <form onSubmit={handleSubmit} className="pt-6">
          {/* Session Effectiveness Rating */}
          <div className="mb-4 flex gap-4">
            <label htmlFor="" className="w-full">
              <span className="mb-1 block font-bold text-primary-300">
                How effective was the session*
              </span>
              <span className="block py-3 text-center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-3xl ${
                      sessionRating >= index
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => setSessionRating(index)}
                  />
                ))}
              </span>
            </label>
          </div>

          {/* ... other questions and input fields ... */}
          {/* Event Feeling Rating */}
          <div className="mb-4 flex gap-4">
            <label htmlFor="" className="w-full">
              <span className="mb-1 block font-bold text-primary-300">
                How did you feel about the event?*
              </span>
              <span className="block py-3 text-center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-3xl ${
                      eventFeelingRating >= index
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => setEventFeelingRating(index)}
                  />
                ))}
              </span>
            </label>
          </div>

          {/* Expert Understanding Rating */}
          <div className="mb-4 flex gap-4">
            <label htmlFor="" className="w-full">
              <span className="mb-1 block font-bold text-primary-300">
                How well did the expert understand your questions?*
              </span>
              <span className="block py-3 text-center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-3xl ${
                      expertUnderstandingRating >= index
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => setExpertUnderstandingRating(index)}
                  />
                ))}
              </span>
            </label>
          </div>

          {/* Comments */}
          <div className="mb-4 flex gap-4">
            <label htmlFor="" className="w-full">
              <span className="mb-1 block font-bold text-primary-300">
                Tell us about your interest:
              </span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
                placeholder="Give your valuable feedback (minimum of 50 words)"
              ></textarea>
            </label>
          </div>

          {/* Submit and Close Buttons */}
          <div className="text-center">
            <button
              onClick={() => onClose()} // Call the onClose function when the button is clicked
              type="button"
              className="btn-one mr-3 !border-2 !border-primary-300 !bg-transparent !py-2 !text-black"
            >
              Close
            </button>

            <button className="btn-one" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
