import axios from "axios";
import money from "money";
import { useEffect, useState } from "react";
import { GET_RATES } from "../data/api";

export default function useCurrency() {
  const [rates, setRates] = useState(null);
  const [currentRates, setCurrentRates] = useState(null);

  //   Get location
  navigator.geolocation.getCurrentPosition((position) => {
    const userLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  });

  // Get rates
  useEffect(() => {
    axios
      .get(GET_RATES)
      .then((response) => {
        setRates(response.data);
        setCurrentRates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  money.base = "INR";
  money.rates = currentRates;

  return {
    rates: rates,
  };
}
