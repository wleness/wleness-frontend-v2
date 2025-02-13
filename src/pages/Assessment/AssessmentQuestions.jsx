import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { answers, assessments } from "../../data/mainAssessment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ASSESSMENT_RESULT } from "../../data/api";
import ThankYou from "../../components/Modals/ThankYou";

export default function AssessmentQuestions() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [showResult, setSetshowResult] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState(null);
  const [modal, setModal] = useState(false);

  // Set Assessment Questions
  let questionSet = assessments
    .filter((key) => key.slug == slug)
    .map((value) => value.questions);

  if (questions == null) {
    setQuestions(questionSet[0]);
  }

  //  Next question
  const handleContinue = () => {
    if (activeQuestion == null) {
      setActiveQuestion(questions[1]);
      setCurrentAnswer("");
    } else {
      let index = questions.indexOf(activeQuestion);
      if (index + 1 < questions.length) {
        setActiveQuestion(questions[index + 1]);
        setCurrentAnswer("");
      } else {
        setSetshowResult(true);
      }
    }
    setAllAnswers([...allAnswers, currentAnswer]);
  };

  //  Handle back
  const handleBack = () => {
    let index = questions.indexOf(activeQuestion);
    if (index == 0 || index == -1) {
      navigate("/assessment");
    } else {
      setActiveQuestion(questions[index - 1]);
      setCurrentAnswer(allAnswers[index - 1]);
    }
  };

  //  Handle answer
  const handleUpdateAnswer = (answer) => {
    setCurrentAnswer(answer);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (
      email == "" ||
      allAnswers.length != 15 ||
      username == "" ||
      phone == ""
    ) {
      return null;
    }

    // Calculate answers
    let scores = {};
    let total = 0;

    // Count individual scores
    allAnswers.forEach((answer) => {
      let score = answers.indexOf(answer) + 1;
      scores[answer] = (scores[answer] || 0) + score;
    });

    // Sum of scores
    for (let key in scores) {
      total += scores[key];
    }

    let level = "";
    if (total < 25) {
      level = "Mild";
    } else if (total < 40) {
      level = "Moderate";
    } else {
      level = "Severe";
    }

    let data = {
      email: email,
      username: username,
      phone: phone,
      all_scores: scores,
      total_score: total,
      name: slug,
      level: level,
    };

    axios
      .post(ASSESSMENT_RESULT, data)
      .then((response) => {
        if (response.status == 201) {
          setModal(true);
          // link: `/assessment/result, ${{ state: { data: response.data } }}`,
          setAssessmentResult(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="bg-gray-100 py-12">
        {!showResult ? (
          <div className="container mx-auto">
            <div className="mb-12 grid grid-cols-2 items-center justify-between md:h-28 lg:grid-cols-[1fr_4fr_1fr]">
              <button
                onClick={() => handleBack()}
                className="flex items-center justify-center justify-self-start rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold hover:bg-gray-200 md:rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="text-lg md:mr-2"
                />
                <span className="hidden md:block">Back</span>
              </button>

              <small className="justify-self-end font-semibold lg:hidden">
                {activeQuestion ? questions.indexOf(activeQuestion) + 1 : 1} /
                {questions ? questions.length : 0}
              </small>

              <h2 className="heading-primary col-span-2 mt-6 justify-self-center text-center text-xl font-bold text-primary-300 lg:col-span-1 lg:mt-0 xl:text-2xl">
                {activeQuestion ? activeQuestion : questions && questions[0]}
              </h2>

              <small className="hidden justify-self-end font-semibold lg:inline-block">
                {activeQuestion ? questions.indexOf(activeQuestion) + 1 : 1} /
                {questions ? questions.length : 0}
              </small>
            </div>

            <div className="mx-auto mb-10 grid grid-cols-2 justify-center gap-3 lg:mb-14 lg:w-[520px]">
              {answers.map((value, i) => {
                return (
                  <label
                    key={i}
                    className="flex cursor-pointer items-center rounded-lg border-2 bg-white py-4 pl-4 shadow-xl shadow-gray-300 transition-all hover:border-primary-300 hover:shadow-lg lg:px-10"
                  >
                    <input
                      type="radio"
                      name="answer"
                      id="answer"
                      checked={currentAnswer == value}
                      onChange={() => handleUpdateAnswer(value)}
                    />
                    <span className="ml-2 inline-block text-center text-sm font-semibold lg:text-base">
                      {value}
                    </span>
                  </label>
                );
              })}
            </div>

            <button
              onClick={() => handleContinue()}
              disabled={currentAnswer == ""}
              className="mx-auto flex items-center rounded-lg bg-gray-500 px-8 py-3.5 text-white shadow-md shadow-gray-50 disabled:cursor-not-allowed disabled:bg-primary-300 disabled:shadow-none lg:px-12"
            >
              <span className="mr-2 font-semibold">Continue</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        ) : (
          <div className="px-10">
            <h2 className="text-center text-lg font-bold text-gray-600 xl:text-3xl">
              Enter your details to see your results
            </h2>

            <form
              className="w-full p-4 md:mx-auto md:w-[520px] lg:p-12"
              autoComplete="off"
              onSubmit={formSubmit}
            >
              <label htmlFor="username">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Your Name"
                  className="form-input block w-full"
                />
              </label>
              <label htmlFor="phone">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Your Phone"
                  className="form-input block w-full"
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="form-input block w-full"
                />
              </label>
              <button
                type="submit"
                disabled={email == "" || username == "" || phone.length != 10}
                className="mx-auto mt-4 flex items-center rounded-lg bg-primary-300 px-8 py-2.5 text-white shadow-md shadow-primary-50 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:shadow-none lg:mt-8 lg:px-12 lg:py-3.5"
              >
                <span className="mr-2 text-sm font-semibold md:text-base">
                  Continue
                </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        )}

        <ThankYou
          status={modal}
          assessmentResult={assessmentResult}
          setStatus={setModal}
        />
      </section>
    </>
  );
}
