import axios from "axios";
import { useEffect, useState } from "react";
import { EXPERTS_URI } from "../../data/api";

function getExperts() {
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI)
      .then((response) => {
        // Handle the successful response
        setDoctorDetails(response.data["experts"]);
        setStatus(true);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setStatus(false);
      });
  }, []);

  return {
    doctorDetails: doctorDetails,
    status: status,
  };
}

export default getExperts;
