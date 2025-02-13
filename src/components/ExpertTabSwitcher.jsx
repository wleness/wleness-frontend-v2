import React, { useState } from "react";
import { mainforteRight, suggestionRight, leaf } from "../assets";
import ExpertsButton from "./Buttons/ExpertsButton";

const TabSwitcher = ({ fortes, suggestions }) => {
  const [active, setActive] = useState(true);

  let allFortes = fortes.slice(2, -2).split("', '");
  let allSuggestions = suggestions.slice(2, -2).split("', '");

  return (
    <div className="container mx-auto mb-8">
      <div className="grid grid-cols-2">
        <ExpertsButton
          text="Main Forte"
          isActive={active}
          switchTo={() => setActive(true)}
        />
        <ExpertsButton
          text="Suggestions"
          isActive={!active}
          switchTo={() => setActive(false)}
        />
      </div>

      {/* <hr className="h-1 bg-teal-500 "></hr> */}
      {/* Content for the active tab */}
      <div className="bg-yellow-primary px-2 py-4 lg:px-6">
        {active && (
          <div className="flex lg:items-center lg:py-4">
            <div className="para">
              <ul>
                {allFortes.map((value, i) => {
                  return (
                    <li key={i} className="flex space-x-2">
                      <div className="">
                        <img
                          src={leaf}
                          alt="Leaf Icon"
                          className="mr-6 h-6 w-6 object-contain"
                        />
                      </div>
                      <div>
                        <p className="mb-3">{value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* <div className="ml-4 hidden lg:block lg:w-1/2">
              <img
                src={mainforteRight}
                alt="Main Forte"
                className="lg:mx-auto"
              />
            </div> */}
          </div>
        )}

        {!active && (
          <div className="flex lg:items-center lg:py-4">
            <div className="para">
              <ul>
                {allSuggestions.map((value, i) => {
                  return (
                    <li className="flex space-x-2" key={i}>
                      <div>
                        <img
                          src={leaf}
                          alt="Leaf Icon"
                          className="mr-6 h-6 w-6 object-contain"
                        />
                      </div>
                      <div>
                        <p className="mb-2">{value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* <div className="ml-4 hidden lg:block lg:w-1/2">
              <img src={suggestionRight} alt="Main Forte" className="w-3/4" />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSwitcher;
