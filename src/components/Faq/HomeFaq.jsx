import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Faq from "../layout/Faq";
import { faq3 } from "../../assets";

export default function HomeFaq(props) {
  const [openFAQ, setOpenFAQ] = useState(-1); // Initialize with -1 to represent all FAQs as closed

  // Toggle Faq's
  const toggleFAQ = (index) => {
    if (index === openFAQ) {
      // If it's already open, close it
      setOpenFAQ(-1); // Close all FAQs
    } else {
      // If it's closed or a different FAQ is open, open it
      setOpenFAQ(index);
    }
  };

  return (
    <section className="container mx-auto my-6 mt-12 gap-2 px-4 lg:mb-14 lg:flex">
      {/* ========== FAQ's ========== */}
      <div className="mx-auto mb-5 lg:mb-0 lg:w-1/2">
        <h1 className="subheading heading-primary mb-2">FAQs</h1>
        <p className="para mb-4 lg:pr-5">
          All essential information is readily available here on Wleness. Ask
          questions and browse around for answers.
        </p>
        <img
          src={faq3}
          alt="Energy Healing Practices"
          className="lg:w-4/5"
          loading="lazy"
        />
        <Link to="/faqs" className="btn-one inline-block">
          Go to FAQ's
        </Link>
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2" id="home-page-faqs">
        {props.data.map((value, index) => {
          return (
            <Faq
              key={index}
              question={value.question}
              answer={value.answer}
              isOpen={index === openFAQ}
              toggleFAQ={() => toggleFAQ(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
