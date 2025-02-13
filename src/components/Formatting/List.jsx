import React from "react";

export default function List({ items }) {
  return (
    <ul className="mb-6 list-disc pl-8">
      {items.map((value, i) => {
        return (
          <li className="my-2" key={i}>
            <p> {value}</p>
          </li>
        );
      })}
    </ul>
  );
}
