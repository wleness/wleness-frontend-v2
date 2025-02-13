import React, { useState } from "react";
import {
  yoga__montly_subscription,
  yoga__one_time_session,
} from "../../assets";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import YogaUserDetailsForm from "../Forms/YogaUserDetailsForm";
import { textColorize } from "../../utils";

export default function YogaSession({ title, one_time, one_month }) {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  const [plan, setPlan] = useState(null);
  const userDetailsForm = (title, price) => {
    setPlan({
      title: title,
      price: price,
    });

    toggleForm();
  };

  const pricingData = [
    {
      title: "One Time session",
      image: yoga__one_time_session,
      original_price: 199,
      status: one_time,
      desc: "Enjoy the Special Introductory Limited Period Offer that is curated only for you. Join us every weekend to feel the rejuvenation and detox your week, which was full of stress.",
      price: 99,
      features: [
        "Personalized relaxation and rejuvenation program.",
        "Flexible schedule with early morning and weekend options.",
        "Detoxify and destress on weekends for a positive start to the week.",
        "Limited-time introductory offer for exceptional value.",
        "Complimentary trial sessions to experience the program firsthand.",
        "No Community Connection Access",
      ],
    },
    {
      title: "Monthly Subscription",
      desc: "Subscribe to our monthly plan and enjoy hassle-free yoga sessions at your convenience. Experience the ease of maintaining your well-being with regular, guided practices delivered right to your doorstep, all at just Rs 1499. Join us today for a stress-free path to a healthier you! Perks",
      image: yoga__montly_subscription,
      original_price: 2499,
      status: one_month,
      price: 1499,
      features: [
        "20 minutes of yoga philosophy for managing thoughts and emotions.",
        "30 minutes of step-by-step asanas from Hatha and Ashtanga styles.",
        "Guided pranayama and meditation.",
        "10 minutes of doable, healthy lifestyle tips.",
        "Straightforward strategies for navigating life's ups and downs.",
        "Engaging teaching methods using exercises, stories, and analogies.",
        "Learn how foods can enhance yoga practice and prevent illnesses.",
        "A highly nutritious plant-based diet for daily energy.",
        "Backup of sessions for missed classes.",
        "Access to recorded sessions for catching up and maximizing benefits.",
      ],
    },
  ];
  return (
    <>
      <section className="container relative mx-auto mb-5 pt-4 lg:mb-10">
        <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
          <h1 className="subheading sm:pb-0 lg:mb-4">{textColorize(title)}</h1>
          <span className="mx-auto block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
        <div className="grid items-center gap-4 lg:gap-8">
          {pricingData.map((value, i) => {
            return (
              <div
                key={i}
                className={`mb-6 ${value.status ? "block" : "hidden"}`}
              >
                <p className="para mb-6 text-left">{value.desc}</p>
                <figure
                  key={i}
                  className="group rounded-2xl text-center shadow-md transition-all hover:cursor-pointer lg:flex"
                >
                  <div className="flex flex-col items-center justify-between rounded-l-xl bg-primary-300 lg:w-2/5">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="h-full w-full rounded-l-lg object-cover"
                    />
                  </div>

                  <div className="rounded-r-xl border-y-2 border-r-2 border-slate-200 py-6 lg:w-3/5">
                    <h3 className="mb-4 pl-5 text-left text-xl font-extrabold transition-all xl:text-2xl">
                      {value.title}
                    </h3>
                    <ul className="mb-4 list-disc space-y-1 pl-9 text-left lg:mb-6 lg:pl-12">
                      {value.features.map((element, j) => (
                        <li
                          className="text-sm font-medium text-slate-500"
                          key={j}
                        >
                          {element}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between px-4 lg:px-8">
                      <button
                        onClick={() =>
                          userDetailsForm(value.title, value.price)
                        }
                        className="rounded-xl bg-primary-300 px-4 py-2.5 text-sm font-medium text-white lg:px-6"
                      >
                        Book Now
                      </button>
                      <h2 className="flex flex-col items-end lg:flex-row">
                        <p className="flex items-end justify-between">
                          <span className="font-medium">@ Rs.</span>
                          <span className="text-3xl font-extrabold lg:text-4xl xl:text-5xl">
                            {value.price}
                          </span>
                        </p>

                        <p className="flex justify-between text-sm">
                          <span></span>
                          <del>Rs. {value.original_price}</del>
                        </p>
                      </h2>
                    </div>
                  </div>
                </figure>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modals */}
      <YogaUserDetailsForm
        plan={plan}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}
