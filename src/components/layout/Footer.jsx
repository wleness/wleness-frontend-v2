import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  footerAboutWleness,
  footerOurServices,
  footerFocusAreas,
  footerOurExperts,
  footerLocation,
  socialLinks,
  usefulLinks,
} from "../../data/navigation";
import { Link } from "react-router-dom";
import {
  iconAndroid,
  iconIOS,
  logoIAF,
  logoISO,
  startUpIndiaLogo,
} from "../../assets";

export default function Footer() {
  return (
    <>
      {/* ========== Footer ========== */}
      <footer className="border-b-[1px] bg-[#E9FBF9] font-medium">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-4 sm:space-y-0 lg:grid-cols-5 xl:pb-0">
            <div className="2xl:pr-5">
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                Location
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLocation.map((value, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={value[1]}
                        className="flex items-center text-xs md:text-sm"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={value[2]} className="mr-3" />
                        <span className="font-medium">{value[0]}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:pl-7">
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                About Wleness
              </h4>
              <ul className="md:space-y-1">
                {footerAboutWleness.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-xs md:text-sm" to={value[1]}>
                        {value[0]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:pl-3">
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                Our Services
              </h4>
              <ul className="md:space-y-1">
                {footerOurServices.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-xs md:text-sm" to={value[1]}>
                        {value[0]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                Situations
              </h4>
              <ul className="md:space-y-1">
                {footerFocusAreas.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-xs md:text-sm" to={value[1]}>
                        {value[0]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-span-2 !flex lg:col-span-1 lg:flex-col">
              <div className="w-1/2 lg:mb-4 lg:w-full">
                <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                  Our Experts
                </h4>
                <ul className="md:space-y-1">
                  {footerOurExperts.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link className="text-xs md:text-sm" to={value[1]}>
                          {value[0]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="w-1/2 pl-2.5 lg:w-full lg:pl-0">
                <h4 className="mb-2 text-lg font-semibold md:my-2 lg:text-xl">
                  Library
                </h4>
                <ul className="md:space-y-1">
                  <li>
                    <Link className="text-xs md:text-sm" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="text-xs md:text-sm" to="/assessment">
                      Assessments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mb-6 border-y-2 border-slate-300 py-8">
          <h4 className="mb-2 text-center text-lg font-semibold md:mb-4 lg:text-xl">
            Useful Links
          </h4>

          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {usefulLinks.map((value, i) => {
              return (
                <li key={i}>
                  <Link
                    to={value[1]}
                    className="text-sm font-semibold text-blue-500 underline"
                  >
                    {value[0]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container mx-auto pb-1 lg:pb-4">
          <div className="pb-2 text-center text-[13px] md:text-right">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span> | </span>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <span> | </span>
            <Link to="/cancellation">Cancellation</Link>
          </div>
          <div className="items-center justify-between md:flex">
            <div className="flex justify-center gap-x-4">
              <img
                src={startUpIndiaLogo}
                alt=""
                className="w-32 object-contain"
              />
              <img src={logoIAF} alt="" className="w-14 object-contain" />
              <img src={logoISO} alt="" className="w-10 object-contain" />
            </div>

            <div className="my-5 flex justify-center">
              <h4 className="mr-2 text-center text-lg font-semibold lg:text-xl">
                We are launching soon
              </h4>
              <div className="flex justify-center space-x-2">
                <img src={iconAndroid} alt="" className="w-7 object-contain" />
                <img src={iconIOS} alt="" className="w-7 object-contain" />
              </div>
            </div>

            <div className="my-3 flex items-center justify-center gap-x-2">
              {socialLinks.map((value, i) => {
                return (
                  <Link key={i} to={value[1]} target="_blank">
                    <FontAwesomeIcon
                      icon={value[0]}
                      className="text-2xl text-slate-400 hover:text-primary-400"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container mx-auto mb-5 space-y-4 text-justify text-xs text-slate-600 lg:mb-0">
          <p>
            Wleness does not cover emergencies in medicine or psychology. We do
            not intend to support those in distress, such as when they have
            suicidal or self-harming thoughts or exhibit signs of severe
            clinical disorders like schizophrenia and other psychotic ailments.
            The best type of assistance in these situations is in-person medical
            assistance. In case you believe you are going through any of these
            issues, we strongly advise you to go to the hospital or emergency
            room that is most convenient for you and speak with a therapist,
            social worker, or psychiatrist in person. We also advise including a
            close relative or friend who can provide support.
          </p>
          <p>
            You can also get in touch with a suicide hotline in your home
            nation:
          </p>
          <ul>
            <li>
              <Link
                className="mb-2 font-semibold hover:text-primary-400"
                to="http://healthcollective.in/contact/helplines/"
              >
                http://healthcollective.in/contact/helplines/
              </Link>
            </li>
            <li className="font-semibold">
              <span className="text-primary-400">Toll-free number: </span>
              <span>080 - 4611 0007</span>
            </li>
          </ul>
        </div>

        <p className="pb-5 text-center text-sm font-medium lg:pt-3">
          @2023 Wleness || All Rights Reserved
        </p>
      </footer>
    </>
  );
}
