import React, { useEffect, useState } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { palmWave } from "../../assets";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ children, token }) {
  // Handle Navigation bar
  const [isMenuOpen, setMenuOpen] = useState(false); // Menu Modal

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="lg:flex lg:justify-end">
      <AdminSideBar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

      <div className="px-4 lg:w-[80%] lg:px-8">
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
        </div>
        {children}
      </div>
    </main>
  );
}
