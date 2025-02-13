import React from "react";
import { Link } from "react-router-dom";
import { internshipBanner } from "../../assets";

function InternshipBanner({ url, new_page }) {
  return (
    <section className="container mx-auto">
      <Link to={url} target={`${new_page ? "_blank" : "_self"}`}>
        <img
          src={internshipBanner}
          alt="Internship banner"
          className="rounded-xl"
        />
      </Link>
    </section>
  );
}

export default InternshipBanner;
