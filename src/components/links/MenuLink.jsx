import React from "react";
import { Link } from "react-router-dom";

export default function MenuLink(props) {
  return (
    <li>
      <Link to={props.url} className="menu-link">
        {props.text}
      </Link>
    </li>
  );
}
