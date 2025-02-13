import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JoinUs from "../JoinUs";
// Data
import { logo } from "../../assets";
// Components
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useToken from "../../utils/useToken";
import axios from "axios";
import { USER_PROFILE_URI } from "../../data/api";
import useLogout from "../Auth/useLogout";

function Navbar() {
  const { logout } = useLogout();
  const [user, setUser] = useState(null);
  const [openJoinUs, setJoinUsModal] = useState(false);
  const { token } = useToken();

  // ======== Get user appointments and details ===========  // Redirect user if loggedin
  let wleness_user = JSON.parse(localStorage.getItem("wleness_user"));

  if (token && token !== "" && token !== undefined && wleness_user != null) {
    let wleness_user_type = wleness_user.type;

    if (wleness_user_type == "user") {
      let url = USER_PROFILE_URI + "/" + wleness_user.username;
      useEffect(() => {
        // Make a GET request using Axios
        axios
          .get(url, {
            headers: {
              Authorization: "Bearer " + token,
            },
            params: {
              type: wleness_user.key,
            },
          })
          .then((response) => {
            if (response.status == 200) {
              setUser(response.data);
              localStorage.setItem("userInfo", JSON.stringify(response.data));
            } else {
              console.log(response);
            }
          })
          .catch((error) => {
            if (error.response.status == 401) {
              // Logout and redirect user
              logout();
              useEffect(() => {
                navigate("/login", {
                  state: {
                    successMessage: "Session Expired Please Login",
                  },
                });
              }, []);
              return null;
            } else {
              // Handle errors
              console.error("Error fetching doctor details:", error);
            }
          });
      }, []);
    } else {
      let wleness_user = JSON.parse(localStorage.getItem("userInfo"));
      useEffect(() => {
        setUser({
          name: wleness_user.name,
        });
      }, []);
    }
  }

  const toggleJoinUs = () => {
    setJoinUsModal(!openJoinUs);
  };

  return (
    <>
      {/* ========== Navigation Bar ========== */}
      <nav className="sticky left-0 right-0 top-0 z-40 bg-white">
        <div className="container relative mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-40 py-2 md:w-56 lg:w-64 xl:w-48 xl:py-3">
            <Link to="/" className="outline-none visited:bg-green-500">
              <img src={logo} alt="" className="w-full object-cover " />
            </Link>
          </div>

          {/* Desktop Menu */}
          <DesktopNavbar
            token={token}
            toggleJoinUs={toggleJoinUs}
            username={user != null ? user.name : null}
            user_type={wleness_user ? wleness_user.type : null}
          />

          {/* Mobile Menu */}
          <MobileNavbar
            token={token}
            toggleJoinUs={toggleJoinUs}
            username={user != null ? user.name : null}
            user_type={wleness_user ? wleness_user.type : null}
          />
        </div>
      </nav>
      <JoinUs isOpen={openJoinUs} onClose={toggleJoinUs} />
    </>
  );
}

export default Navbar;
