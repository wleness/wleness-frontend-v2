import React from "react";
import PoliciesHeader from "../../components/headers/PoliciesHeader";
import Paragraphs from "../../components/Formatting/Paragraphs";
import Heading2xl from "../../components/Formatting/Heading2xl";
import Headingxl from "../../components/Formatting/Headingxl";
import Table from "../../components/Formatting/Table";
import List from "../../components/Formatting/List";

const sessoinsPolicy = [
  ["0", "1,000.00", "6,000.00", "10,000.00"],
  ["1", "-", "5,000.00", "9,000.00"],
  ["2", "-", "4,000.00", "8,000.00"],
  ["3", "-", "3,000.00", "7,000.00"],
  ["4", "-", "2,000.00", "6,000.00"],
  ["5", "-", "1,000.00", "5,000.00"],
  ["6", "-", "-", "4,000.00"],
  ["7", "-", "-", "4,000.00"],
  ["8", "-", "-", "3,000.00"],
  ["9", "-", "-", "2,000.00"],
  ["10", "-", "-", "1,000.00"],
  ["11", "-", "-", "-"],
  ["12", "-", "-", "-"],
];

export default function Cancellation() {
  return (
    <>
      <PoliciesHeader
        heading="Cancellation"
        desc="Our Cancellation have been updated on 18th August 2023 "
      />

      <section className="container mx-auto py-8 text-justify font-medium">
        <h2 className="mb-4 text-3xl font-bold">Therapy Sessions</h2>
        <Heading2xl text="Payments" />
        <List
          items={[
            "Before using Wleness services, all necessary fees must be made.",
            "The user's session reservation(s) won't be finalized until Wleness receives payment.",
            "Beyond any sessions that may be provided to you as part of Wleness' relationship with your organization, if you are using our services through a third party or your organization, the user's session booking(s) will not be confirmed until the money is received by Wleness.",
            "Every purchase has a one-year expiration date.",
          ]}
        />
        <Heading2xl text="Fee Information" />
        <List
          items={[
            "The cost per session for a single user depends on the psychological wellness specialist they choose.",
            "The cost per session for consumers who access sessions through their organization outside of their free sessions depends on the psychological wellness expert they choose and any special agreements they have with their organization.",
          ]}
        />
        <Heading2xl text="Cancellation, Reschedule and Refund" />
        <Paragraphs
          texts={[
            "As an online psychological wellness platform, Wleness strives to provide the user with the best possible service in order to maximise user satisfaction. Keeping that in mind, Wleness’ cancellation and refund policy ensures the highest possible flexibility for the user.",
            "The user has the flexibility to:",
          ]}
        />
        <List
          items={[
            "Reschedule the session",
            "Cancel the session",
            "Claim a refund on the cancelled session",
          ]}
        />
        <Heading2xl text="Session Reschedule" />
        <Paragraphs
          texts={[
            "The user has the freedom to reschedule their sessions with Wleness for a later time. The table below explains how every scheduling request will be handled according to the moment at which the user asks Wleness to reschedule in relation to the scheduled time of the session.",
          ]}
        />
        <Table
          ths={[
            "Initial of Session Reschedule",
            "Session Refund Provided to the User",
          ]}
          trs={[
            [
              "At least 24 hours in advance of the scheduled session",
              "Within 24 hours of the scheduled session",
            ],
            [
              "Free Reschedule",
              "Needs to be booked as a new session and make payment for the same if applicable",
            ],
          ]}
        />
        <Heading2xl text="Session Cancellation and Refund" />
        <Headingxl text="Cancellation By The User" />
        <Paragraphs
          texts={[
            "The user can cancel the session and claim a refund in one of the two means offered:",
          ]}
        />
        <List
          items={[
            "Session Refund",
            "Cash Refund, in case the user has made a payment for the session",
          ]}
        />
        <Paragraphs
          texts={[
            "The refund amount provided to the user will be based on when the cancellation was initiated and is explained in the table below.",
          ]}
        />
        <Table
          ths={[
            "Initiation of Session Cancellation",
            "Session Refund provided to the User",
          ]}
          trs={[
            [
              "At least 24 hours in advance of the scheduled session",
              "Within 24 hours of the scheduled session",
            ],
            [
              "100% Session Refund or, if applicable, 100% Cash Refund",
              "No Session Refund",
            ],
          ]}
        />
        <Paragraphs
          texts={[
            "For sessions cancelled at least 24 hours in advance, at the time of cancellation, the user has three options:",
          ]}
        />
        <List
          items={[
            "When the appointment is cancelled, schedule a new appointment with the same professional",
            "Take a session credit from the user's Wleness platform account. This session credit may be used to schedule a subsequent appointment with the same expert throughout its validity period",
            "Write to support@wleness.com to request a refund to the user's original mode of payment if they have already paid for the session",
          ]}
        />
        <Headingxl text="Cancellation By Wleness Expert" />
        <Paragraphs
          texts={[
            "Regardless of when the session was cancelled by the Wleness expert, the user will still receive a session credit on their account on the Wleness platform. Within the validity period, this session credit may be applied to:",
          ]}
        />
        <List
          items={[
            "Within the validity period, schedule a session with the same expert.",
            "If the user paid to reserve the session, they may request a cash refund by writing to support@wleness.com within the validity time.",
          ]}
        />
        <Headingxl text="Session Delayed/Technical Issues" />
        <Paragraphs
          texts={[
            "If, due to an unforeseeable reason from Wleness’ end, a booked session is not completed in its entirety by the Wleness expert, the user may write to Wleness at support@wleness.com. Refunds will be handled on a case-to-case basis.",
          ]}
        />
        <Headingxl text="Session Packages" />
        <Paragraphs
          texts={[
            "Refunds can only be started on the complete package or the portion of the package that was not used in circumstances where the user purchased a multi-session package that was made available on our site. To ensure that the customer pays the least amount per session possible, the sessions that have already been completed will be charged at the rate of the following highest package (if available).",
            "For instance, if a user has a 10+2 Session Package active and a session fee of INR 1000, the first 7 sessions will be charged at a total of INR 6000.00 as per the 6+1 Session Package and not at INR 7000.00 as per the Single Session price.",
            "The user cannot cancel and request a refund on the package if there are already scheduled sessions from it. Before initiating a package cancellation, the sessions must be finished or cancelled.",
            "When a package cancellation and refund request is made, the refund amount will be processed in accordance with the following table based on how many sessions were actually attended.",
          ]}
        />

        <table className="mb-6 mt-5 text-left">
          <thead>
            <tr>
              <th className="border-2 px-4 py-2 font-quicksand" rowSpan={2}>
                Completed Sessions
              </th>
              <th className="border-2 px-4 py-2 font-quicksand" colSpan={3}>
                Eligible Refund per Package
              </th>
            </tr>
          </thead>

          <tbody>
            {sessoinsPolicy.map((value, i) => {
              return (
                <tr key={i}>
                  {value.map((data, index) => {
                    return (
                      <td className="border-2 px-4 py-3" key={index}>
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <Paragraphs
          texts={[
            "Please note that the following estimate, which considers a session cost of INR 1000, is offered as a suggestion only. Refund amounts can vary depending on a number of factors, including the expert's session price.",
            "The qualifying reimbursement upon package cancellation in the case above would be 6000 if the user had an active 10+2 Session Package and had completed 4 sessions.",
            "Within 14 days, the cash return will be completed. Please be aware that it could take longer for the amount to appear in the user's account depending on the bank.",
          ]}
        />
      </section>
    </>
  );
}
