import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplyForm({ name, url, setConfirmation }) {
  const [personalDetails, setPersonalDetails] = useState({
    full_name: "",
    email: "",
    contact: "",
    full_address: "",
    languages: "",
  });
  const [resume, setResume] = useState(null);
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });
  const navigate = useNavigate();
  // Handle input fields on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  // Handle Post Request
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Validate if form is filled
    if (
      personalDetails["full_name"] &&
      personalDetails["email"] &&
      personalDetails["contact"] &&
      personalDetails["full_address"] &&
      personalDetails["languages"] &&
      resume
    ) {
      let formData = new FormData();

      // Append form fields to the FormData object
      for (const key in personalDetails) {
        formData.append(key, personalDetails[key]);
      }
      formData.append("resume", resume);

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.status == "success") {
            setPersonalDetails({
              full_name: "",
              email: "",
              contact: "",
              full_address: "",
              languages: "",
            });

            setResume(null);
            navigate("/thank-you");
          } else {
            setSuccessMessage({
              status: response.data.status,
              message: response.data.message,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          setSuccessMessage({
            status: "error",
            message: "Internal Server Error! Please Try Again later",
          });
        });
    } else {
      setSuccessMessage({
        status: "error",
        message: "Please fill your details properly!",
      });
    }
  };

  return (
    <section className="bg-yellow-primary pt-12">
      <div className="container mx-auto">
        <div className="mb-6 text-center">
          <h2 className="subheading">
            <span>Join as a </span>
            <span className="heading-primary"> Wleness {name} </span>
          </h2>
          <p className="para">
            Take the next step in joining our team by completing a form,
            allowing us to connect with you.
          </p>
        </div>

        <form className="space-y-6 pb-12" onSubmit={handleFormSubmit}>
          <div>
            <h5 className="mb-3 text-lg font-bold text-primary-400">
              Personal Information
            </h5>
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4">
              <fieldset className="rounded-xl border-2 border-primary-300">
                <legend className="ml-3 px-1">
                  Full Name <span className="text-red-500">*</span>
                </legend>
                <label htmlFor="full_name">
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    value={personalDetails.full_name}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-transparent px-4 py-1 pb-3 outline-none"
                  />
                </label>
              </fieldset>
              <fieldset className="rounded-xl border-2 border-primary-300">
                <legend className="ml-3 px-1">
                  Email <span className="text-red-500">*</span>
                </legend>
                <label htmlFor="email">
                  <input
                    type="text"
                    name="email"
                    value={personalDetails.email}
                    onChange={handleChange}
                    id="email"
                    className="w-full rounded-xl bg-transparent px-4 py-1 pb-3 outline-none"
                  />
                </label>
              </fieldset>
              <fieldset className="rounded-xl border-2 border-primary-300">
                <legend className="ml-3 px-1">
                  Contact Number <span className="text-red-500">*</span>
                </legend>
                <label htmlFor="contact">
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="contact"
                    id="contact"
                    value={personalDetails.contact}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-transparent px-4 py-1 pb-3 outline-none"
                    min={0}
                    maxLength={10}
                  />
                </label>
              </fieldset>
              <fieldset className="rounded-xl border-2 border-primary-300">
                <legend className="ml-3 px-1">
                  Full Address <span className="text-red-500">*</span>
                </legend>
                <label htmlFor="full_address">
                  <input
                    type="text"
                    name="full_address"
                    value={personalDetails.full_address}
                    onChange={handleChange}
                    id="full_address"
                    className="w-full rounded-xl bg-transparent px-4 py-1 pb-3 outline-none"
                  />
                </label>
              </fieldset>
            </div>
          </div>

          <div>
            <h5 className="mb-3 text-lg font-bold text-primary-400">
              Professional Information
            </h5>
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4">
              <fieldset className="rounded-xl border-2 border-primary-300">
                <legend className="ml-3 px-1">
                  Languages <span className="text-red-500">*</span>
                </legend>
                <label htmlFor="languages">
                  <input
                    type="text"
                    name="languages"
                    id="languages"
                    value={personalDetails.languages}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-transparent px-4 py-1 pb-3 outline-none"
                  />
                </label>
              </fieldset>
              <fieldset className="rounded-xl border-2 border-primary-300">
                <legend className="ml-3 px-1">
                  Resume
                  <span className="text-red-500">* </span>
                  <small>
                    {"["} Upload pdf, docx file{"]"}
                  </small>
                </legend>
                <label htmlFor="resume">
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    onChange={(e) => setResume(e.target.files[0])}
                    className="w-full rounded-xl px-4 py-1 pb-3 outline-none"
                  />
                </label>
              </fieldset>
            </div>
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
          <div>
            <input
              type="submit"
              value="Submit"
              className="mx-auto block w-fit cursor-pointer rounded-xl bg-primary-300 px-8 py-2.5 font-semibold text-white transition-all hover:bg-primary-400"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
