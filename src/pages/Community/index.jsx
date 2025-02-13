import React from "react";
import {
  bgDotsPattern,
  communityHeader,
  communitySupport1,
  communitySupport2,
  communitySupport3,
  communitySupport4,
  communitySupport5,
  communitySupport6,
} from "../../assets";
import { wlenessCommunity } from "../../data/community";
import CommunityCard from "../../components/Cards/CommunityCard";
import CommunitySupportCard from "../../components/Cards/CommunitySupportCard";
import { Link } from "react-router-dom";
import { COMMUNITY_META } from "../../data/meta";
import { get_canonical } from "../../utils";
import { Helmet } from "react-helmet";

const communitySupport = [
  {
    title: "Dealing with addiction",
    image: communitySupport1,
    desc: "Discover a supportive community of individuals overcoming addiction, and provide believe,  encouragement & understanding as you take steps toward a healthier and happier life.",
  },
  {
    title: "Living with Depression",
    image: communitySupport2,
    desc: "Connect with others & experience the transformative power of support and understanding. You will find the strength & personal growth needed to navigate the challenges of depression,",
  },
  {
    title: "Tackling Anxiety",
    image: communitySupport3,
    desc: "Embrace the strength of togetherness & find support among others tackling anxiety. Let’s share experiences & provide understanding, empowering each other to overcome anxiety.",
  },
  {
    title: "Overcoming Traumas",
    image: communitySupport4,
    desc: "Find solace and support among fellow survivors on the path to overcoming traumas. Here, you'll discover a safe space to share your journey, heal, and grow stronger together.",
  },
  {
    title: "Adulting with ADHD",
    image: communitySupport5,
    desc: "Navigate the challenges of adulting with ADHD through our community. You'll find acceptance, practical tips, and shared experiences to help you thrive here.",
  },
  {
    title: "Learning Self Love",
    image: communitySupport6,
    desc: "Dismantle negative thought patterns and cultivate a positive self-image. Support each other as we navigate the healing process, fostering a sense of belonging and acceptance.",
  },
];

export default function index() {
  return (
    <>
      <Helmet>
        <title>{COMMUNITY_META.title}</title>
        <meta name="description" content={COMMUNITY_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <header className="relative overflow-x-hidden overflow-y-clip bg-primary-50/30">
        <div className="container mx-auto text-center">
          <h1 className="subheading my-8">
            <span className="heading-primary">Escape, Heal and Thrive </span>
            <span>with the Wleness Community</span>
          </h1>

          <div className="mb-8">
            <img src={communityHeader} alt="" className="mb-10 w-full" />
            <p className="mb-5 font-bold lg:text-lg xl:px-44 xl:text-xl">
              Let's come together and build a supportive community where we
              share, grow, and heal as one.
            </p>
            <Link
              to="https://community.wleness.com/"
              target="_blank"
              className="btn-one"
            >
              Participate Now
            </Link>
          </div>
        </div>

        {/* Dots  */}
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -right-10 top-24 -z-10 hidden w-40 lg:block xl:w-72"
        />
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -left-20 bottom-32 -z-10 hidden w-44 lg:block xl:w-80"
        />
      </header>

      {/* Community Section */}
      <section className="container mx-auto lg:pt-6 xl:flex xl:items-center xl:gap-5">
        <div className="pt-5 xl:w-1/2 xl:pr-16">
          <h1 className="subheading mb-6">
            <span className="heading-primary">Wleness </span>Community
          </h1>
          <p className="mb-8 text-base font-medium lg:text-lg">
            Through our community, individuals can find solace in knowing they
            are not alone in their struggles. Whether seeking advice, sharing
            stories, or simply finding comfort in the presence of others, our
            platform offers a supportive network that embraces diversity and
            encourages personal growth.
          </p>
          <p className="text-base font-medium lg:text-lg">
            We believe everyone deserves a space to be heard, understood, and
            supported without judgment. Join us and discover the power of
            community, where you can connect with like-minded individuals and
            embark on a journey of self-discovery and empowerment.
          </p>
        </div>

        <div className="grid grid-cols-2 xl:w-1/2">
          {wlenessCommunity.map((value, i) => {
            return <CommunityCard key={i} data={value} />;
          })}
        </div>
      </section>

      {/* Support Section */}
      <section className="pt-8 text-center">
        <div className="bg-primary-50/40 p-4">
          <h1 className="subheading">
            <span>Uncover your special heaven of </span>
            <span className="heading-primary">support and belonging</span>
          </h1>
          <p className="text-base font-semibold lg:text-lg">
            Always remember sharing your struggles only makes you stronger.
          </p>
        </div>

        <div className="container mx-auto  grid gap-x-14 gap-y-8 py-12 xl:grid-cols-3">
          {communitySupport.map((value, index) => {
            return <CommunitySupportCard key={index} data={value} />;
          })}
        </div>

        <div className="pb-8 text-center">
          <Link
            to="https://community.wleness.com/"
            target="_blank"
            className="btn-one mx-auto block"
          >
            Participate Now
          </Link>
        </div>
      </section>
    </>
  );
}
