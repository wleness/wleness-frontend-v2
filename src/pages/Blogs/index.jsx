import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Swiper Js & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// Component
import BlogCard from "../../components/Cards/BlogCard";
import { Link } from "react-router-dom";
import getBlogs from "./getBlogs";
import { Helmet } from "react-helmet";
import { BLOGS_META } from "../../data/meta";
import { get_canonical } from "../../utils";

export default function Blogs() {
  const {
    blogPosts,
    allBlogPosts,
    categories,
    recentPosts,
    status,
    handleBlogsFilter,
  } = getBlogs();

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>{BLOGS_META.title}</title>
        <meta name="description" content={BLOGS_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      {/* ========== Header ============= */}
      <header className="bg-primary-50/40 px-4 py-5">
        <div className="text-center">
          <h1 className="subheading heading-primary">Our Blogs</h1>
        </div>

        <form className="mx-auto flex items-center justify-between rounded-full border border-gray-300 bg-white lg:w-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-l-full py-2.5 pl-5 pr-2 outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-primary-400 px-4 py-2.5 text-white"
          >
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </form>
      </header>

      {/* =========== Recent Blog ========= */}
      <section className="container mx-auto py-8 lg:!px-0 lg:pb-24 lg:pt-12">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          className="blog-categories !overflow-x-clip overflow-y-visible"
          pagination={{ clickable: true }}
        >
          {recentPosts
            ? recentPosts.map((value, i) => {
                let slug = "/blog/" + value.slug;
                return (
                  <SwiperSlide key={i}>
                    <div className="items-center rounded-xl lg:flex">
                      <Link className="inline-block lg:w-1/2" to={slug}>
                        <img
                          src={value.thumbnail_image}
                          className="w-full rounded-2xl object-cover"
                          alt={value.image_alt}
                        />
                      </Link>
                      <div className="pt-3 xs:w-full sm:w-full lg:w-1/2 lg:pl-12">
                        <p className="mb-2 font-semibold text-primary-300 lg:text-lg">
                          {value.category}
                        </p>
                        <h1 className="mb-2 text-xl font-bold capitalize lg:mb-4 lg:text-4xl">
                          <Link to={slug}>{value.title}</Link>
                        </h1>
                        <p className="text-sm font-medium md:text-base lg:text-lg">
                          <span className="mr-2">
                            {value.desc.length >= 150
                              ? value.desc.slice(0, 150) + "..."
                              : value.desc}
                          </span>
                          <Link
                            to={slug}
                            className="text-base font-bold text-primary-500"
                          >
                            Read More
                          </Link>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </section>

      {/* Filterable Blogs */}
      <section className="container mx-auto lg:!px-0">
        <ul className="flex flex-wrap justify-center gap-2 pb-8 pt-5 lg:gap-x-14 lg:gap-y-6 lg:pt-0 2xl:pb-8">
          <li onClick={() => handleBlogsFilter("default")}>
            <span className="inline-block cursor-pointer rounded-3xl bg-primary-50/50 px-6 py-2.5 text-xs font-bold text-slate-900 transition-colors hover:bg-primary-50 md:text-base">
              All
            </span>
          </li>
          {categories.map((value, i) => {
            return (
              <li key={i} onClick={() => handleBlogsFilter(value)}>
                <span className="inline-block cursor-pointer rounded-3xl bg-primary-50/50 px-6 py-2.5 text-xs font-bold text-slate-900 transition-colors hover:bg-primary-50 md:text-base">
                  {value}
                </span>
              </li>
            );
          })}
        </ul>

        {/* ============== Blogs ============= */}
        <div className="grid gap-4 rounded-xl pb-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-10">
          {blogPosts.map((value, i) => {
            return <BlogCard key={i} data={value} />;
          })}
        </div>

        {/* Dot Pagination */}
        {allBlogPosts.length > 9 ? (
          // <div className="my-8 flex items-center justify-center pt-4">
          //   <div className="font-sm mr-4 flex h-12  w-12 items-center justify-center rounded-full bg-primary-500 text-xl text-white hover:bg-primary-300">
          //     1
          //   </div>
          //   <div className="font-sm mr-4 flex  h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-xl text-primary-500 hover:bg-slate-300">
          //     2
          //   </div>
          //   <div className="font-sm mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-xl text-primary-500 hover:bg-slate-200">
          //     3
          //   </div>
          //   <div className="font-sm mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-primary-500 text-xl text-white hover:bg-slate-200">
          //     <FontAwesomeIcon
          //       icon={faAnglesRight}
          //       className="  hover:text-slate-600"
          //     />
          //   </div>
          // </div>
          <div className="text-center">
            <button
              onClick={() => handleBlogsFilter(0)}
              className="btn-one mb-12"
            >
              Load More
            </button>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
