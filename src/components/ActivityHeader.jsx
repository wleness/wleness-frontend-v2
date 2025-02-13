import React from "react";
import { textColorize } from "../utils";

export default function ActivityHeader(props) {
  return (
    <>
      <header className="relative animate-fadeIn overflow-x-clip bg-secondary/10 pb-6 pt-12 xl:pb-10 xl:pt-16">
        {/* <header className="bg-gradient-to-b from-primary-50/30 to-transparent"> */}
        <div className="container relative mx-auto flex flex-col items-center rounded-3xl py-2 lg:flex-row lg:py-6 2xl:justify-between">
          <div className="mb-6 lg:order-2 lg:mb-0 lg:w-[45%] 2xl:flex 2xl:justify-end">
            {/* Desktop Image */}
            <img
              src={props.image}
              alt={props.alt}
              className="w-full scale-105 rounded-2xl object-cover"
            />
          </div>
          <div className="mb-4 rounded-3xl py-5 md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:w-[55%] lg:rounded-none xl:pl-0">
            <hgroup className="md:mb-3 xl:pr-20">
              <h1 className="subheading mb-4 text-center lg:text-left">
                {textColorize(props.title)}
              </h1>
              <h5 className="mb-8 text-center text-base font-medium md:text-lg lg:text-left">
                {props.desc}
              </h5>
            </hgroup>
            <div className="text-center lg:text-left">
              <button
                className="btn-one mr-2 hidden"
                onClick={props.handleScrollToComponent}
              >
                {props.button[0]}
              </button>
              {props.displayButton ? (
                props.isEnquiry ? (
                  <button className="btn-one" onClick={props.openEnquiry}>
                    Enquire Now
                  </button>
                ) : (
                  <button
                    className="btn-one"
                    onClick={props.handleScrollToComponent}
                  >
                    Explore More
                  </button>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
