import {
  faAngleLeft,
  faCalendar,
  faSpinner,
  faVideo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CheckoutInputField from "../../components/Fields/CheckoutInputField";

export default function Checkout({
  back,
  handleUserVerification,
  handleApplyCoupon,
  handleCheckout,
  checkoutDetails,
  user,
  setUser,
  couponCode,
  setCoupon,
  makePayment,
  setCouponAlertMessage,
  couponMessage,
  removeDiscount,
}) {
  return (
    <div className="py-6">
      <div className="mb-10 flex items-center justify-between text-center md:flex-row ">
        <span onClick={back} className="cursor-pointer">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-2xl hover:text-slate-600"
          />
        </span>
        <h2 className="text-3xl font-bold">Confirm Booking</h2>
        <span className="hidden lg:block"></span>
      </div>

      <div className="space-y-8 divide-y-2 divide-dashed divide-slate-300">
        <div className="flex justify-center gap-x-2 pb-5 lg:gap-x-5">
          <div className="flex w-1/2 flex-col justify-between rounded-lg border-2 border-primary-300 px-4 py-4 text-center font-bold md:w-60 lg:px-8">
            <span className="text-center">
              <FontAwesomeIcon icon={faVideo} /> <span>Mode</span>
            </span>
            <span className="my-2 flex justify-between text-sm font-semibold capitalize text-slate-400 lg:text-base">
              <span>{checkoutDetails.mode}</span>
              <span>Online</span>
            </span>
            <span
              className="cursor-pointer text-center underline transition-all hover:text-primary-300"
              onClick={back}
            >
              Change
            </span>
          </div>

          <div className="w-1/2 rounded-lg border-2 border-primary-300 px-4 py-4 text-center font-bold md:w-60 lg:px-8">
            <p>
              <FontAwesomeIcon icon={faCalendar} /> <span>Date</span>
            </p>
            <div className="my-1">
              <p className="text-sm font-semibold text-slate-400 lg:text-base">
                {checkoutDetails.date}
              </p>
              <p className="text-sm font-semibold text-slate-400 lg:text-base">
                {checkoutDetails.time}
              </p>
            </div>
            <span
              className="cursor-pointer underline transition-all hover:text-primary-300"
              onClick={back}
            >
              Change
            </span>
          </div>
        </div>

        <div className="pt-8">
          <h2 className="mb-2 text-xl font-semibold">Enter Coupon Code</h2>
          <form onSubmit={handleApplyCoupon}>
            <div className="flex gap-4">
              <div className="w-3/4">
                <CheckoutInputField
                  name={"coupon_code"}
                  type={"text"}
                  value={couponCode.code}
                  onchange={(e) => {
                    setCoupon({ ...couponCode, code: e.target.value });
                    setCouponAlertMessage("", "");
                  }}
                  placeholder="#COUPONCODE"
                />
              </div>
              <div className="w-1/4">
                <button
                  type="submit"
                  className="block w-full rounded-lg bg-primary-300 px-6 py-2.5 font-semibold uppercase tracking-wider text-white lg:py-3"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>

          {couponCode.code ? (
            <div className="pb-2">
              {couponCode.is_applied ? (
                <span className="flex justify-between rounded-lg bg-slate-200 px-4 py-1 font-semibold">
                  <span>#{couponCode.code}</span>
                  <span>
                    <FontAwesomeIcon icon={faXmark} onClick={removeDiscount} />
                  </span>
                </span>
              ) : null}
              <p
                className={`pt-2 font-semibold ${
                  couponMessage.status == "success"
                    ? "text-primary-300"
                    : "text-red-500"
                }`}
              >
                {couponMessage.message}
              </p>
            </div>
          ) : null}
        </div>

        <div className="pt-8">
          <h4 className="mb-2 text-xl font-semibold">Payment Details</h4>
          <ul className="border-slate-400">
            <li className="mb-2 flex justify-between font-semibold">
              <span className="text-slate-400">
                {checkoutDetails.plan} Price
              </span>
              <span className="text-slate-800">
                Rs. {checkoutDetails.original_price}
              </span>
            </li>
            {couponCode.is_applied ? (
              <li className="mb-3 flex justify-between font-semibold">
                <span className="text-slate-400">
                  Referral Discount ( 10% )
                </span>
                <span className="text-slate-800">- Rs. {couponCode.price}</span>
              </li>
            ) : null}

            {/* <li className="mb-2 flex justify-between">
              <span className="font-medium">Discount</span>
              <span className="font-medium">Rs. 99</span>
            </li> */}
            <hr />
            <li className="flex justify-between font-bold text-primary-300">
              <span className="text-lg">Final Amount</span>
              <span>Rs. {checkoutDetails.price}</span>
            </li>
          </ul>
        </div>

        <form
          className="pt-8"
          onSubmit={handleUserVerification}
          autoComplete="off"
        >
          <h4 className="mb-2 text-xl font-semibold">Enter Your Details</h4>
          <div className="grid grid-cols-2 gap-x-4">
            <CheckoutInputField
              name={"first_name"}
              type={"text"}
              value={user.firstName}
              onchange={(e) => setUser({ ...user, firstName: e.target.value })}
              placeholder="First Name"
            />
            <CheckoutInputField
              name={"last_name"}
              type={"text"}
              value={user.lastName}
              onchange={(e) => setUser({ ...user, lastName: e.target.value })}
              placeholder="Last Name"
            />
            <CheckoutInputField
              name={"phone"}
              type={"tel"}
              value={user.phone}
              onchange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder="Phone"
            />
            <CheckoutInputField
              name={"email"}
              type={"email"}
              value={user.email}
              onchange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <div className="mt-3 text-center">
            <button
              className="btn-one mx-auto flex items-center !rounded-lg disabled:cursor-not-allowed disabled:bg-gray-500"
              disabled={
                user.phone.length == 10 &&
                user.email != "" &&
                user.firstName != "" &&
                user.lastName != ""
                  ? false
                  : true
              }
              type="submit"
            >
              <FontAwesomeIcon
                icon={faSpinner}
                className={`mr-2 animate-spin text-lg ${
                  makePayment ? "block" : "hidden"
                }`}
              />
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
