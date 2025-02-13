import React, { useEffect, useState } from "react";
import {
  resourcesSubpages,
  seldCareSubpages,
  serviceMenuPages,
} from "../../data/navigation";
import MobileMenuLink from "../links/MobileMenuLink";
import MobileDropdown from "../links/MobileDropdown";
import {
  faBars,
  faClose,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function MobileNavbar({
  toggleJoinUs,
  token,
  username,
  user_type,
}) {
  const [isMenuOpen, setMenuOpen] = useState(false); // Menu Modal

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close navigation bar on clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest(".navbar")) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <div
        className={`fixed bottom-0 top-0 w-full pt-20 transition-all duration-500 ease-in-out xl:hidden ${
          isMenuOpen ? "  left-0" : "  invisible -left-64"
        }`}
      >
        <div className="navbar flex h-full w-56 flex-col  border-slate-100 bg-white shadow-xl xl:h-auto xl:w-full xl:flex-row xl:shadow-none">
          <ul
            className={
              "divide-y-2 overflow-y-scroll border-[1px] xl:flex xl:h-fit xl:w-fit xl:space-x-5 xl:divide-y-0 xl:self-center xl:border-none xl:shadow-none"
            }
          >
            <MobileMenuLink url="/" text="Home" onClose={() => closeMenu()} />
            <MobileDropdown
              url=""
              text="Services"
              pages={serviceMenuPages}
              onClose={() => closeMenu()}
            />
            <MobileMenuLink
              url="/experts"
              text="Our Experts"
              onClose={() => closeMenu()}
            />
            <MobileDropdown
              url=""
              text="Self Care"
              onClose={() => closeMenu()}
              pages={seldCareSubpages}
            />
            <MobileDropdown
              url=""
              text="Resources"
              onClose={() => closeMenu()}
              pages={resourcesSubpages}
            />
            <MobileMenuLink
              url="/about-us"
              text="About Us"
              onClose={() => closeMenu()}
            />
          </ul>

          {/* Authentication */}
          <div className="mt-6 flex flex-col items-center space-y-3 px-4 pb-3 xl:w-fit xl:flex-row xl:space-y-0 xl:px-0">
            <button
              onClick={toggleJoinUs}
              className="!w-full rounded-full border-2 border-primary-400 !py-1.5 px-4 !font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white lg:mr-2 xl:!w-fit"
            >
              Join Us
            </button>

            {!token ? (
              <Link
                to="/login"
                className="btn-primary !w-full !rounded-full !bg-primary-400 !py-2.5 !text-base font-semibold hover:!bg-primary-300 xl:!w-fit xl:!py-2"
              >
                Sign In
              </Link>
            ) : (
              <Link
                to={
                  user_type == "expert"
                    ? "/doctor/dashboard"
                    : "/user/dashboard"
                }
                className="btn-primary flex !w-full items-center justify-center !rounded-full !bg-primary-400 !py-2.5 font-semibold hover:!bg-primary-300"
              >
                {/* <img src={profile} alt="" className="mr-1 w-5 rounded-full" /> */}
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="mr-2 text-base"
                />
                <span className="text-sm">
                  {username ? username.split(" ")[0] : "User"}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hamburger Icon */}
      <button className="xl:hidden">
        {isMenuOpen ? (
          <FontAwesomeIcon
            icon={faClose}
            className="text-3xl text-primary-400"
            onClick={() => closeMenu()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl text-primary-400"
            onClick={() => openMenu()}
          />
        )}
      </button>
    </>
  );
}
