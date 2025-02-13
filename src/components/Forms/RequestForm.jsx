import React, { useState } from "react";
import axios from "axios";
import { CONTACT_URI } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function RequestForm() {
  const [formInfo, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const navigate = useNavigate();

  // Set alert message
  const setMessage = (status, message) => {
    setSuccessMessage({
      status: status,
      message: message,
    });
  };

  // Change form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate if form is filled
    if (
      formInfo["name"] &&
      formInfo["email"] &&
      formInfo["number"] &&
      formInfo["message"]
    ) {
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      try {
        const response = await axios.post(CONTACT_URI, formData);
        setMessage(response.data.status, response.data.message);

        // Empty form after successfully sending data
        if (response.data.status == "success") {
          setFormData({
            name: "",
            email: "",
            number: "",
            message: "",
          });
          navigate("/thank-you");
        }
      } catch (error) {
        console.error("Error sending data:", error);
        setMessage("error", "Internal Server Error! Please Try Again later");
      }
    } else {
      setMessage("error", "Please fill your details!");
    }
  };

  return (
    <section className="p-4 lg:my-14 lg:p-0 xl:mb-20 xl:mt-16">
      <div className="container mx-auto mb-6 grid gap-x-5 rounded-3xl border-2 border-slate-100 bg-white !p-2 shadow-xl md:grid-cols-[2fr_3fr] lg:!p-4">
        <div className="mb-6 rounded-2xl bg-primary-300 px-6 py-8 lg:mb-0 lg:px-12 lg:py-20">
          <h2 className="mb-1 text-xl font-bold text-white lg:text-2xl">
            Contact Information
          </h2>
          <p className="mb-8 grid font-semibold text-teal-100">
            <span>
              Worried about your
              <strong className="text-white"> mental health?</strong>
            </span>
            <span>
              We are here to
              <strong className="text-white"> help you! </strong>
            </span>
          </p>

          <div className="space-y-8">
            <div className="flex gap-x-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="mt-1 text-sm text-white"
              />
              <div className="flex flex-col font-semibold text-teal-100">
                <span>+91 9147047488</span>
              </div>
            </div>

            <div className="flex gap-x-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mt-1 text-sm text-white"
              />
              <div className="flex flex-col font-semibold text-teal-100">
                <span>hello@wleness.com</span>
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              <FontAwesomeIcon
                icon={faLocationPin}
                className="text-sm text-white"
              />
              <div className="flex flex-col font-semibold text-teal-100">
                <span>
                  Spring House, Plot 2, Sec 43, Golf Course Road, Gurgaon,
                  122002
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-auto lg:w-4/5">
            <h2 className="mb-4 text-center font-quicksand text-2xl font-bold leading-tight tracking-tight lg:mb-8">
              Need a <span className="heading-primary">Free Consultation?</span>
            </h2>
            <form
              className="flex flex-col space-y-6 px-2 pb-4 md:pb-0 md:pt-0 lg:px-0"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={formInfo.name}
                    onChange={handleChange}
                    name="name"
                    className="block w-full border-b-2 border-slate-200 py-2 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Your Number</label>
                  <input
                    type="tel" // Use "tel" for phone numbers
                    placeholder="Your Number"
                    name="number"
                    value={formInfo.number}
                    onChange={handleChange}
                    className="block w-full border-b-2 border-slate-200 py-2 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold">Your Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formInfo.email}
                  onChange={handleChange}
                  name="email"
                  className="block w-full border-b-2 border-slate-200 py-2 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  placeholder="Write here your message"
                  value={formInfo.message}
                  onChange={handleChange}
                  name="message"
                  className="block w-full border-b-2 border-slate-200 py-2 outline-none"
                />
              </div>
              <p
                className={`text-center font-semibold ${
                  successMessage.status == "success"
                    ? " text-green-500 "
                    : " text-red-500 "
                }`}
              >
                {successMessage.message}
              </p>
              <button type="submit" className="btn-one mx-auto !py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestForm;
