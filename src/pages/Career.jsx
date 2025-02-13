import React from "react";
import { email, location, ringervolume } from "../assets";
import CareerForm from "../components/Forms/CareerForm";

export default function Career() {
  return (
    <>
      <header className="relative overflow-x-clip bg-gradient-to-b from-secondary/10 to-transparent pb-5 pt-12">
        <div className="container mx-auto text-center">
          <h1 className="subheading heading-primary">Career</h1>
          <p className="text-lg font-semibold text-primary-400">
            Explore our avenues to kickstart your career
          </p>
        </div>
      </header>

      <section className="container mx-auto space-y-5 py-8 font-medium">
        <CareerForm />
      </section>
    </>
  );
}
