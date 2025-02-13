import React from "react";
import { issuesHeader } from "../../assets";
import { therapies } from "../../data";
import { Link } from "react-router-dom";
import IssueCard from "../../components/Cards/IssueCard";

function Issues() {
  return (
    <>
      <header className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:flex-row lg:py-6 2xl:justify-between 2xl:pb-0 2xl:pt-14">
        <h1 className="subheading mb-4 text-center lg:hidden lg:text-left lg:leading-[4rem]">
          <span className="heading-primary block pb-1 lg:inline-block">
            Facing Issues
          </span>
          <span className="text-[#383838] lg:block">Let's Talk</span>
        </h1>
        <div className="mb-6 lg:order-2 lg:mb-0 lg:w-[45%] 2xl:flex 2xl:justify-end">
          {/* Desktop Image */}
          <img src={issuesHeader} alt="" className="w-full object-cover" />
        </div>
        <div className="mb-6 md:mb-6 lg:order-1 lg:mb-0 lg:w-[55%] lg:pr-16 xl:pl-4">
          <hgroup className="md:mb-3">
            <h1 className="subheading mb-4 hidden text-center lg:block lg:text-left lg:leading-[4rem]">
              <span className="heading-primary block pb-1 lg:inline-block">
                Facing Issues
              </span>
              <span className="text-[#383838] lg:block">Let's Talk</span>
            </h1>
          </hgroup>
          <p className="mb-8 text-justify font-semibold">
            Mental health is just as important as physical health; seeking help
            is a sign of strength. Our team of top therapists understands that
            everyone's mental health journey is different and strives to provide
            individualized care and support. We can help you find the resources
            and support you need to improve your mental well-being.
          </p>
        </div>
      </header>

      <section className="container mx-auto p-4 lg:py-10 xl:pt-0">
        {/* <div className="flex flex-wrap justify-center mb-6">
          <span className="text-3xl font-semibold text-primary-300">
            Find a Therapist in
          </span>
          <select
            name="languages"
            id="languages-select"
            className="px-3 py-1.5 border-2 border-primary-300 rounded-full outline-none mx-2 w-fit text-primary-300 font-semibold cursor-pointer"
          >
            <option value="">Your Language</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="marathi">Marathi</option>
          </select>
          <span className="text-3xl font-semibold text-primary-300">in </span>
          <select
            name="issues"
            id="issues-select"
            className="px-3 py-1.5 border-2 border-primary-300 rounded-full outline-none mx-2 w-fit text-primary-300 font-semibold cursor-pointer"
          >
            <option value="">Your Issue</option>
            <option value="stress">Stress</option>
            <option value="depression">Depression</option>
            <option value="panic-attacks">Panic Attacks</option>
            <option value="anxiety">Anxiety</option>
            <option value="ocd">OCD</option>
            <option value="biopolar-disorder">Biopolar Disorder</option>
          </select>
        </div> */}
        <h2 className="subheading heading-primary text-center">
          Most Common Health Issues
        </h2>

        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-6 py-4 2xl:pt-8">
          <li>
            <a
              href="#"
              className="rounded-3xl bg-primary-50 px-6 py-2.5 font-bold text-slate-900"
            >
              All Categories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-3xl px-6 py-2.5 font-bold text-slate-400 transition-all hover:bg-primary-50 hover:text-slate-900"
            >
              Social Life
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-3xl px-6 py-2.5 font-bold text-slate-400  transition-all hover:bg-primary-50 hover:text-slate-900"
            >
              Relationship
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-3xl px-6 py-2.5 font-bold text-slate-400  transition-all hover:bg-primary-50 hover:text-slate-900"
            >
              Depressed
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-3xl px-6 py-2.5 font-bold text-slate-400  transition-all hover:bg-primary-50 hover:text-slate-900"
            >
              Stress
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-3xl px-6  py-2.5 font-bold text-slate-400  transition-all hover:bg-primary-50 hover:text-slate-900"
            >
              Health
            </a>
          </li>
        </ul>
        {/* Issues */}
        <div className="pb-8">
          <div className="mx-auto grid gap-4 py-6 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-12 lg:pt-8 xl:grid-cols-3 xl:gap-10 xl:pb-16 2xl:gap-16">
            {therapies.map((value, index) => {
              return <IssueCard key={index} data={value} />;
            })}
          </div>

          <div className="text-center">
            <button className="btn-one">View More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Issues;

{
  /* <div className="perpective-1000 flip-container">
  <div className="preserve-3d flip-card relative">
    <div className="relative preserve-3d">
      <div className="bg-gradient-to-r overflow-hidden from-secondary via-tertiary to-primary-300 rounded-2xl rounded-br-[5rem] lg:rounded-br-[5rem] hover:shadow-xl shadow-slate-300 cursor-pointer backface-hidden transition-transform">
        <div className="py-4 lg:py-6 bg-[#FAFCE7] m-1 rounded-2xl rounded-br-[5rem] lg:rounded-br-[5rem]">
          <h4 className="text-center lg:text-2xl font-semibold mb-2">
            {value.name}
          </h4>
          <img
            src={value.image}
            alt=""
            className="mx-auto block w-24 h-24 lg:h-40 lg:w-40 object-cover rounded-2xl 2xl:w-48 2xl:h-48 mb-4"
          />
          <div className="text-center">
            <button className="btn-one">Book Now</button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r overflow-hidden from-secondary via-tertiary to-primary-300 rounded-2xl rounded-br-[5rem] lg:rounded-br-[5rem] hover:shadow-xl shadow-slate-300 cursor-pointer absolute inset-0 rotate-y-180 backface-hidden transition-transform">
        <div className="py-4 lg:py-6 bg-[#FAFCE7] m-1 rounded-2xl rounded-br-[5rem] lg:rounded-br-[5rem]">
          <h6 className="text-center font-semibold mb-2">
            Depression is a mental health condition characterized by persistent
            feelings of sadness, loss of interest, and a lack of energy.
          </h6>
          <div className="text-center">
            <button className="btn-one">Book then</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
