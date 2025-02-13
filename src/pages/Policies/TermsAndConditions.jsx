import React from "react";
import PoliciesHeader from "../../components/headers/PoliciesHeader";

export default function TermsAndConditions() {
  return (
    <>
      <PoliciesHeader
        heading="Terms & Conditions"
        desc="Our Terms & Conditions have been updated on 18th August 2023"
      />
      <section className="container mx-auto space-y-5 py-8 text-justify font-medium">
        <p>
          The Website Owner, including subsidiaries and affiliates (“Website” or
          “Website Owner” or “we” or “us” or “our”) provides the information
          contained on the website or any of the pages comprising the website
          (“website”) to visitors (“visitors”) (cumulatively referred to as
          “you” or “your” hereinafter) subject to the terms and conditions set
          out in these website terms and conditions, the privacy policy and any
          other relevant terms and conditions, policies and notices which may be
          applicable to a specific section or module of the website.
        </p>
        <p>
          Welcome to our website. If you continue to browse and use this website
          you are agreeing to comply with and be bound by the following terms
          and conditions of use, which together with our privacy policy govern
          GREEN CLOVER IT SYSTEMS PRIVATE LIMITED''s relationship with you in
          relation to this website.
        </p>
        <p>
          The term '<strong>GREEN CLOVER IT SYSTEMS PRIVATE LIMITED</strong>' or
          'us' or 'we' refers to the owner of the website whose
          registered/operational office is 100503 Valley view estate,Gwal Pahri
          Road,Gurgaon Sector 45,Gurgaon Gurgaon HARYANA 122003. The term 'you'
          refers to the user or viewer of our website.
        </p>

        <h2 className="text-2xl font-bold">
          The Use of This Website Is Subject to the Following Terms of Use:
        </h2>
        <ul className="list-disc pl-8">
          <li>
            <p>
              {" "}
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </p>
          </li>
          <li>
            <p>
              {" "}
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </p>
          </li>
          <li>
            <p>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </p>
          </li>
          <li>
            <p>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics.
            </p>
          </li>
          <li>
            <p>
              Reproduction is prohibited other than in accordance with the
              copyright notice, which forms part of these terms and conditions.
            </p>
          </li>
          <li>
            <p>
              All trademarks reproduced in this website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website.
            </p>
          </li>
          <li>
            <p>
              Unauthorized use of this website may give rise to a claim for
              damages and/or be a criminal offense.
            </p>
          </li>
          <li>
            <p>
              From time to time this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information.
            </p>
          </li>
          <li>
            <p>
              You may not create a link to this website from another website or
              document without
              <strong> GREEN CLOVER IT SYSTEMS PRIVATE LIMITED's </strong> prior
              written consent.
            </p>
          </li>
          <li>
            <p>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of India or other regulatory
              authority.
            </p>
          </li>
        </ul>
        <p>
          We as a merchant shall be under no liability whatsoever in respect of
          any loss or damage arising directly or indirectly out of the decline
          of authorization for any Transaction, on Account of the Cardholder
          having exceeded the preset limit mutually agreed by us with our
          acquiring bank from time to time.
        </p>
      </section>
    </>
  );
}
