import React, { useState } from "react";

function PricingCards({ packages, openForm }) {
  const [selectedPackage, setSetselectedPackage] = useState({
    service: packages[0].title,
    name: packages[0].pricing[0].name,
    price: packages[0].pricing[0].price,
  });

  const setPackage = (name, title, price, original_price) => {
    setSetselectedPackage({
      service: title,
      name: name,
      price: price,
      original_price: original_price,
    });
  };

  return (
    <section className="container mx-auto lg:py-8">
      <div className="my-4 text-center">
        <h2 className="subheading">
          Session <span className="heading-primary">Modules</span>
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3 xl:gap-10">
        {packages.map((value, i) => {
          return (
            <figure key={i}>
              <div className="grid grid-cols-2 font-semibold">
                {value.pricing.map((price, k) => {
                  return (
                    <button
                      key={k}
                      onClick={() =>
                        setPackage(
                          price.name,
                          value.title,
                          price.price,
                          price.original_price,
                        )
                      }
                      className={`rounded-t-md  px-4 py-1 ${
                        selectedPackage.service == value.title &&
                        selectedPackage.name == price.name
                          ? "bg-primary-300 text-white"
                          : "bg-primary-50"
                      }`}
                    >
                      {price.name}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col justify-between rounded-b-lg border-x-2 border-b-2 border-primary-50 bg-slate-50 px-4 pb-8">
                <div className="mb-5 lg:mb-8">
                  <div className="mx-auto mb-5 w-fit rounded-b-xl bg-white px-2 py-6 text-center lg:px-4">
                    {selectedPackage.service == value.title ? (
                      <>
                        <div className="flex">
                          <small className="mr-1 font-semibold">Rs. </small>
                          <p className="text-lg font-semibold xl:text-3xl">
                            {selectedPackage.price}
                          </p>
                        </div>
                        {selectedPackage.original_price ? (
                          <small>
                            <del>Rs. {selectedPackage.original_price}</del>
                          </small>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <div className="flex">
                          <small className="mr-1 font-semibold">Rs. </small>
                          <p className="text-lg font-semibold xl:text-3xl">
                            {value.pricing[0].price}
                          </p>
                        </div>
                        {value.pricing[0].original_price ? (
                          <small>
                            <del>Rs. {value.pricing[0].original_price}</del>
                          </small>
                        ) : null}
                      </>
                    )}
                  </div>
                  <h2 className="mb-3 text-center text-xl font-bold xl:text-2xl">
                    {value.title}
                  </h2>
                  <figcaption>
                    <p className="text-center text-sm font-medium">
                      {value.desc}
                    </p>
                  </figcaption>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => openForm(selectedPackage)}
                    className="rounded-lg bg-primary-300 px-5 py-2 font-semibold text-white transition-all hover:bg-primary-300/80"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default PricingCards;
