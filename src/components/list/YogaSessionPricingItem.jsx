import React from "react";

export default function YogaSessionPricingItem({
  data,
  selectPlan,
  selectedPlan,
}) {
  return (
    <div className="border-b-2 border-dotted border-slate-400 py-4">
      <label htmlFor={data.package}>
        <div className="flex justify-between font-semibold">
          <p className="text-lg">{data.package}</p>
          <span className="flex items-center space-x-2">
            <span>Rs. {data.discount_price}</span>
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
        </div>
        <div className="flex justify-between">
          <small className="font-quicksand font-semibold text-slate-500">
            {data.discount ? `${data.discount} % savings` : ""}
          </small>
          <small className=" font-quicksand font-semibold text-slate-500">
            <del>{data.discount ? `Rs. ${data.original_price}` : ""}</del>
          </small>
        </div>
      </label>
    </div>
  );
}
