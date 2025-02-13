import React, { useState } from "react";
import { whyWleness } from "../../assets";
import { whyChooseUs } from "../../data";

function HomeWhyWleness() {
  const [selected, setSelected] = useState(whyChooseUs[0].title);

  return (
    <section className="container mx-auto mb-10 grid items-center gap-5 lg:mb-14 lg:grid-cols-2">
      <div className="p-6">
        <img
          src={whyWleness}
          alt="Why wleness wellbeing"
          className="rounded-xl"
        />
      </div>
      <div>
        <div className="text-center lg:text-left">
          <h3 className="subheading">
            <span>Why wleness and </span> <br />
            <span className="heading-primary">what it solves for you</span>
          </h3>
          <p className="para mb-8 mt-4 text-lg font-medium">
            Wleness is growing community working towards changing the way
            individuals think & act about problems related to Mental Health.
            Managed by the current generation.
          </p>
        </div>
        <div className="space-y-4">
          {whyChooseUs.map((value, i) => {
            return (
              <div
                onClick={() => setSelected(value.title)}
                className="flex cursor-pointer rounded-xl bg-slate-100 px-6 py-4 transition-all hover:bg-slate-200"
                key={i}
              >
                <img
                  className="mr-3 h-6 w-6 object-contain"
                  src={value.image}
                  alt={value.alt}
                />
                <div>
                  <h2 className="font-semibold">{value.title}</h2>
                  <p
                    className={`my-4 text-sm font-semibold text-slate-500 ${
                      selected == value.title ? "block" : "hidden"
                    }`}
                  >
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeWhyWleness;
