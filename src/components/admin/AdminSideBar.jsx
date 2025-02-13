import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../Auth/useLogout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useToken from "../../utils/useToken";
import { EXPERTS_PROFILE_URI } from "../../data/api";
import axios from "axios";

export default function AdminSideBar({ isMenuOpen, closeMenu }) {
  const { token } = useToken();
  const { logout } = useLogout();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  // ============================================================
  // Redirect user if loggedin
  // ============================================================
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

  const wleness_user = JSON.parse(localStorage.getItem("wleness_user"));
  if (wleness_user.type != "expert") {
    navigate("/");
    return null;
  }

  // ============================================================
  // Get Experts Info
  // ============================================================
  let url = EXPERTS_PROFILE_URI + wleness_user.user_id;
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setUser(response.data);
          localStorage.setItem("userInfo", JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        // Handle errors
        if (error.response.status == 401) {
          // Logout and redirect user
          logout();
          useEffect(() => {
            navigate("/experts-login", {
              state: {
                successMessage: "Session Expired Please Login",
              },
            });
          }, []);
          return null;
        } else {
          console.error(error);
        }
      });
  }, []);

  return (
    <aside
      className={`fixed bottom-0 top-14 mx-auto items-center justify-center bg-teal-100 pt-20 transition-all duration-500  md:w-[20%] lg:top-0 lg:flex lg:pt-0 ${
        isMenuOpen ? " left-0" : "  invisible -left-64 lg:visible lg:left-0"
        // isMenuOpen ? " left-0" : "  left-0"
      }`}
    >
      <Link
        to="/"
        className="absolute left-5 top-5 flex h-10 w-10 cursor-pointer items-center rounded-full border-2 border-primary-300 px-2 py-2 text-primary-400 transition-colors hover:text-primary-300 lg:h-12 lg:w-12 lg:justify-center lg:p-0 lg:px-4"
      >
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="text-xl lg:text-3xl"
        />
      </Link>
      <div className="flex w-56 flex-col items-center gap-9 text-center transition-all">
        <div className="mt-3 md:mt-0">
          <img
            src={user ? user.image : ""}
            alt="Image Alt Text"
            className="mx-auto mb-4 h-20 w-20 rounded-full object-cover object-top lg:h-32 lg:w-32"
          />
          <h3 className="text-xl font-semibold">{user ? user.name : "User"}</h3>
          <h5 className="text-base font-medium text-primary-400">
            {user ? user.profession : "Psychologist"}
          </h5>
        </div>
        <ul className="flex flex-col gap-6">
          <li className="font-semibold">
            <Link to="/doctor/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>
          </li>
          <li className="font-semibold">
            <Link to="/doctor/payment" onClick={closeMenu}>
              Payment
            </Link>
          </li>
          <li className="font-semibold">
            <span onClick={() => logout()} className="cursor-pointer">
              Logout
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
