// src/components/AppointmentForm.js

import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    appointmentId: "12345",
    duration: "30 minutes",
    timeSlot: "10:00 AM - 10:30 AM",
    mode: "Online",
    price: "$50",
    dateOfAppointment: "2023-09-28",
    userId: "user123",
    expertId: "expert456",
    appointmentDate: "2023-09-29",
    meetLink: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);

    // Show the "Sent" message
    setIsSent(true);
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-screen-lg rounded-lg bg-teal-200 p-6 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        Appointment Form
      </h2>
      {isSent ? (
        <div className="mb-4 rounded-md bg-green-200 p-2 text-center">
          Sent!
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">Appointment ID</label>
          <input
            type="text"
            name="appointmentId"
            value={formData.appointmentId}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">Time Slot</label>
          <input
            type="text"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">Mode</label>
          <input
            type="text"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">Date of Appointment</label>
          <input
            type="date"
            name="dateOfAppointment"
            value={formData.dateOfAppointment}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">User ID</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">Expert ID</label>
          <input
            type="text"
            name="expertId"
            value={formData.expertId}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="mb-2 text-gray-600">Meet Link</label>
          <input
            type="text"
            name="meetLink"
            placeholder="Meet Link"
            value={formData.meetLink}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="rounded bg-teal-500 px-8 py-2 text-white hover:bg-teal-600"
          >
            Send
          </button>
        </div>
      </form>
      {/* <iframe
        src="https://subdomain.whereby.com/room?minimal"
        allow="camera; microphone; fullscreen; speaker; display-capture; autoplay; compute-pressure"
      ></iframe> */}
    </div>
  );
};

export default AppointmentForm;
