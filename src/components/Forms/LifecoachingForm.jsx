import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LIFE_COACHING_URI } from "../../data/api";

export default function LifeCoachingForm({ isOpen, onClose, setConfirmation }) {
  if (!isOpen) return null;

  const navigate = useNavigate();

  // Handle Joining Form
  const [formInfo, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
  });
  const [policy, setPolicy] = useState(false);
  const [alert, setAlert] = useState({
    status: "",
    message: "",
  });

  const setMessage = (status, message) => {
    setAlert({
      status: status,
      message: message,
    });
  };

  // Close assessment modal on clicking outside of the box
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".life-coaching")) {
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

  // ========== Update Policy ==========
  const handlePolicy = () => {
    setPolicy(!policy);
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formInfo);

    // Validate if form is filled
    if (
      formInfo["name"] &&
      formInfo["email"] &&
      formInfo["age"] &&
      formInfo["gender"] &&
      formInfo["phone"]
    ) {
      if (!policy) {
        setMessage("error", "Please accept our policies to continue");
        return null;
      }

      let formData = new FormData();
      // Append form fields to the FormData object
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      axios
        .post(LIFE_COACHING_URI, formData)
        .then((response) => {
          setMessage(response.data.status, response.data.message);

          if (response.data.status == "success") {
            setFormData({
              name: "",
              email: "",
              age: "",
              gender: "",
              phone: "",
            });
            setPolicy(false);
            onClose();
            navigate("/thank-you");
          }
        })
        .catch((error) => {
          console.error("Error sending data:", error);
          setMessage("error", "Internal Server Error! Please Try Again later");
        });
    } else {
      setMessage("error", "Please fill your details properly!");
    }
  };

  return (
    <section className="fixed inset-0 z-50 grid animate-fadeIn place-items-center bg-black/20 transition-all">
      <div className="life-coaching w-4/5 animate-scaleIn rounded-2xl bg-white p-6 transition-all lg:w-[620px]">
        <div className="text-center">
          <h2 className="subheading">Life-coaching Join</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <p
            className={`mb-2 text-center font-semibold ${
              alert.status == "success" ? " text-green-500 " : " text-red-500 "
            }`}
          >
            {alert.message}
          </p>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name *"
              className="form-input"
              value={formInfo.name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" Email *"
              className="form-input"
              value={formInfo.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="age">
            <input
              type="text"
              name="age"
              id="age"
              placeholder="Age *"
              className="form-input"
              value={formInfo.age}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="gender">
            <input
              type="text"
              name="gender"
              id="gender"
              placeholder="Gender *"
              className="form-input"
              value={formInfo.gender}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number *"
              className="form-input"
              value={formInfo.phone}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="policyAccept" className="mb-4 flex px-2">
            <input
              type="checkbox"
              name="policyAccept"
              className="mr-2"
              id="policyAccept"
              checked={policy}
              onChange={handlePolicy}
            />
            <span className="text-[8px] font-medium md:text-xs">
              I understand & agree that the information submitted in this form
              will be transmitted to, stored and processed by Wleness, in
              accordance with their &nbsp;
              <Link to="/privacy-policy" className="text-primary-400">
                Privacy Policy
              </Link>
              .
            </span>
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
