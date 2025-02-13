import React from "react";
import HeaderWithImage from "../../components/HeaderWithImage";
import Objectives from "../../components/Objectives";
import HappyClient from "../../components/HappyClient";
import { yogaClients } from "../../data/clients";
import YogaSlider from "../../components/Carousels/YogaSlider";

const benefits = [
  "Yoga promotes relaxation, reducing the impact of daily stressors.",
  "Regular practice enhances flexibility, helping in better overall body movement.",
  "Yoga encourages mindfulness, sharpening mental clarity and concentration.",
  "It boosts energy by improving circulation and promoting a sense of energy.",
  "Yoga poses strengthen core muscles, contributing to improved posture.",
  "The combination of breath control and movement helps regulate emotions.",
  "Yoga provides a holistic approach, benefiting both body and mind.",
];

function YogaSubpage(props) {
  return (
    <>
      <HeaderWithImage
        data={{
          title: props.data.title,
          image: props.data.thumbnail,
          desc: props.data.desc,
        }}
      />
      <Objectives />

      <section className="container mx-auto grid py-6 lg:grid-cols-2 lg:gap-x-5">
        <div className="mb-4 rounded-xl bg-primary-10 p-5 lg:mb-0 lg:p-10">
          <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
            Why Wellness through Yoga ?
          </h2>
          {/* <ul>
            {props.data.benefits.map((value, i) => {
              return (
                <li className="mb-2 list-disc text-sm font-semibold">
                  {value}
                </li>
              );
            })}
          </ul> */}
          <ul>
            {benefits.map((value, i) => {
              return (
                <li key={i} className="mb-2 list-disc text-sm font-semibold">
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rounded-xl bg-primary-50 p-5 lg:p-10">
          <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
            Wellness through Yoga
          </h2>
          <p className="font-semibold">
            Wleness introduces its elite program of 'Wellness through Yoga'.
            Join us Every Weekend (Saturday and Sunday) for enjoying and finding
            your inner peace, among the hustle of your everyday life.
          </p>
          <h4 className="mb-2 mt-4 text-lg font-semibold">Weekend Batches :</h4>
          <ul className="text-sm">
            <li className="mb-2 flex justify-between font-semibold">
              <span>Morning</span>
              <span>6:00 AM - 10:00 AM</span>
            </li>
            <li className="mb-2 flex justify-between font-semibold">
              <span>Evening</span>
              <span>5:00 PM - 7:00 PM</span>
            </li>
          </ul>
          <h4 className="mb-2 mt-4 text-lg font-semibold">Pricing :</h4>
          <ul className="text-sm">
            <li className="mb-2 flex justify-between font-semibold">
              <span>1 Session</span>
              <span>Rs. 599</span>
            </li>
            <li className="mb-2 flex justify-between font-semibold">
              <span>4 Session</span>
              <span>Rs. 2390</span>
            </li>
            <li className="mb-2 flex justify-between font-semibold">
              <span>10 Session</span>
              <span>Rs. 5999</span>
            </li>
            <li className="mb-2 flex justify-between font-semibold">
              <span>Group Session</span>
              <span>Rs. 399</span>
            </li>
          </ul>
        </div>
      </section>

      <YogaSlider />

      <HappyClient data={yogaClients} />
    </>
  );
}

export default YogaSubpage;
