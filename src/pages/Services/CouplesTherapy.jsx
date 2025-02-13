import React, { useRef, useState } from "react";
// Data
import { couplesTherapyData } from "../../data/services";
import { couplesTherapyDoctors } from "../../data/doctors";
import { coupleTherapyClient } from "../../data/clients";
import { coupleTherapyFaq } from "../../data/faqs";
import { get_canonical, textColorize } from "../../utils";
// Components
import DoctorSlider from "../../components/DoctorSlider";
import HappyClient from "../../components/HappyClient";
import FaqWithImage from "../../components/FaqWithImage";
import Assessment from "../../components/Assessment";
import TherapyHeader from "../../components/TherapyHeader";
import { Helmet } from "react-helmet";
import { COUPLE_THERAPY_META } from "../../data/meta";

function CouplesTherapy() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);

  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const resetBookNow = () => {
    openAssessmentModal();

    setRediredurl({
      title: "Find a Therapist",
      name: "Find a Therapist",
      url: "/experts/all",
    });
  };

  return (
    <>
      <Helmet>
        <title>{COUPLE_THERAPY_META.title}</title>
        <meta name="description" content={COUPLE_THERAPY_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <TherapyHeader
        title={couplesTherapyData.header.title}
        images={couplesTherapyData.header.images}
        desc={couplesTherapyData.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        openAssessmentModal={() => resetBookNow()}
      />
      <p ref={ref}></p>

      {/* How Section  */}
      <section className="mt-8 bg-primary-10 pb-10">
        <div className="container mx-auto mt-5 rounded-2xl lg:!px-0">
          <div className="text-center">
            <h2 className="subheading py-16">
              {textColorize([
                {
                  color: false,
                  text: "Get the   ",
                },
                {
                  color: true,
                  text: "Wleness ",
                },
                {
                  color: false,
                  text: "Help for your Relationship",
                },
              ])}
            </h2>
          </div>

          <div className="grid gap-6 pb-6 pt-6 lg:grid-cols-2 lg:gap-10 lg:pt-12">
            <div className="cursor-pointer rounded-2xl border-2 border-primary-50  px-6 py-3 shadow-lg hover:bg-primary-50">
              <h6 className="text-lg font-bold">Dedicated experts team:</h6>
              <p className="text-sm font-medium lg:text-base">
                With Wleness, your relationship is in the hands of dedicated
                experts who genuinely care about your happiness and well-being.
                Get the best online couples counselling with the top
                counsellors.
              </p>
            </div>
            <div className="rounded-2xl rounded-br-[4rem] border-2 border-primary-50 bg-transparent px-6 py-3 shadow-lg hover:bg-primary-50">
              <h6 className="text-lg font-bold">Tailored Approach:</h6>
              <p className="text-sm font-medium lg:text-base">
                Experience personalised care and guidance tailored to your
                relationship's needs, ensuring meaningful progress and growth.
                From marital relationship counselling to premarital counselling,
                get the best support today!
              </p>
            </div>
            <div className="cursor-pointer  rounded-2xl border-2 border-primary-50 px-6 py-3 shadow-lg hover:bg-primary-50">
              <h6 className="text-lg font-bold ">Accessibility:</h6>
              <p className="text-sm font-medium lg:text-base">
                Wleness offers accessible support, making it easy for you and
                your partner to prioritise your relationship, no matter your
                schedule or location. Get the best online couples counselling at
                your home, at your time.
              </p>
            </div>
            <div className="rounded-2xl rounded-br-[4rem] border-2 border-primary-50 bg-transparent px-6 py-3 shadow-lg hover:bg-primary-50">
              <h6 className="text-lg font-bold">
                Safe and Non-Judgmental Space:
              </h6>
              <p className="text-sm font-medium lg:text-base">
                Step into a safe, non-judgmental space at Wleness where you and
                your partner can freely express yourselves and work through
                challenges with understanding and empathy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <DoctorSlider
        data={couplesTherapyDoctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />
      <HappyClient data={coupleTherapyClient} />
      <FaqWithImage data={coupleTherapyFaq} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      />
    </>
  );
}

export default CouplesTherapy;
