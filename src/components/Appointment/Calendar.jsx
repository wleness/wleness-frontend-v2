import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";

const Calendar = ({ onDateSelect }) => {
  const currentDate = new Date();
  const [displayedMonth, setDisplayedMonth] = useState(currentDate);

  // Get the first day of the displayed month
  const firstDay = startOfMonth(displayedMonth);

  // Get the last day of the displayed month
  const lastDay = endOfMonth(displayedMonth);

  // Generate an array of dates for the displayed month
  const dates = eachDayOfInterval({ start: firstDay, end: lastDay });

  // Function to handle date selection
  const handleDateSelect = (date) => {
    onDateSelect(format(date, "yyyy-MM-dd"));
  };

  // Function to navigate to the next month
  const goToNextMonth = () => {
    setDisplayedMonth(addMonths(displayedMonth, 1));
  };

  // Function to navigate to the previous month
  const goToPreviousMonth = () => {
    setDisplayedMonth(subMonths(displayedMonth, 1));
  };

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <span
          onClick={goToPreviousMonth}
          className="cursor-pointer text-sm font-medium text-gray-600  hover:text-primary-400 focus:outline-none"
        >
          &lt; Previous
        </span>
        <h2 className="text-center text-lg font-semibold text-gray-800">
          {format(displayedMonth, "MMMM yyyy")}
        </h2>
        <span
          onClick={goToNextMonth}
          className="cursor-pointer text-sm font-medium text-gray-600 hover:text-primary-400 focus:outline-none"
        >
          Next &gt;
        </span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold text-gray-600">
            {day}
          </div>
        ))}
        {dates.map((date) => (
          <span
            key={date}
            onClick={() => handleDateSelect(date)}
            className={`cursor-pointer border ${
              date.getMonth() !== displayedMonth.getMonth()
                ? "text-gray-400"
                : ""
            } ${
              format(date, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd")
                ? "bg-blue-200"
                : "bg-white hover:bg-gray-300"
            } rounded-full py-2 text-center focus:outline-none`}
          >
            {format(date, "d")}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
