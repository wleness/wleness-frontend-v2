import axios from "axios";
import { useEffect, useState } from "react";
import { USER_PROFILE_URI } from "../data/api";

export default function useEnquiryForm() {
  const [enquiryForm, setEnquiryForm] = useState(false);

  // Toggle Enquiry Form form
  const toggleForm = () => {
    setEnquiryForm(!enquiryForm);
  };

  return {
    enquiryForm,
    toggleForm,
  };
}

// Get User information
export function getUserInfo(token) {
  if (token && token !== "" && token !== undefined) {
    let wleness_user = JSON.parse(localStorage.getItem("wleness_user"));
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
            console.log(response.data);
            return response.data;
          } else {
            return "error";
          }
        })
        .catch((error) => {
          // Handle errors
          console.error("Error fetching doctor details:", error);
          return null;
        });
    }, []);
  } else {
    return null;
  }
}
