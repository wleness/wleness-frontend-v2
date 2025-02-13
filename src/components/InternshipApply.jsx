import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { INTERNSHIP_JOIN_URI } from "../data/api";

export default function InternshipApply({ isOpen, onClose }) {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    qualification: "",
    role: "",
    interest: "",
  });
  const [resume, setResume] = useState(null);
  const [agreement, setAgreement] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    status: "",
    message: "",
  });

  // ========== Handle Form Submission ==========
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  // ========== Update Policy ==========
  const handleAgreement = () => {
    setAgreement(!agreement);
  };

  const updateMessage = (status, message) => {
    setAlertMessage({
      status: status,
      message: message,
    });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (
      formInfo["firstName"] &&
      formInfo["lastName"] &&
      formInfo["email"] &&
      formInfo["phoneNumber"] &&
      formInfo["address"] &&
      formInfo["qualification"] &&
      formInfo["role"] &&
      formInfo["interest"]
    ) {
      // Validate agreement is accepted
      if (!agreement) {
        updateMessage("error", "Please accept our policies to continue");
        return null;
      }

      // Validate if resume if uploaded
      if (resume == null) {
        updateMessage("error", "Please upload resume");
      }

      let form_data = new FormData();
      // Append form fields to the form_data object
      for (const key in formInfo) {
        form_data.append(key, formInfo[key]);
      }
      form_data.append("resume", resume);

      try {
        const response = await axios.post(INTERNSHIP_JOIN_URI, form_data);

        // Empty form after successfully sending data
        if (response.data.status == "success") {
          setFormInfo({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            qualification: "",
            role: "",
            interest: "",
          });
          setAgreement(false);
          onClose();
          navigate("/thank-you");
        } else {
          updateMessage(response.data.status, response.data.message);
          return null;
        }
      } catch (error) {
        console.log("Error sending data:", error);
      }
    } else {
      updateMessage("error", "Please fill your details properly!");
    }
  };

  // Close application form on clicking outside of form
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".internship")) {
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

  return (
    <section className="fixed inset-0 z-40 flex animate-fadeIn justify-center pt-8 backdrop-brightness-50 transition-all">
      <div className="internship w-[640px] animate-scaleIn overflow-y-scroll rounded-t-lg bg-white p-6 transition-all">
        <h4 className="mb-4 text-center text-2xl font-bold text-primary-300">
          Internship Form
        </h4>
        <p className="text-center text-sm font-medium">
          Thank you for your interest in working with us. We are always looking
          for the best talent to join our team. Send the application by filling
          out the form.
        </p>

        <form className="pt-6" onSubmit={handleSubmit}>
          <div className="mb-4 flex gap-4">
            <label htmlFor="firstName" className="w-1/2 self-end">
              <span className="mb-1 block font-bold text-primary-300">
                Name:
              </span>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formInfo.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
              />
            </label>
            <label htmlFor="lastName" className="w-1/2 self-end">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formInfo.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
              />
            </label>
          </div>
          <div className="mb-4 flex gap-4">
            <label htmlFor="email" className="w-1/2 self-end">
              <span className="mb-1 block font-bold text-primary-300">
                Email:
              </span>
              <input
                type="text"
                name="email"
                id="email"
                value={formInfo.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
              />
            </label>
            <label htmlFor="phoneNumber" className="w-1/2 self-end">
              <span className="mb-1 block font-bold text-primary-300">
                Phone Number:
              </span>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formInfo.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
              />
            </label>
          </div>
          <div className="mb-4 flex gap-4">
            <label htmlFor="address" className="w-full">
              <span className="mb-1 block font-bold text-primary-300">
                Address:
              </span>
              <input
                type="text"
                name="address"
                id="address"
                value={formInfo.address}
                onChange={handleChange}
                placeholder="Enter Your Complete Address"
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
              />
            </label>
          </div>
          <div className="mb-4 flex gap-4">
            <label htmlFor="qualification" className="w-1/2 self-end">
              <span className="mb-1 block font-bold text-primary-300">
                Educational Qualification :
              </span>
              <input
                type="text"
                name="qualification"
                id="qualification"
                value={formInfo.qualification}
                onChange={handleChange}
                placeholder="Enter your degree"
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
              />
            </label>
            <label htmlFor="role" className="w-1/2 self-end">
              <span className="mb-1 block font-bold text-primary-300">
                Role you are looking for:
              </span>
              <input
                type="text"
                name="role"
                id="role"
                value={formInfo.role}
                onChange={handleChange}
                placeholder="Role"
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
              />
            </label>
          </div>
          <div className="mb-4 flex gap-4">
            <label htmlFor="resume" className="w-full">
              <span className="mb-1 block font-bold text-primary-300">
                Resume:
              </span>
              <input
                type="file"
                name="resume"
                id="resume"
                onChange={(e) => setResume(e.target.files[0])}
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
              />
            </label>
          </div>
          <div className="mb-4 flex gap-4">
            <label htmlFor="interest" className="w-full">
              <span className="mb-1 block font-bold text-primary-300">
                Tell us about your interest:
              </span>
              <textarea
                name="interest"
                id="interest"
                cols="30"
                rows="3"
                value={formInfo.interest}
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-primary-50 px-4 py-2 outline-none"
                placeholder="Give a brief not more than 300 words"
              ></textarea>
            </label>
          </div>
          <div className="mb-6 flex gap-4">
            <label htmlFor="agreement" className="flex w-full items-start">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={agreement}
                onChange={handleAgreement}
                className="mr-3 mt-1"
              />
              <p className="text-sm font-medium">
                I understand & agree that the information submitted in this form
                will be transmitted to, stored and processed by Wleness, in
                accordance with their Privacy Policy.
              </p>
            </label>
          </div>
          <div>
            <p
              className={`mb-2 text-center font-semibold ${
                alertMessage.status == "success"
                  ? " text-green-500 "
                  : " text-red-500 "
              }`}
            >
              {alertMessage.message}
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={onClose}
              type="button"
              className="btn-one mr-3 !border-2 !border-primary-300 !bg-transparent !py-2 !text-black"
            >
              Close
            </button>
            <button className="btn-one" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
