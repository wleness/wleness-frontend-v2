import React from "react";

export default function ActivityBlogs(props) {
  const blog = props.blogs.map((value, index) => {
    return (
      <figure key={index}>
        <div>
          <img
            src={value.thumbnail}
            alt=""
            className="block w-full object-cover"
          />
        </div>
        <figcaption>
          <h4 className="py-2 text-[22px] font-bold leading-8">
            {value.title}
          </h4>
          <p className="pb-2">{value.desc}</p>
          <button className="text-lg font-bold text-primary-400">
            Read More
          </button>
        </figcaption>
      </figure>
    );
  });

  return (
    <section
      className="border-10 p-15 container relative mx-auto border-solid border-transparent"
      style={{ borderImage: "url('border.png') 30 stretch" }}
    >
      <div className="mb-10 rounded-2xl bg-primary-10 px-6 py-12">
        <h3 className="mb-10 text-center font-bold lg:text-xl xl:text-2xl">
          You cannot always control what goes on outside, but you can always
          control what goes on inside.
        </h3>

        <div className="grid gap-6 lg:grid-cols-3">{blog}</div>
      </div>
    </section>
  );
}
