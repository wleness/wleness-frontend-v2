import React from "react";
import {
  featuredIn1,
  featuredIn3,
  featuredIn4,
  featuredIn6,
  featuredIn7,
} from "../../assets";
import { Link } from "react-router-dom";

const featuredIn = [
  [
    featuredIn6,
    "https://timesofindia.indiatimes.com/business/india-business/indias-11-fastest-growing-businesses-in-2023/articleshow/106354579.cms",
  ],
  [
    featuredIn1,
    "https://www.business-standard.com/content/press-releases-ani/discover-a-new-era-of-wellness-with-wleness-unveiling-innovative-solutions-for-your-health-and-happiness-123101600467_1.html",
  ],
  [
    featuredIn3,
    "https://aninews.in/news/business/business/discover-a-new-era-of-wellness-with-wleness-unveiling-innovative-solutions-for-your-health-and-happiness20231016140849/",
  ],
  [
    featuredIn7,
    "https://www.hindustantimes.com/brand-stories/excellence-redefined-meet-the-10-businesses-setting-new-standards-in-2023-101701260465504.html",
  ],
  [
    featuredIn4,
    "https://m.dailyhunt.in/news/india/english/lokmattimes+english-epaper-lokmaten/discover+a+new+era+of+wellness+with+wleness+unveiling+innovative+solutions+for+your+health+and+happiness-newsid-n547715388?sm=Y",
  ],
];

export default function FeaturedIn() {
  return (
    <section className="bg-yellow-primary py-6 lg:py-10">
      <div className="container mx-auto">
        {/* <h2 className="mb-5 text-center">
          <span className="subheading heading-primary">Featured In</span>
        </h2> */}
        <div className="flex items-center justify-center gap-4 lg:gap-10 lg:pb-3">
          {featuredIn.map((value, i) => {
            return (
              <Link
                key={i}
                to={value[1]}
                className="place-self-center"
                target="_blank"
              >
                <img
                  src={value[0]}
                  key={i}
                  alt="India's Most Diverse Holistic Platform"
                  className="h-12 w-48 object-contain"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
