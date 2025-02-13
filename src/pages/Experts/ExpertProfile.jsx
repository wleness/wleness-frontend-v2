import React, { useEffect, useState } from "react";
import { bgDotsPattern, profileMask } from "../../assets";
import { useParams } from "react-router-dom";

import DoctorStatistics from "../../components/Statistics/DoctorStatistics";
import axios from "axios";
import { EXPERTS_URI } from "../../data/api";
import SelectPricing from "../../components/Forms/SelectPricing";
import TabSwitcher from "../../components/ExpertTabSwitcher";

const doctorsForte = [
  "Evidence based therapy expertise",
  "Holistic approach to wellness",
  "Coping skill cultivation",
  "Resilience",
  "Empathetic & self environment creation",
];

const doctorsSuggestions = [
  "Stay Connected",
  "Healthy Lifestyle",
  "Help Others",
  "Prioritize Self care",
  "Limit Screen Time",
  "Seek Professional Help",
  "Learn To Say No",
  "Stay Mindfull",
];

const faqs = [
  {
    question: "What is Wleness?",
    answer:
      "Wleness is an inclusive online platform dedicated to promoting mental health and wellness.",
  },
  {
    question: "What services does Wleness offer?",
    answer:
      "Wleness is an inclusive online platform dedicated to promoting mental health and wellness.",
  },
  {
    question: "What makes Wleness different from others?",
    answer:
      "Wleness is an inclusive online platform dedicated to promoting mental health and wellness.",
  },
  {
    question: "How can I benefit from using Wleness?",
    answer:
      "Wleness is an inclusive online platform dedicated to promoting mental health and wellness.",
  },
];

export default function ExpertProfile() {
  const { slug } = useParams();
  const [profileDetails, setProfileDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI + "/" + slug)
      .then((response) => {
        // Handle the successful response
        setProfileDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <>
      <header className="relative overflow-x-clip">
        <div className="container mx-auto pb-8 pt-4">
          <h1 className="text-center text-primary-400 lg:pb-4">
            <span className="subheading">Appointment Booking</span>
          </h1>
          <figure className="mx-auto items-center justify-center gap-x-8 py-3 lg:flex lg:w-[590px] lg:py-6">
            <div className="relative mx-auto mb-4 h-40 w-40 lg:h-48 lg:w-48">
              <div className="experts-profile-bg h-full w-full rounded-full">
                <img
                  src={profileDetails.image}
                  alt=""
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
              <img
                src={profileMask}
                alt=""
                className="absolute left-1/2 top-0 -translate-x-[55%] scale-110 object-cover"
              />
            </div>
            <figcaption className="mx-auto text-center lg:w-1/2 lg:text-left">
              <h2 className="text-2xl font-bold lg:text-3xl">
                {profileDetails.name}
              </h2>
              <h6 className="text-xl font-semibold lg:text-2xl">
                {profileDetails.experience}
              </h6>
              <div className="my-2 font-medium">
                <p>
                  <span className="mr-1 font-semibold text-primary-300">
                    Expertise:
                  </span>
                  <span>{profileDetails.expertise}</span>
                </p>
                <p>
                  <span className="mr-1 font-semibold text-primary-300">
                    Speaks:
                  </span>
                  <span>{profileDetails.languages}</span>
                </p>
              </div>
              <p className="text-xl font-bold text-primary-400">
                Starts at Rs. {profileDetails.price}
              </p>
            </figcaption>
          </figure>

          <div className="rounded-3xl border-2 border-secondary p-3 lg:p-6">
            <p className="text-center text-sm font-medium md:text-lg">
              {profileDetails.bio}
            </p>
          </div>
        </div>

        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -right-20 top-0 hidden w-32 lg:-right-20 lg:block lg:w-64"
        />
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -left-20 top-20 w-32 lg:top-40 lg:w-72"
        />
      </header>

      {/* <BookAppointment /> */}
      <SelectPricing
        slug={"/experts/booking/" + profileDetails.slug}
        bookingUrl={profileDetails.bookingUrl}
        price={profileDetails.price}
        packages={profileDetails.packages}
      />
      <DoctorStatistics
        rating={profileDetails.rating}
        recommend={profileDetails.recommend}
        ongoing={profileDetails.ongoing}
        last_booked={profileDetails.last_booked}
      />
      <TabSwitcher
        fortes={profileDetails.fortes}
        suggestions={profileDetails.suggestions}
      />
    </>
  );
}
