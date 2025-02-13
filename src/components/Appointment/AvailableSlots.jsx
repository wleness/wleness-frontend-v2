import React, { useState } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import ChooseMonthBtn from "../Buttons/ChooseMonthBtn";

const AvailableSlots = ({
  checkoutDetails,
  setCheckoutDetails,
  slots,
  index,
  setIndex,
}) => {
  const [slotIndex, setSlotIndex] = useState(0);

  // Get previous month
  const getPreviousMonth = () => {
    if (index > 0) {
      setIndex(index - 1);
      setSlotIndex(0);
      setCheckoutDetails({ ...checkoutDetails, date: "", time: null });
    }
  };

  // Get Next month
  const getNextMonth = () => {
    if (index < slots.length - 1) {
      let newIndex = index + 1;
      setIndex(newIndex);
      setSlotIndex(0);
      setCheckoutDetails({ ...checkoutDetails, date: "", time: null });
    }
  };

  // Select date to display time slots
  const selectDate = (slotIndex, date) => {
    setSlotIndex(slotIndex);
    setCheckoutDetails({ ...checkoutDetails, date: date, time: null });
  };

  return (
    <div className="my-10 gap-2 lg:flex lg:gap-8">
      <div className="mb-6 lg:mb-0 lg:w-1/2">
        <div className="mb-6 flex items-center justify-between">
          {index > 0 ? (
            <ChooseMonthBtn
              month={slots[index - 1]?.month}
              icon={faAngleLeft}
              next={false}
              onclick={() => getPreviousMonth()}
            />
          ) : (
            <span></span>
          )}

          <h2 className="text-lg font-bold">
            {slots[index]?.month} {slots[index]?.year}
          </h2>

          {index < slots.length - 1 ? (
            <ChooseMonthBtn
              month={slots[index + 1]?.month}
              icon={faAngleRight}
              next={true}
              onclick={() => getNextMonth()}
            />
          ) : (
            <span></span>
          )}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {slots[index]?.slots.map((value, i) => {
            return (
              <button
                type="button"
                onClick={() =>
                  selectDate(
                    slots[index]?.slots.indexOf(value),
                    value.date +
                      " " +
                      slots[index]?.month +
                      " " +
                      slots[index]?.year,
                  )
                }
                key={i}
                className={`cursor-pointer rounded-lg border-2 border-primary-300 p-1 py-2 text-center text-sm font-semibold  transition-all ${
                  slotIndex == slots[index]?.slots.indexOf(value)
                    ? "bg-primary-300 text-white"
                    : "text-primary-300 hover:bg-primary-300 hover:text-white"
                }`}
              >
                {value.date}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slot Section */}
      <div className="lg:w-1/2">
        <h2 className="mb-6 text-center text-lg font-bold">
          Select time slots
        </h2>

        <div className="grid grid-cols-4 gap-2">
          {slots[index]?.slots[slotIndex].time.map((value, i) => (
            <button
              type="button"
              onClick={() =>
                setCheckoutDetails({ ...checkoutDetails, time: value })
              }
              key={i}
              className={`block cursor-pointer rounded-full border-2 border-primary-300 py-2 text-center text-sm font-medium transition-all  ${
                value == checkoutDetails.time
                  ? "bg-primary-300 text-white"
                  : "text-primary-300 hover:bg-primary-300 hover:text-white"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableSlots;
