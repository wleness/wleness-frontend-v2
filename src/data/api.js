const URI = "https://api.wleness.com/api/";
// const URI = "http://127.0.0.1:5000/api/";

// ============= API Endpoints =============
// Authentication
export const SIGNUP_USER_URI = URI + "signup";
export const LOGIN_USER_URI = URI + "login";
export const LOGOUT_USER_URI = URI + "logout";
export const EXPERTS_LOGIN_URI = URI + "experts-login";
export const GOOGLE_SIGNUP_URI = URI + "google-signup";
export const GOOGLE_LOGIN_URI = URI + "google-signin";
export const VERIFY_OTP = URI + "verifyOtp";
export const VERIFY_SIGNUP_OTP = URI + "verify-signup-email";
export const FORGOT_PASSWORD_URI = URI + "forgot-password";

// Users
export const USER_PROFILE_URI = URI + "profile";
export const USER_PROFILE_UPDATE_URI = URI + "profile/update";
export const ADD_TODO_URI = URI + "todo";
export const ADD_GOAL_URI = URI + "goals";
export const ADD_JOURNAL_URI = URI + "journaling";
export const USER_HISTORY_URI = URI + "history";

// Leads
export const REQUEST_CALLBACK_URI = URI + "request-callback";
export const CONTACT_URI = URI + "contact";
export const CAREER_URI = URI + "career-apply";
export const PARTNER_WITH_US_URI = URI + "partner-with-us";

// Experts and instructors
export const EXPERTS_URI = URI + "experts";
export const EXPERTS_PROFILE_URI = URI + "experts/profile/";
export const YOGA_EXPERTS_URI = URI + "yoga-experts";
export const GET_RATES = URI + "get-rates";

// Appointment
// >> Dashboard
export const USER_APPOINTMENTS = URI + "appointments";
export const APPOINTMENT_BOOK_URI = URI + "book-appointment";
export const UPDATE_SLOTS = URI + "experts/update-slots";
export const EXPERTS_DASHBOARD = URI + "experts/dashboard";
// >> Appointment booking
export const GET_CHECKOUT_DETAILS = URI + "appointment/checkout/"; // append expert slug 'experts/slots/:slug
export const VERIFY_USER = URI + "appointments/verification";
export const VERIFY_USER_EMAIL = URI + "appointments/verify-email";
export const APPOINTMENT_PAYMENT = URI + "appointments/payment";
export const APPLY_COUPON = URI + "apply-coupon";
// >> Yoga Appointment booking
export const YOGA_CHECKOUT_DETAILS = URI + "yoga-checkout/"; // append expert slug ":slug"
export const YOGA_VERIFY_USER = URI + "yoga-appointments/verification";
export const YOGA_APPOINTMENT_PAYMENT = URI + "yoga-appointments/payment";
export const YOGA_SUBSCRIPTION = URI + "yoga-subscription";
export const APPLY_YOGA_COUPON = URI + "yoga-apply-coupon";
// >> Life-coaching booking
export const LIFE_COACHING_BOOKING = URI + "life-coaching/booking";
export const LIFE_COACHING_PAYMENT = URI + "life-coaching/payment";

// Enquiries
export const COACH_CALLBACK_URI = URI + "coach-callback-requests";
export const LIFE_COACHING_URI = URI + "life-coaching";
export const GENERAL_ENQUIRY_URI = URI + "general-enquiries";
export const ASSESSMENT_RESULT = URI + "assessment";

// Blogs
export const BLOGS_URI = URI + "blogs";
export const SINGLE_BLOG_URI = URI + "blog";
export const BLOGS_CATEGORY_URI = URI + "blog-categories";

// Joining Forms
export const CORPORATE_JOIN_URI = URI + "join-corporate";
export const THERAPIST_JOIN_URI = URI + "join-therapist";
export const PSYCHIATRIST_JOIN_URI = URI + "join-psychiatrist";
export const CAMPUS_AMBASSADOR_JOIN_URI = URI + "join-campus-ambassador";
export const INTERNSHIP_JOIN_URI = URI + "join-internships";
