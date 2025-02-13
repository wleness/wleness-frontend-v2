import React from "react";
import { Chart, ArcElement, Tooltip, Legend, controllers } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link, useLocation } from "react-router-dom";

import CoachExpertise from "../../components/Coach/CoachExpertise";
import DoctorsCard from "../../components/DoctorsCard";
import getExperts from "../Experts/getExperts";
import { assessments } from "../../data/mainAssessment";
import getBlogs from "../Blogs/getBlogs";
import BlogCard from "../../components/Cards/BlogCard";

Chart.register(ArcElement, Tooltip, Legend);

// Options for the chart
const options = {
  rotation: -30 * Math.PI, // Rotate the chart to start from the top
  circumference: 60 * Math.PI, // Set the circumference to cover 1.5 times of PI
};

export default function AssessmentResult() {
  const { allBlogPosts } = getBlogs();

  const location = useLocation();
  const result = location.state?.data;

  let chartScore = result.all_scores;

  // Chart data
  const data = {
    labels: ["Low", "Mild", "Moderate", "Severe"],
    datasets: [
      {
        label: "# of Score",
        data: [
          chartScore["Never"],
          chartScore["Sometimes"],
          chartScore["Often"],
          chartScore["Always"],
        ],
        backgroundColor: [
          "rgba(0, 255, 0, .2)",
          "rgba(255, 255, 0, .2)",
          "rgba(255, 165, 0, .2)",
          "rgba(255, 0, 0, .2)",
        ],
        borderColor: [
          "rgba(0, 255, 0, .2)",
          "rgba(255, 255, 0, .2)",
          "rgba(255, 165, 0, .2)",
          "rgba(255, 0, 0, .2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // Get image and about info
  let result_data = assessments
    .filter((key) => key.slug == result.name)
    .map((value) => [
      value.about,
      value.result_image,
      value.levels[result.level.toLowerCase()],
    ])[0];

  const { status, doctorDetails } = getExperts();

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div className="relative lg:w-96">
            <Doughnut data={data} options={options} />
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
              <p className="text-center text-xl font-bold">{result.score}/60</p>
              <p className="text-center text-sm font-semibold text-gray-500">
                {result.level}
              </p>
            </div>
          </div>
          <div className="place-self-center">
            <dl>
              <dt className="font-semibold">{result.level}</dt>
              <dd className="mb-4">{result_data[2]}</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto mb-8">About us section</section> */}
      <CoachExpertise
        heading={"About " + result.name}
        image={result_data[1]}
        lists={result_data[0]}
      />

      {/* Specialist Doctors */}
      <section className="container mx-auto p-4 lg:py-12">
        <div className="mb-10 text-center">
          <h2 className="subheading">
            <span>Our Suggested</span>
            <span className="heading-primary"> Soul Healers</span>
          </h2>
        </div>
        <div className="grid-cols-[repeat(4, minmax(280, 1fr))] grid gap-5 sm:grid-cols-2 3xl:gap-6">
          {[
            doctorDetails[0],
            doctorDetails[5],
            doctorDetails[2],
            doctorDetails[1],
          ].map((value, i) => {
            console.log(value);
            return <DoctorsCard key={i} data={value} />;
          })}
        </div>
        <div className="pb-5 pt-10 text-center">
          <Link to="/experts/all" className="btn-one inline-block">
            View all
          </Link>
        </div>
      </section>

      <section className="bg-primary-10 lg:py-10">
        <div className="container mx-auto">
          <div className="mb-10 pt-7 text-center">
            <h2 className="subheading">
              <span>Readings That</span>
              <span className="heading-primary"> Would Help</span>
            </h2>
          </div>

          {/* ============== Blogs ============= */}
          <div className="grid gap-4 rounded-xl pb-4 sm:grid-cols-2 lg:mb-8 lg:grid-cols-3 lg:gap-6">
            {allBlogPosts.splice(0, 3).map((value, i) => {
              return <BlogCard key={i} data={value} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
