import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BLOGS_URI } from "../../data/api";
import { assessments } from "../../data/mainAssessment";

function HomeArticlesCards() {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch blogs data
  useEffect(() => {
    axios
      .get(BLOGS_URI)
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
        console.log(response.data.blogs);
      })
      .catch((error) => console.error(error));
    return () => {};
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }
  return (
    <div className="mx-auto mb-6 grid grid-cols-2 justify-center gap-2 lg:grid-cols-4 xl:w-4/5 xl:gap-5">
      {assessments.map((value, i) => {
        return (
          <Link
            to={"/assessment/" + value.slug}
            key={i}
            className="mx-auto inline-block w-full cursor-pointer rounded-lg border-2 bg-white py-6 shadow-xl shadow-gray-300 transition-all hover:border-primary-300 hover:shadow-lg"
          >
            <img
              src={value.image}
              alt="stress icon"
              className="mx-auto mb-3 h-10 w-10 object-contain lg:h-16 lg:w-16"
            />
            <span className="block text-center text-lg font-semibold">
              {value.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default HomeArticlesCards;
