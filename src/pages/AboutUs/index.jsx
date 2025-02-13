import React, { useState } from "react";
import { Link } from "react-router-dom";
import { about3, about6, problem, aboutusHeader } from "../../assets";
import DummyComponent from "../../components/AboutUsDrop";
import TeamComponent from "./TeamComponent";
import PartnerWithUs from "../../components/Forms/PartnerWithUs";
import { Helmet } from "react-helmet";
import { ABOUT_META } from "../../data/meta";
import { get_canonical } from "../../utils";

function AboutUs() {
  const [partnerWithUs, setPartnerWithUs] = useState(false);

  // Toggle form
  const toggleForm = () => {
    setPartnerWithUs(!partnerWithUs);
  };

  return (
    <main>
      <Helmet>
        <title>{ABOUT_META.title}</title>
        <meta name="description" content={ABOUT_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <header
        className="relative bg-cover bg-center bg-no-repeat brightness-90 lg:bg-top"
        style={{
          backgroundImage: `url(${aboutusHeader}) `,
        }}
      >
        <div className="mx-auto flex flex-col  bg-black bg-opacity-20 py-16  lg:flex-row lg:py-32">
          <div className="absolute inset-0"></div>
          <div className="space-y-4 px-4 sm:w-full lg:order-1 lg:ml-56 lg:w-1/2 lg:space-y-6 lg:px-0 lg:pr-44">
            <h1 className="text-[42px] font-semibold text-white brightness-105">
              About <span className="heading-primary !text-white">Wleness</span>
            </h1>
            <p className="brightness-10 relative z-10 w-full text-base font-semibold text-white">
              At Wleness, we believe in nurturing the harmony of mind, body, and
              soul, guiding you on a transformative journey towards holistic
              well-being. Embrace a life of vitality, balance, and inner peace
              as you explore a diverse array of resources, practices, and expert
              insights curated to elevate every facet of your wellness.
            </p>
            <p className="relative z-10 w-full text-base font-semibold text-white">
              By leveraging technology, Wleness connects users with licensed
              mental health professionals via a secure online platform, making
              it easier for people to receive support from the comfort of their
              own homes.
            </p>
            <p className="relative z-10 w-full text-base font-semibold text-white">
              The organization aims to establish a comprehensive mental health
              ecosystem offering treatment and tailored care plans for a
              spectrum of mental health conditions, including but not limited to
              anxiety, depression, bipolar disorder, ADHD, OCD, schizophrenia,
              and addictions.
            </p>
          </div>
        </div>
      </header>

      <section className="container mx-auto mb-4 mt-5 text-center lg:mt-7 lg:py-8">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="my-auto w-full text-left lg:order-2 lg:w-1/2 lg:text-left">
            <h2 className="subheading mb-2 font-semibold">
              <span>Unmasking the </span>
              <span className="heading-primary"> Challenges</span>
            </h2>
            <p className="text-base font-medium lg:text-lg">
              In today's fast-paced world, the demands of modern life, coupled
              with the pervasive influence of digital devices and social media,
              can amplify feelings of stress, anxiety, and isolation. While
              therapy is a potential solution, it's not always accessible due to
              costs, societal stigmas, or geographical barriers. The digital age
              calls for comprehensive, affordable mental health solutions that
              transcend these limitations, yet a unified platform addressing
              holistic wellness remains elusive, forcing individuals to search
              across various forums.
            </p>
          </div>

          <div className="mx-auto my-auto w-full lg:order-1 lg:w-1/2">
            <img
              src={problem}
              alt="Wleness - Unmasking The Challenges"
              className="mx-auto w-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse justify-center border-4 border-secondary/10 md:flex-row">
        <div className="container mx-auto my-auto w-full bg-secondary/10 py-8 text-center md:w-3/4">
          <div className="my-4 text-left md:ml-40 lg:ml-24 xl:ml-40">
            <h2 className="subheading">
              <span>Charting the path </span>
              <span className="heading-primary"> Forward</span>
            </h2>
          </div>
          <div className="w-full text-left md:ml-40 md:mr-0 md:w-3/5 lg:mb-12 lg:ml-24 xl:ml-40">
            {/* <ul className="list-disc ">
              <li className="item-start  flex ">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />
                <span className="font-semibold">
                  Wleness addresses the concerns with a 360-degree view and
                  provides a single platform for all one needs.{" "}
                </span>
              </li>
              <li className=" flex items-start py-1">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />{" "}
                <span className="font-semibold">
                  Wleness uses advanced telehealth technology to connect users
                  with licensed professionals, overcoming geographical barriers
                  and offering personalised solutions.{" "}
                </span>
              </li>
              <li className="flex items-start py-1">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />{" "}
                <span className="font-semibold">
                  {" "}
                  Wleness offers alternative healing techniques like Music
                  Healing and Sadhna, differing from the traditional
                  counseling-only approach.{" "}
                </span>
              </li>
              <li className="flex items-start py-1">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />
                <span className="font-semibold">
                  It provides a supportive, anonymous community for open
                  conversations about mental wellness.
                </span>
              </li>
              <li className="flex items-start py-1">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />{" "}
                <span className="font-semibold">
                  Wleness recognises the value of life and executive coaching in
                  personal and professional growth.{" "}
                </span>
              </li>
              <li className="flex items-start py-1">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />{" "}
                <span className="font-semibold">
                  Life and executive coaching services are available to help
                  users unlock their potential, overcome challenges, and reach
                  their goals.{" "}
                </span>
              </li>
            </ul> */}
            <p className="text-base font-medium lg:text-lg">
              Wleness delivers a comprehensive approach to well-being,
              consolidating essential resources into one unified platform.
              Utilizing cutting-edge telehealth technology, Wleness bridges
              distances by linking users with certified experts, ensuring
              tailored interventions. Beyond conventional counseling, Wleness
              introduces innovative healing modalities such as Music Healing and
              Sadhna. In fostering a secure, anonymous space, it encourages
              candid discussions on mental health. Additionally, Wleness
              underscores the significance of life and executive coaching,
              empowering individuals to surmount obstacles, realize their
              potential, and achieve their aspirations.
            </p>
          </div>
        </div>
        <div className="mx-auto my-auto transform md:mt-0 md:translate-x-0 lg:my-auto lg:-translate-x-32 lg:text-center">
          <img
            src={about6} // Replace with your image URL
            alt="Wleness - Charting the path Forward"
            className=""
          />
        </div>
      </section>

      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="px-6 py-6 text-lg font-semibold text-emerald-600 sm:px-12 sm:py-10 sm:text-xl md:px-24 md:py-14 md:text-2xl lg:px-48">
          "At every stage of your mental health journey, Wleness stands by your
          side, committed to helping you not just feel better, but truly become
          better and remain better."
        </p>
        <h2 className="subheading mx-auto mb-2 text-lg sm:mb-4 sm:text-xl md:text-4xl">
          <span className="heading-primary">Wleness’s</span> way of crafting
          your journey
        </h2>
      </div>

      <div className="container  mx-auto flex flex-col items-center gap-4 pb-6 sm:flex-row">
        <div className="order-2 w-full sm:w-1/2 lg:w-1/2">
          <DummyComponent />
        </div>
        <div className="order-1 mb-4 flex w-full items-center justify-center sm:w-1/2 lg:order-2">
          <img
            src={about3}
            alt="Wleness's way of crafting your journey"
            className="w-2/3 lg:w-full"
          />
        </div>
      </div>

      <div className="relative overflow-x-clip bg-secondary/20  xl:pb-4 xl:pt-4">
        <div className="container mx-auto  text-center">
          <h1 className="subheading mx-auto  text-lg sm:mb-4 sm:text-xl md:text-4xl">
            Meet the <span className="heading-primary">Visionaries</span> behind
            Wleness
          </h1>
          <p className="para">
            Wleness is guided, shaped, and overseen by a diverse collective of
            individuals united by a shared mission: providing exceptional mental
            healthcare to all in need.
          </p>
        </div>
        <TeamComponent />
      </div>

      <PartnerWithUs isOpen={partnerWithUs} onClose={toggleForm} />
    </main>
  );
}

export default AboutUs;
