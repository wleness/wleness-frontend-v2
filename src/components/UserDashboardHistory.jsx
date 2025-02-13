import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowVector, JournallingSmallPage } from "../assets";
import MoodCalendar from "./MoodCalendar";
import UserChart from "./UserChart";
import axios from "axios";
import { USER_HISTORY_URI } from "../data/api";
import { JournalHistoryModal } from "./Modals/JournalHistoryModal";

// ==========todo========================
function ToDoItem({ label }) {
  return (
    <li className=" flex  items-center justify-between py-2  pr-16 ">
      <label className="inline-flex items-center">
        <input type="checkbox" className="form-checkbox text-green-500" />
        <span className="ml-2 text-sm font-semibold lg:text-base">{label}</span>
      </label>
    </li>
  );
}

export function ToDoList({ day, date, time }) {
  return (
    <main className=" w-full md:w-1/4">
      <div className="m-2 mt-2 md:mt-0">
        <div className="rounded-lg bg-teal-100 py-6 shadow-sm">
          <ul className="pl-4">
            <ToDoItem label="30 min book reading" />
            <ToDoItem label="45 min exercise" />
            {/* Add more items here */}
          </ul>
        </div>
        <div className="text-xs text-gray-500">
          {day} - {date} - {time}
        </div>
      </div>
    </main>
  );
}

function GoalItem({ label }) {
  return (
    <li className="flex items-center text-lg font-semibold">
      <img src={ArrowVector} alt="Arrow Icon" className="mr-2 h-4 w-4" />
      <div className="flex text-start">{label}</div>
    </li>
  );
}

export function GoalPlanner({ day, date, time }) {
  return (
    <div className=" mt-4 w-full md:w-1/4">
      <div className="rounded-lg bg-yellow-300/25 p-4">
        <ul className="ml-4 list-disc">
          <GoalItem label="Cooking" />
          <GoalItem label="Family Call" />
          {/* Add more goal items here */}
        </ul>
      </div>
      <div className="text-xs text-gray-500">
        {day} - {date} - {time}
      </div>
    </div>
  );
}

export default function UserDashboardHistory({ token }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [journals, setJournals] = useState(null);
  const [goals, setGoals] = useState(null);
  const [journalModal, setJournalModal] = useState(false);
  const openModal = () => {
    setJournalModal(true);
  };

  const closeModal = () => {
    setJournalModal(false);
  };

  const todoListData = [
    { day: "Monday", date: "2023-10-25", time: "10:00 AM" },
    { day: "Tuesday", date: "2023-10-26", time: "3:30 PM" },
    { day: "Wednesday", date: "2023-10-27", time: "2:00 PM" },
    { day: "Thursday", date: "2023-10-28", time: "4:45 PM" },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % todoListData.length);
  };

  // Fetch user history
  useEffect(() => {
    axios
      .get(USER_HISTORY_URI, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((reponse) => {
        if (reponse.data.status == "success") {
          setGoals(reponse.data.goals);
          setJournals(reponse.data.journals);
        }
      });

    return () => {};
  }, []);

  return (
    <>
      {/* ==================== Journalling:============================*/}
      <div>
        {!journals ? (
          <div>
            <h2 className="mb-1 text-2xl font-bold">No Journals History</h2>
          </div>
        ) : (
          <>
            <div>
              <h2 className="mb-2 text-2xl font-bold">Journalings</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {journals.map((value, i) => (
                <div key={i}>
                  <div>
                    <img
                      src={JournallingSmallPage}
                      alt="Journal Page"
                      onClick={() => openModal()}
                      className="mx-auto cursor-pointer"
                    />
                  </div>
                  <div className="px-6 text-xs font-medium text-gray-500">
                    {value.date}
                  </div>
                </div>
              ))}
              <div className="my-auto text-center">
                <button onClick={handleNext}>
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ==================== Goal-Planner:============================*/}
      <div>
        <div>
          {!goals ? (
            <h2 className="py-4 text-xl font-bold lg:text-2xl">
              No Goal Planning History
            </h2>
          ) : (
            <>
              <h2 className="py-4 text-xl font-bold lg:text-2xl">
                Goal Plannings
              </h2>
              <div className="grid-cols-1 gap-3 md:flex">
                {goals.map((value, i) => {
                  return (
                    <div key={i} className="mt-2 w-full md:w-1/4">
                      <div className="mb-2 rounded-lg bg-yellow-300/25 px-2 py-4">
                        <ul className="ml-4 list-disc">
                          {value.goals.map((element, j) => (
                            <li
                              key={j}
                              className="flex items-center font-semibold"
                            >
                              <img
                                src={ArrowVector}
                                alt="Arrow Icon"
                                className="mr-2 h-3 w-3"
                              />
                              <div className="text-start text-sm">
                                <p>{element}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-6 text-center text-xs font-medium text-gray-500">
                        {value.date}
                      </div>
                    </div>
                  );
                })}

                <div className="my-auto text-center">
                  <button onClick={handleNext}>
                    <FontAwesomeIcon icon={faCaretRight} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className=" grid-cols-1 md:flex ">
        <div className="w-full md:w-1/2 ">
          <h2 className="mb-2 mt-4 text-2xl font-bold">Your Progress:</h2>
          <div className="items-center justify-center text-center">
            <h2 className="text-xl font-bold text-red-500">
              Total No: of Days - 31
            </h2>
            <UserChart />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="mb-2 mt-4 pb-8 text-2xl font-bold">Mood record:</h2>
          <MoodCalendar />
        </div>
      </div>

      <JournalHistoryModal
        isOpen={journalModal}
        closeModal={() => closeModal()}
      />
    </>
  );
}
