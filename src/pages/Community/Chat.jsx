import React, { useEffect, useState } from "react";
import { profile } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPaperclip,
  faSearch,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const comments = [
  {
    comment: "Hi",
    time: "12:00 PM",
  },
  {
    comment: "How are you?",
    time: "12:01 PM",
  },
  {
    comment: "I am not fine!",
    time: "12:02 PM",
  },
  {
    comment: "this is sample comment",
    time: "12:02 PM",
  },
];

export default function Chat({ token }) {
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token == null || token == "" || token == undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/login", {
        state: {
          successMessage: "Please login to continue to dashboard",
        },
      });
    }, []);
  }

  const [sendMessage, setSendMessage] = useState([]);

  return (
    <section className="h-full gap-5 lg:flex">
      <div className="flex flex-col gap-5 lg:w-[65%] lg:flex-row">
        {/* Groups and people */}
        <div className="grid w-fit">
          <div className="mb-2 flex flex-col lg:mb-5 lg:items-center">
            <h4 className="mb-2 font-bold text-primary-400">Groups</h4>
            <ul className="flex lg:flex-col">
              {[1, 2, 3, 4, 5].map((value, i) => {
                return (
                  <li key={i}>
                    <img
                      src={profile}
                      alt=""
                      className="mb-1 h-10 w-10 rounded-full object-cover"
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col lg:items-center">
            <h4 className="mb-2 font-bold text-primary-400">People</h4>
            <ul className="flex lg:flex-col">
              {[1, 2, 3, 4, 5].map((value, i) => {
                return (
                  <li key={i}>
                    <img
                      src={profile}
                      alt=""
                      className="mb-1 h-10 w-10 rounded-full object-cover"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Chatbox */}
        <div className="relative h-full w-full rounded-3xl border-slate-100 shadow-slate-300 md:border-[1px] md:shadow-xl">
          <div>
            <div className="flex items-center justify-between py-3 md:px-4">
              <figure className="flex items-start">
                <img
                  src={profile}
                  className="mr-2 h-8 w-8 rounded-full object-cover"
                  alt=""
                />
                <figcaption className="flex flex-col">
                  <h6 className="text-sm font-semibold">Anger Issues</h6>
                  <span className="text-xs">18 Participants</span>
                </figcaption>
              </figure>

              {/* <span>
                <FontAwesomeIcon className="text-slate-300" icon={faSearch} />
              </span> */}
            </div>

            <hr />

            <div className="h-[460px] overflow-y-scroll md:px-4">
              {/* Left Comment */}
              <div className="mt-2 flex items-start">
                <img src={profile} alt="" className="mr-2 w-8 rounded-full" />
                <div className="flex flex-col items-start space-y-1">
                  {comments.map((value, i) => {
                    return (
                      <div key={i}>
                        <span className="mb-[2px] block rounded-xl rounded-tl-none bg-primary-50 px-2 py-1.5 text-sm font-semibold">
                          {value.comment}
                        </span>
                        <span className="block text-left text-xs font-medium">
                          {value.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Comments */}
              <div className="mt-4 flex items-start justify-end">
                <div className="flex flex-col items-end space-y-1">
                  {comments.map((value, i) => {
                    return (
                      <div key={i}>
                        <span className="mb-[2px] block rounded-xl rounded-tr-none bg-primary-50 px-2 py-1.5 text-sm font-semibold">
                          {value.comment}
                        </span>
                        <span className="block text-right text-xs font-medium">
                          {value.time}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <img src={profile} alt="" className="ml-2 w-8 rounded-full" />
              </div>

              {/* Left Comment */}
              <div className="mt-2 flex items-start">
                <img src={profile} alt="" className="mr-2 w-8 rounded-full" />
                <div className="flex flex-col items-start space-y-1">
                  {comments.map((value, i) => {
                    return (
                      <div key={i}>
                        <span className="mb-[2px] block rounded-xl rounded-tl-none bg-primary-50 px-2 py-1.5 text-sm font-semibold">
                          {value.comment}
                        </span>
                        <span className="block text-left text-xs font-medium">
                          {value.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Comment box */}
            <div className="absolute bottom-0 left-0 flex w-full justify-items-stretch border-t-2 border-slate-200 bg-white px-5 md:rounded-b-3xl lg:px-6">
              <button className="grid place-items-center px-3 py-2 transition-colors hover:text-slate-400">
                <FontAwesomeIcon icon={faSmile} />
              </button>
              <button className="grid place-items-center px-3 py-2 transition-colors hover:text-slate-400">
                <FontAwesomeIcon icon={faPaperclip} />
              </button>

              <form onSubmit={sendMessage} className="flex w-full">
                <label htmlFor="comment" className="w-full">
                  <input
                    type="text"
                    name="comment"
                    className="block w-full px-4 py-3 outline-none"
                    id="comment"
                    placeholder="Type a message here.."
                  />
                </label>

                <button className="grid place-items-center px-3 py-2 transition-colors hover:text-slate-400">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side bar */}
      <div className="lg:w-[35%] lg:p-4"></div>
    </section>
  );
}
