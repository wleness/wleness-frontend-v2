import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Components
import {
  dashboardQuotes,
  selfCareConcern,
  selfCareFeeling,
} from "../../data/dashboard";
import { Link, useNavigate } from "react-router-dom";
import { placeholderLandscape, placeholderPortrait } from "../../assets";
import UpcomingMeets from "../../components/list/UpcomingMeets";

export default function _UserDashboard({ token }) {
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

  let wleness_user = JSON.parse(localStorage.getItem("wleness_user"));
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (wleness_user.type == "expert") {
    useEffect(() => {
      navigate("/doctor/dashboard");
    }, []);
  }

  const [thoughts, setThoughts] = useState([]); // thoughts list
  const [newThought, setNewThought] = useState(""); // add new thought in list
  const [mood, setMood] = useState("");
  const [activeQuote, setActiveQuote] = useState(0);
  const [loading, setLoading] = useState(true); // set loading screen
  const [profileDetails, setProfileDetails] = useState({
    // set profile detals
    name: "",
    appointments: {},
  });

  // ======== Randome Quote ===========
  const setRandomQuote = () => {
    const quote = Math.floor(Math.random() * dashboardQuotes.length);
    setActiveQuote(quote);
  };
  useEffect(() => {
    setRandomQuote();
  }, []);

  // Handle thought form submit
  const handleThoughtSubmit = (event) => {
    event.preventDefault();

    if (newThought == "") return;

    setThoughts([...thoughts, newThought]);
    // empty new thought value after submission
    setNewThought("");
  };

  // Add New Thought
  const updateNewThought = (event) => {
    setNewThought(event.target.value);
  };

  // Delete Thought
  const deleteThought = (index) => {
    const newArray = [...thoughts];
    newArray.splice(index, 1);
    setThoughts(newArray);
  };

  // Handle Mood states
  const handleMood = (i) => {
    setMood(i);
    console.log(mood);
  };

  // ======== Get user appointments and details ===========
  // let login_type = localStorage.getItem("login_type");
  // let data, url;
  // if (login_type == "google") {
  //   data = localStorage.getItem("email");
  //   url = USER_APPOINTMENTS + "/" + data;
  // } else {
  //   data = localStorage.getItem("phone");
  //   url = USER_APPOINTMENTS + "/" + data;
  // }

  // useEffect(() => {
  //   // Make a GET request using Axios
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //     .then((response) => {
  //       if (response.status == 200) {
  //         setProfileDetails({
  //           name: response.data.name,
  //           appointments: response.data.appointments,
  //         });
  //         setLoading(false);
  //         console.log(response.data.message);
  //         localStorage.setItem("username", response.data.name);
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error("Error fetching doctor details:", error);
  //     });
  // }, []);

  // if (loading) {
  //   return <div className="mb-5 text-center">Loading...</div>;
  // }

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
        <div className="mb-5">
          <span className="mb-2 inline-block text-lg font-bold">
            How you feel today...
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {selfCareFeeling.map((value, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleMood(value[0])}
                  className={`relative grid cursor-pointer rounded-xl px-3 py-1 hover:bg-primary-50/60 ${
                    mood == value[0] ? " bg-primary-50/60 " : ""
                  }`}
                >
                  <img
                    className="mx-auto w-fit text-center text-3xl font-bold"
                    src={value[1]}
                  />
                  <span className="mb-1 text-center font-semibold">
                    {value[0]}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="my-7">
            <blockquote
              style={{ background: "rgb(0, 217, 245, 12%)" }}
              className="mx-auto rounded-lg p-5 text-center lg:w-[640px]"
            >
              <q className="text-lg">{dashboardQuotes[activeQuote][0]}</q>
              <h4 className="text-xl font-bold text-sky-500">
                {dashboardQuotes[activeQuote][1]}
              </h4>
            </blockquote>
          </div>
        </div>

        {/* Today's concern */}
        <div className="mb-5">
          <div className="mb-4 grid">
            <span className="text-lg font-bold">
              Pick your today's concern...
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {selfCareConcern.map((value, i) => {
              return (
                <Link
                  to={value[2]}
                  key={i}
                  className={
                    "relative grid rounded-xl px-2 py-2 lg:px-5 lg:py-4 " +
                    value[1]
                  }
                >
                  <span className="mb-1 text-center font-semibold">
                    {value[0]}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Today's Compilation */}
        <div>
          <h3 className="pb-4 pt-2 text-xl font-bold">
            Today's compilation for you
          </h3>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="rounded-xl border-[1px] border-slate-100 p-5 shadow-lg shadow-slate-300 lg:w-2/5 lg:p-8">
              <h4 className="mb-4 text-xl font-semibold">Today's Article</h4>
              <p className="mb-6 text-sm font-semibold">
                Unraveling the Grip of Anxiety: Insights and Strategies to
                Navigate Life's Challenges with Resilience and Inner Calm.
              </p>
              <div className="flex justify-between text-sm font-semibold text-blue-500">
                <span>5 Min</span>
                <span>Dr. Sheena Bajaj</span>
              </div>
            </div>

            <div className="relative mx-auto w-fit lg:w-1/5">
              <h4 className="absolute left-3 top-3 font-bold text-white">
                Stress
              </h4>
              <img
                src={placeholderPortrait}
                alt=""
                className="lg:h-full lg:w-full"
              />
            </div>

            <div className="relative lg:w-2/5">
              <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                <h4 className="mb-2 font-bold">Empowering Self-Assurance</h4>
                <p className="text-sm font-medium">
                  Nurturing Lasting Confidence through Purposeful Growth
                </p>
              </div>
              <img
                src={placeholderLandscape}
                alt=""
                className="rounded-xl object-cover lg:h-full lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 lg:w-[35%] lg:p-4">
        <div className="mb-6 rounded-2xl bg-yellow-300/25 p-4">
          <h4 className="font-bold">Write Your Thoughts...</h4>
          {thoughts.map((value, i) => {
            return (
              <p
                key={i}
                className="group flex justify-between border-b-[1px] border-slate-300 p-2 text-sm font-semibold outline-yellow-300"
              >
                <span>{value}</span>
                <FontAwesomeIcon
                  className="hidden cursor-pointer text-red-500 hover:text-red-600 group-hover:block"
                  icon={faTrash}
                  onClick={() => deleteThought(i)}
                />
              </p>
            );
          })}

          <form onSubmit={handleThoughtSubmit}>
            <input
              name="thought"
              value={newThought}
              onChange={updateNewThought}
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

        <div>
          <h5 className="flex items-center justify-between">
            <span className="font-bold">Upcoming Events</span>
            <span className="cursor-pointer rounded-full px-2 py-0.5 text-sm font-semibold text-blue-500 transition-all">
              View all
            </span>
          </h5>

          <div className="space-y-3 py-4">
            <UpcomingMeets />
            <UpcomingMeets />
            <UpcomingMeets />
            <UpcomingMeets />
          </div>
        </div>
      </div>
    </section>
  );
}
