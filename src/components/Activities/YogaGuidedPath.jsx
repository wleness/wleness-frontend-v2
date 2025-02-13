import React, { useState } from "react";
import { textColorize } from "../../utils";

const CURRICULUM_DATA = [
  {
    day: "Day 1",
    yoga: "Yoga Session:- Yoga For Thyroid",
  },
  {
    day: "Day 2",
    yoga: "Yoga Session:- Yoga For Diabetes",
  },
  {
    day: "Day 3",
    yoga: "Yoga Session:- Yoga For Hypertension",
  },
  {
    day: "Day 4",
    yoga: "Yoga Session:- Yoga For PCOS",
  },
  {
    day: "Day 5",
    yoga: "Knowledge Time : Talk on Ashtanga yoga",
  },
  {
    day: "Day 6",
    yoga: "Yoga Session:- Yoga for Prenatal Pregnancy",
  },
  {
    day: "Day 7",
    yoga: "Yoga Session:- Yoga for Weight Loss",
  },
  {
    day: "Day 8",
    yoga: "Yoga Session:- Yoga For Constipation",
  },
  {
    day: "Day 9",
    yoga: "Yoga Session:- Yoga for TB",
  },
  {
    day: "Day 10",
    yoga: "Knowledge Time:- Ashtanga yoga - What and Why?",
  },
  {
    day: "Day 11",
    yoga: "Yoga Session:- Yoga for Arthritis",
  },
  {
    day: "Day 12",
    yoga: "Yoga Session:- Yoga for Male Reproductive Health",
  },
  {
    day: "Day 13",
    yoga: "Yoga Session:- Yoga for Ashtama",
  },
  {
    day: "Day 14",
    yoga: "Yoga Session:- Yoga for Skin Health",
  },
  {
    day: "Day 15",
    yoga: "Knowledge Time : Talk on pranamayam",
  },
  {
    day: "Day 16",
    yoga: "Yoga Session:- Yoga for Tonsillitis",
  },
  {
    day: "Day 17",
    yoga: "Yoga Session:- Yoga for Cervical Pain",
  },
  {
    day: "Day 18",
    yoga: "Yoga Session:- Yoga for Stress and Anxiety",
  },
  {
    day: "Day 19",
    yoga: "Yoga Session:- Welcoming Hatha Yoga",
  },
  {
    day: "Day 20",
    yoga: "Knowledge Time:- Debunking Women’s Health",
  },
];

export default function YogaGuidedPath({ title }) {
  const [selectedWeek, setSelectedWeek] = useState("week1");

  return (
    <section className="container mx-auto mt-6 p-2 pb-6 pt-4">
      <div className="mb-8">
        <h2 className="mb-3 text-center text-3xl font-bold">
          {textColorize(title)}
        </h2>
        <p className="para mb-6 text-left">
          A 20-day program designed to make yoga accessible and enjoyable for
          you. With expert guidance, you'll explore relaxation,
          strength-building, and mindfulness, guiding a fulfilling mental and
          physical wellness journey.
        </p>
        <div className="flex justify-center">
          <span className="inline-block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
      </div>
      {/* weeks */}
      <div className="mb-10 flex justify-center gap-10">
        <p
          className={`text-center font-bold sm:text-2xl ${
            selectedWeek === "week1" && "heading-primary"
          }`}
          onClick={() => setSelectedWeek("week1")}
        >
          Week 1
        </p>
        <p
          className={`text-center font-bold sm:text-2xl ${
            selectedWeek === "week2" && "heading-primary"
          }`}
          onClick={() => setSelectedWeek("week2")}
        >
          Week 2
        </p>
        <p
          className={`text-center font-bold sm:text-2xl ${
            selectedWeek === "week3" && "heading-primary"
          }`}
          onClick={() => setSelectedWeek("week3")}
        >
          Week 3
        </p>
        <p
          className={`text-center font-bold sm:text-2xl ${
            selectedWeek === "week4" && "heading-primary"
          }`}
          onClick={() => setSelectedWeek("week4")}
        >
          Week 4
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* curriculum */}
        {selectedWeek === "week1" &&
          CURRICULUM_DATA?.slice(0, 5)?.map((el, index) => (
            <>
              <div className="col-span-1 flex items-center justify-center rounded-lg bg-[#289C8F] p-2 text-lg font-semibold text-white xs:block xs:p-5 xs:text-xl">
                <p className="">{el?.day}</p>
              </div>
              <div className="col-span-2 rounded-lg bg-[#2FC4B1] p-2 text-lg font-semibold text-white xs:p-5 xs:text-xl">
                <p>{el?.yoga}</p>
              </div>
            </>
          ))}
        {selectedWeek === "week2" &&
          CURRICULUM_DATA?.slice(5, 10)?.map((el, index) => (
            <>
              <div className="col-span-1 flex items-center justify-center rounded-lg bg-[#289C8F] p-2 text-lg font-semibold text-white xs:block xs:p-5 xs:text-xl">
                <p className="">{el?.day}</p>
              </div>
              <div className="col-span-2 rounded-lg bg-[#2FC4B1] p-2 text-lg font-semibold text-white xs:p-5 xs:text-xl">
                <p>{el?.yoga}</p>
              </div>
            </>
          ))}
        {selectedWeek === "week3" &&
          CURRICULUM_DATA?.slice(10, 15)?.map((el, index) => (
            <>
              <div className="col-span-1 flex items-center justify-center rounded-lg bg-[#289C8F] p-2 text-lg font-semibold text-white xs:block xs:p-5 xs:text-xl">
                <p className="">{el?.day}</p>
              </div>
              <div className="col-span-2 rounded-lg bg-[#2FC4B1] p-2 text-lg font-semibold text-white xs:p-5 xs:text-xl">
                <p>{el?.yoga}</p>
              </div>
            </>
          ))}
        {selectedWeek === "week4" &&
          CURRICULUM_DATA?.slice(15, 21)?.map((el, index) => (
            <>
              <div className="col-span-1 flex items-center justify-center rounded-lg bg-[#289C8F] p-2 text-lg font-semibold text-white xs:block xs:p-5 xs:text-xl">
                <p className="">{el?.day}</p>
              </div>
              <div className="col-span-2 rounded-lg bg-[#2FC4B1] p-2 text-lg font-semibold text-white xs:p-5 xs:text-xl">
                <p>{el?.yoga}</p>
              </div>
            </>
          ))}
      </div>
    </section>
  );
}
