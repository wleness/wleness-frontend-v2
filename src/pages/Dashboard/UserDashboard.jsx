import React, { useState, useEffect } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AngryIcon,
  HappyIcon,
  EmotionalIcon,
  NeutralIcon,
  OverwhelmingIcon,
  SadIcon,
  ArrowVector,
  Spark,
  Sunflower,
  Album,
} from "../../assets";
import axios from "axios";
import { ADD_GOAL_URI, ADD_JOURNAL_URI, ADD_TODO_URI } from "../../data/api";
import useLogout from "../../components/Auth/useLogout";

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const moodsIcons = [
  { label: "Happy", icon: HappyIcon },
  { label: "Neutral", icon: NeutralIcon },
  { label: "Emotional", icon: EmotionalIcon },
  { label: "Sad", icon: SadIcon },
  { label: "Angry", icon: AngryIcon },
  { label: "Overwhelming", icon: OverwhelmingIcon },
];

export default function UserDashboard({ token }) {
  const { logout } = useLogout();

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [journals, setJournals] = useState([]);
  const [newJournal, setNewJournal] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const [currentDate, setCurrentDate] = useState("");
  const [selectedMood, setSelectedMood] = useState("Happy");

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  // ================== Set current day ==================
  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDay();
    setSelectedDay(days[day]);
  }, []);

  // ================== To-do List ==================
  // Fetch users todos
  useEffect(() => {
    axios
      .get(ADD_TODO_URI, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((reponse) => {
        console.log(reponse.data.todos);

        if (reponse.data.status == "success") {
          setTodos(reponse.data.todos);
        }
      });

    return () => {};
  }, []);

  // Handle add todo
  const handleTodo = (e) => {
    e.preventDefault();

    if (newTodo == "") {
      return null;
    }

    axios
      .post(
        ADD_TODO_URI,
        {
          task: newTodo,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      )
      .then((response) => {
        if (response.data.status == "success") {
          setTodos(response.data.todos);
          setNewTodo("");
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          logout();
        } else {
          console.log(error);
        }
      });
  };

  // Handle add todo
  const deleteTodo = (id) => {
    const config = {
      method: "delete",
      url: ADD_TODO_URI,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: id,
      },
    };

    axios(config)
      .then((response) => {
        if (response.data.status == "success") {
          setTodos(response.data.todos);
          setNewTodo("");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 401) {
          logout();
        } else {
          console.log(error);
        }
      });
  };

  // ================== Handle Goal Planning Actions ==================
  // Fetch user goals
  useEffect(() => {
    axios
      .get(ADD_GOAL_URI, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((reponse) => {
        if (reponse.data.status == "success") {
          setGoals(reponse.data.goals);
        }
      });

    return () => {};
  }, []);

  // Handle adding goals
  const handleGoals = (e) => {
    e.preventDefault();

    if (newGoal == "") {
      return null;
    }

    axios
      .post(
        ADD_GOAL_URI,
        {
          plan: newGoal,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      )
      .then((response) => {
        if (response.data.status == "success") {
          setGoals(response.data.goals);
          setNewGoal("");
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          logout();
        } else {
          console.log(error);
        }
      });
  };

  // Handle delete goals
  const deleteGoal = (id) => {
    const config = {
      method: "delete",
      url: ADD_GOAL_URI,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: id,
      },
    };

    axios(config)
      .then((response) => {
        if (response.data.status == "success") {
          setGoals(response.data.goals);
          setNewGoal("");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 401) {
          logout();
        } else {
          console.log(error);
        }
      });
  };

  // ================== Handle Journal Actions ==================
  // Fetch user goals
  useEffect(() => {
    axios
      .get(ADD_JOURNAL_URI, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((reponse) => {
        if (reponse.data.status == "success") {
          setJournals(reponse.data.journals);
        }
      });

    return () => {};
  }, []);

  // Handle adding goals
  const handleJournals = (e) => {
    e.preventDefault();

    if (newJournal == "") {
      return null;
    }

    axios
      .post(
        ADD_JOURNAL_URI,
        {
          desc: newJournal,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      )
      .then((response) => {
        if (response.data.status == "success") {
          setJournals(response.data.journals);
          setNewJournal("");
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          logout();
        } else {
          console.log(error);
        }
      });
  };

  // Handle delete goals
  const deleteJournal = (id) => {
    const config = {
      method: "delete",
      url: ADD_JOURNAL_URI,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: id,
      },
    };

    axios(config)
      .then((response) => {
        if (response.data.status == "success") {
          setJournals(response.data.journals);
          setNewJournal("");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 401) {
          logout();
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      <div className="md:flex">
        {/* To-do Section */}
        <div className="mt-2 md:mt-0 lg:w-[30%]">
          <h2 className="pb-4 text-lg font-bold lg:text-2xl">To-Do List:</h2>
          <div className="rounded-lg bg-teal-100 py-6 pr-10 shadow-sm">
            <ul className="pl-4">
              {todos.map((todo) => (
                <li
                  key={todo[0]}
                  className="group flex items-center justify-between"
                >
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500"
                      value={todo[2]}
                    />
                    <span className="ml-2 text-sm font-semibold lg:text-base">
                      {todo[1]}
                    </span>
                  </label>
                  <FontAwesomeIcon
                    className="ml-4 hidden cursor-pointer text-red-500 hover:text-red-600 group-hover:block"
                    icon={faTrash}
                    onClick={() => deleteTodo(todo[0])}
                  />
                </li>
              ))}
            </ul>
            <form className="mt-4 flex items-center pl-3" onSubmit={handleTodo}>
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add New Task"
                className="w-full border-b-2 border-slate-300 bg-teal-100 p-2  text-sm font-medium outline-yellow-300"
                style={{ outline: "none" }}
              />
              <button className="ml-2 rounded-lg bg-primary-100 px-4 py-1.5 text-xs font-medium text-white">
                Add
              </button>
            </form>
          </div>
        </div>

        <div className="md:ml-12 md:w-[75%]">
          <h2 className="mt-4 pb-4 text-xl font-bold md:mt-0 lg:text-2xl">
            Mood Tracker:
          </h2>
          <div className="grid w-full grid-cols-3 items-center justify-center rounded-lg bg-teal-100 p-3 text-center md:pt-4 lg:flex lg:gap-12 lg:pl-7">
            {moodsIcons.map((mood, index) => (
              <label key={index} className="flex flex-col items-center">
                <input
                  type="radio"
                  value={mood.label}
                  checked={selectedMood === mood.label}
                  onChange={handleMoodChange}
                  className="hidden"
                />
                <img
                  src={mood.icon}
                  className="h-8 w-8 cursor-pointer object-contain xl:h-12 xl:w-12"
                  alt={mood.label}
                />
                <h2
                  className={`py-2 text-sm font-semibold 2xl:text-lg ${
                    selectedMood === mood.label ? "text-teal-500" : ""
                  }`}
                >
                  {mood.label}
                </h2>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* THIRED-SECTION */}

      <div className=" mt-1 md:mt-4">
        <div className=" grid-cols-1 md:flex ">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="  md:pb-2 ">
              <h2 className=" py-4 text-xl font-bold lg:text-2xl">
                Journalling:
              </h2>
              {/* <div className="  lg:p-4"> */}
              <div className="rounded-lg bg-yellow-300/25 p-4 md:mb-6">
                {/* <h4 className="font-bold">Write Your Thoughts...</h4> */}
                {journals.map((value) => {
                  return (
                    <p
                      key={value[0]}
                      className="group flex justify-between border-b-[1px] border-slate-300 p-2 text-sm font-semibold outline-yellow-300"
                    >
                      <span>{value[1]}</span>
                      <FontAwesomeIcon
                        className="hidden cursor-pointer text-red-500 hover:text-red-600 group-hover:block"
                        icon={faTrash}
                        onClick={() => deleteJournal(value[0])}
                      />
                    </p>
                  );
                })}

                <form onSubmit={handleJournals}>
                  <input
                    name="thought"
                    value={newJournal}
                    onChange={(e) => setNewJournal(e.target.value)}
                    placeholder="Add New Thought"
                    className="w-full border-b-[1px] border-slate-300 bg-transparent p-2 text-sm font-medium outline-yellow-300"
                  />
                  <div className="mt-2 text-right">
                    <button
                      type="submit"
                      className="rounded-lg bg-primary-100 px-4 py-1.5 text-xs font-medium text-white"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="w-full md:w-1/2 ">
            <h2 className="py-4 text-xl font-bold md:py-4 lg:text-2xl">
              Goal Planner:
            </h2>
            <div className="rounded-lg bg-yellow-300/25 p-4">
              <ul className="ml-4 list-disc space-y-1">
                {goals.map((goal) => (
                  <li
                    key={goal[0]}
                    className="group flex items-center font-semibold"
                  >
                    <img
                      src={ArrowVector}
                      alt="Arrow Icon"
                      className="mr-2 h-4 w-4"
                    />
                    {goal[1]}
                    <div className="ml-auto flex text-end">
                      {/* <div
                        className="cursor-pointer text-teal-500 hover:text-teal-600"
                        onClick={() => editGoal(index)}
                      >
                        Edit
                      </div> */}
                      <FontAwesomeIcon
                        className="ml-2 hidden cursor-pointer text-red-500 hover:text-red-600 group-hover:block"
                        icon={faTrash}
                        onClick={() => deleteGoal(goal[0])}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleGoals}>
                <input
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  placeholder="Add New Goal"
                  className="w-full border-b-[1px] border-slate-300 bg-transparent p-2 text-sm font-medium outline-yellow-300"
                />
                <div className="mt-2 text-right">
                  <button
                    type="submit"
                    className="rounded-lg bg-primary-100 px-4 py-1.5 text-xs font-medium text-white"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* last section */}
      <div className="grid-cols-1 md:flex">
        <div className="w-full md:w-1/2 md:pr-8">
          <h2 className="py-4 text-xl font-bold md:py-4 lg:text-2xl">
            Your Progress:
          </h2>
          <div className="rounded-lg bg-teal-100 p-2 text-end">
            <div className=" flex">
              <div className="ml-3 flex items-center  md:ml-7">
                {/* {selectedDay === "sunday" ? ( */}
                <img
                  src={Sunflower}
                  alt="Sunflower"
                  className="mr-2 h-12 w-12"
                />
                {/* ) : (
                    <div className="h-12 w-12"></div>
                  )} */}
                <h1 className="text-5xl font-bold text-teal-500">1</h1>
              </div>

              <div className="m-2">
                <h2 className="text-start font-bold">Mindful day</h2>
                <p className="font-medium">{currentDate}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 lg:gap-8">
              {days.map((day) => (
                <div className="text-center" key={day}>
                  <input
                    type="radio"
                    id={day}
                    name="day"
                    className="h-4 w-4 border-teal-500 bg-white"
                    checked={selectedDay === day}
                    onChange={() => setSelectedDay(day)}
                  />
                  <label
                    htmlFor={day}
                    className="mx-auto mb-1 block cursor-pointer text-sm font-bold xl:text-base"
                  >
                    {day.charAt(0).toUpperCase()}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 w-full md:w-1/2">
          <h2 className="my-4 pb-2 text-xl font-bold md:mt-2 lg:text-2xl">
            Upcoming Events:
          </h2>
          <div className="rounded-lg bg-teal-100  py-3 text-end md:py-5">
            {/* <h3 className="font-semibold text-gray-">Oct 19 - Oct 25</h3> */}
            <div className="flex items-center justify-center text-center">
              <div className=" border-r border-slate-300 pr-4">
                <div className="flex">
                  <div>
                    <img src={Spark} className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-teal-500">1</span>
                    <span className="m-2 font-bold">Days</span>
                  </div>
                </div>
                <p className="font-bold">Current Streak</p>
              </div>
              <div className="pl-4">
                <div className="flex">
                  <div>
                    <img src={Album} className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-teal-500">0</span>
                    <span className="m-2 font-bold">Days</span>
                  </div>
                </div>
                <p className="font-bold">Therapies complete</p>
              </div>
            </div>

            <h2 className="py-2 text-center font-bold">
              Best streak{" "}
              <span className="font-bold text-teal-400"> 21 days</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
