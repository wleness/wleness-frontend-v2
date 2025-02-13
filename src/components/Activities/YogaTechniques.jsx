import React from "react";

const YogaTechniques = React.forwardRef((props, ref) => {
  return (
    <section className="pb-6" ref={ref}>
      <div className="container mx-auto">
        <div className="rounded-2xl py-4 text-center lg:mb-4 lg:py-8 xl:py-10">
          <h2 className="subheading heading-primary">{props.title}</h2>
          <p className="font-semibold lg:text-lg">{props.desc}</p>
        </div>

        {/* Yoga techniques */}
        <div className="grid justify-center gap-6 pb-4 lg:grid-cols-3 xl:gap-6">
          {props.types.map((value, index) => {
            return (
              <figure
                key={index}
                className="rounded-xl border-2 border-primary-50 bg-primary-10 p-4 py-7"
              >
                <div className="mx-auto w-36">
                  <img
                    src={value.thumbnail}
                    alt={value.title}
                    className="block w-full rounded-full border-2 border-primary-300 object-cover shadow-md shadow-primary-50"
                  />
                </div>
                <figcaption>
                  <h4 className="py-4 text-center text-xl font-bold capitalize text-primary-400">
                    {value.title}
                  </h4>
                  <p className="para text-center !text-sm">{value.desc}</p>
                  {/* <div className="items-center justify-center gap-4">
                    <div className="flex justify-end lg:w-1/2">
                      <Link
                        className="group flex w-32 items-center justify-center rounded-full border-2 border-primary-400 py-2 text-center text-xs font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white lg:text-sm"
                        to={value.slug}
                      >
                        <FontAwesomeIcon
                          className="mr-1 h-2 w-2 rounded-full bg-primary-400 p-1 text-xs text-white group-hover:bg-white group-hover:text-primary-400"
                          icon={faInfo}
                        />
                        <span className="font-bold">Info</span>
                      </Link>
                    </div>
                    <div className="lg:w-1/2">
                      <Link
                        className="block w-32 rounded-full bg-primary-400 py-2.5 text-center text-xs font-semibold text-white transition-all hover:bg-primary-300 lg:py-2.5 lg:text-sm"
                        to={value.slug}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div> */}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default YogaTechniques;
