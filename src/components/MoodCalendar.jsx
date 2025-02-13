import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MoodEmoji = ({ emoji }) => {
  return <span>{emoji}</span>;
};

const MoodCalendar = () => {
  const moodData = [
    // January
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    // February
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
    ],
    // March
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    // April
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    // May
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    // June
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    // July
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    // August
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    // September
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    // October
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    // November
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    // December
    [
      "😊",
      "😃",
      "😐",
      "😄",
      "😊",
      "😃",
      "😐",
      "😞",
      "😊",
      "😃",
      "😄",
      "😃",
      "😐",
      "😊",
      "😊",
      "😄",
      "😃",
      "😊",
      "😞",
      "😃",
      "😃",
      "😐",
      "😄",
      "😊",
      "😊",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const currentMonthMoods = moodData[currentMonth];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Create an array to represent the days in the calendar.
    const calendarDays = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1,
    );

    // Pad the days before the first day of the month.
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.unshift(null);
    }

    return (
      <div className="w-full rounded-lg bg-white p-4">
        <div className="mb-4 flex justify-between">
          <div onClick={goToPreviousMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <h1 className="text-xl font-bold">
            {new Date(currentYear, currentMonth).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
            })}
          </h1>
          <div onClick={goToNextMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-7">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center font-semibold">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className="text-center text-3xl font-medium md:p-2"
            >
              {day != null ? (
                <MoodEmoji emoji={currentMonthMoods[day - 1]} />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="flex justify-center">{renderCalendar()}</div>;
};

export default MoodCalendar;
