import React, { useRef, useState } from "react";
// Data
import { MusicalTherapyData } from "../../data/services";
import { musicalTherapyClient } from "../../data/clients";
import { musicalTherapyFaq } from "../../data/faqs";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ServicesTechniques from "../../components/ServicesTechniques";
import HappyClient from "../../components/HappyClient";
import FaqWithImage from "../../components/FaqWithImage";
import Assessment from "../../components/Assessment";
import MusicalTherapyComponent from "../../components/MusicalTherapyComponent";
import ActivityForm from "../../components/Forms/ActivityForm";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import { Link } from "react-router-dom";
import { wlenessExploreTracks } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { MUSICAL_HEALING_META } from "../../data/meta";
import { get_canonical } from "../../utils";

export default function MusicalTherapy() {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);

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
  return (
    <>
      <Helmet>
        <title>{MUSICAL_HEALING_META.title}</title>
        <meta name="description" content={MUSICAL_HEALING_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <ActivityHeader
        title={MusicalTherapyData.header.title}
        image={MusicalTherapyData.header.image}
        desc={MusicalTherapyData.header.desc}
        alt={MusicalTherapyData.header.alt}
        handleScrollToComponent={() => handleScrollToComponent()}
        openAssessmentModal={openAssessmentModal}
        isEnquiry={true}
        displayButton={true}
        button={["Explore More"]}
        openEnquiry={toggleForm}
      />
      <p ref={ref}></p>
      <ServicesTechniques
        title={MusicalTherapyData.activities.title}
        desc={MusicalTherapyData.activities.desc}
        types={MusicalTherapyData.activities.types}
        openAssessmentModal={openAssessmentModal}
        openEnquiry={toggleForm}
      />

      <section className="container mx-auto mb-6 lg:flex xl:mb-12">
        <div className="relative z-20">
          <img
            src={wlenessExploreTracks}
            alt="Wleness - Music Healing Tracks for Peace and Relaxation"
            className="md:w-96 xl:w-80"
          />
          <Link
            to="/services/music-healing/tracks"
            className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-300 lg:h-10 lg:w-10">
              <FontAwesomeIcon icon={faPlay} className="text-white" />
            </span>
          </Link>
        </div>

        <div className="z-10 flex flex-col justify-center rounded-2xl bg-primary-50/30 px-4 py-8 text-left lg:-ml-20 xl:px-8">
          <div className=" mx-auto xl:w-4/5">
            <h2 className="mb-2 text-lg font-semibold xl:text-2xl">
              Wleness has launched some special tracks for peace and relaxation
            </h2>
            <p className="font-medium">
              Discover our music tracks for calm and meditative mind which
              brings a sense of direction and clarity as well
            </p>
            <div className="text-right">
              <Link
                to="/services/music-healing/tracks"
                className="font-bold uppercase text-primary-400 transition-all hover:underline lg:text-xl"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MusicalTherapyComponent />
      <HappyClient data={musicalTherapyClient} />
      <FaqWithImage data={musicalTherapyFaq} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />

      <ActivityForm
        purpose={MusicalTherapyData.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}
