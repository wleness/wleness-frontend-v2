import React, { useRef, useState } from "react";
import {
  dottedRing,
  portrait_benefits_of_yoga,
  yogaSubscriptionHeader,
  yoga__TherapauticYoga,
  yoga__montly_subscription,
  yoga__one_time_session,
} from "../../assets";
import YogaSlider from "../../components/Carousels/YogaSlider";
import { Helmet } from "react-helmet";
import { YOGA_SUBSCRIPTION_META } from "../../data/meta";
import FaqWithImage from "../../components/FaqWithImage";
import { yogaSubscriptionFaqs } from "../../data/faqs";
import YogaUserDetailsForm from "../../components/Forms/YogaUserDetailsForm";
import { get_canonical, textColorize } from "../../utils";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import CoachRequestForm from "../../components/Forms/CoachRequestForm";
import FeaturedIn from "../../components/Sections/FeaturedIn";
import HappyClient from "../../components/HappyClient";
import { yogaSubscriptionClients } from "../../data/clients";
import YogaGuidedPath from "../../components/Activities/YogaGuidedPath";
import YogaSession from "../../components/Activities/YogaSession";

function YogaSubscription() {
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>{YOGA_SUBSCRIPTION_META.title}</title>
        <meta name="description" content={YOGA_SUBSCRIPTION_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <header className="relative overflow-hidden bg-primary-50/40 py-2 lg:py-6 2xl:mb-4 2xl:py-16">
        <div className="container mx-auto flex flex-col items-center lg:flex-row 2xl:justify-between">
          <div className="relative mx-auto mb-6 lg:order-2 lg:mb-0 lg:w-[450px]">
            {/* Desktop Image */}
            <img
              src={yogaSubscriptionHeader}
              alt="Yoga header image"
              className="w-full object-cover"
            />
            <img
              src={dottedRing}
              alt="dotted ring"
              className="absolute -right-10 -top-10 -z-10 w-52 opacity-50 lg:w-72"
            />
            <div className="absolute bottom-2 left-5 flex h-24 w-24 -rotate-12 flex-col items-center justify-center rounded-full bg-primary-400 text-center">
              <p className="text-lg font-bold text-white">JUST @</p>
              <p className=" text-white">
                ₹ <span className="text-2xl font-extrabold">99</span>
              </p>
            </div>
          </div>
          <div className="mb-6 md:mb-6 lg:order-1 lg:mb-0 lg:w-1/2 lg:pr-16 xl:pl-4">
            <hgroup>
              <h1 className="subheading">
                {textColorize([
                  {
                    color: false,
                    text: "An Asana a Day ",
                  },
                  {
                    color: true,
                    text: "Keeps the Stress Away",
                  },
                ])}
              </h1>
            </hgroup>
            <ul className="list-disc pl-4 text-xs font-semibold lg:flex lg:space-x-6">
              <li>Beginner friendly</li>
              <li>Yoga for stress & anxiety</li>
              <li>Yoga for diabetes</li>
            </ul>
            <div className="my-6 font-medium lg:my-10 xl:pr-12">
              Unlock a happier and healthier version of yourself with our easy
              and enjoyable yoga classes. Boost your happiness and well-being
              through simple practices. Join us on this journey to a better you!
            </div>
            <div className="mb-6 flex justify-center space-x-5 text-sm md:justify-start lg:mb-8 lg:space-x-14">
              <div className="flex flex-col justify-center rounded-xl bg-primary-400 px-6 py-3 xl:px-8 xl:py-5">
                <p className="mb-2 rounded-lg bg-white px-2 text-center font-semibold text-primary-400">
                  Duration
                </p>
                <p className="text-lg font-semibold text-white">60 mins</p>
              </div>
              <div className="rounded-xl bg-primary-400 px-6 py-3 text-center xl:px-8 xl:py-5">
                <p className="mb-2 rounded-lg bg-white px-2 text-center font-semibold text-primary-400">
                  Day
                </p>
                <p className="text-lg font-semibold text-white">Sat-Sun</p>
                <small className="font-semibold text-white">
                  4th, 10th, 11th Feb
                </small>
              </div>
            </div>

            <div className="text-center xl:text-left">
              <button
                className="btn-one lg:!px-14"
                onClick={() => handleScrollToComponent()}
              >
                Book Your Session
              </button>
            </div>
          </div>
        </div>

        <img
          src={dottedRing}
          alt="design ring"
          className="absolute -bottom-20 -left-20 -z-10 w-72 opacity-50 lg:w-96"
        />
      </header>

      <div ref={ref}></div>

      <YogaSession
        title={[
          {
            color: false,
            text: "Book Your ",
          },
          {
            color: true,
            text: "Session ",
          },
        ]}
        one_time={true}
        one_month={true}
      />

      <YogaGuidedPath
        title={[
          {
            color: false,
            text: "Your Guided ",
          },
          {
            color: true,
            text: "Yoga Path ",
          },
        ]}
      />

      <section className="container relative mx-auto mb-5 lg:mb-10">
        <div className="pb-6 pt-4 text-center sm:pt-6 lg:pb-14 2xl:pb-8">
          <h1 className="subheading sm:pb-0 lg:mb-4">
            {textColorize([
              {
                color: false,
                text: "Yoga ",
              },
              {
                color: true,
                text: "Benefits ",
              },
            ])}
          </h1>
          <p className="para">Here's a list of why you should join a course</p>
          <span className="inline-block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
        <div className="grid items-center lg:grid-cols-3">
          <div>
            <ul className="mb-7 list-disc pl-6 font-semibold text-slate-500 lg:mb-0 lg:list-none lg:space-y-3 lg:pl-0 lg:text-right xl:text-lg">
              <li>Learn essential yoga</li>
              <li>Spend 15 minutes a day</li>
              <li>Develops and equlibro your chakras</li>
              <li>Learn seven energy levels</li>
              <li>Refreshens your body and soul</li>
              <li>Learn meditation techniques</li>
            </ul>
          </div>
          <div>
            <img
              src={portrait_benefits_of_yoga}
              className="mx-auto w-96 object-cover"
              alt="Benefits of yoga"
            />
          </div>
          <div>
            <ul className="mt-7 list-disc pl-6 font-semibold text-slate-500 lg:mt-0 lg:list-none lg:space-y-3 xl:text-lg">
              <li>Heal your emotions, be happy</li>
              <li>Transform your thinking habits</li>
              <li>Strengthen your health and body</li>
              <li>Learn about ayurvedic medicines</li>
              <li>Studied and applied in everday life</li>
              <li>And much more</li>
            </ul>
          </div>
        </div>
      </section>

      <FeaturedIn />
      <YogaSlider />

      <section className="container relative mx-auto mb-5 lg:mb-10">
        <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
          <h1 className="subheading sm:pb-0 lg:mb-4">
            {textColorize([
              {
                color: false,
                text: "About ",
              },
              {
                color: true,
                text: "Yoga Classes ",
              },
            ])}
          </h1>
          <p className="para">
            An experienced trainer who will teach the best.
          </p>
          <span className="inline-block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
        <div className="grid items-center md:grid-cols-2">
          <div>
            <img
              src={yoga__TherapauticYoga}
              className="mx-auto mb-6 w-80 lg:mb-0"
              alt="about yoga instructor"
            />
          </div>
          <div className="space-y-5 lg:pr-14">
            <p className="font-semibold">
              <strong className="text-primary-300">
                Best Yoga Instructor:
              </strong>
              Discover the goodness of yoga with our skilled teachers. Whether
              you're a beginner or somewhere between, our sessions are
              personalised. Improve your well-being, flexibility, strength, and
              focus while reducing stress. Join us for a fulfilling journey
              towards a healthier you!
            </p>
            <p className="font-semibold">
              <strong className="text-primary-300">Transform Yourself: </strong>
              Join us for a unique experience and get ready to do more advanced
              yoga. These classes help you match what you want with what you do.
              Perfect for people who wish yoga to be a regular part of their
              life.
            </p>
            <p className="font-semibold">
              <strong className="text-primary-300">Beginner Friendly: </strong>
              Our classes are made to help you learn about your mind and body
              through easy steps. Each lesson teaches the basics of yoga for
              good health. It's all about building a solid foundation in yoga
              poses, breathing, and meditation in a friendly learning
              environment.
            </p>
          </div>
        </div>
      </section>

      <section className="container relative mx-auto mb-5 hidden lg:mb-10">
        <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
          <h1 className="subheading sm:pb-0 lg:mb-4">
            {textColorize([
              {
                color: false,
                text: "Watch ",
              },
              {
                color: true,
                text: "Yoga ",
              },
              {
                color: false,
                text: "Video",
              },
            ])}
          </h1>
          <p className="para">
            Have a sneak peak to what you get from our yoga class
          </p>
          <span className="inline-block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
        <div></div>
      </section>

      <CoachRequestForm name="Yoga Subscription" title="Book Yoga Session" />
      <HappyClient data={yogaSubscriptionClients} />
      <FaqWithImage data={yogaSubscriptionFaqs} />
    </>
  );
}

export default YogaSubscription;
