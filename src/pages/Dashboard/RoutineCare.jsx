import React, { useEffect, useState } from "react";
import { faRightLong, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoutineCareChats } from "../../data/dashboard";
import { iconDay, iconNight } from "../../assets";
import ShowMoreText from "../../components/Cards/ShowMoreText";
import { useNavigate } from "react-router-dom";

export default function RoutineCare({ token }) {
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token == null || token == "" || token == undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/login", {
        state: {
          successMessage: "Please Login",
        },
      });
    }, []);
    return null;
  }

  const [morningRoutine, setMorningRoutine] = useState([]);
  const [eveningRoutine, setEveningRoutine] = useState([]);
  const [morningTask, setMorningTask] = useState("");
  const [eveningTask, setEveningTask] = useState("");

  // ======== Morning ========
  // Add Morning Task
  const handleMorningTask = (event) => {
    event.preventDefault();

    if (morningTask == "") return;

    setMorningRoutine([...morningRoutine, morningTask]);
    // Empty task
    setMorningTask("");
  };

  // Update evening task value
  const updateMorningTask = (event) => {
    setMorningTask(event.target.value);
  };

  // Delete Thought
  const deleteMorningTask = (index) => {
    const newArray = [...morningRoutine];
    newArray.splice(index, 1);
    setMorningRoutine(newArray);
  };

  // ======== Evening ========
  // Add Evening Task
  const handleEveningTask = (event) => {
    event.preventDefault();

    if (eveningTask == "") return;

    setEveningRoutine([...eveningRoutine, eveningTask]);
    // Empty task
    setEveningTask("");
  };

  // Update evening task value
  const updateEveningTask = (event) => {
    setEveningTask(event.target.value);
  };

  // Delete Thought
  const deleteEveningTask = (index) => {
    const newArray = [...eveningRoutine];
    newArray.splice(index, 1);
    setEveningRoutine(newArray);
  };

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <section className="gap-5 lg:flex">
      <div className="-mt-10 lg:w-[65%]">
        <div className="mb-2">
          <h1>
            <span className="text-2xl font-medium">Good Morning </span>
            <span className="text-3xl font-bold text-[#0DCCF6]">
              {userInfo.name}
            </span>
          </h1>
          <p className="font-medium text-slate-600">Today is a Good Day.</p>
        </div>

        {/* How you feel */}
        <div className="mb-5 mt-6 space-y-6">
          {RoutineCareChats.map((value, i) => {
            return <ShowMoreText key={i} data={value} />;
          })}
        </div>
      </div>
      <div className="lg:w-[35%] lg:p-4">
        <div className="relative mb-6 rounded-2xl bg-[#C0F1F8] p-6">
          <h2 className="mb-2 font-semibold">Morning</h2>
          <ul className="space-y-2 font-semibold">
            {morningRoutine.map((value, i) => {
              return (
                <li key={i} className="group flex justify-between">
                  <div>
                    <span className="mr-2 text-sky-500">
                      <FontAwesomeIcon icon={faRightLong} />
                    </span>
                    <span>{value}</span>
                  </div>
                  <FontAwesomeIcon
                    className="hidden cursor-pointer text-red-500 hover:text-red-600 group-hover:block"
                    icon={faTrash}
                    onClick={() => deleteMorningTask(i)}
                  />
                </li>
              );
            })}
            <form onSubmit={handleMorningTask}>
              <input
                name="morning_task"
                value={morningTask}
                onChange={updateMorningTask}
                placeholder="Add New Task"
                className="w-full border-b-[1px] border-slate-300 bg-transparent p-2 text-sm font-medium outline-slate-600"
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
          </ul>

          <img src={iconDay} alt="" className="absolute -right-5 -top-6 w-20" />
        </div>

        <div className="relative mb-10 rounded-2xl bg-[#C0F1F8] p-6">
          <h2 className="mb-2 font-semibold">Evening</h2>
          <ul className="space-y-2 font-semibold">
            {eveningRoutine.map((value, i) => {
              return (
                <li key={i} className="group flex justify-between">
                  <div>
                    <span className="mr-2 text-sky-500">
                      <FontAwesomeIcon icon={faRightLong} />
                    </span>
                    <span>{value}</span>
                  </div>
                  <FontAwesomeIcon
                    className="hidden cursor-pointer text-red-500 hover:text-red-600 group-hover:block"
                    icon={faTrash}
                    onClick={() => deleteEveningTask(i)}
                  />
                </li>
              );
            })}
            <form onSubmit={handleEveningTask}>
              <input
                name="evening_task"
                value={eveningTask}
                onChange={updateEveningTask}
                placeholder="Add New Task"
                className="w-full border-b-[1px] border-slate-300 bg-transparent p-2 text-sm font-medium outline-slate-600"
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
          </ul>

          <img
            src={iconNight}
            alt=""
            className="absolute -right-5 -top-6 w-20"
          />
        </div>
      </div>
    </section>
  );
}
