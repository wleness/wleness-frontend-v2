import React from "react";

import { meditationThumbnail } from "../assets";

export default function ActivityVideos() {
  return (
    <>
      <section className="container mx-auto rounded-t-3xl bg-gradient-to-b from-primary-10 to-transparent py-10 text-center">
        <h2 className="subheading heading-primary mb-10">
          Latest Videos & Blogs
        </h2>

        <div className="mb-12">
          <img src={meditationThumbnail} alt="" className="mx-auto w-fit" />
        </div>
      </section>
    </>
  );
}
