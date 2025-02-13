import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MobileSubmenuLink from "./MobileSubmenuLink";

export default function MobileDropdown(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <li className="xl:group relative">
      <div className="xl:px-0; flex justify-between border-slate-200 px-6 py-2.5 text-[15px] font-semibold transition-all hover:text-primary-300">
        <Link to={props.url} onClick={props.onClose}>
          <span>{props.text}</span>
        </Link>
        <span
          className="block cursor-pointer border-l-2 pl-6 xl:hidden"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
        <span className="hidden cursor-pointer pl-1 xl:block">
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>

      <ul
        className={`z-10 divide-y-2 divide-slate-100 bg-slate-100 xl:w-60 xl:group-hover:block ${
          showDropdown ? " block " : " hidden "
        }`}
      >
        {props.pages.map((value, index) => {
          return (
            <MobileSubmenuLink
              onClose={props.onClose}
              key={index}
              url={value.slug}
              text={value.name}
              subpages={value.subPages}
            />
          );
        })}
      </ul>
    </li>
  );
}
