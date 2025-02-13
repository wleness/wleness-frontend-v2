import React from "react";

export default function SessionPricingItem({ data, selectPlan, selectedPlan }) {
  return (
    <div className="border-b-2 border-dotted border-slate-400 py-4">
      <label
        htmlFor={data.package}
        className="flex items-center justify-between text-lg font-bold"
      >
        <span>{data.package}</span>
        <span className="flex items-center space-x-2">
          <span>Rs. {data.original_price}</span>
          <input
            type="radio"
            name="plan"
            checked={selectedPlan}
            value={selectedPlan}
            onChange={selectPlan}
            id={data.package}
            className="cursor-pointer"
          />
        </span>
      </label>
    </div>
  );
}
