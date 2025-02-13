// Data
import {
  activityBlogThumbnail,
  feature4,
  feature5,
  feature6,
  feature7,
  feature8,
  feature11,
  feature12,
  musicalTherapyHeader,
  musicalTherapy1,
  musicalTherapy2,
  musicalTherapy3,
  musicalTherapy4,
  musicalTherapy5,
  musicalTherapy6,
  whyChooseTherapy1,
  whyChooseTherapy2,
  whyChooseTherapy3,
  whyChooseTherapy4,
  bestTherapy,
  specialist1,
  therapyHeader,
  psychiatristHeader,
  bestPsychiatrist,
  couplesTherapyHeader1,
  couplesTherapyHeader2,
  couplesTherapyHeader3,
} from "../assets";

// Services Page Features Blocks
export const servicesFeatures = [
  {
    name: "Express Music",
    image: feature7,
  },
  {
    name: "Inner Peace",
    image: feature5,
  },
  {
    name: "Emotional Support",
    image: feature8,
  },
];
export const couplesTherapyFeatures = [
  {
    name: "Express Love",
    image: feature4,
  },
  {
    name: "Feel Alive",
    image: feature5,
  },
  {
    name: "Reclaim Affection",
    image: feature6,
  },
];
export const musicalTherapyFeatures = [
  {
    name: "Cognitive Enhancement",
    image: feature11,
  },
  {
    name: "Stress Reduction",
    image: feature12,
  },
  {
    name: "Emotional Expression",
    image: feature8,
  },
];

// Services Categories
export const couplesTherapyData = {
  id: 1,
  name: "Couples Therapy",
  slug: "/services/couples-therapy",
  header: {
    title: [
      {
        color: false,
        text: "Build Stronger Relationships with Best ",
      },
      {
        color: true,
        text: " Couples Counselling",
      },
    ],
    desc: "Let’s start on a journey of love and understanding with the best online relationship counselling at Wleness. We understand the importance of love and connection in your relationship. Find a safe space for you and your partner to get emotionally focused therapy and create a stronger bond. Let us guide you towards a happier and more fulfilling partnership.",
    images: [
      couplesTherapyHeader1,
      couplesTherapyHeader2,
      couplesTherapyHeader3,
    ],
  },
  blogs: [
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
  ],
};

export const MusicalTherapyData = {
  id: 2,
  name: "Music Healing",
  slug: "/services/music-healing",
  header: {
    title: [
      {
        color: false,
        text: "Discover the power of ",
      },
      {
        color: true,
        text: "Music Healing",
      },
    ],
    desc: "Explore how music therapy offers a unique way to express emotions and heal. With its rhythms and tones, this therapy helps with different feelings, bringing more balance inside you. Discover profound insights and find more peace through the power of music.",
    image: musicalTherapyHeader,
    alt: "Discover the power of  Music Healing",
  },
  activities: {
    title: "MUSIC HEALING SERVICES",
    desc: "Use music to improve mental and emotional well-being through techniques like active listening, improvisation, and songwriting with our top counselors.",

    types: [
      {
        title: "Healing Soundscapes",
        thumbnail: musicalTherapy1,
        desc: "Experience the soothing embrace of our meticulously crafted, research-backed musical tracks, purposefully designed to usher in relaxation, diminish stress, and elevate your overall well-being through music.",
        slug: "/",
      },
      {
        title: "Personalized Music Therapy",
        thumbnail: musicalTherapy2,
        desc: "Experience the transformative benefits of one-on-one or group music therapy sessions led by our expert therapists. Explore diverse therapeutic approaches, including receptive listening, improvisation, recreative exercises.",
        slug: "/",
      },
      {
        title: "Musical Artistry",
        thumbnail: musicalTherapy3,
        desc: "Unlock your creativity with Musical Drawing, an interdisciplinary approach that combines visual art and music to express your inner emotions and thoughts through a unique and therapeutic medium.",
        slug: "/",
      },
      {
        title: "Rhythmic Harmony",
        thumbnail: musicalTherapy4,
        desc: "Join our Music and Movement sessions, where the fusion of music and physical expression offers a dynamic outlet for self-expression and emotional release, fostering holistic healing and self-discovery.",
        slug: "/",
      },
      {
        title: "Corporate Harmony",
        thumbnail: musicalTherapy5,
        desc: "Elevate your workplace with our corporate music healing programs aimed at improving the well-being of both employers and  employees. Enhance team dynamics, reduce stress, and boost productivity.",
        slug: "/",
      },
      {
        title: "Soul Rhythm",
        thumbnail: musicalTherapy6,
        desc: "This serves as a valuable means for young adults to alleviate distress. Through creative expression and introspection via rhythm, melody, and lyrics, it enables emotional processing and inner balance & mental well-being.",
        slug: "/",
      },
    ],
  },
  blogs: [
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
  ],
};

export const TherapyData = {
  name: "Therapy",
  desc: "Unlock the incredible power of therapy to change your life. Feel supported as you overcome struggles, and find your inner strength. Get the best services like CBT (Cognitive Behavioural Therapy), DBT (Dialectic Behavioural Therapy), Applied Behavioural Analysis, and many more from the top psychologists in India.",
  slug: "/therapy",
  image: therapyHeader,
  bestTherapist: {
    heading: [
      {
        color: false,
        text: "Select the best ",
      },
      {
        color: true,
        text: "Therapist ",
      },
      {
        color: false,
        text: "Today",
      },
    ],
    featureImage: bestTherapy,
    features: [
      ["Online Therapy  ", "Anywhere, Anytime"],
      ["Best Therapist   ", "from all over India"],
      ["Most Affordable ", "from the comfort of your home"],
      ["Anonymous Online   ", "Consultation of your comfort"],
    ],
    startBtn: ["Start the therapy", "/issues"],
  },
  whyChoose: [
    {
      title: "Emotional Support",
      desc: "At Wleness Therapy, we're here to be your rock through every high and low. Get the top therapist's support from the comfort of your home.",
      image: whyChooseTherapy1,
    },
    {
      title: "Problem Solving",
      desc: "Let the best counselors guide you through your challenges with practical solutions breaking down obstacles into manageable steps.",
      image: whyChooseTherapy2,
    },
    {
      title: "Relationships",
      desc: " Get quality family and couple counseling with our therapists online to build trust and healthy conversations to better relationships.",
      image: whyChooseTherapy3,
    },
    {
      title: "Mental Wellness",
      desc: "At Wleness, nurture your well being. Our top therapists will help unlock your inner strength and find balance to live a positive life.",
      image: whyChooseTherapy4,
    },
  ],
};

export const psychiatristData = {
  name: "Psychiatrist",
  desc: "Discover transformative psychiatric care and personalized online counselling for effective treatment, renewed well-being, and empowered growth.",
  slug: "/psychiatrist",
  image: psychiatristHeader,
  bestTherapist: {
    heading: [
      {
        color: false,
        text: "Select the best ",
      },
      {
        color: true,
        text: "Psychiatrist ",
      },
      {
        color: false,
        text: "Today",
      },
    ],
    featureImage: bestPsychiatrist,
    features: [
      ["Best Psychiatrist ", "available", "left-0 top-0 lg:top-6 lg:left-16 "],
      ["Online ", "Consultations", " top-0 lg:top-6 right-0 lg:right-28 "],
      ["Affordable ", "Help", " -bottom-12 lg:bottom-0 left-0 lg:left-32"],
      [
        "Psychiatrist ",
        "just a all away",
        " -bottom-12 lg:-bottom-4 right-0 lg:right-28",
      ],
    ],
    startBtn: ["Start the treatment", "/treatments"],
    doctors: [
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
    ],
  },
};
