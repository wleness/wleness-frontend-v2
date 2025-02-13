import React from "react";
import { Link } from "react-router-dom";
import { cardpic1, cardpic2, cardpic3 } from "../assets";
const ActivityCards = () => {
  // Define an array of card data
  const cardDataArray = [
    {
      image: cardpic1, // Replace with actual image URLs
      header: "Challenge your body",
      paragraph:
        "Meditation can be quite challenging for us at multiple levels but as they say, no pain no gain. So unlock your true potential with an assorted library of Meditation practices with top experts and gurus with Wleness.",
      buttonText: "Explore your body",
      slug: "/activities/yoga",
    },
    {
      image: cardpic2, // Replace with actual image URLs
      header: "Rejuvenate",
      paragraph:
        "In the midst of today's hectic pace, finding the  holistic rejuvenation through meditation can be profoundly transformative. Modern life's  demands often leave us feeling overwhelmed, whether it's work, family.",
      buttonText: "Feel the freshness",
      slug: "/activities/meditation",
    },
    {
      image: cardpic3, // Replace with actual image URLs
      header: " Power of self-care",
      paragraph:
        "In our fast-paced world, find inner balance through self-discovery. Self-care is your delightful journey. Pamper yourself, empower self-love, and let your inner radiance shine. You deserve it! Treat yourself to self-care today.",
      buttonText: "Start the care",
      slug: "/user/dashboard",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-10 pt-8 2xl:flex-row">
      {cardDataArray.map((cardData, index) => (
        <Link to={cardData.slug} key={index}>
          <div
            key={index}
            className="border-gradient-to-tr m-12 rounded-xl border-4 border-cyan-300 shadow-lg xl:m-3 "
          >
            <img
              src={cardData.image}
              alt="Card Image"
              className="mx-auto -mt-12"
            />
            <div className="px-6 py-4 ">
              <div className="mb-2 text-center text-xl font-bold text-primary-500">
                <h2>{cardData.header}</h2>
              </div>
              <p className="text-left font-semibold">{cardData.paragraph}</p>
            </div>
            <div className="px-6 pb-4 pt-4 text-center">
              <button className="mx-auto block w-fit rounded-full bg-gradient-to-tr from-secondary to-tertiary px-5 py-2.5 font-semibold text-white transition-all hover:shadow-lg">
                {cardData.buttonText}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ActivityCards;
