import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SubmenuLink from "./SubmenuLink";

export default function Dropdown(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <li
      className="relative"
      onMouseOver={openDropdown}
      onMouseOut={closeDropdown}
    >
      <Link to={props.url} className="menu-link">
        {props.text} <FontAwesomeIcon icon={faAngleDown} />
      </Link>

      {isDropdownOpen && (
        <ul className="absolute z-10 w-52 rounded-xl border-[1px] border-slate-100 bg-white py-4 shadow-md xl:w-60">
          {props.pages.map((value, index) => {
            return (
              <SubmenuLink
                key={index}
                url={value.slug}
                text={value.name}
                subpages={value.subPages}
                onClick={closeDropdown}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
