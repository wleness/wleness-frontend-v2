import React, { useEffect, useState } from "react";
import UserSidebar from "../admin/UserSidebar";
import { palmWave } from "../../assets";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function UserDashboardLayout({ children, token }) {
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
  const wleness_user = JSON.parse(localStorage.getItem("wleness_user"));
  if (wleness_user.type != "user") {
    useEffect(() => {
      navigate("/");
    }, []);
    return null;
  }

  // Handle Navigation bar
  const [isMenuOpen, setMenuOpen] = useState(false); // Menu Modal

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="lg:flex lg:justify-end">
      <UserSidebar
        image={userInfo ? userInfo.image : ""}
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />

      <div className="mx-auto px-4 md:w-[80%] lg:mx-0 lg:px-8">
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <button className="mr-3 lg:hidden">
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faClose}
                className="text-3xl text-primary-400"
                onClick={() => closeMenu()}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-2xl text-primary-400"
                onClick={() => openMenu()}
              />
            )}
          </button>
          <div className="flex text-xl lg:text-3xl">
            <h1 className="py-2 font-bold text-teal-500 lg:mb-2">
              <span>Hello </span>
              <span className="font-bold text-teal-500">
                {userInfo ? userInfo.name : "User"}
              </span>
            </h1>
            <img
              src={palmWave}
              alt="Your Image Description"
              className="h-8 w-8 object-contain lg:h-12 lg:w-12 "
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
