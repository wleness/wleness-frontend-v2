import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentComponent from "../Appointment";
import { APPOINTMENT_BOOK_URI } from "../../data/api";
import axios from "axios";
import { modes, timings } from "../../data/doctors";

export default function BookAppointment() {
  const [selectDuration, setSelectDuration] = useState(timings[0]["value"]);
  const [setMode, setSelectMode] = useState(modes[0]["value"]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const handleDuration = (event) => {
    setSelectDuration(event.target.id);
  };

  const handleModes = (event) => {
    setSelectMode(event.target.id);
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if ((selectDuration, setMode, selectedDate, selectedTime)) {
      let formData = new FormData();

      formData.append("duration", selectDuration);
      formData.append("mode", setMode);
      formData.append("date", selectedDate);
      formData.append("time", selectedTime);
      formData.append("price", "350");
      console.log(formData);

      try {
        const response = await axios.post(APPOINTMENT_BOOK_URI, formData);
        console.log(response.data);
        setSuccessMessage({
          status: response.data.status,
          message: response.data.message,
        });
      } catch (error) {
        console.error("Error sending data:", error);
        setSuccessMessage({
          status: "error",
          message: "Internal Server Error! Please Try Again later",
        });
      }
    } else {
      setSuccessMessage({
        status: "error",
        message: "Please fill your details properly!",
      });
    }
  };
  return (
    <section className="container mx-auto pb-10 pt-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-8 lg:flex lg:gap-x-5">
          <div className="mb-4 flex gap-x-2 lg:mb-0 lg:w-1/2 lg:gap-x-5">
            {timings.map((value, i) => {
              return (
                <label
                  key={i}
                  htmlFor={value.value}
                  className={
                    selectDuration == value.value
                      ? "block w-full cursor-pointer rounded-full bg-primary-300 px-5 py-2.5 text-center font-semibold text-white"
                      : "block w-full cursor-pointer rounded-full border-2 border-primary-300 px-5 py-2.5 text-center font-semibold text-primary-300"
                  }
                >
                  <input
                    type="radio"
                    name="duration"
                    id={value.value}
                    checked={selectDuration == value.value}
                    onChange={handleDuration}
                    className="hidden"
                  />
                  <span>{value.text}</span>
                </label>
              );
            })}
          </div>

          <div className="mb-4 flex gap-x-2 lg:mb-0 lg:w-1/2 lg:gap-x-5">
            {modes.map((value, i) => {
              return (
                <label
                  key={i}
                  htmlFor={value.value}
                  className={
                    setMode == value.value
                      ? "block w-full cursor-pointer rounded-full bg-primary-300 px-5 py-2.5 text-center font-semibold text-white"
                      : "block w-full cursor-pointer rounded-full border-2 border-primary-300 px-5 py-2.5 text-center font-semibold text-primary-300"
                  }
                >
                  <input
                    type="radio"
                    name="duration"
                    id={value.value}
                    checked={setMode == value.value}
                    onChange={handleModes}
                    className="hidden"
                  />
                  <span>{value.text}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="mb-8 lg:gap-x-5">
          <AppointmentComponent
            date={selectedDate}
            time={selectedTime}
            updateDate={setSelectedDate}
            updateTime={setSelectedTime}
          />
        </div>

        <div className="lg:flex lg:gap-x-5 ">
          <div className="rounded-xl bg-primary-50 p-5 lg:w-1/2 lg:p-10">
            <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
              Pricing Details
            </h2>
            {timings
              .filter((price) => price.value == selectDuration)
              .map((filteredPrice) => (
                <>
                  <h4 className="mb-2 flex justify-between font-semibold">
                    <span>Total Price ({filteredPrice.text}) Session</span>
                    <span>Rs. {filteredPrice.price}</span>
                  </h4>
                  <h5 className="mb-5 flex justify-between font-semibold">
                    <span>Discount</span>
                    <span>-100</span>
                  </h5>
                  <h5 className="mb-2 flex justify-between font-semibold">
                    <span>Amount to be paid</span>
                    <span className="font-bold">
                      Rs. {filteredPrice.price - 100}
                    </span>
                  </h5>
                </>
              ))}
          </div>
          <div className="pt-5 lg:w-1/2">
            <label htmlFor="coupon">
              <input
                type="text"
                name="coupon"
                id="coupon"
                placeholder="Apply Coupon"
                className="mb-3 block w-full rounded-xl border-2 border-slate-200 px-6 py-3 text-lg"
              />
            </label>
            <label
              htmlFor="policies"
              className="mb-4 flex cursor-pointer select-none items-center pl-2"
            >
              <input type="checkbox" name="policies" id="policies" />
              <span className="ml-2 flex flex-wrap text-sm font-medium lg:text-base">
                <span>I have read and agree with the</span>
                <Link to="" className="mx-1 font-medium text-primary-400">
                  Cancellation
                </Link>
                <span>and</span>
                <Link to="" className="ml-1 font-medium text-primary-400">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <p
              className={`mb-4 text-center font-semibold ${
                successMessage.status == "success"
                  ? " text-green-500 "
                  : " text-red-500 "
              }`}
            >
              {successMessage.message}
            </p>
            <div className="text-center">
              <label htmlFor="submit">
                <button className="btn-one">Book an appointment now</button>
              </label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
