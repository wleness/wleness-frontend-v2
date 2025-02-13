import React from "react";
import { doctorDashboard } from "../../assets";

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-primary-50/50 to-transparent py-10">
      <div className="container mx-auto xl:mb-6">
        <div className="pb-3 text-center">
          <h2 className="subheading">
            How it <span className="heading-primary">works</span>
          </h2>
        </div>
        <div className="gap-x-6 xl:flex">
          <div className="mb-4 xl:order-2 xl:mb-0 xl:w-1/2">
            <img src={doctorDashboard} alt="" className="drop-shadow-xl" />
          </div>
          <div className="space-y-10 p-2 xl:order-1 xl:w-1/2 xl:self-center xl:p-0">
            <div>
              <h4 className="mb-1 text-xl font-bold text-primary-400">Apply</h4>
              <p className="font-semibold">
                Our team will contact you for further processing.
              </p>
            </div>
            <div>
              <h4 className="mb-1 text-xl font-bold text-primary-400">
                Onboard
              </h4>
              <p className="font-semibold">
                Our team will insure smooth onboarding process for you.
              </p>
            </div>
            <div>
              <h4 className="mb-1 text-xl font-bold text-primary-400">
                Expand Your Client Base
              </h4>
              <p className="font-semibold">
                You can typically begin seeing clients on Wleness Therapy within
                1 to 4 months, on average you can expect 50% increase in ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
