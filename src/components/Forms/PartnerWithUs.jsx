import React, { useEffect, useState } from "react";
import axios from "axios";
import { PARTNER_WITH_US_URI } from "../../data/api";

export default function PartnerWithUs({ isOpen, onClose }) {
  if (!isOpen) return null;
  // Handle Joining Form
  const [formInfo, setFormData] = useState({
    full_name: "",
    email: "",
    gender: "",
    number: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // Close assessment modal on clicking outside of the box
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".partner-with-us")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // ========== Handle Form Submission ==========
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formInfo);

    // Validate if form is filled
    if (
      formInfo["full_name"] &&
      formInfo["number"] &&
      formInfo["email"] &&
      formInfo["gender"]
    ) {
      let formData = new FormData();
      // Append form fields to the FormData object
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      try {
        const response = await axios.post(PARTNER_WITH_US_URI, formData);
        console.log(response.data);
        setSuccessMessage({
          status: response.data.status,
          message: response.data.message,
        });

        // Empty form after successfully sending data
        response.data.status == "success"
          ? setFormData({
              full_name: "",
              email: "",
              gender: "",
              number: "",
            })
          : null;
      } catch (error) {
        console.error("Error sending data:", error);
        setSuccessMessage({
          status: "error",
          message: "Internal Server Error! Please Try Again later",
        });
      }
    } else {
      setSuccessMessage({
        status: "error",
        message: "Please fill your details properly!",
      });
    }
  };

  return (
    <section className="fixed inset-0 z-50 grid place-items-center bg-black/20">
      <div className="partner-with-us w-4/5 rounded-2xl bg-white p-6 lg:w-[620px]">
        <div className="text-center">
          <h2 className="subheading">Please Fill The Form</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <p
            className={`mb-2 text-center font-semibold ${
              successMessage.status == "success"
                ? " text-green-500 "
                : " text-red-500 "
            }`}
          >
            {successMessage.message}
          </p>

          <label htmlFor="full_name">
            <input
              type="number"
              name="full_name"
              id="full_name"
              placeholder="Full Name *"
              className="form-input"
              value={formInfo.full_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder=" Email *"
              className="form-input"
              value={formInfo.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="gender">
            <select
              id="gender"
              name="gender"
              className="form-input"
              value={formInfo.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label htmlFor="number">
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone Number *"
              className="form-input"
              value={formInfo.number}
              onChange={handleChange}
            />
          </label>
          <div className="grid grid-cols-2 justify-center lg:flex">
            <button
              type="reset"
              onClick={onClose}
              className="mr-2 rounded-2xl border-2 border-primary-300 px-5 py-2 font-semibold text-primary-300 transition-all hover:bg-primary-500 hover:text-white"
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded-2xl border-2 border-primary-300 bg-primary-300 px-5 py-2 font-semibold text-white  transition-all hover:border-primary-500 hover:bg-primary-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
