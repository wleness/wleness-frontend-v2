import React from "react";

export default function CoachCertificates({ certificates }) {
  return (
    <section className="container mx-auto my-8 text-center">
      <h2 className="subheading my-4 text-center">Certifications</h2>
      <div className="my-10 text-center">
        <div className="certificate-container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {certificates.map((value, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-teal-400 bg-white p-4 text-sm font-semibold text-teal-400 shadow-md hover:bg-teal-400 hover:text-white lg:text-base"
            >
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
