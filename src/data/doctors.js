import {
  faCommentDots,
  faPhoneVolume,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  debashreeDasPortrait,
  doctor1,
  kantaGavitPortrait,
  meenakshiMishraPortrait,
  nehaJainPortrait,
  nidhiNahataPortrait,
  nithinAfPortrait,
  poojaSinghPortrait,
  prakashchandraRamtekePortrait,
  purviBalasariaPortrait,
  specialist1,
  swatiGhoshalPortrait,
} from "../assets";

export const doctorsDetails = [
  {
    bookingUrl:
      "https://swati-ghoshal.dayschedule.com/session-with-swati-ghoshal",
    experience: "8+ years of experience",
    expertise: "Couple Counselling, Corporate Training",
    id: 1,
    image: "https://api.wleness.com//static/img/experts/swati-ghoshal.png",
    languages: "Hindi, English & Bengali",
    name: "Swati Ghoshal",
    price: 234,
    profession: "Psychologist",
    slug: "swati-ghoshal",
  },
  {
    bookingUrl:
      "https://deba-shree.dayschedule.com/session-with-debashree-das-gupta",
    experience: "8+ years of experience",
    expertise: "Musical Healing",
    id: 2,
    image:
      "https://api.wleness.com//static/img/experts/debashree-das-gupta.png",
    languages: "Hindi, English & Bengali",
    name: "Debashree Das Gupta",
    price: 234,
    profession: "Music Therapist",
    slug: "debashree-das-gupta",
  },
  {
    bookingUrl:
      "https://purvi-balasaria.dayschedule.com/session-with-purvi-balasaria-1",
    experience: "5+ years of experience",
    expertise: "Eclectic, Holistic Approach",
    id: 3,
    image: "https://api.wleness.com//static/img/experts/purvi-balasaria.png",
    languages: "Eng, Hindi, Bengali",
    name: "Purvi Balasaria",
    price: 234,
    profession: "Therapist",
    slug: "purvi-balasaria",
  },
  {
    bookingUrl:
      "https://minakshi-mishra.dayschedule.com/talk-with-minakshi-mishra",
    experience: "8+ years of experience",
    expertise: "CBT, BT, Counseling, Mindfulness meditations",
    id: 4,
    image: "https://api.wleness.com//static/img/experts/minakshi-mishra.png",
    languages: "Hindi, English",
    name: "Minakshi Mishra",
    price: 2342,
    profession: "Psychiatrist",
    slug: "minakshi-mishra",
  },
  {
    bookingUrl:
      "https://talk-with-prakashchandra-ramteke.dayschedule.com/prakashchandra-ramteke",
    experience: "3+ years of experience",
    expertise: "CBT, ACT, DBT, School Counseling",
    id: 5,
    image:
      "https://api.wleness.com//static/img/experts/prakashchandra-ramteke.png",
    languages: "Hindi, Marathi, English",
    name: "Prakashchandra Ramteke",
    price: 234,
    profession: "Psychologist",
    slug: "prakashchandra-ramteke",
  },
  {
    bookingUrl:
      "https://talk-with-dr-psingh.dayschedule.com/session-with-dr-p-singh",
    experience: "9+ years of experience",
    expertise: "Holistic healing, Anxiety disorders",
    id: 6,
    image: "https://api.wleness.com//static/img/experts/dr-p-singh.png",
    languages: "English, Hindi",
    name: "Dr. P Singh",
    price: 2500,
    profession: "Psychiatrist",
    slug: "dr-p-singh",
  },
  {
    bookingUrl:
      "https://talk-with-neha-jain.dayschedule.com/session-with-neha-jain",
    experience: "5+ years of experience",
    expertise: "CBT, EFT, and DBT",
    id: 7,
    image: "https://api.wleness.com//static/img/experts/neha-jain.png",
    languages: "Hindi, English",
    name: "Neha Jain",
    price: 1500,
    profession: "Psychologist",
    slug: "neha-jain",
  },
  {
    bookingUrl: "https://talk-with-nidhi-nahata.dayschedule.com/session-with",
    experience: "3+ years of experience",
    expertise: "Clinical Psychiatrist",
    id: 8,
    image: "https://api.wleness.com//static/img/experts/nidhi-nahata.png",
    languages: "Hindi, English",
    name: "Nidhi Nahata",
    price: 1200,
    profession: "Psychiatrist",
    slug: "nidhi-nahata",
  },
  {
    bookingUrl: "https://nitin-af.dayschedule.com/talk-with-nitin-af",
    experience: "4+ years of experience",
    expertise: "Couple and family counseling",
    id: 9,
    image: "https://api.wleness.com//static/img/experts/nithin-a-f.png",
    languages: "English, Malayalam",
    name: "Nithin A.F",
    price: 1000,
    profession: "Psychologist",
    slug: "nithin-a-f",
  },
  {
    bookingUrl: "https://kanta-gavit.dayschedule.com/kanta-gavit",
    experience: "12+ years of experience",
    expertise: "Trauma Therapist",
    id: 10,
    image: "https://api.wleness.com//static/img/experts/kanta-gavit.png",
    languages: "English, Hindi",
    name: "Kanta Gavit",
    price: 2500,
    profession: "Psychologist",
    slug: "kanta-gavit",
  },
];

export const homePageDoctors = {
  heading: [
    {
      color: false,
      text: "Get the support of ",
    },
    {
      color: true,
      text: "India's top psychologists!",
    },
  ],
  desc: "Wleness provides quality therapy and counseling to all clients. Get the best and most recommended online therapy and guidance packages with India's best psychiatrists, therapists, and guides.",
  doctors: doctorsDetails,
  button: {
    text: "Book Now",
    slug: "/experts/all",
  },
};

export const couplesTherapyDoctors = {
  heading: [
    {
      color: false,
      text: "Meet Our ",
    },
    {
      color: true,
      text: "Relationship Gurus",
    },
  ],
  desc: "Wleness provides quality therapy and couples counselling to all our clients. Get the best and most recommended online therapy and guidance packages with India's best counsellors for you and your loved ones. Connect your relationship with a trained and certified online psychologist and counsellor.",
  doctors: doctorsDetails,
  button: {
    text: "Book Now",
    slug: "/appointment/checkout",
  },
};

export const expertDoctors = {
  heading: [
    {
      color: false,
      text: "Our ",
    },
    {
      color: true,
      text: "Soul Healers ",
    },
    {
      color: false,
      text: "Team",
    },
  ],
  desc: "Our team of specialized doctors is committed to providing personalized and comprehensive care to our patients. With a passion for the latest medical advancements, we deliver high-quality treatment in a warm and welcoming environment.",
  doctors: doctorsDetails,

  button: {
    text: "View all",
    slug: "/experts/all",
  },
};

// export const allExperts = [
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//     price: "400",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//     price: "300",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//     price: "500",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//     price: "400",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//     price: "400",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
//   {
//     name: "Dr. Christina",
//     image: specialist1,
//     profession: "Therapist",
//     exp: "6+ years of experience",
//     expertise: "Yoga, work-life",
//     speaks: "German, English",
//   },
// ];

export const stressDoctors = {
  heading: [
    {
      color: false,
      text: "Speak to our ",
    },
    {
      color: true,
      text: " Specialist",
    },
  ],
  desc: "",
  doctors: doctorsDetails,
  button: {
    text: "Book Now",
    slug: "/experts/all",
  },
};

export const timings = [
  {
    text: "30 Mins",
    value: "30_min",
    coupon_discount: "120",
    price: 450,
  },
  {
    text: "45 Mins",
    value: "45_min",
    coupon_discount: "120",
    price: 550,
  },
  {
    text: "60 Mins",
    value: "60_min",
    coupon_discount: "120",
    price: 700,
  },
];

export const modes = [
  {
    text: "Chat",
    value: "chat",
    icon: faCommentDots,
  },
  {
    text: "Voice",
    value: "voice",
    icon: faPhoneVolume,
  },
  {
    text: "Video",
    value: "video",
    icon: faVideo,
  },
];
