import React from "react";

export default function HeaderWithImage(props) {
  return (
    <header className="container mx-auto flex flex-col items-center pb-6 lg:flex-row">
      <div className="py-4 lg:order-2 lg:w-1/2">
        <img
          src={props.data.image}
          alt={props.data.alt}
          className="object-cover p-4 lg:p-8"
        />
      </div>
      <div className="lg:order-1 lg:w-1/2">
        <h1 className="subheading">
          <span className="heading-primary">{props.data.title}</span>
        </h1>
        <p className="para pt-1 lg:pt-6">{props.data.desc}</p>

        {props.data.variations ? (
          <div className="mb-8">
            <h2 className="pt-8 text-2xl font-bold text-primary-500 lg:pt-20">
              Variations:
            </h2>
            <p className="para">{props.data.var}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
