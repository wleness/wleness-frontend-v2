import React, { useEffect, useState } from "react";
import ActivityHeader from "../../components/ActivityHeader";
import {
  musicHealingTrack1,
  musicHealingTrack2,
  musicHealingTrack3,
  musicHealingTrack4,
  ocdHeader,
} from "../../assets";
import MusicTracksCard from "../../components/Cards/MusicTracksCard";
import { useNavigate } from "react-router-dom";

const musicHealingTracks = [
  {
    name: "Aadhyatma",
    desc: "Spirituality. (Through the notes of Raag Bhairavi)",
    audio: "https://youtu.be/u9k6DJQUC24",
    image: musicHealingTrack1,
  },
  {
    name: "Mandar Ki Thaap",
    desc: "Folk Percussion instrument , along with humming",
    audio: "https://youtu.be/2S4PLSQlx3c",
    image: musicHealingTrack2,
  },
  {
    name: "Pain, Visualisation",
    desc: "The track is to deviate from any pain perception",
    audio: "https://youtu.be/LoqrKEAU_GU",
    image: musicHealingTrack3,
  },
  {
    name: "To The Nature",
    desc: "Intermittent mandar sound from afar which takes you to forest",
    audio: "https://youtu.be/qFK2nGvTBbQ",
    image: musicHealingTrack4,
  },
];

export default function MusicalHealingTracks({ token }) {
  const navigate = useNavigate();

  const validateLogin = (url) => {
    // Redirect user if loggedin
    if (token == null || token == "" || token == undefined) {
      // Navigate to login
      navigate("/login", {
        state: {
          successMessage: "Please Login",
        },
      });
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <ActivityHeader
        title={[
          {
            color: false,
            text: "Explore our ",
          },
          {
            color: true,
            text: "Music Healing ",
          },
          {
            color: false,
            text: "Bundles",
          },
        ]}
        image={ocdHeader}
        desc="An apparently simple, easy to process tracks, which takes you to the nature, peace and calm with intermittent mandar sound from afar. This can be experienced after a hectic, tiring day at work or when we wish to relax and feel fresh. It helps in creating an atmosphere of relaxation and inner reflection, aiding in achieving a deeper state of meditation."
        button={[""]}
      />

      <section className="container mx-auto mb-10 px-4 py-8">
        <div className="mb-6 text-center lg:py-4 xl:mb-10">
          <h2 className="subheading">
            Our <span className="heading-primary">Musical Healing</span> Tracks
          </h2>
        </div>

        <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-4 xl:grid-cols-4 xl:gap-10">
          {musicHealingTracks.map((value, i) => {
            return (
              <MusicTracksCard key={i} data={value} onclick={validateLogin} />
            );
          })}
        </div>
      </section>
    </>
  );
}
