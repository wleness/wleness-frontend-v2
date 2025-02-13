import React, { useState } from "react";

export default function ShowMoreText(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={"rounded-2xl px-6 py-2.5 " + props.data.bg}>
      <h4 className="font-bold">{props.data.question}</h4>
      <p className="text-sm font-semibold">
        {expanded
          ? props.data.answer
          : props.data.answer.slice(0, 200) + "...."}
      </p>

      <p className="text-right">
        {!expanded && props.data.answer.length > 200 && (
          <button
            className="cursor-pointer text-sm font-semibold text-red-600 hover:text-red-700"
            onClick={toggleExpand}
          >
            View More
          </button>
        )}
        {expanded && (
          <span
            onClick={toggleExpand}
            className="cursor-pointer text-sm font-semibold text-red-600 hover:text-red-700"
          >
            View Less
          </span>
        )}
      </p>
    </div>
  );
}
