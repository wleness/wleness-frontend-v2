import React from "react";

export default function FeaturesBlock(props) {
  return (
    <section className="container mx-auto my-5 grid  grid-cols-3 rounded-2xl bg-primary-10 px-6 py-4 text-center">
      {props.data.map((value, index) => {
        return (
          <div key={index}>
            <img
              src={value.image}
              alt="Icon 2"
              className="mx-auto mb-2 h-8 w-8 object-contain lg:h-12 lg:w-12"
            />
            <h4 className="text-xs font-bold lg:text-lg">{value.name}</h4>
          </div>
        );
      })}
    </section>
  );
}
