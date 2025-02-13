import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileSubmenuLink(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <li className="relative">
      <div className="submenu-link">
        <Link to={props.url} onClick={props.onClose}>
          <span>{props.text}</span>
        </Link>
        {props.subpages ? (
          <span
            className="block cursor-pointer border-l-2 pl-6"
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        ) : null}
      </div>

      {props.subpages ? (
        <ul
          className={`z-10 divide-y-2 divide-slate-100 bg-white xl:w-60 ${
            showDropdown ? " block " : " hidden "
          }`}
        >
          {props.subpages.map((value, index) => {
            return (
              <Link
                key={index}
                to={value[1]}
                onClick={props.onClose}
                className="submenu-link"
              >
                {value[0]}
              </Link>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}
