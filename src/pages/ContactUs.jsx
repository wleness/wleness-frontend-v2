import React from "react";
import { about1, about4, meeting } from "../assets";
import ContactForm from "../components/Forms/ContactForm";
import { Helmet } from "react-helmet";
import { get_canonical } from "../utils";
import { CONTACT_US_META } from "../data/meta";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>{CONTACT_US_META.title}</title>
        <meta name="description" content={CONTACT_US_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <header className="relative overflow-x-clip bg-gradient-to-b from-secondary/10 to-transparent pb-5 pt-12">
        <div className="container mx-auto text-center">
          <h1 className="subheading heading-primary">Contact Us</h1>
          <p className="text-lg font-semibold text-primary-400">
            Reach Out for Support and Guidance
          </p>
        </div>
      </header>

      <section className="container mx-auto space-y-5 py-8 font-medium">
        <ContactForm />
        <div>
          <div className="my-6 text-center">
            <h1 className="subheading heading-primary">
              Have a question? Talk to us
            </h1>
          </div>

          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <img className="mx-auto" src={about1}></img>
              <h2 className="text-lg font-semibold text-primary-400">
                Email Us At
              </h2>
              <h3 className="font-bold">hello@wleness.com</h3>
              <p className="font-semibold">
                We'll get back to you within 24Hrs
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto" src={about4}></img>
              <h2 className="text-lg font-semibold text-primary-400">
                Visit Us At
              </h2>
              <h3 className="font-bold">Spring House, Plot 2, Sec 43</h3>
              <p className="font-semibold">
                Golf - Course Road, Gurgaon - 122002
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto" src={meeting}></img>
              <h2 className="text-lg font-semibold text-primary-400">
                Call Us At
              </h2>
              <h3 className="font-bold">+91 9147047488</h3>
              <p className="font-semibold">Call between 10 AM to 6 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
