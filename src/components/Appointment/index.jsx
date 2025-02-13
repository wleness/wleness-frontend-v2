import React, { useState } from "react";
import Calendar from "./Calendar";

const AppointmentComponent = (props) => {
  // Sample appointment data (Replace this with a backend API call)
  function generateAppointmentData(startDate, endDate, timeSlots) {
    const appointmentData = [];

    const currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);

    while (currentDate <= endDateObj) {
      const formattedDate = currentDate.toISOString().slice(0, 10);
      // You can generate different time slots for different days here
      const slotsForThisDay =
        currentDate.getDay() === 0 ? ["10:00 AM", "2:00 PM"] : [...timeSlots]; // Example logic
      appointmentData.push({
        date: formattedDate,
        timeSlots: [...slotsForThisDay],
      });

      // Increment the current date by one day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return appointmentData;
  }

  const startDate = "2023-09-10";
  const endDate = "2023-09-30";
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
    "2:00 AM",
    "3:00 AM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const appointmentData = generateAppointmentData(
    startDate,
    endDate,
    timeSlots,
  );

  const handleDateSelect = (date) => {
    props.updateDate(date);
    props.updateTime(null);
  };

  const handleTimeSelect = (time) => {
    props.updateTime(time);
  };

  // Function to check if time slots are available for the selected date
  const areTimeSlotsAvailable = () => {
    const selectedAppointment = appointmentData.find(
      (appointment) => appointment.date === props.date,
    );
    return selectedAppointment && selectedAppointment.timeSlots.length > 0;
  };

  return (
    <div className="gap-2 lg:flex lg:gap-8">
      {/* Calendar Section */}
      <div className="mb-6 lg:mb-0 lg:w-1/2">
        <Calendar
          appointmentData={appointmentData}
          onDateSelect={handleDateSelect}
        />
      </div>

      {/* Time Slot Section */}
      <div className="lg:w-1/2">
        <h2 className="mb-4 text-center text-xl font-medium ">
          {props.date ? (
            <>
              Available time slots for{" "}
              <span className="font-bold">{props.date}</span>
            </>
          ) : (
            "Select a date"
          )}
        </h2>

        {props.date && (
          <div>
            {areTimeSlotsAvailable() ? (
              appointmentData.map((appointment) => {
                if (appointment.date === props.date) {
                  return (
                    <div key={appointment.date}>
                      {appointment.timeSlots.map((timeSlot) => (
                        <span
                          key={timeSlot}
                          onClick={() => handleTimeSelect(timeSlot)}
                          className={`mr-2 mt-2 inline-block cursor-pointer rounded-full border-2 border-primary-300 px-4 py-2.5 text-center text-sm font-medium text-primary-300 transition-all hover:bg-primary-300 hover:text-white ${
                            props.time === timeSlot
                              ? "bg-primary-300 text-white"
                              : "bg-white"
                          }`}
                        >
                          {timeSlot}
                        </span>
                      ))}
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <p className="my-auto text-center text-red-600">
                Slot is not available! Please try another day..
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentComponent;
