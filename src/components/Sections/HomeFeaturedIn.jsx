import React from "react";
import {
  featuredIn1,
  featuredIn3,
  featuredIn4,
  featuredIn6,
  featuredIn7,
  homeFeaturedIn,
} from "../../assets";
import { Link } from "react-router-dom";

const featuredIn = [
  {
    name: "Times of India",
    image: featuredIn6,
    size: "w-12",
    link: "https://timesofindia.indiatimes.com/business/india-business/indias-11-fastest-growing-businesses-in-2023/articleshow/106354579.cms",
  },
  {
    name: "Business Standard",
    image: featuredIn1,
    size: "w-36",
    link: "https://www.business-standard.com/content/press-releases-ani/discover-a-new-era-of-wellness-with-wleness-unveiling-innovative-solutions-for-your-health-and-happiness-123101600467_1.html",
  },
  {
    name: "ANI News",
    image: featuredIn3,
    size: "w-12",
    link: "https://aninews.in/news/business/business/discover-a-new-era-of-wellness-with-wleness-unveiling-innovative-solutions-for-your-health-and-happiness20231016140849/",
  },
  {
    name: "Hindustan Times",
    image: featuredIn7,
    size: "w-36",
    link: "https://www.hindustantimes.com/brand-stories/excellence-redefined-meet-the-10-businesses-setting-new-standards-in-2023-101701260465504.html",
  },
  {
    name: "Dailyhunt",
    image: featuredIn4,
    size: "w-32",
    link: "https://m.dailyhunt.in/news/india/english/lokmattimes+english-epaper-lokmaten/discover+a+new+era+of+wellness+with+wleness+unveiling+innovative+solutions+for+your+health+and+happiness-newsid-n547715388?sm=Y",
  },
];

function HomeFeaturedIn() {
  return (
    <section className="bg-primary-10 py-12 lg:mb-14 lg:py-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-x-10 lg:grid-cols-2">
          <div className="mb-4 lg:mb-0">
            <img
              src={homeFeaturedIn}
              alt="Why wleness wellbeing"
              className="rounded-3xl border-2 border-primary-50 shadow-lg shadow-primary-50"
            />
          </div>
          <div>
            <h2 className="subheading">
              <span className="heading-primary">Featured In</span>
            </h2>
            <p className="my-2 font-semibold text-slate-600">
              Wleness has been featured on leading platforms such as the Times
              of India, Business Standard, ANI News, Hindustan Times, Daily
              Hunt, and many others, marking its position as a premium provider
              of top-quality mental wellness services. These testaments show how
              Wleness connects with the best psychologists, therapists,
              counsellors, and coaches from your home.
            </p>
            <p className="mb-6 mt-4 font-semibold text-slate-600">
              Wleness is all about acknowledging your journey, being there for
              you, and making each step unique in your unique journey. Something
              we even overlook when taking care of ourselves. It combines yoga,
              meditation, music therapy, interactive brain games, and
              conventional therapeutic techniques.
            </p>
            <Link to="/services/therapy" className="btn-one inline-block">
              Get Best Therapies
            </Link>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-5 lg:grid-cols-5">
          {featuredIn.map((value, i) => {
            return (
              <div key={i} className="h-full">
                <Link
                  to={value.link}
                  target="_blank"
                  className="flex h-full flex-col justify-center rounded-lg border-2 border-slate-100 bg-white py-2 shadow-xl transition-all hover:scale-95 hover:shadow-md xl:py-2.5"
                >
                  <img
                    src={value.image}
                    alt={value.name}
                    className={`mx-auto mb-2 object-contain ${value.size}`}
                  />
                  <h2 className="text-center font-bold">{value.name}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeFeaturedIn;
