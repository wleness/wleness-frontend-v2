import React from "react";

export default function RightComment({ image, comments }) {
  return (
    <div className="mt-4 flex items-start justify-end">
      <div className="flex flex-col items-end space-y-1">
        {comments.map((value, i) => {
          return (
            <div key={i}>
              <span className="mb-[2px] block rounded-xl rounded-tr-none bg-primary-50 px-2 py-1.5 text-sm font-semibold">
                {value.comment}
              </span>
              <span className="block text-right text-xs font-medium">
                {value.time}
              </span>
            </div>
          );
        })}
      </div>

      <img src={image} alt="" className="ml-2 w-8" />
    </div>
  );
}
