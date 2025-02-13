import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { SINGLE_BLOG_URI } from "../../data/api";
import "../../assets/css/blog.css";
import { Helmet } from "react-helmet";
import { get_canonical } from "../../utils";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  const [blogCategories, setBlogCategories] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(SINGLE_BLOG_URI + "/" + slug)
      .then((response) => {
        // Handle the successful response
        setBlogDetails(response.data.blog_details);
        setBlogCategories(response.data.categories);
        setRecentBlogs(response.data.recent_blogs);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        setLoading(false);
        console.error(error);
      });
  }, [slug]);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <Helmet>
        <title>{blogDetails?.meta_title}</title>
        <meta name="description" content={blogDetails?.meta_description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <main className="container mx-auto lg:flex">
        <article className="pb-5 lg:mb-8 lg:w-[70%]">
          <div className="mb-3 lg:mb-8">
            <img
              src={blogDetails.header_image}
              alt={blogDetails?.image_alt}
              className="w-full rounded-3xl object-cover object-top"
            />
          </div>
          <h1 className="subheading mb-5">{blogDetails.title}</h1>

          <p className="mb-4 font-medium">{blogDetails.desc}</p>
          <div
            id="blog-content"
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: blogDetails.content }}
          />
        </article>

        <section className="px-5 lg:w-[30%]">
          <form
            action=""
            method="get"
            className="mx-auto flex w-full rounded-3xl border-2"
          >
            <label htmlFor="search" className="w-full">
              <input
                type="search"
                name="search"
                id="search"
                className="w-full rounded-3xl px-4 py-2 outline-none"
                placeholder="Search"
              />
            </label>

            <button className="rounded-3xl bg-primary-300 px-3 py-2 text-white transition-all hover:bg-primary-400">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          <ul className="mt-4 space-y-3">
            <li className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-semibold transition-all hover:bg-primary-50">
              <Link to="/blogs" className="block">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-4" />
                <span>Back</span>
              </Link>
            </li>
            <li>
              <span className="mb-3 block w-full rounded-xl bg-primary-50/80 px-4 py-2 font-semibold">
                All Categories
              </span>
              <ul className="mb-6 space-y-2">
                {blogCategories.map((value, i) => {
                  return (
                    <li
                      key={i}
                      className="flex justify-between px-4 font-semibold"
                    >
                      <Link
                        to={`/blogs/${value.slug}`}
                        className="transition-all hover:text-primary-300"
                      >
                        {value.category}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <span className="mb-3 block w-full rounded-xl bg-primary-50/80 px-4 py-2 font-semibold">
                Recent Posts
              </span>
              <ul className="mb-6 space-y-2 lg:space-y-4">
                {recentBlogs?.map((value, i) => {
                  return (
                    <li key={i} className="px-2">
                      <Link
                        to={`/blog/${value.slug}`}
                        className="grid grid-cols-[1fr_3fr] items-center justify-between gap-3 font-semibold"
                      >
                        <img
                          src={value.image}
                          alt={value.title}
                          className="h-14 w-full rounded-md object-cover"
                        />
                        <span className="text-sm">{value.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
