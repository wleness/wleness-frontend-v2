import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const ExpertsCalendar = ({
  onDateSelect,
  selectedDate,
  currentDate,
  setWeekDay,
  selected_slots,
  setMessage,
}) => {
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
    setWeekDay(format(date, "EEEE"));
  };

  // Function to navigate to the next month
  const goToNextMonth = () => {
    setDisplayedMonth(addMonths(displayedMonth, 1));
    setMessage("", "");
  };
  // Function to navigate to the previous month
  const goToPreviousMonth = () => {
    setDisplayedMonth(subMonths(displayedMonth, 1));
    setMessage("", "");
  };

  // Function to check if a date exists in the array
  const doesDateExist = (dateToCheck) =>
    selected_slots?.some((obj) => obj.date === dateToCheck);

  return (
    <div className="mb-4 lg:mb-8">
      <div className="mb-4 flex justify-between border-b-2 border-slate-200 pb-2">
        <h2 className="text-center text-lg font-semibold text-gray-800">
          {format(displayedMonth, "MMMM yyyy")}
        </h2>
        <div className="flex items-center space-x-5">
          <span
            onClick={goToPreviousMonth}
            className="cursor-pointer text-sm font-medium text-gray-600  hover:text-primary-400 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
          </span>
          <span
            onClick={goToNextMonth}
            className="cursor-pointer text-sm font-medium text-gray-600 hover:text-primary-400 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {/* {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600">
            {day}
          </div>
        ))} */}
        {dates.map((date) => {
          return format(date, "yyyy-MM-dd") >=
            format(currentDate, "yyyy-MM-dd") ? (
            <button
              type="button"
              key={date}
              onClick={() => handleDateSelect(date)}
              className={`cursor-pointer ${
                format(date, "yyyy-MM-dd") === selectedDate
                  ? "bg-primary-50"
                  : "bg-gray-50"
              } ${
                format(date, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd")
                  ? "!bg-blue-200"
                  : "hover:bg-primary-50"
              } h-12 w-12 justify-self-center rounded-full text-center focus:outline-none`}
            >
              <span>{format(date, "d")}</span>
              {doesDateExist(format(date, "yyyy-MM-dd")) ? (
                <span className="ml-1 text-primary-400">
                  <FontAwesomeIcon width="5px" icon={faCircle} />
                </span>
              ) : (
                ""
              )}
            </button>
          ) : (
            <button
              type="button"
              key={date}
              disabled={true}
              className="h-12 w-12 cursor-not-allowed justify-self-center rounded-full bg-gray-200 text-center focus:outline-none"
            >
              <span>{format(date, "d")}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ExpertsCalendar;
