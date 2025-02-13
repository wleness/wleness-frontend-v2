import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// Data
import { modes } from "../../data/doctors";
import {
  APPOINTMENT_PAYMENT,
  GET_CHECKOUT_DETAILS,
  VERIFY_USER,
  VERIFY_USER_EMAIL,
} from "../../data/api";
import { profileMask, swatiGhoshalPortrait } from "../../assets";
import SessionMode from "../../components/icon/SessionMode";
import BookingHeading from "../../components/Appointment/BookingHeading";
import SessionPricingItem from "../../components/list/SessionPricingItem";
import AvailableSlots from "../../components/Appointment/AvailableSlots";
import Checkout from "./Checkout";
import OtpModal from "../../components/Auth/OtpModal";

export default function Appointment() {
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);
  const [makePayment, setMakePayment] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState({});
  const [index, setIndex] = useState(0);
  // Set Experts Profile Data
  const [profileDetails, setProfileDetails] = useState({});
  // Set Checkout Form Data
  const [checkout, setCheckout] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({
    mode: "video",
    plan: "",
    date: "",
    time: null,
    price: "",
    original_price: "",
  });
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  // Mobile verification
  const [otpState, setOtpState] = useState({
    otp: "",
    showModal: false,
    message: "",
    email: "",
    appointment_id: "",
    price: "",
  });
  const [couponCode, setCouponCode] = useState({
    code: "",
    is_applied: false,
    discount_price: 0,
  });
  const [couponMessage, setCouponMessage] = useState({
    status: "",
    message: "",
  });

  const setCouponAlertMessage = (status, message) => {
    setCouponMessage({
      status: status,
      message: message,
    });
  };

  // ======================================
  // Get available booking slots
  // ======================================
  useEffect(() => {
    axios
      .get(GET_CHECKOUT_DETAILS + slug)
      .then((response) => {
        if (response.data.status == "success") {
          setAvailableTimeSlots(response.data.slots);
          setProfileDetails(response.data.experts_profile);
          setLoading(false);
          setCheckoutDetails({
            ...checkoutDetails,
            date:
              response.data.slots[0].slots[0].date +
              " " +
              response.data.slots[0].month +
              " " +
              response.data.slots[0].year,
          });
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  // ======================================
  // Verify user details
  // ======================================
  const handleUserVerification = (e) => {
    e.preventDefault();

    // Send request to the server
    // Validate user details and create form element
    for (const key in userDetails) {
      if (userDetails[key] == "") {
        return false;
      }
    }
    // Add checkout details in data
    let formData = { ...userDetails, expertId: profileDetails.id };
    for (const key in checkoutDetails) {
      formData[key] = checkoutDetails[key];
    }

    if (couponCode.is_applied) {
      formData["coupon_code"] = couponCode.code;
    }

    // Set loading in payment
    setMakePayment(true);
    axios
      .post(VERIFY_USER, formData)
      .then((response) => {
        if (response.data.status == "success") {
          if (!response.data.isVerified) {
            // Display otp modal
            setOtpState({
              showModal: true,
              email: userDetails.email,
              appointment_id: response.data.appointment_id,
              price: response.data.price,
            });
          } else {
            // Initiate payment
            const pricing_data = {
              appointment_id: response.data.appointment_id,
              price: response.data.price,
              phone: response.data.phone,
            };
            // Initiate payment
            handleCheckout(pricing_data);
          }

          // Empty user form
          setUserDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          });
        } else {
          setCouponAlertMessage(response.data.status, response.data.message);
          // Empty user form
          setUserDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          });
          setCouponCode({
            ...couponCode,
            is_applied: false,
            discount_price: 0,
            price: 0,
          });
          setMakePayment(false);
          setCheckoutDetails({
            ...checkoutDetails,
            price: checkoutDetails.original_price,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // ======================================
  // Verify OTP
  // ======================================
  const handleOtpVerify = (e) => {
    e.preventDefault();

    const data = {
      otp: otpState.otp,
      email: otpState.email,
      appointment_id: otpState.appointment_id,
      price: otpState.price,
    };

    axios
      .post(VERIFY_USER_EMAIL, data)
      .then((response) => {
        if (response.data.status == "success") {
          setOtpState({
            otp: "",
            email: "",
            showModal: false,
            message: "",
          });
          // Initiate payment
          const pricing_data = {
            appointment_id: response.data.appointment_id,
            price: response.data.price,
            phone: response.data.phone,
          };
          console.log(pricing_data);
          handleCheckout(pricing_data);
        } else {
          setOtpState({ ...otpState, message: response.data.message });
        }
      })
      .catch((error) => {
        setOtpState({ ...otpState, message: error.message });
        console.log(error);
      });
  };

  // ======================================
  // Apply coupone code
  // ======================================
  const handleApplyCoupon = (e) => {
    e.preventDefault();

    // Validate coupon code
    if (couponCode.code != "WELL40") {
      setCouponAlertMessage("error", "Invalid Coupon Code");
      setCheckoutDetails({
        ...checkoutDetails,
        price: checkoutDetails.original_price,
      });
      setCouponCode({
        ...couponCode,
        is_applied: false,
      });
      return null;
    }

    // Validate coupon code minimum value
    if (checkoutDetails.original_price < 500) {
      setCouponAlertMessage(
        "error",
        "Coupon Code is valid on minimum value of Rs.500",
      );
      return null;
    } else {
      // Apply coupon code
      setCouponCode({
        ...couponCode,
        price: checkoutDetails.original_price * 0.4,
        is_applied: true,
      });
      setCheckoutDetails({
        ...checkoutDetails,
        price:
          checkoutDetails.original_price - checkoutDetails.original_price * 0.4,
      });
      setCouponAlertMessage("success", "Coupon applied! Enjoy your discount!");
    }
  };

  const removeDiscount = () => {
    setCouponCode({
      code: "",
      is_applied: false,
    });
    setCheckoutDetails({
      ...checkoutDetails,
      price: checkoutDetails.original_price,
    });
    setCouponAlertMessage("", "");
  };

  // ======================================
  // Initiate payment
  // ======================================
  const handleCheckout = (data) => {
    axios
      .post(APPOINTMENT_PAYMENT, data)
      .then((response) => {
        if (response.data.status == "success") {
          window.location = response.data.redirect_url;
        } else {
          console.error(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Set session modes
  const handleModes = (event) => {
    setCheckoutDetails({ ...checkoutDetails, mode: event.target.id });
  };

  // Handle proceed to checkout
  const openCheckout = () => {
    window.scrollTo(0, 0);
    setCheckout(true);
  };

  // Handle back to checkout page
  const closeCheckout = () => {
    window.scrollTo(0, 0);
    setCheckout(false);
  };

  // Handle proceed to checkout after validation
  const handleProceed = (e) => {
    e.preventDefault();
    // Validate if mode, duration, session and slots are filled
    openCheckout();
  };

  // Update otp value
  const setOTP = (otp) => {
    setOtpState({ ...otpState, otp: otp });
  };

  return (
    <>
      <section className="relative">
        <div className="absolute left-0 top-0 -z-10  h-28 w-full bg-primary-50 lg:bottom-0 lg:left-0 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-28 -z-10 h-28 w-full bg-primary-50/60 lg:bottom-0 lg:left-28 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-56 -z-10 h-28 w-full bg-primary-50/50 lg:bottom-0 lg:left-56 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-[21rem] -z-10 h-24 w-full bg-primary-50/30 lg:bottom-0 lg:left-[21rem] lg:top-0 lg:h-auto lg:w-28"></div>

        <figure className="left-16 top-10 mx-auto w-64 justify-center gap-x-8 py-6 lg:absolute lg:ml-5 lg:w-[300px]">
          <Link to={"/experts/profile/" + slug} className="mb-5 block">
            <div className="relative">
              <div className="experts-profile-bg mx-auto mb-2 h-52 w-52 rounded-full">
                <img
                  src={
                    profileDetails.image
                      ? profileDetails.image
                      : swatiGhoshalPortrait
                  }
                  alt=""
                  className="mx-auto h-52 w-52 rounded-full object-cover object-top"
                />
              </div>
              <img
                src={profileMask}
                alt=""
                className="absolute left-1/2 top-0 h-52 w-52 -translate-x-[55%] scale-110 object-cover"
              />
            </div>
          </Link>
          <figcaption className="mx-auto w-60">
            <h4 className="text-2xl font-bold">{profileDetails.name}</h4>
            <h6 className="text-xl font-semibold">
              {profileDetails.experience
                ? profileDetails.experience
                : "5+ years of experience"}
            </h6>
            <div className="my-2 font-medium">
              <p>
                Expertise:{" "}
                {profileDetails.expertise
                  ? profileDetails.expertise
                  : "Yoga, Work-life"}
              </p>
              <p>
                Speaks:{" "}
                {profileDetails.languages
                  ? profileDetails.languages
                  : "English, Hindi"}
              </p>
            </div>
          </figcaption>
        </figure>

        {/* Book Session */}
        <div className="container mx-auto flex flex-col pb-10 md:items-end">
          <div className="pt-6 md:w-[580px] 2xl:w-[720px]">
            {!checkout ? (
              <form onSubmit={handleProceed}>
                <h2 className="mb-4 text-center text-3xl font-bold">
                  Book Your Session
                </h2>
                <p className="para mb-8 text-center">
                  Book an appointment to connect with a mental health expert
                </p>

                {/* Select session mode */}
                <div className="mb-8 grid justify-center text-center">
                  <BookingHeading heading="1. Select session mode" />
                  <div className="mb-4 flex justify-between gap-x-2 lg:mb-0 lg:gap-x-5">
                    {modes.map((value, i) => {
                      return (
                        <SessionMode
                          key={i}
                          data={value}
                          mode={checkoutDetails.mode}
                          handleModes={handleModes}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Select session duration */}
                {/* <div className="mb-8 flex flex-col items-center justify-center">
                  <BookingHeading heading="2. Select session duration" />
                  <div className="mb-4 grid grid-cols-3 gap-x-2 lg:mb-0 lg:gap-x-3">
                    {timings.map((value, i) => {
                      return (
                        <SessionDurationBtn
                          key={i}
                          data={value}
                          selectDuration={selectDuration}
                          handleDuration={handleDuration}
                        />
                      );
                    })}
                  </div>
                </div> */}

                {/* Select session plan */}
                <div className="mb-8">
                  <BookingHeading heading="2. Select session plan" />
                  <SessionPricingItem
                    data={{
                      package: "Introductory Session",
                      original_price: 600,
                    }}
                    selectPlan={() =>
                      setCheckoutDetails({
                        ...checkoutDetails,
                        plan: "Introductory Session",
                        price: 600,
                        original_price: 600,
                      })
                    }
                    selectedPlan={
                      checkoutDetails?.plan === "Introductory Session"
                    }
                  />
                  {profileDetails.packages.map((value, i) => {
                    return (
                      <SessionPricingItem
                        data={value}
                        key={i}
                        selectPlan={() =>
                          setCheckoutDetails({
                            ...checkoutDetails,
                            plan: value.package,
                            price: value.original_price,
                            original_price: value.original_price,
                          })
                        }
                        selectedPlan={checkoutDetails?.plan === value.package}
                      />
                    );
                  })}
                </div>

                {/* Choose your slots */}
                <div className="mb-8 self-stretch lg:gap-x-5">
                  <BookingHeading
                    heading={
                      availableTimeSlots.length != 0
                        ? "3. Available slots"
                        : "Slots Not Available"
                    }
                  />

                  {availableTimeSlots.length != 0 && (
                    <AvailableSlots
                      checkoutDetails={checkoutDetails}
                      setCheckoutDetails={setCheckoutDetails}
                      slots={availableTimeSlots}
                      index={index}
                      setIndex={setIndex}
                    />
                  )}
                </div>

                <div className="mb-8 text-center">
                  <button
                    type="submit"
                    disabled={
                      checkoutDetails.plan == "" ||
                      checkoutDetails.mode == "" ||
                      checkoutDetails.date == "" ||
                      checkoutDetails.time == null
                        ? !checkout
                        : checkout
                    }
                    className="btn-one !rounded-lg  enabled:!bg-primary-300 disabled:cursor-not-allowed disabled:bg-gray-500"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            ) : (
              <Checkout
                back={closeCheckout}
                handleCheckout={handleCheckout}
                handleUserVerification={handleUserVerification}
                handleApplyCoupon={handleApplyCoupon}
                user={userDetails}
                setUser={setUserDetails}
                makePayment={makePayment}
                setMakePayment={setMakePayment}
                checkoutDetails={checkoutDetails}
                couponCode={couponCode}
                setCoupon={setCouponCode}
                setCouponAlertMessage={setCouponAlertMessage}
                couponMessage={couponMessage}
                removeDiscount={removeDiscount}
              />
            )}
          </div>
        </div>
      </section>

      <OtpModal
        isOpen={otpState.showModal}
        msg={otpState.message}
        submit={handleOtpVerify}
        otp={otpState.otp}
        setOTP={setOTP}
        email={otpState.email}
      />
    </>
  );
}
