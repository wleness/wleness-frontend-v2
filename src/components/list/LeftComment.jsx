import React from "react";

export default function LeftComment({ comments, image }) {
  return (
    <div className="mt-4 flex items-start">
      <img src={image} alt="" className="mr-2 w-8" />
      <div className="flex flex-col items-start space-y-1">
        {comments.map((value, i) => {
          return (
            <div key={i}>
              <span className="mb-[2px] block rounded-xl rounded-tl-none bg-primary-50 px-2 py-1.5 text-sm font-semibold">
                {value.comment}
              </span>
              <span className="block text-left text-xs font-medium">
                {value.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
