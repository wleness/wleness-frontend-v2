import React, { useState } from "react";
import ExpertsCalendar from "./ExpertsCalendar";
import { format, setWeek } from "date-fns";
import axios from "axios";
import { UPDATE_SLOTS } from "../../data/api";

const UpdateExpertSlots = ({ token, selected_slots, slots, setSlots }) => {
  // Get Current Date
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(
    format(currentDate, "yyyy-MM-dd"),
  );
  const [selectedSlots, setSelectedSlots] = useState({});
  const [weekDay, setWeekDay] = useState(format(currentDate, "EEEE"));
  const [alert, setAlert] = useState({
    status: "",
    message: "",
  });

  // Sample appointment data (Replace this with a backend API call)
  function generateAppointmentData(startDate, endDate, timeSlots) {
    const appointmentData = [];

    const currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);

    while (currentDate <= endDateObj) {
      const formattedDate = currentDate.toISOString().slice(0, 10);
      // You can generate different time slots for different days here
      const slotsForThisDay =
        currentDate.getDay() === 0 ? ["10:00 AM", "123:00 PM"] : [...timeSlots]; // Example logic
      appointmentData.push({
        date: formattedDate,
        timeSlots: [...slotsForThisDay],
      });

      // Increment the current date by one day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return appointmentData;
  }

  const startDate = "2023-10-01";
  const endDate = "2023-10-30";
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];

  const setMessage = (status, message) => {
    setAlert({
      status: status,
      message: message,
    });
  };

  const appointmentData = generateAppointmentData(
    startDate,
    endDate,
    timeSlots,
  );

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Set selected slots
    const selected_date = selected_slots.filter((key) => key.date == date);
    if (selected_date.length > 0) {
      setSlots(selected_date[0].time_slots.split(","));
    } else {
      setSlots([]); // Set empty if slots not selected
    }
    // Set alert message
    setMessage("", "");
  };

  const handleSlotsUpdate = (slot) => {
    const exists = slots.includes(slot);
    if (exists) {
      let newSlots = slots.filter((element) => element !== slot);
      setSlots(newSlots);
    } else {
      setSlots([...slots, slot]);
    }

    // if (!selectedDate.includes(selectedSlots)) {
    //   let newSlot = {
    //     [selectedDate]: [slot],
    //   };
    //   setSelectedSlots([...selectedSlots, newSlot]);
    // } else {
    //   selectedSlots.forEach((element) => {
    //     console.log(element);
    //     // if(!Object.keys(element).includes(selectedDate)){
    //     //   let currentSlot = selectedSlots[selectedDate]
    //     //   let newSlot = [...currentSlot, slot]

    //     // }
    //   });
    //   let currentSlots = selectedSlots.indexOf(selectedDate);
    //   console.log(currentSlots);
    //   // let newSlot = selectedSlots.
    //   // setSelectedSlots([...selectedSlots, newSlot]);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (slots.length == 0) {
      setMessage("error", "Please select time slots");
      return null;
    }

    let form_data = new FormData();
    form_data.append("date", selectedDate);
    form_data.append("slots", slots);
    form_data.append("expert_id", "hello");

    axios
      .post(UPDATE_SLOTS, form_data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.status == "success") {
          setMessage("success", response.data.message);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        {/* Calendar Section */}
        <div className="mb-6 lg:mb-0">
          <ExpertsCalendar
            appointmentData={appointmentData}
            onDateSelect={handleDateSelect}
            currentDate={currentDate}
            selectedDate={selectedDate}
            updateslots={setSelectedSlots}
            updatedslots={selectedSlots}
            setWeekDay={setWeekDay}
            selected_slots={selected_slots}
            setMessage={setMessage}
          />
        </div>

        {/* Time Slot Section */}
        <div>
          <h2 className="mb-4 text-center text-xl font-medium ">
            {selectedDate ? (
              <>
                <span>Select Time Slots for </span>
                <span className="font-bold">
                  {selectedDate}, {weekDay}
                </span>
              </>
            ) : (
              "Select a date"
            )}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {timeSlots.map((slot, i) => {
              return (
                <label
                  htmlFor={slot}
                  key={i}
                  className={`mr-2 mt-2 inline-block cursor-pointer rounded-md border-2 border-primary-300 px-4 py-2.5 text-center text-sm font-medium text-primary-300 transition-all hover:bg-primary-300 hover:text-white ${
                    slots.includes(slot)
                      ? "bg-primary-300 text-white"
                      : "bg-white"
                  }`}
                >
                  {slot}
                  <input
                    type="checkbox"
                    name={slot}
                    checked={slots.includes(slot)}
                    onChange={() => handleSlotsUpdate(slot)}
                    id={slot}
                    className="hidden"
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <p
        className={`text-center font-semibold ${
          alert.status == "success" ? " text-green-500 " : " text-red-500 "
        }`}
      >
        {alert.message}
      </p>
      <div className="mt-4 text-center">
        <button type="submit" className="btn-one">
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateExpertSlots;
