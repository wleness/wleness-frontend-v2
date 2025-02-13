import React from "react";

export default function OtpModal({ isOpen, msg, submit, setOTP, otp, email }) {
  return (
    <div
      className={`fixed inset-0 z-40 grid w-full place-items-center bg-black/40 ${
        isOpen ? " block" : " hidden"
      }`}
    >
      <div className="rounded-lg bg-white px-8 py-5 shadow-lg">
        <h2 className="text-center text-xl font-semibold">Enter Your OTP</h2>
        <small className="block text-center text-red-500">{msg}</small>
        <form className="my-4 block" onSubmit={submit}>
          <input
            type="tel"
            maxLength={6}
            name="otp"
            id="otp"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="form-input text-center tracking-widest"
          />

          <div>
            <small className="mb-1 block text-center">
              OTP sent to {email}
            </small>
            <button
              type="submit"
              className="btn-one !block !w-full !rounded-lg"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
