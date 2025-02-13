import React, { useEffect, useState } from "react";
import { avatars } from "../../data/dashboard";
import {
  USER_APPOINTMENTS,
  USER_PROFILE_UPDATE_URI,
  USER_PROFILE_URI,
} from "../../data/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const genders = ["Male", "Female", "Transgender"];

export default function Profile({ token }) {
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
    return null;
  }
  const [userData, setUserData] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phone: userInfo.phone,
    gender: "",
    avatar: userInfo.image,
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const setMessage = (status, message) => {
    setSuccessMessage({
      status: status,
      message: message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      Object.values(userData).includes("") ||
      Object.values(userData).includes(null)
    ) {
      setMessage("error", "Please enter your details");
      return null;
    }

    let formData = new FormData();
    // Append form fields to the FormData object
    for (const key in userData) {
      formData.append(key, userData[key]);
    }

    console.log(userData);

    // Submit post request to update profile
    axios
      .post(USER_PROFILE_UPDATE_URI, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        setMessage(response.data.status, response.data.message);
        if (response.data.status == "success") {
          localStorage.removeItem("userInfo");
          localStorage.removeItem("wleness_user");
          // Update localStorage information
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          localStorage.setItem(
            "wleness_user",
            JSON.stringify({
              key: "email",
              username: userData.email,
              type: "user",
              login_type: "password",
            }),
          );
        }
      })
      .catch((error) => {
        setMessage(error.data.status, error.data.message);
      });
  };

  return (
    <section className="mx-auto flex h-full flex-col justify-center lg:w-96">
      <h2 className="text-center text-2xl font-semibold text-primary-400">
        Edit Your Avatar
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 pt-4">
          {avatars.map((value, i) => {
            let avatar = window.location.origin + value;
            return (
              <label
                key={i}
                className="mx-auto grid w-fit cursor-pointer place-items-center rounded-full"
              >
                <img
                  src={avatar}
                  className={`block w-24 rounded-full border-red-500 ${
                    userData.avatar == avatar ? " border-4" : "hover:border-4"
                  }`}
                  alt=""
                />
                <input
                  type="checkbox"
                  name="avatar"
                  id="avatar"
                  onChange={handleChange}
                  value={avatar}
                  checked={userData.avatar == avatar}
                />
              </label>
            );
          })}
        </div>
        <div className="mb-2 space-y-3 pt-4">
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={userData.name}
            placeholder="Enter You Username"
          />
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="tel"
            maxLength={10}
            name="phone"
            id="phone"
            placeholder="91******78"
            onChange={handleChange}
            value={userData.phone}
          />
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="text"
            name="email"
            id="email"
            placeholder="demo@gmail.com"
            onChange={handleChange}
            value={userData.email}
          />
          <select
            name="gender"
            id="gender"
            className="w-full rounded-lg border-2 border-slate-400 py-2"
            onChange={handleChange}
          >
            <option value="" selected={userData.gender == "" ? true : false}>
              -- select --
            </option>
            {genders.map((value, i) => {
              return (
                <option
                  value={value}
                  key={i}
                  selected={userData.gender == value}
                >
                  {value}
                </option>
              );
            })}
          </select>
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
        <div className="pt-2 ">
          <button
            type="submit"
            className="btn-one !w-full !rounded-lg px-6 py-3"
          >
            Update
          </button>
        </div>
      </form>
    </section>
  );
}
