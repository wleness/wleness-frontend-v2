import React from "react";

export default function Paragraphs({ texts }) {
  return texts.map((value, i) => {
    return (
      <p key={i} className="mb-4">
        {value}
      </p>
    );
  });
}
