import React, { useEffect, useState } from "react";
import { get_canonical } from "../../utils";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { BLOGS_CATEGORY_URI } from "../../data/api";
import BlogCard from "../../components/Cards/BlogCard";

export default function BlogsCategories() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(BLOGS_CATEGORY_URI + "/" + category)
      .then((response) => {
        // Handle the successful response
        setBlogs(response.data.blogs);
        setCurrentCategory(response.data.category);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <Helmet>
        <title>Blogs Categories | Wleness</title>
        <meta name="description" content={"View all blogs categories"} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <header className="bg-primary-50/40 px-4 py-5">
        <div className="text-center">
          <h1 className="subheading heading-primary">{currentCategory}</h1>
        </div>
      </header>

      {blogs.length != 0 ? (
        <section className="container mx-auto grid gap-4 rounded-xl py-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-10 xl:py-8">
          {blogs.map((value, i) => {
            return <BlogCard key={i} data={value} />;
          })}
        </section>
      ) : (
        <p className="py-8 text-center font-semibold">No Blogs Found</p>
      )}
    </>
  );
}
