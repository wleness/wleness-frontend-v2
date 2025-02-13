import React from "react";

export default function Table({ ths, trs }) {
  return (
    <table className="mb-6 mt-5 text-left">
      <thead>
        <tr>
          {ths.map((value, i) => {
            return (
              <th key={i} className="border-2 px-4 py-2 font-quicksand">
                {value}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {trs.map((value, i) => {
          return (
            <tr key={i}>
              {value.map((data, index) => {
                return (
                  <td className="border-2 px-4 py-3 font-normal" key={index}>
                    {data}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
