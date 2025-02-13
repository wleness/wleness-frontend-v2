import React, { useState } from "react";
import { requestCallback } from "../../assets";
import { CAREER_URI } from "../../data/api";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function CareerForm() {
  const [formInfo, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [resume, setResume] = useState(null);
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });
  const navigate = useNavigate();

  // Handle form value change event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (resume == null) {
      setSuccessMessage({
        status: "error",
        message: "Please upload resume",
      });
    }
    if (formInfo["name"] && formInfo["number"] && formInfo["email"]) {
      let formData = new FormData();
      // Append form fields to the FormData object
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }
      formData.append("resume", resume);
      try {
        const response = await axios.post(CAREER_URI, formData);
        setSuccessMessage({
          status: response.data.status,
          message: response.data.message,
        });

        // Empty form after successfully sending data
        if (response.data.status == "success") {
          setFormData({
            name: "",
            number: "",
            email: "",
          });
          setResume(null);
          navigate("/thank-you");
        }
      } catch (error) {
        console.error("Error sending data:", error);
        setSuccessMessage({
          status: "error",
          message: error,
        });
      }
    } else {
      setSuccessMessage({
        status: "error",
        message: "Please fill your details!",
      });
    }
  };
  return (
    <section className="container mx-auto mb-6 grid rounded-3xl bg-[#FAFCE7] px-8 py-12 md:grid-cols-2 lg:px-8 ">
      <div className="md:flex md:h-full md:flex-col md:px-6">
        <div>
          <h3 className="font-medium text-[#464646] opacity-80 lg:text-lg">
            Seeking professional career opportunities?
          </h3>
          <h1 className="font-quicksand text-4xl font-bold leading-tight tracking-tight text-[#464646] opacity-90">
            Apply Now
          </h1>

          <p className="pt-2 text-slate-700 opacity-90 lg:text-xl">
            Unlock your potential and gain real-world experience with us.
          </p>
        </div>
        <div className="mt-10 items-center sm:flex">
          <img
            className="mb-2 w-24 object-cover sm:mr-6"
            src={requestCallback}
            alt="contact"
          />
          <p className="font-medium leading-5 text-slate-700">
            Join our team and embark on a .
            <br />
            journey of growth and learning
          </p>
        </div>
      </div>
      <form
        className="flex flex-col pt-10 md:px-6 md:pt-0"
        onSubmit={handleSubmit}
      >
        <label className="mb-3">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={formInfo.name}
            onChange={handleChange}
            name="name"
            id="name"
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-3">
          <input
            type="tel" // Use "tel" for phone numbers
            placeholder="Your number"
            name="number"
            id="number"
            maxLength={10}
            value={formInfo.number}
            onChange={handleChange}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={formInfo.email}
            onChange={handleChange}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-3 block w-full rounded-md shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white">
          <span className="block cursor-pointer rounded-l-md bg-primary-10 px-6 py-4 transition-all hover:bg-primary-50">
            <FontAwesomeIcon
              icon={faUpload}
              className="mr-3 text-primary-400"
            />
            <span>{resume != null ? resume.name : "Upload Resume"} </span>
          </span>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            className="hidden"
          />
        </label>

        <p
          className={`text-center font-semibold ${
            successMessage.status == "success"
              ? " text-green-500 "
              : " text-red-500 "
          }`}
        >
          {successMessage.message}
        </p>
        <button type="submit" className="btn-one mx-auto mt-4">
          Submit
        </button>
      </form>
    </section>
  );
}
