import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Data
import { modes } from "../../data/doctors";
import {
  APPLY_YOGA_COUPON,
  VERIFY_USER_EMAIL,
  YOGA_APPOINTMENT_PAYMENT,
  YOGA_CHECKOUT_DETAILS,
  YOGA_VERIFY_USER,
} from "../../data/api";
import { profileMask } from "../../assets";
import SessionMode from "../../components/icon/SessionMode";
import BookingHeading from "../../components/Appointment/BookingHeading";
import OtpModal from "../../components/Auth/OtpModal";
import YogaCheckout from "./YogaCheckout";
import YogaSessionPricingItem from "../../components/list/YogaSessionPricingItem";

const dates = [
  "24th Feb 2024",
  "25th Feb 2024",
  "2nd March 2024",
  "3rd March 2024",
];

const morningBatches = [
  "06:00 to 07:00 AM",
  "07:00 to 08:00 AM",
  "08:00 to 09:00 AM",
  "09:00 to 10:00 AM",
];

const eveningBatches = ["05:00 to 06:00 PM", "06:00 to 07:00 PM"];

export default function YogaBooking() {
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);
  const [makePayment, setMakePayment] = useState(false);
  const [batches, setBatches] = useState({});
  const [sessions, setSessions] = useState({});
  const [swiper, setSwiper] = useState(null); // Store Swiper instance
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
      .get(YOGA_CHECKOUT_DETAILS + slug)
      .then((response) => {
        if (response.data.status == "success") {
          setBatches(response.data.batches);
          setSessions(response.data.sessions);
          setProfileDetails(response.data.expert);
          setLoading(false);
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
    let formData = { ...userDetails, expertId: profileDetails?.id };
    for (const key in checkoutDetails) {
      formData[key] = checkoutDetails[key];
    }

    if (couponCode.is_applied) {
      formData["coupon_code"] = couponCode.code;
    }

    // Set loading in payment
    setMakePayment(true);
    axios
      .post(YOGA_VERIFY_USER, formData)
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
          };
          handleCheckout(pricing_data);
        } else {
          setOtpState({ ...otpState, message: response.data.message });
        }
      })
      .catch((error) => console.log(error));
  };

  // ======================================
  // Apply coupone code
  // ======================================
  const handleApplyCoupon = (e) => {
    e.preventDefault();

    console.log("coupon code applied");

    // Coupon code minimum value
    if (checkoutDetails.original_price < 500) {
      setCouponAlertMessage(
        "error",
        "Coupon Code is valid on minimum value of Rs.500",
      );
      return null;
    } else {
      let formData = new FormData();
      formData.append("coupon_code", couponCode.code);

      axios
        .post(APPLY_YOGA_COUPON, formData)
        .then((response) => {
          setCouponAlertMessage(response.data.status, response.data.message);
          if (response.data.status == "success") {
            setCouponCode({
              ...couponCode,
              price: Math.round(checkoutDetails.original_price * 0.1), // Apply 10% discount
              is_applied: true,
            });
            setCheckoutDetails({
              ...checkoutDetails,
              price: Math.round(
                checkoutDetails.original_price -
                  checkoutDetails.original_price * 0.1,
              ),
            });
          }
        })
        .catch((error) => {
          console.error(error);
          setCouponAlertMessage("error", "Please Try Again Later");
        });
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
      .post(YOGA_APPOINTMENT_PAYMENT, data)
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
          <Link to="/activities/yoga" className="mb-5 block">
            <div className="relative">
              <div className="experts-profile-bg mx-auto mb-2 h-52 w-52 rounded-full">
                <img
                  src={profileDetails?.image}
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
            <h4 className="text-2xl font-bold">{profileDetails?.name}</h4>
            <h6 className="text-xl font-semibold">
              {profileDetails?.experience}
            </h6>
            <div className="my-2 font-medium">
              <p>Expertise: {profileDetails?.expertise}</p>
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
                  Book an appointment to connect with a yoga expert
                </p>

                {/* Select session mode */}
                <div className="mb-8 hidden justify-center text-center">
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

                {/* Select session plan */}
                <div className="mb-8">
                  <BookingHeading heading="1. Select session plan" />
                  {sessions.map((value, i) => {
                    return (
                      <YogaSessionPricingItem
                        data={value}
                        key={i}
                        selectPlan={() =>
                          setCheckoutDetails({
                            ...checkoutDetails,
                            plan: value.package,
                            price: value.discount_price,
                            original_price: value.discount_price,
                          })
                        }
                        selectedPlan={checkoutDetails?.plan === value.package}
                      />
                    );
                  })}
                </div>

                {/* Choose your slots */}
                <div className="mb-8 self-stretch lg:gap-x-5">
                  <BookingHeading heading="2. Select Date and Time" />

                  <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
                    {dates.map((value) => {
                      return (
                        <button
                          type="button"
                          onClick={() =>
                            setCheckoutDetails({
                              ...checkoutDetails,
                              date: value,
                            })
                          }
                          className={`w-full cursor-pointer rounded-lg border-2 border-primary-300 px-2 py-2 text-center text-sm font-semibold transition-all lg:px-3 lg:py-3 ${
                            checkoutDetails.date === value
                              ? "bg-primary-300 text-white"
                              : "text-primary-300 hover:bg-primary-300 hover:text-white"
                          }`}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>

                  {/* <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    navigation={true}
                    className="yoga-booking-navigation mb-6"
                    grabCursor={true}
                    spaceBetween={15}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
                    speed={600}
                  >
                    {dates.map((value) => {
                      return (
                        <SwiperSlide>
                          <button
                            type="button"
                            onClick={() =>
                              setCheckoutDetails({
                                ...checkoutDetails,
                                date: value,
                              })
                            }
                            className={`w-full cursor-pointer rounded-lg border-2 border-primary-300 px-2 py-2 text-center text-sm font-semibold transition-all lg:px-3 lg:py-3 ${
                              checkoutDetails.date === value
                                ? "bg-primary-300 text-white"
                                : "text-primary-300 hover:bg-primary-300 hover:text-white"
                            }`}
                          >
                            {value}
                          </button>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper> */}

                  <div className="my-10 mb-6 grid gap-y-6 divide-x-2 md:grid-cols-2">
                    <div>
                      <div className="bg-primary-100 py-2 text-center font-quicksand font-semibold text-white">
                        Saturday
                      </div>
                      <div className="flex divide-x-2 bg-slate-50 py-1 text-center">
                        <div className="w-1/2 font-quicksand font-medium">
                          Morning
                        </div>
                        <div className="w-1/2 font-quicksand font-medium">
                          Evening
                        </div>
                      </div>
                      <div className="flex divide-x-2 bg-slate-50 py-1 text-center">
                        <div className="w-1/2 space-y-2 px-2 pb-2">
                          {morningBatches.map((value, i) => {
                            return (
                              <button
                                onClick={() =>
                                  setCheckoutDetails({
                                    ...checkoutDetails,
                                    batch: "Morning Saturday ",
                                    time: value,
                                  })
                                }
                                key={i}
                                type="button"
                                className={`w-full cursor-pointer rounded-lg border-2 border-primary-300 px-2 py-2 text-center text-xs font-semibold transition-all md:text-sm lg:px-3 lg:py-3 ${
                                  checkoutDetails.batch ===
                                    "Morning Saturday " &&
                                  checkoutDetails.time === value
                                    ? "bg-primary-300 text-white"
                                    : "text-primary-300 hover:bg-primary-300 hover:text-white"
                                }`}
                              >
                                {value}
                              </button>
                            );
                          })}
                        </div>

                        <div className="w-1/2 space-y-2 px-2 pb-2">
                          {eveningBatches.map((value, i) => {
                            return (
                              <button
                                onClick={() =>
                                  setCheckoutDetails({
                                    ...checkoutDetails,
                                    batch: "Evening Saturday ",
                                    time: value,
                                  })
                                }
                                key={i}
                                type="button"
                                className={`w-full cursor-pointer rounded-lg border-2 border-primary-300 px-2 py-2 text-center text-xs font-semibold transition-all md:text-sm lg:px-3 lg:py-3 ${
                                  checkoutDetails.batch ===
                                    "Evening Saturday " &&
                                  checkoutDetails.time === value
                                    ? "bg-primary-300 text-white"
                                    : "text-primary-300 hover:bg-primary-300 hover:text-white"
                                }`}
                              >
                                {value}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-primary-100 py-2 text-center font-quicksand font-semibold text-white">
                        Sunday
                      </div>
                      <div className="flex divide-x-2 bg-slate-50 py-1 text-center">
                        <div className="w-1/2 font-quicksand font-medium">
                          Morning
                        </div>
                        <div className="w-1/2 font-quicksand font-medium">
                          Evening
                        </div>
                      </div>
                      <div className="flex divide-x-2 bg-slate-50 py-1 text-center">
                        <div className="w-1/2 space-y-2 px-2 pb-2">
                          {morningBatches.map((value, i) => {
                            return (
                              <button
                                onClick={() =>
                                  setCheckoutDetails({
                                    ...checkoutDetails,
                                    batch: "Morning Sunday ",
                                    time: value,
                                  })
                                }
                                key={i}
                                type="button"
                                className={`w-full cursor-pointer rounded-lg border-2 border-primary-300 px-2 py-2 text-center text-xs font-semibold transition-all md:text-sm lg:px-3 lg:py-3 ${
                                  checkoutDetails.batch === "Morning Sunday " &&
                                  checkoutDetails.time === value
                                    ? "bg-primary-300 text-white"
                                    : "text-primary-300 hover:bg-primary-300 hover:text-white"
                                }`}
                              >
                                {value}
                              </button>
                            );
                          })}
                        </div>

                        <div className="w-1/2 space-y-2 px-2 pb-2">
                          {eveningBatches.map((value, i) => {
                            return (
                              <button
                                onClick={() =>
                                  setCheckoutDetails({
                                    ...checkoutDetails,
                                    batch: "Evening Sunday ",
                                    time: value,
                                  })
                                }
                                key={i}
                                type="button"
                                className={`w-full cursor-pointer rounded-lg border-2 border-primary-300 px-2 py-2 text-center text-xs font-semibold transition-all md:text-sm lg:px-3 lg:py-3 ${
                                  checkoutDetails.batch === "Evening Sunday " &&
                                  checkoutDetails.time === value
                                    ? "bg-primary-300 text-white"
                                    : "text-primary-300 hover:bg-primary-300 hover:text-white"
                                }`}
                              >
                                {value}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8 text-center">
                  <button
                    type="submit"
                    disabled={Object.values(checkoutDetails).includes(
                      "" || null,
                    )}
                    className="btn-one !rounded-lg  enabled:!bg-primary-300 disabled:cursor-not-allowed disabled:bg-gray-500"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            ) : (
              <YogaCheckout
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
        verifyOtp={handleOtpVerify}
        otp={otpState.otp}
        setOTP={setOTP}
        phone={otpState.email}
      />
    </>
  );
}
