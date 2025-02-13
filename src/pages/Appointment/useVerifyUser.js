import axios from "axios";
import { useEffect, useState } from "react";
import { STORE_USER_AND_SEND_OTP } from "../../data/api";

// =============================================
// Store user data and send otp to user
// =============================================
function verify_user(userDetails) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .post(STORE_USER_AND_SEND_OTP)
      .then((response) => {
        // Handle the successful response
        console.log(response);
        setStatus(true);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setStatus(false);
      });
  }, []);

  return {
    status: status,
  };
}

export default verify_user;
