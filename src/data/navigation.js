import {
  faClipboardList,
  faEnvelope,
  faGlobe,
  faHome,
  faLocationDot,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  JoinUsCampusAmbassador,
  JoinUsInternship,
  JoinUsPsychiatrist,
  JoinUsTherapist,
} from "../assets";
import {
  faFacebookSquare,
  faLinkedin,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// ================= Navigation Bar =================
// Services sub pages
export const serviceMenuPages = [
  {
    name: "Therapy",
    slug: "/services/therapy",
    subPages: [
      ["Couples Therapy", "/services/couples-therapy"],
      ["Stress", "/therapy/stress"],
      ["Depression", "/therapy/depression"],
      ["Anxiety", "/therapy/anxiety"],
      ["Anger", "/therapy/anger"],
      ["Panic Attack", "/therapy/panic-attack"],
      ["Bipolar Disorder", "/therapy/bipolar-disorder"],
      ["LGBTQ", "/therapy/lgbtq"],
      ["ADHD", "/therapy/adhd"],
      ["ODD", "/therapy/odd"],
      ["Paranoia", "/therapy/paranoia"],
      ["Conduct Disorder", "/therapy/conduct-disorder"],
    ],
  },
  {
    name: "Yoga",
    slug: "/activities/yoga",
  },
  {
    name: "Lifestyle & Mindulness Coaching",
    slug: "/life-coaching",
  },
  {
    name: "Executive Coaching",
    slug: "/executive-coaching",
  },
  {
    name: "Corporate Wellbeing",
    slug: "/corporate-wellbeing",
  },
  {
    name: "Music Healing",
    slug: "/services/music-healing",
  },
  {
    name: "Meditation",
    slug: "/activities/meditation",
  },
];

// Activities sub pages
export const activitiesMenuPages = [
  {
    name: "Yoga",
    slug: "/activities/yoga",
  },
  {
    name: "Meditation",
    slug: "/activities/meditation",
  },
  {
    name: "Sadhna",
    slug: "/activities/sadhna",
  },
  {
    name: "Brain Exercise",
    slug: "/activities/brain-exercise",
  },
];

// Menu Pages
export const seldCareSubpages = [
  {
    name: "Selfcare Dashbaord",
    slug: "/user/dashboard",
  },
  {
    name: "Brain Exercise",
    slug: "/activities/brain-exercise",
  },
  {
    name: "Sadhna",
    slug: "/activities/sadhna",
  },
];

// Menu Pages
export const resourcesSubpages = [
  {
    name: "Blogs",
    slug: "/blogs",
  },
  // {
  //   name: "Videos",
  //   slug: "/videos",
  // },
  {
    name: "Community",
    slug: "/community",
  },
];

export const joinUsList = [
  {
    image: JoinUsTherapist,
    name: "Therapist",
    slug: "/join-therapist",
  },
  {
    image: JoinUsPsychiatrist,
    name: "Psychiatrist",
    slug: "/join-psychiatrist",
  },
  {
    image: JoinUsInternship,
    name: "Internship",
    slug: "/internship",
  },
  {
    image: JoinUsCampusAmbassador,
    name: "Campus Ambassador",
    slug: "/campus-ambassador",
  },
];

// ================= Footer Links =================
// Footer - Location
export const footerLocation = [
  [
    "Spring House, Plot 2, Sec 43, Golf Course Road, Gurgaon, 122002",
    "",
    faLocationDot,
  ],
  ["www.wleness.com", "https://wleness.com/", faGlobe],
  ["hello@wleness.com", "mailto:hello@wleness.com", faEnvelope],
  ["+91 9147047488", "tel:+919147047488", faPhone],
];

// Footer - About Wleness
export const footerAboutWleness = [
  ["About Us", "/about-us"],
  ["Contact Us", "/contact-us"],
  ["Career", "/career"],
  ["Join as Psychiatrist", "/join-psychiatrist"],
  ["Join as Therapist", "/join-therapist"],
  ["FAQs", "/faqs"],
];

// Footer - Our Services
export const footerOurServices = [
  ["Therapy", "/services/therapy"],
  ["Music Healing", "/services/music-healing"],
  ["Executive Coaching", "/executive-coaching"],
  ["Corporate Wellbeing", "/corporate-wellbeing"],
  ["Lifestyle Coaching", "/life-coaching"],
  ["Internship", "/internship"],
  ["Yoga", "/activities/yoga"],
  // ["Meditation", "/activities/meditation"],
  // ["Internship", "/activities/internship"],
];

// Footer - Focus Areas
export const footerFocusAreas = [
  ["Couples Therapy", "/services/couples-therapy"],
  ["Stress", "/therapy/stress"],
  ["Depression", "/therapy/depression"],
  ["Anxiety", "/therapy/anxiety"],
  ["Anger Issues", "/therapy/anger"],
  ["Panic Attack", "/therapy/panic-attack"],
  ["Bipolar Disorder", "/therapy/bipolar-disorder"],
  // ["LGBTQ", "/therapy/lgbtq"],
  // ["ADHD", "/therapy/adhd"],
  // ["ODD", "/therapy/odd"],
  // ["Paranoia", "/therapy/paranoia"],
  // ["Conduct Disorder", "/therapy/conduct-disorder"],
];

// Footer - Useful Links
export const usefulLinks = [
  ["Online therapy services", "/services/therapy"],
  ["Best online psychologist ", "/experts/all"],
  ["Couple counseling", "/services/couples-therapy"],
  ["Music therapy", "/services/music-healing"],
  ["Best depression therapy ", "/therapy/depression"],
  ["Stress management ", "/therapy/stress"],
  ["Anxiety management ", "/therapy/anxiety"],
  ["Best family counseling in india", ""],
  ["Best online lifestyle coaching", "/life-coaching"],
  ["Best executive coaching in india", "/executive-coaching"],
];

// Footer - Our Experts
export const footerOurExperts = [
  ["Therapists", "/experts/all"],
  ["Psychiatrists", ""],
  ["Coaches", "/executive-coaching"],
];

// Footer social links
export const socialLinks = [
  [faSquareWhatsapp, "https://wa.me/919147047488"],
  [faSquareInstagram, "https://www.instagram.com/wleness/"],
  [faFacebookSquare, "http://facebook.com/profile.php?id=100094475627706"],
  [faSquareXTwitter, "http://twitter.com/wleness111"],
  [faLinkedin, "https://www.linkedin.com/company/wleness/"],
];

// ================= Admin Links =================
// Admin Side bar
export const adminSidebar = [
  ["Doctors", "/admin/doctors"],
  ["Queries", "/admin/queries"],
  ["Issue Category", "/admin/issue-category"],
  ["Issues", "/admin/therapy"],
  ["Users", "/admin/users"],
  ["Questions", "/admin/questions"],
  ["Blogs", "/admin/blogs"],
];

export const userDashboardLinks = [
  ["Home", "/user/profile", faHome, "_self"],
  // ["Profile", "/user/profile", faUser],
  // ["Self Care", "/user/dashboard", faHeartCircleCheck],
  // ["Routine Care", "/user/routine-care", faBookBookmark],
  ["Routine Care", "/user/routine-care", faClipboardList, "_self"],
  ["Community", "https://community.wleness.com", faUsers, "_blank"],
];
