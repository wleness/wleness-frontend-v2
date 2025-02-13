import {
  faPaperPlane,
  faPaperclip,
  faSearch,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { doctorAppointment } from "../../assets";
import LeftComment from "../../components/list/LeftComment";
import RightComment from "../../components/list/RIghtComment";

export default function Chatbox() {
  const [userComments, setUserComments] = useState([{ comment: "", time: "" }]);

  const sendMessage = (e) => {
    e.preventDefault();

    const date = new Date();
    const currentDate = date.getDate();
    const currentTime =
      String(date.getHours()) + ":" + String(date.getMinutes());

    setUserComments([
      ...userComments,
      { comment: e.target[0].value, time: currentTime },
    ]);
  };

  return (
    <>
      <main className="lg:flex">
        <aside className="fixed bottom-0 left-0 top-0 w-1/5 bg-primary-50 p-6">
          <figure className="mx-auto w-52">
            <div>
              <img src={doctorAppointment} alt="" className="w-full" />
            </div>
            <figcaption>
              <h2 className="text-2xl font-bold">Dr. Jenny</h2>
              <h4 className="text-lg font-semibold">6+ years of experience</h4>
              <div className="text-sm">
                <p>
                  <span className="font-semibold">Expertise: </span>
                  <span className="font-medium">Yoga, Work-life</span>
                </p>
                <p>
                  <span className="font-semibold">Speaks: </span>
                  <span className="font-medium">English, German</span>
                </p>
              </div>
            </figcaption>
          </figure>
        </aside>

        <section className="ml-[20%] mt-14 pb-14 lg:w-4/5 lg:px-6">
          <header className="fixed left-[20%] top-0 flex w-full justify-between border-b-[1px] border-b-slate-300 bg-white px-4 py-2">
            <div className="flex items-center">
              <img src={doctorAppointment} alt="" className="mr-2 w-10" />
              <span className="font-semibold">Garima</span>
            </div>

            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </header>

          {/* Chats */}
          <section>
            {/* Left chat */}
            <LeftComment
              image={doctorAppointment}
              comments={[
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
              ]}
            />

            {/* Right chat */}
            <RightComment
              image={doctorAppointment}
              comments={[
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
              ]}
            />
            {/* Left chat */}
            <LeftComment
              image={doctorAppointment}
              comments={[
                {
                  comment: "Hi",
                  time: "12:00 PM",
                },
              ]}
            />

            {/* Right chat */}
            <RightComment
              image={doctorAppointment}
              comments={[
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
              ]}
            />

            {/* Right chat */}
            <RightComment
              image={doctorAppointment}
              comments={[
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
              ]}
            />
            {/* Left chat */}
            <LeftComment
              image={doctorAppointment}
              comments={[
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
              ]}
            />
          </section>

          {/* Comment box */}
          <div className="fixed bottom-0 left-[20%] flex w-4/5 justify-items-stretch border-t-2 border-slate-200 bg-white  px-4 lg:px-6">
            <button className="grid place-items-center px-3 py-2">
              <FontAwesomeIcon icon={faSmile} />
            </button>
            <button className="grid place-items-center px-3 py-2">
              <FontAwesomeIcon icon={faPaperclip} />
            </button>

            <form onSubmit={sendMessage} className="flex w-full">
              <label htmlFor="comment" className="w-full">
                <input
                  type="text"
                  name="comment"
                  className="block w-full px-4 py-2.5 outline-none"
                  id="comment"
                  placeholder="Type a message here.."
                />
              </label>

              <button className="grid place-items-center px-3 py-2">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
