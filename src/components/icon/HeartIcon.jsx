import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function HeartIcon() {
  // State to track the click and color change
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle the click event
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={`cursor-pointer  transition-all ${
        isClicked ? "text-[#FF0E1C]" : "text-slate-400"
      }`}
      onClick={handleClick}
    />
  );
}
