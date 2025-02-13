// Data
import {
  issueAnxiety,
  issueAdhd,
  issueBiopolarDisorder,
  issueCd,
  issueDepression,
  issueEatingDisorder,
  issueOcd,
  issueOdd,
  issuePanicAttack,
  issueParanoia,
  issueSchizophrenia,
  issueStress,
  meditationHeader,
  meditationType1,
  meditationType2,
  meditationType3,
  meditationType4,
  meditationType5,
  meditationType6,
  activityBlogThumbnail,
  sadhnaHeader,
  sadhnaType1,
  sadhnaType2,
  sadhnaType3,
  sadhnaType4,
  sadhnaType5,
  sadhnaType6,
  sadhnaType7,
  sadhnaType8,
  yogaHeader,
  brainGameGalaxy,
  brainGameTreasure,
  brainGameHunter,
  feature1,
  feature2,
  feature3,
  blogThumbnail1,
  blogThumbnail2,
  blogThumbnail3,
  blogThumbnail4,
  blogThumbnail5,
  blogThumbnail6,
  iconSafe,
  iconCommunity,
  iconEasyAccess,
  iconEffective,
  iconSecure,
  homeExperienceIcon,
  homeCommitmentIcon,
  homeFacilitiesIcon,
  meditationType7,
  meditationType8,
  issueRelationship,
  issueLgbtq,
  issueAnger,
  homeTherapy,
  homeExecutiveCoaching,
  homeCorporate,
  homeLifestyleCoaching,
  homeYoga,
  homeMeditation,
  homeInternship,
  homeSelfcare,
  homeMusicalTherapy,
  issueParenting,
  lifeCoaching1,
  lifeCoaching2,
  lifeCoaching3,
  breadthHeader,
  breadthLeft1,
  breadthRight1,
  breadthRight2,
  kundaliniHeader,
  kundaliniLeft1,
  kundaliniRight1,
  mindfulnessHeader,
  mindfulnessLeft1,
  mindfulnessLeft2,
  mindfulnessLeft3,
  mindfulnessRight1,
  mindfulnessRight2,
  spiritualHeader,
  spiritualLeft1,
  spiritualRight1,
  walkingLeft1,
  walkingRight1,
  walkingHeader,
  zenHeader,
  zenLeft1,
  zenRight1,
  uttanasanaHeader,
  navasanaHeader,
  ardhChandrasanaHeader,
  activitiesSubpagesProcedure,
  yogaSadhnaTypes,
  precautions,
  conclusionBulb,
  mantraSadhnaProcedure,
  mantraSadhnas,
  japaSadhnas,
  japaSadhnaProcedure,
  bhaktiSadhnaProcedure,
  bhaktiSadhnas,
  kundaliniSadhnaProcedure,
  kundaliniSadhnas,
  sevaSadhnaProcedure,
  sevaSadhnas,
  natureSadhnaProcedure,
  natureSadhnas,
  yogaSadhnaHeader,
  meditationSadhnaHeader,
  mantraSadhnaHeader,
  japaSadhnaHeader,
  bhaktiSadhnaHeader,
  kundaliniSadhnaHeader,
  sevaSadhnaHeader,
  natureSadhnaHeader,
  vipasnaHeader,
  vipasnaPracticingLeft,
  vipasnaPracticingRight,
  concentrationHeader,
  concentrationPracticingLeft,
  concentrationPracticingRight,
  lifeCoachingClarity,
  lifeCoachingMotivation,
  lifeCoachingConfidence,
  lifeCoachingOvercomingfear,
  lifeCoachingPublicSpeaking,
  lifeCoachingLeadershipDevelopment,
  lifeCoachingInterviewPreparation,
  yoga__HathaYoga,
  yoga__AshtangaYoga,
  yoga__WeightLoss,
  yoga__MeditationAndMinfullness,
  yoga__TherapauticYoga,
  yoga__WomenYoga,
  brainExerciseHeader,
  whyWleness,
  logoIAF,
  startUpIndiaLogo,
  logoISO,
  homeThearpy,
  homeLifeCoaching,
  homeExecutiveCoachingImage,
  homeCorporateImage,
} from "../assets";

// Components
import HeaderWithImage from "../components/HeaderWithImage";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import RightProcedureList from "../components/RightProcedureList";
import RightImageList from "../components/RightImageList";
import LeftImageList from "../components/LeftImageList";
import LeftImageList3 from "../components/LeftImageList3";
import SubpagesConclusion from "../components/SubpagesConclusion";
import RightImageList2 from "../components/RightImageList2";
import {
  faL,
  faMusic,
  faSearch,
  faUser,
  faUserGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { BRAIN_EXERCISE } from "./urls";

// Therapies data for landing page
export const therapies = [
  {
    name: "Stress",
    title: "Stress",
    image: issueStress,
    slug: "/therapy/stress",
  },
  {
    name: "Depression",
    title: "Depression",
    image: issueDepression,
    slug: "/therapy/depression",
  },
  {
    name: "Anxiety",
    title: "Anxiety",
    image: issueAnxiety,
    slug: "/therapy/anxiety",
  },
  {
    name: "Anger",
    title: "Anger",
    image: issueAnger,
    slug: "/therapy/anger",
  },
  {
    name: "Panic Attacks",
    title: "Panic Attacks",
    image: issuePanicAttack,
    slug: "/therapy/panic-attack",
  },
  {
    name: "Bipolar Disorder",
    title: "Bipolar Disorder",
    image: issueBiopolarDisorder,
    slug: "/therapy/bipolar-disorder",
  },
  {
    name: "LGBTQ",
    title: "LGBTQ",
    image: issueLgbtq,
    slug: "/therapy/lgbtq",
  },
  {
    name: "ADHD",
    title: "Attention deficit hyperactivity disorder",
    image: issueAdhd,
    slug: "/therapy/adhd",
  },
  {
    name: "ODD",
    title: "Oppositional defiant disorder",
    image: issueOdd,
    slug: "/therapy/odd",
  },
  {
    name: "Paranoia",
    title: "Paranoia",
    image: issueParanoia,
    slug: "/therapy/paranoia",
  },
  {
    name: "Conduct Disorder",
    title: "Conduct Disorder",
    image: issueCd,
    slug: "/therapy/conduct-disorder",
  },
  {
    name: "Relationship",
    title: "Relationship",
    image: issueRelationship,
    slug: "/therapy/relationship",
  },
  {
    name: "Eating Disorder",
    title: "Eating Disorder",
    image: issueEatingDisorder,
    slug: "/therapy/eating-disorder",
  },
  {
    name: "OCD",
    title: "Obsessive-compulsive disorder",
    image: issueOcd,
    slug: "/therapy/ocd",
  },
  {
    name: "Schizophrenia",
    title: "Schizophrenia",
    image: issueSchizophrenia,
    slug: "/therapy/schizophrenia",
  },
  {
    name: "Parenting",
    title: "Parenting",
    image: issueParenting,
    slug: "/therapy/parenting",
  },
];

// Meditation Types for meditation page
export const meditationTypes = [
  {
    image: meditationType1,
    title: "Mindfulness Meditation",
    desc: "Originated from Hindu shastras, a practise involving attention to present,focusing on breath and thoughts without judgment fostering heightened awareness, acceptance.",
  },
  {
    image: meditationType2,
    title: "Breath Awareness Meditation",
    desc: "Observing the natural rhythm of breath, Close attention to inhalation and exhalation, redirecting the mind back to the breath. Calms mind, enhances focus, and reduces anxiety.",
  },
  {
    image: meditationType3,
    title: "Kundalini Meditation",
    desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to  Balance the chakras and achieve heightened spiritual awakening.",
  },
  {
    image: meditationType4,
    title: "Zen Meditation (Zazen)",
    desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath observing thoughts and sensations without attachment or judgment. Cultivate mindfulness, into true reality.",
  },
  {
    image: meditationType5,
    title: "Spiritual meditation",
    desc: "Activating one's consciousness. Spiritual meditation involves bonding at a higher consciencel. Highly beneficial to those seeking spiritual growth and oneness with supreme self.",
  },
  {
    image: meditationType6,
    title: "Walking Meditation",
    desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
  },
  {
    image: meditationType6,
    title: "Walking Meditation",
    desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
  },
  {
    image: meditationType6,
    title: "Walking Meditation",
    desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
  },
];

// All activities data for activities subpages
export const activities = [
  // {
  //   id: 1,
  //   name: "Yoga",
  //   slug: "/activities/yoga",
  //   header: {
  //     title: [
  //       {
  //         color: false,
  //         text: "Exploring Mind Harmony through ",
  //       },
  //       {
  //         color: true,
  //         text: "Yoga",
  //       },
  //     ],
  //     desc: "Yoga is a path to feeling better in both your body and mind. Regular yoga makes you less stressed, more mindful, and balances your life. Start your journey with yoga for a refreshed body, calm mind, and a more harmonious life.",
  //     image: yogaHeader,
  //   },
  //   activities: {
  //     title: "Yoga Techniques",
  //     desc: "Let's embark on a journey to explore various types of yoga poses, guiding us toward inner harmony.",
  //     types: [
  //       {
  //         title: "Adho Mukha Svanasana",
  //         thumbnail: yogaType1,
  //         desc: "Adho Mukha Svanasana is a foundational yoga pose that profoundly benefits the body and mind. It is a beautiful combination of strength, flexibility, and relaxation.",
  //         slug: "/activities/yoga/adho-mukha-svanasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Adho Mukha Svanasana",
  //               desc: "Adho Mukha Svanasana, also known as Downward-Facing Dog Pose, is one of the most recognizable yoga postures. This pose is a great way to stretch your hamstrings, calves, and spine and strengthen your arms, shoulders, and legs. It can also help calm your mind and reduce stress. In this article, we will explore the benefits, techniques, and variations of Adho Mukha Svanasana.",
  //               image: adhvmukhaHeader,
  //               variations: true,
  //               var: "There are several variations of Adho Mukha Svanasana that you can try depending on your skill level and flexibility. Here are a few:",
  //             },
  //           },
  //           {
  //             component: RightImage,
  //             data: {
  //               title: "Dolphin Pose: ",
  //               desc: "This variation is similar to Adho Mukha Svanasana, but instead of straightening your arms, you bend your elbows and rest your forearms on the ground. This pose is excellent for strengthening the shoulders and upper back.",
  //               image: adhvVariationOne,
  //             },
  //           },
  //           {
  //             component: LeftImage,
  //             data: {
  //               title: "Three-Legged Dog Pose: ",
  //               desc: "To practice this variation, start in Adho Mukha Svanasana and lift one leg towards the ceiling. Hold for a few breaths, then switch sides. This pose helps build strength in the legs and core.",
  //               image: adhvVariationTwo,
  //             },
  //           },
  //           {
  //             component: RightImage,
  //             data: {
  //               title: "Puppy Pose: ",
  //               desc: "This variation is a gentle shoulder and spine stretch. Start on your hands and knees, then walk your hands forward as you lower your chest toward the ground. Keep your hips above your knees and your arms extended in front of you.",
  //               image: adhvVariationThree,
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Adho Mukha Svanasana: ",
  //               desc: "There are numerous benefits to practicing Adho Mukha Svanasana, including:",
  //               list: [
  //                 {
  //                   subtitle: "Increases flexibility: ",
  //                   desc: "This pose stretches the hamstrings, calves, and spine, which can help increase flexibility in these areas.",
  //                 },
  //                 {
  //                   subtitle: "Strengthens the upper body: ",
  //                   desc: "Adho Mukha Svanasana is an excellent pose for strengthening the arms, shoulders, and upper back.",
  //                 },
  //                 {
  //                   subtitle: "Relieves stress: ",
  //                   desc: "This pose can help calm the mind and reduce stress and anxiety.",
  //                 },
  //                 {
  //                   subtitle: "Improves digestion: ",
  //                   desc: "The inversion of the pose can help improve digestion and relieve constipation.",
  //                 },
  //                 {
  //                   subtitle: "Energizes the body: ",
  //                   desc: "Adho Mukha Svanasana can help boost energy levels by increasing blood flow to the brain.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Adho Mukha Svanasana is a safe and beneficial pose for most people, there are a few precautions to remember: ",
  //               info: "Adho Mukha Svanasana is a versatile pose that yogis of all skill levels can practice. Whether you want to increase your flexibility, strengthen your upper body, or reduce stress, this pose has much to offer. You can safely practice this pose and enjoy its many benefits by following the proper technique and taking necessary precautions. So next time you step onto your yoga mat, include Adho Mukha Svanasana in your practice!",
  //               list: [
  //                 "Avoid this pose if you have a wrist, shoulder, or back injury.",
  //                 "If you have high blood pressure, keep your head at or above heart level to avoid a sudden increase in blood pressure.",
  //                 "If you have a neck injury, keep your head aligned with your spine instead of looking towards your belly button.",
  //                 "If you have tight hamstrings, bend your knees slightly to avoid straining your lower back.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Virabhadrasana II",
  //         thumbnail: yogaType2,
  //         desc: "Virabhadrasana emanates strength and grace. This yoga asana cultivates stability, balance, and a sense of inner courage, making it a powerful addition to any yoga sequence.",
  //         slug: "/activities/yoga/virabhadrasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Virabhadrasana",
  //               desc: "Virabhadrasana II, also known as Warrior II Pose, is a powerful and energizing yoga asana that offers numerous physical and mental benefits. This pose is named after the fierce warrior Virabhadra, who is said to have been created by the god Shiva. In this blog, we will explore the many benefits of Virabhadrasana II, how to practice the pose, and precautions to keep in mind.",
  //               image: virabhadrasanaHeader,
  //               variations: true,
  //               var: "You can try several variations of Virabhadrasana II, depending on your skill level and flexibility. Here are a few:",
  //             },
  //           },
  //           {
  //             component: RightImage,
  //             data: {
  //               title: "Reverse Warrior Pose: ",
  //               desc: "This variation is a gentle backbend stretching the body's side. Start in Virabhadrasana II, then reach your right arm up and back as you extend your left arm down towards your left leg. Keep your right knee bent and your gaze towards the ceiling.",
  //               image: virabhadrasanaVariation1,
  //             },
  //           },
  //           {
  //             component: LeftImage,
  //             data: {
  //               title: "Extended Side Angle Pose: ",
  //               desc: "This variation is a deeper stretch for the hips and side of the body. Start in Virabhadrasana II, then reach your right arm forward and down, placing your hand on the ground or a block outside your right foot. Extend your left arm towards the ceiling and gaze towards your left fingertips.",
  //               image: virabhadrasanaVariation2,
  //             },
  //           },
  //           {
  //             component: RightImage,
  //             data: {
  //               title: "Bound Warrior Pose: ",
  //               desc: "This variation is an advanced variation that requires both strength and flexibility. Start in Virabhadrasana II, then reach your right arm behind your back and clasp your hands together. Lift your chest and gaze towards the ceiling, keeping your shoulders relaxed.",
  //               image: virabhadrasanaVariation3,
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Virabhadrasana II: ",
  //               desc: "Virabhadrasana II offers many benefits for the body and mind, including",
  //               list: [
  //                 {
  //                   subtitle: "Strengthens the legs: ",
  //                   desc: "This pose strengthens the muscles in the legs, including the quadriceps, hamstrings, and calves.",
  //                 },
  //                 {
  //                   subtitle: "Improves balance: ",
  //                   desc: "By focusing on one point in front of you, Virabhadrasana II can help improve balance and stability.",
  //                 },
  //                 {
  //                   subtitle: "Increases flexibility: ",
  //                   desc: "This pose stretches the hips and groin, which can help increase flexibility in these areas.",
  //                 },
  //                 {
  //                   subtitle: "Stimulates circulation: ",
  //                   desc: "Virabhadrasana II can help increase blood flow to the legs and hips, improving circulation and reducing swelling.",
  //                 },
  //                 {
  //                   subtitle: "Builds endurance: ",
  //                   desc: "Holding the pose for several breaths can help build endurance and stamina.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Virabhadrasana II is a safe and beneficial pose for most people, there are a few precautions to remember: ",
  //               info: "Virabhadrasana II is a powerful, energizing yoga pose with numerous bodily and mental benefits. Practicing this pose regularly can strengthen your legs, improve your balance, increase your flexibility, and build endurance. Always listen to your body and take precautions if you have any injuries or medical conditions. Consistent practice and patience can deepen your understanding of this pose and reap its many benefits.",
  //               list: [
  //                 "Avoid this pose if you have a knee, hip, or shoulder injury.",
  //                 "If you have high blood pressure, avoid holding the pose for too long or come out of the carriage if you feel dizzy or lightheaded",
  //                 "Refrain from overstretching these areas if you have tight hips or groin muscles.",
  //                 "Always listen to your body, and don't push yourself beyond your limits. Remember that yoga is about finding a balance between effort and ease and never forcing your body into a pose that feels uncomfortable or painful.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Trikonasana",
  //         thumbnail: yogaType3,
  //         desc: "Trikonasana is a radiant and dynamic yoga posture that stretches and opens the entire body. Its triangular shape offers a blend of strength, expansion, and tranquillity.",
  //         slug: "/activities/yoga/trikonasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Trikonasana",
  //               desc: "Trikonasana, or Triangle Pose, is a foundational yoga asana that offers numerous physical and mental benefits. This pose is named after the shape that your body creates when practicing it, resembling a triangle. In this blog, we will explore the many benefits of Trikonasana, how to practice the pose, and precautions to keep in mind.",
  //               image: trikonasanaHeader,
  //               variations: true,
  //               var: "There are several variations of Trikonasana that you can try depending on your skill level and flexibility. Here are a few:",
  //             },
  //           },
  //           {
  //             component: RightImage,
  //             data: {
  //               title: "Revolved Triangle Pose: ",
  //               desc: "This variation is a more profound twist that requires more flexibility. Start in Trikonasana, then place your left hand on your right hip as you twist your torso towards the ceiling. Extend your right arm towards the top, keeping your gaze towards your fingertips.",
  //               image: trikonasanaVariation1,
  //             },
  //           },
  //           {
  //             component: LeftImage,
  //             data: {
  //               title: "Extended Triangle Pose: ",
  //               desc: "This variation is a deeper stretch for the legs and hips. Start in Trikonasana, then place your right hand on a block or the floor outside your right foot. Extend your left arm towards the ceiling, keeping your gaze towards your fingertips.",
  //               image: trikonasanaVariation2,
  //             },
  //           },
  //           {
  //             component: RightImage,
  //             data: {
  //               title: "Half Triangle Pose: ",
  //               desc: "This variation is a modified version of Trikonasana that is more accessible for beginners or those with limited flexibility. Start in Trikonasana, then place your right hand on your right shin instead of reaching the floor.",
  //               image: trikonasanaVariation3,
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Trikonasana: ",
  //               desc: "Trikonasana offers many benefits for the body and mind, including",
  //               list: [
  //                 {
  //                   subtitle: "Stretches the hamstrings and hips: ",
  //                   desc: "This pose stretches the muscles in the back of the legs, including the hamstrings, hips, and groin.",
  //                 },
  //                 {
  //                   subtitle: "Strengthens the legs: ",
  //                   desc: "By pressing down through the feet and engaging the leg muscles, Trikonasana can help build strength in the legs.",
  //                 },
  //                 {
  //                   subtitle: "Opens the chest and shoulders:  ",
  //                   desc: "This pose can help spread the chest and shoulders, improving posture and breathing.",
  //                 },
  //                 {
  //                   subtitle: "Stimulates digestion: ",
  //                   desc: "Trikonasana can help stimulate the abdominal organs, promoting healthy digestion.",
  //                 },
  //                 {
  //                   subtitle: "Calms the mind: ",
  //                   desc: "Practicing Trikonasana can help calm the mind and reduce stress and anxiety.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Trikonasana is a safe and beneficial pose for most people, remember a few precautions: ",
  //               info: "Trikonasana is a foundational yoga pose that offers numerous bodily and mental benefits. Practicing this pose regularly can improve your flexibility, strength, and balance while promoting healthy digestion and reducing stress and anxiety. Listen to your body and take precautions if you have any injuries or medical conditions. Consistent practice and patience can deepen your understanding of this pose and enjoy its many benefits.",
  //               list: [
  //                 "Avoid this pose if you have a knee or hip injury.",
  //                 "If you have low blood pressure, avoid holding the pose for too long or come out of the carriage if you feel dizzy or lightheaded.",
  //                 "Don't overstretch these areas if you have tight hamstrings or hips.",
  //                 "Always listen to your body, and don't push yourself beyond your limits. Remember that yoga is about finding a balance between effort and ease and never forcing your body into a pose that feels uncomfortable or painful.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Vrksasna",
  //         thumbnail: yogaType4,
  //         desc: "Vrksasana embodies the essence of balance and rootlessness in yoga. This graceful and standing posture cultivates stability, concentration, and a profound connection with nature.",
  //         slug: "/activities/yoga/vrksasna",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Vrksasna",
  //               desc: "Vrksasna, also known as Tree Pose, is a popular yoga asana that offers numerous physical and mental benefits. This pose is named after the shape that your body creates when practicing it, resembling a tree with its roots extending into the ground and its branches reaching up toward the sky. In this blog, we will explore the many benefits of Vrksasana, how to practice the pose, and precautions to keep in mind.",
  //               image: vrkasanaHeader,
  //               variations: true,
  //               var: "There are several variations of Vrksasana that you can try depending on your skill level and flexibility. Here are a few:",
  //             },
  //           },
  //           {
  //             component: RightImage,
  //             data: {
  //               title: "Half Lotus Tree Pose: ",
  //               desc: "This variation is a deeper stretch for the hips and requires more flexibility. Start in Vrksasana, then bring your right foot onto your left thigh in Half Lotus Pose.",
  //               image: vrkasanaVariation1,
  //             },
  //           },
  //           {
  //             component: LeftImage,
  //             data: {
  //               title: "Revolved Tree Pose: ",
  //               desc: "This variation is a more profound twist that requires more flexibility. Start in Vrksasana, then bring your hands to your heart and twist your torso towards your right knee.",
  //               image: vrkasanaVariation2,
  //             },
  //           },
  //           {
  //             component: RightImage,
  //             data: {
  //               title: "One-Legged Mountain Pose: ",
  //               desc: "This variation is a modified version of Vrksasana that is more accessible for beginners or those with limited flexibility. Lift one foot off the ground and balance on the other foot, keeping your hands at your heart center or extending them overhead.",
  //               image: vrkasanaVariation2,
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Vrksasana: ",
  //               desc: "Vrksasana offers many benefits for the body and mind, including",
  //               list: [
  //                 {
  //                   subtitle: "Improves balance: ",
  //                   desc: "This pose requires you to stand on one leg, which can help improve your balance and coordination.",
  //                 },
  //                 {
  //                   subtitle: "Strengthens the legs: ",
  //                   desc: "By pressing down through the standing foot and engaging the leg muscles, Vrksasana can help build strength in the legs",
  //                 },
  //                 {
  //                   subtitle: "Stretches the hips and groin: ",
  //                   desc: "This pose can help extend the muscles in the hips and groin, promoting flexibility and mobility.",
  //                 },
  //                 {
  //                   subtitle: "Improves posture: ",
  //                   desc: "By standing tall and rooting down through the feet, Vrksasana can help improve your posture and alignment.",
  //                 },
  //                 {
  //                   subtitle: "Calms the mind: ",
  //                   desc: "Practicing Vrksasana can help calm the mind and reduce stress and anxiety.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Vrksasana is a safe and beneficial pose for most people, remember a few precautions: ",
  //               info: "Vrksasana is a beautiful and empowering pose that can benefit the body and mind. Practicing this pose regularly can improve your balance, strength, flexibility, and posture while reducing stress and anxiety. Remember to start slowly and take precautions if you have any injuries or medical conditions. Consistent practice and patience can deepen your understanding of this pose and help you enjoy its many benefits.",
  //               list: [
  //                 "Avoid this pose if you have a knee or ankle injury.",
  //                 "If you have low blood pressure, avoid holding the pose for too long or come out of the carriage if you feel dizzy or lightheaded.",
  //                 "Refrain from overstretching these areas if you have tight hips or groin muscles.",
  //                 "Always listen to your body, and don't push yourself beyond your limits. Remember that yoga is about finding a balance between effort and ease and never forcing your body into a pose that feels uncomfortable or painful.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Ustrasana",
  //         thumbnail: yogaType5,
  //         desc: "Ustrasana opens the heart center and stimulates the entire front body, offering a deep stretch and release. This brings a sense of liberation & vulnerability to embrace courage.",
  //         slug: "/activities/yoga/ustrasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Ustrasana",
  //               desc: "Ustrasana, also known as Camel Pose, is a popular yoga posture practiced by many enthusiasts worldwide. It is a backbend asana named after the Sanskrit word 'ustra,' which means camel, and 'asana,' which means posture. The pose resembles the shape of a camel, hence the name. The Ustrasana posture stretches the entire front of the body, particularly the chest, abdomen, and quadriceps. This posture is beneficial in opening up the heart and increasing lung capacity, which can help alleviate respiratory problems. It also helps to strengthen the back muscles, shoulders, and neck.",
  //               image: ustrasanaHeader,
  //               variations: false,
  //               var: "",
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Ustrasana: ",
  //               desc: "Ustrasana offers many benefits for the body and mind, including: ",
  //               list: [
  //                 {
  //                   subtitle: "Stretches the Chest and Abdomen: ",
  //                   desc: "ThUstrasana is excellent for stretching the chest and abdomen. The pose opens up the ribcage and creates space in the chest, which can help alleviate respiratory problems.",
  //                 },
  //                 {
  //                   subtitle: "Improves Posture: ",
  //                   desc: "Ustrasana strengthens the back muscles, which can help improve posture. It also helps to alleviate back pain by opening up the front of the body.",
  //                 },
  //                 {
  //                   subtitle: "Increases Lung Capacity: ",
  //                   desc: "This posture expands the chest and lungs, increasing lung capacity and promoting healthy breathing.",
  //                 },
  //                 {
  //                   subtitle: "Calms the Mind: ",
  //                   desc: "Ustrasana is a soothing pose that can help relax the mind and relieve stress and anxiety.",
  //                 },
  //                 {
  //                   subtitle: "Stimulates the Digestive System: ",
  //                   desc: "This posture stimulates the digestive system, aiding in the proper digestion of food and preventing digestive issues.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Ustrsasana is a safe and beneficial pose for most people, remember a few precautions: ",
  //               info: "Ustrasana is a powerful and effective yoga posture that offers numerous benefits for the mind, body, and spirit. It is a challenging pose, but with practice and patience, it can be mastered. As with any yoga posture, it is essential to approach Ustrasana with respect for your body's limitations and to listen to your body's signals during practice. Doing so lets you experience the full benefits of this beautiful posture and enjoy exploring your practice.",
  //               list: [
  //                 "Avoid Ustrasana if you have any neck or back injuries.",
  //                 "Place a cushion or folded blanket under your knee if you have knee problems.",
  //                 "If you experience discomfort or pain while in the pose, come out immediately.",
  //                 "Be careful not to strain your neck by keeping your head neutral.",
  //                 "Avoid this posture during pregnancy.",
  //                 "If you have high or low blood pressure, consult your doctor before practicing Ustrasana.",
  //                 "Always warm up your body before attempting Ustrasana.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Matsyasana",
  //         thumbnail: yogaType6,
  //         desc: "Matsyasana gracefully arches the back and opens the chest, offering a deep stretch to the neck and throat. It symbolizes receptivity and renewal, inviting a sense of tranquillity.",
  //         slug: "/activities/yoga/matsyasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Matsyasana",
  //               desc: "Matsyasana, also known as the Fish Pose, is a popular yoga posture practiced by many enthusiasts worldwide. It is a backbend asana named after the Sanskrit word 'Matsya,' which means fish, and 'asana,' which means posture. The pose resembles the shape of a fish, hence the name. Matsyasana is a relatively simple pose that offers numerous benefits for the mind, body, and spirit. It is beneficial in opening up the chest, improving posture, and promoting relaxation.",
  //               image: matsyasanaHeader,
  //               variations: false,
  //               var: "",
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Matsyasana: ",
  //               desc: "Matsyasana offers many benefits for the body and mind, including: ",
  //               list: [
  //                 {
  //                   subtitle: "Opens Up the Chest: ",
  //                   desc: "Matsyasana is an excellent asana for stretching and opening up the chest. It can help alleviate respiratory problems by expanding the lungs and improving breathing.",
  //                 },
  //                 {
  //                   subtitle: "Improves Posture: ",
  //                   desc: "This posture helps to improve posture by stretching the upper body and strengthening the back muscles.",
  //                 },
  //                 {
  //                   subtitle: "Reduces Stress and Anxiety:",
  //                   desc: "Matsyasana is a soothing pose that can help reduce stress and anxiety. It can also help to alleviate symptoms of depression.",
  //                 },
  //                 {
  //                   subtitle: "Stretches the Neck and Shoulders: ",
  //                   desc: "This posture stretches the neck and shoulders, releasing tension and alleviating pain.",
  //                 },
  //                 {
  //                   subtitle: "Stimulates the Thyroid Gland: ",
  //                   desc: "Matsyasana stimulates the thyroid gland, which can help regulate metabolism and balance hormones.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Matsyasana is a safe and beneficial pose for most people, remember a few precautions: ",
  //               info: "Matsyasana is a powerful and effective yoga posture that offers numerous benefits for the mind, body, and spirit. It is a relatively simple pose that yoga enthusiasts of all levels can practice. As with any yoga posture, it is essential to approach Matsyasana with respect for your body's limitations and to listen to your body's signals during practice. Doing so lets you experience the full benefits of this beautiful posture and enjoy exploring your practice.",
  //               list: [
  //                 "If you have neck or back injuries, consult your doctor before attempting Matsyasana.",
  //                 "If you experience discomfort or pain while in the pose, come out immediately.",
  //                 "Be careful not to strain your neck by keeping your head neutral.",
  //                 "Avoid this posture during pregnancy.",
  //                 "If you have high or low blood pressure, consult your doctor before practicing Matsyasana.",
  //                 "Always warm up your body before attempting Matsyasana.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Sirsasana",
  //         thumbnail: yogaType7,
  //         desc: "Sirsasana is the king of all yoga poses, promoting balance, focus, and inner strength. This inverted posture invigorates the mind while enhancing circulation and building confidence.",
  //         slug: "/activities/yoga/sirsasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Sirsasana",
  //               desc: "Sirsasana, also known as the Headstand pose, is a popular yoga posture practiced by many enthusiasts worldwide. It is an inversion asana named after the Sanskrit words 'Sirsa,' which means head, and 'asana,' which means posture. The pose requires the practitioner to balance on their head and forearms, with their legs in the air. Sirsasana is a challenging pose that offers numerous benefits for the mind, body, and spirit. It improves blood flow to the brain, strengthens the upper body, and promotes mental clarity.",
  //               image: sirsasanaHeader,
  //               variations: false,
  //               var: "",
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Sirsasana: ",
  //               desc: "Sirsasana offers many benefits for the body and mind, including: ",
  //               list: [
  //                 {
  //                   subtitle: "Improves Blood Flow to the Brain: ",
  //                   desc: "Sirsasana is an excellent asana for improving blood flow to the brain. This can help to improve memory, concentration, and mental clarity.",
  //                 },
  //                 {
  //                   subtitle: "Strengthens the Upper Body: ",
  //                   desc: "This posture strengthens the arms, shoulders, and upper back, making it an excellent pose for building strength.",
  //                 },
  //                 {
  //                   subtitle: "Promotes Balance and Stability: ",
  //                   desc: "Sirsasana requires a great deal of balance and stability, making it an excellent pose for improving balance and coordination.",
  //                 },
  //                 {
  //                   subtitle: "Calms the Mind: ",
  //                   desc: "This posture can help to calm the mind, reduce stress, and alleviate anxiety.",
  //                 },
  //                 {
  //                   subtitle: "Boosts Energy: ",
  //                   desc: "Sirsasana can help to increase energy levels, making it an excellent pose to practice in the morning.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Sirsasana is a safe and beneficial pose for most people, remember a few precautions:",
  //               info: "Sirsasana is a powerful and challenging yoga posture that offers numerous benefits for the mind, body, and spirit. It is a pose that requires much practice, patience, and respect for the body's limitations. As with any yoga posture, it is essential to approach Sirsasana with caution and to listen to your body's signals during practice. Doing so lets you experience the full benefits of this beautiful posture and enjoy exploring your practice.",
  //               list: [
  //                 "If you have neck or back injuries, consult your doctor before attempting Sirsasana.",
  //                 "If you experience discomfort or pain while in the pose, come out immediately.",
  //                 "Be careful not to strain your neck by keeping your head neutral.",
  //                 "Avoid this posture during pregnancy.",
  //                 "If you have high or low blood pressure, consult your doctor before practicing Sirsasana.",
  //                 "Always warm up your body before attempting Sirsasana.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Sarvangasana",
  //         thumbnail: yogaType8,
  //         desc: "Sarvangasana is a revered yoga pose that offers many bodily and mental benefits. This promotes rejuvenation, improved circulation, and a calming effect on the nervous system.",
  //         slug: "/activities/yoga/sarvangasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Sarvangasana",
  //               desc: "Sarvangasana, or the Shoulderstand pose, is a popular yoga posture practiced by many enthusiasts worldwide. It is an inversion asana named after the Sanskrit words 'Sarva,' which means all, and 'anga,' which implies limb or body part. The pose requires the practitioner to balance on their shoulders and upper arms with their legs in the air. Sarvangasana is a challenging pose that offers numerous benefits for the mind, body, and spirit. It improves blood flow, stimulates the thyroid gland, and promotes mental clarity.",
  //               image: sarvangasanaHeader,
  //               variations: false,
  //               var: "",
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Sarvangasana: ",
  //               desc: "Sarvangasana offers many benefits for the body and mind, including",
  //               list: [
  //                 {
  //                   subtitle: "Improves Blood Flow: ",
  //                   desc: "Sarvangasana is an excellent asana for improving blood flow to the brain and other body parts. This can help to improve memory, concentration, and mental clarity.",
  //                 },
  //                 {
  //                   subtitle: "Stimulates the Thyroid Gland: ",
  //                   desc: "This posture stimulates the thyroid gland, which regulates the body's metabolism. This can help to balance the hormones and improve overall health.",
  //                 },
  //                 {
  //                   subtitle: "Strengthens the Upper Body: ",
  //                   desc: "This posture strengthens the arms, shoulders, and upper back, making it an excellent pose for building strength.",
  //                 },
  //                 {
  //                   subtitle: "Promotes Digestion: ",
  //                   desc: "This posture can help to stimulate the digestive system, promoting healthy digestion and reducing the risk of constipation.",
  //                 },
  //                 {
  //                   subtitle: "Calms the Mind: ",
  //                   desc: "This posture can help to calm the mind, reduce stress, and alleviate anxiety.",
  //                 },
  //                 {
  //                   subtitle: "Boosts Energy: ",
  //                   desc: "Sarvangasana can help to increase energy levels, making it an excellent pose to practice in the morning.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Sarvangasana is a safe and beneficial pose for most people, remember a few precautions: ",
  //               info: "Sarvangasana is a powerful and challenging yoga posture that offers numerous benefits for the mind, body, and spirit. It is a pose that requires much practice, patience, and respect for the body's limitations. As with any yoga posture, it is essential to approach Sarvangasana with caution and to listen to your body's signals during practice. Doing so lets you experience the full benefits of this beautiful posture and enjoy exploring your practice.",
  //               list: [
  //                 "If you have neck or back injuries, consult your doctor before attempting Sarvangasana.",
  //                 "If you experience discomfort or pain while in the pose, come out immediately.",
  //                 "Be careful not to strain your neck by keeping your head neutral.",
  //                 "Avoid this posture during pregnancy.",
  //                 "If you have high or low blood pressure, consult your doctor before practicing Sarvangasana.",
  //                 "Always warm up your body before attempting Sarvangasana.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Setu Bandhasana",
  //         thumbnail: yogaType9,
  //         desc: "Setu Bandhasana gracefully opens up the chest and hip flexors while strengthening the back and glutes. This yoga posture stimulates the spine and brings a sense of balance and stability.",
  //         slug: "/activities/yoga/setu-bandhasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Setu Bandhasana",
  //               desc: "Setu Bandhasana, also known as the Bridge pose, is a popular yoga asana practiced by many enthusiasts worldwide. It is a backbend posture named after the Sanskrit words 'setu, which means bridge, and 'bandha,' which means to bind. The pose requires the practitioner to lift their hips and chest towards the ceiling, creating a bridge-like shape with their body. It offers numerous benefits for the mind, body, and spirit. It is beneficial in strengthening the back, improving flexibility, and reducing stress.",
  //               image: setuBandhasanaHeader,
  //               variations: false,
  //               var: "",
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Setu Bandhasana: ",
  //               desc: "Setu Bandhasana offers many benefits for the body and mind, including",
  //               list: [
  //                 {
  //                   subtitle: "Strengthens the Back: ",
  //                   desc: "Setu Bandhasana is an excellent pose for strengthening the back muscles. This can help to alleviate back pain and improve posture.",
  //                 },
  //                 {
  //                   subtitle: "Improves Flexibility: ",
  //                   desc: "This posture can help to enhance the flexibility of the spine, hips, and hamstrings, making it an excellent pose for those who spend long hours sitting.",
  //                 },
  //                 {
  //                   subtitle: "Reduces Stress: ",
  //                   desc: "Setu Bandhasana can help to reduce stress and anxiety, making it an excellent pose for those who lead a stressful lifestyle.",
  //                 },
  //                 {
  //                   subtitle: "Stimulates the Thyroid Gland: ",
  //                   desc: "This posture can help boost the thyroid gland, which regulates the body's metabolism. This can help to balance the hormones and improve overall health.",
  //                 },
  //                 {
  //                   subtitle: "Relieves Headaches: ",
  //                   desc: "Setu Bandhasana can help to relieve headaches by improving blood flow to the brain and reducing tension in the neck and shoulders.",
  //                 },
  //                 {
  //                   subtitle: "Opens the Chest: ",
  //                   desc: "This posture can help to open the chest and improve breathing, making it an excellent pose for those with respiratory problems.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Setu Bandhasana is a safe and beneficial pose for most people, remember a few precautions: ",
  //               info: " Setu Bandhasana is a robust and accessible yoga posture that offers numerous benefits for the mind, body, and spirit. It is a pose that requires much practice, patience, and respect for the body's limitations. As with any yoga posture, it is essential to approach Setu Bandhasana with caution and to listen to your body's signals during practice. Doing so lets you experience the full benefits of this beautiful posture and enjoy exploring your practice.",
  //               list: [
  //                 "If you have neck or back injuries, consult your doctor before attempting Setu Bandhasana..",
  //                 "If you experience discomfort or pain while in the pose, come out immediately.",
  //                 "Be careful not to strain your neck by keeping your head neutral.",
  //                 "Avoid this posture during pregnancy.",
  //                 "If you have high or low blood pressure, consult your doctor before practicing Setu Bandhasana..",
  //                 "Always warm up your body before attempting Setu Bandhasana..",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Uttanasana",
  //         thumbnail: yogaType10,
  //         desc: "Uttanasana involves bending forward with straight or bent legs, providing a stretch to the lower back and hamstrings. It's often integrated into yoga for its calming and grounding effects.",
  //         slug: "/activities/yoga/uttanasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Uttanasana",
  //               desc: "Uttanasana, also known as the Standing Forward Fold pose, is a popular yoga asana practiced by many enthusiasts worldwide. It is a forward bending posture often performed as a warm-up or cool-down pose in many yoga sequences. Uttanasana is a simple yet effective pose that offers numerous benefits for the mind, body, and spirit. It is beneficial in reducing stress, improving flexibility, and strengthening the legs and back.",
  //               image: uttanasanaHeader,
  //               variations: false,
  //               var: "",
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Uttanasana: ",
  //               desc: "Uttanasana offers many benefits for the body and mind, including",
  //               list: [
  //                 {
  //                   subtitle: "Reduces Stress: ",
  //                   desc: "Uttanasana is an excellent pose for reducing stress and anxiety. It can help to calm the mind and promote a sense of relaxation.",
  //                 },
  //                 {
  //                   subtitle: "Improves Flexibility: ",
  //                   desc: "This posture can help to enhance flexibility in the hamstrings, hips, and calves. It is an excellent pose for those who spend long hours sitting.",
  //                 },
  //                 {
  //                   subtitle: "Strengthens the Legs: ",
  //                   desc: "Uttanasana can help to strengthen the legs and improve overall posture.",
  //                 },
  //                 {
  //                   subtitle: "Stimulates the Thyroid Gland: ",
  //                   desc: "This posture can help boost the thyroid gland, which regulates the body's metabolism. This can help to balance the hormones and improve overall health.",
  //                 },
  //                 {
  //                   subtitle: "Stimulates the Digestive System: ",
  //                   desc: "This posture can help to boost the digestive system, improving digestion and relieving constipation.",
  //                 },
  //                 {
  //                   subtitle: "Calms the Nervous System: ",
  //                   desc: "Uttanasana can help to calm the nervous system, making it an excellent pose for those who suffer from anxiety or nervousness.",
  //                 },
  //                 {
  //                   subtitle: "Relieves Headaches: ",
  //                   desc: "This posture can help to relieve headaches by increasing blood flow to the brain and reducing tension in the neck and shoulders.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Uttanasana is a safe and beneficial pose for most people, remember a few precautions:",
  //               info: "In conclusion, Uttanasana is a simple yet effective yoga posture that offers numerous benefits for the mind, body, and spirit. It is a pose that can be easily incorporated into any yoga practice or daily routine. As with any yoga posture, it is essential to approach Uttanasana with caution and to listen to your body's signals during the course. Doing so lets you experience the full benefits of this beautiful posture and enjoy exploring your practice.",
  //               list: [
  //                 "If you have back injuries, consult your doctor before attempting Uttanasana.",
  //                 "If you experience discomfort or pain in the pose, come out immediately.",
  //                 "Be careful not to overextend your hamstrings or strain your lower back.",
  //                 "Avoid this posture during pregnancy.",
  //                 "If you have high or low blood pressure, consult your doctor before practicing Uttanasana.",
  //                 "Always warm up your body before attempting Uttanasana.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Navasana",
  //         thumbnail: yogaType11,
  //         desc: "Navasana involves balancing on the sit bones while lifting the legs and torso to form the 'V' shape. This pose engages the core muscles, strengthens the abdomen, and improves stability.",
  //         slug: "/activities/yoga/navasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Navasana",
  //               desc: "In the vast ocean of yoga poses, Navasana, or Boat Pose, stands out as a powerful posture that challenges our physical strength and offers a boatload of benefits for the body and mind. Derived from the Sanskrit words 'nava' meaning 'boat' and 'asana' meaning 'pose' Navasana is a dynamic asana that demands a sturdy core, a balanced mindset, and a willingness to sail through challenges. ",
  //               image: navasanaHeader,
  //               variations: false,
  //               var: "",
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Navasana:",
  //               desc: "Navasana offers many benefits for the body and mind, including",
  //               list: [
  //                 {
  //                   subtitle: "Core Strength: ",
  //                   desc: "As you balance your sit bones, your abdominal muscles engage significantly, strengthening your core over time.",
  //                 },
  //                 {
  //                   subtitle: "Digestive Stimulation: ",
  //                   desc: "Navasana massages the abdominal organs, stimulating digestion and relieving discomfort.",
  //                 },
  //                 {
  //                   subtitle: "Improved Balance: ",
  //                   desc: "The pose challenges your balance, enhancing proprioception (body awareness) and coordination.",
  //                 },
  //                 {
  //                   subtitle: "Energy Flow: ",
  //                   desc: "Navasana stimulates the Manipura chakra, which is associated with confidence, willpower, and vitality.",
  //                 },
  //                 {
  //                   subtitle: "Mindfulness and Focus: ",
  //                   desc: "Balancing in Navasana demands concentration and presence, which can help calm the mind and reduce stress.",
  //                 },
  //                 {
  //                   subtitle: "Strengthens Hip Flexors: ",
  //                   desc: "The hip flexor muscles are engaged during leg extension, promoting flexibility and strength.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Navasana is a safe and beneficial pose for most people, remember a few precautions:",
  //               info: "Incorporating Navasana into your yoga practice can steer you towards a stronger core, enhanced balance, and improved overall well-being. Just like navigating a boat through uncharted waters, practicing Navasana requires patience, practice, and a willingness to explore your body's capabilities. As you sail through the challenges and embrace the benefits, you'll discover that this pose not only strengthens your physical body but also anchors your mind in the present moment, fostering a deeper connection to yourself and the practice of yoga.",
  //               list: [
  //                 "Avoid Strain: If you're new to Navasana, you might find it challenging to lift your legs high. Start with bent knees and gradually work on straightening them as your core strength improves.",
  //                 "Back Sensitivity: Individuals with back issues should approach Navasana carefully. Place a prop, like a block, under your feet for support to reduce strain on the lower back.",
  //                 "Neck Comfort: Keep your neck relaxed and avoid straining it by gazing straight ahead or slightly upwards",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         title: "Ardha Chandrasana",
  //         thumbnail: yogaType12,
  //         desc: "Ardha Chandrasana is a balancing yoga standing on one leg while extending the opposite arm parallel to the ground. This pose tones the legs, improves balance, and enhances core stability.",
  //         slug: "/activities/yoga/ardha-chandrasana",
  //         sections: [
  //           {
  //             component: HeaderWithImage,
  //             data: {
  //               title: "Ardh Chandrasana",
  //               desc: 'In the universe of yoga asanas, Ardha Chandrasana, or Half Moon Pose, shines as a captivating blend of strength, balance, and flexibility. Derived from the Sanskrit words "ardha" meaning "half," "chandra" meaning "moon," and "asana" meaning "pose," this pose resembles the graceful shape of a half-moon, reflecting its celestial elegance.',
  //               image: ardhChandrasanaHeader,
  //               variations: false,
  //               var: "",
  //             },
  //           },
  //           {
  //             component: RightImageList,
  //             data: {
  //               title: "Benefits of Ardh Chandrasana:",
  //               desc: "Ardh Chandrasana offers many benefits for the body and mind, including",
  //               list: [
  //                 {
  //                   subtitle: "Improved Balance: ",
  //                   desc: "This pose is a balance challenge that strengthens the muscles responsible for stability.",
  //                 },
  //                 {
  //                   subtitle: "Core Engagement: ",
  //                   desc: "The core muscles maintain equilibrium, contributing to overall core strength.",
  //                 },
  //                 {
  //                   subtitle: "Enhanced Flexibility: ",
  //                   desc: "As you extend your leg behind you, the hamstrings, hip flexors, and spine receive a gentle stretch.",
  //                 },
  //                 {
  //                   subtitle: "Spinal Alignment: ",
  //                   desc: "Ardha Chandrasana encourages proper alignment and posture by elongating the spine.",
  //                 },
  //                 {
  //                   subtitle: "Mind-Body Connection: ",
  //                   desc: "Focusing on balance cultivates mindfulness, allowing you to be fully present in the pose.",
  //                 },
  //                 {
  //                   subtitle: "Digestive Stimulation: ",
  //                   desc: "The gentle twist in the abdomen supports digestion and detoxification.",
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             component: LeftImageList,
  //             data: {
  //               desc: "While Ardh Chandrasana is a safe and beneficial pose for most people, remember a few precautions:",
  //               info: "Ardha Chandrasana invites practitioners to dance between strength and grace, balance and flexibility. As you elevate one leg and extend one arm, you explore physical boundaries and nurture a deeper connection to your body and breath. Embrace the radiance that Half Moon Pose brings to your practice, and with dedication and patience, you'll discover not only the beauty of the pose but also the inner luminosity it unveils within you. So, step onto the mat, bask in the glow of Ardha Chandrasana, and let its light guide you toward a harmonious union of body, mind, and spirit.",
  //               list: [
  //                 "Warm-up: Always prepare your body with a warm-up before attempting this pose to prevent strain or injury.",
  //                 "Hip Flexibility: Individuals with limited hip flexibility might struggle with leg extension. Use props like blocks for support until your flexibility improves.",
  //                 "Balance Challenges: Practicing near a wall or using a chair for support can be helpful, especially if you're new to balancing poses.",
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   blogs: [
  //     {
  //       thumbnail: activityBlogThumbnail,
  //       title: "Maintain a good habit with yourself",
  //       desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
  //     },
  //     {
  //       thumbnail: activityBlogThumbnail,
  //       title: "Maintain a good habit with yourself",
  //       desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
  //     },
  //     {
  //       thumbnail: activityBlogThumbnail,
  //       title: "Maintain a good habit with yourself",
  //       desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
  //     },
  //   ],
  // },
  {
    id: 2,
    name: "Meditation",
    slug: "/activities/meditation",
    header: {
      title: [
        {
          color: true,
          text: "Meditation ",
        },
        {
          color: false,
          text: "heals the mind",
        },
      ],
      desc: "Meditation is like a peaceful escape that can help the mind in our busy world. Science proves it can lower stress and anxiety and help us handle emotions better. Just sitting quietly and looking within can do wonders for the mind, making us feel better overall.",
      image: meditationHeader,
      alt: "Wleness - Meditation Heals The Mind",
    },
    activities: {
      title: "MEDITATION TECHNIQUES",
      desc: "Join us in this journey with our world-class meditation gurus and experts just for you at your fingertips.",
      types: [
        {
          title: "Mindfulness Meditation",
          thumbnail: meditationType1,
          desc: "Originated from Hindu shastras, a practice involving attention to the present, focusing on breath and thoughts without judgment, fostering heightened awareness and acceptance.",
          slug: "/activities/meditation/mindfulness-meditation",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Mindfulness Meditation",
                desc: "Mindfulness meditation that can help us find peace and clarity amidst the chaos of the modern world. Today we will explore what exactly is mindfulness meditation, the benefits of mindfulness meditation, how to practice it, and how it can improve our overall well-being and health. The good news is, all will be in layman's terms. ",
                image: mindfulnessHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "Practicing Mindfulness Meditation: ",
                image: mindfulnessLeft1,
                list: [
                  {
                    subtitle: "Find a positive Space ",
                    desc: "Choose a quiet and comfortable spot where you can sit or lie down without distractions and focus on yourself",
                  },
                  {
                    subtitle: "Relax your body:",
                    desc: " Shut your eyes, take a few deep breaths, and allow your body to relax and settle down. Notice how each inhale and exhale feel as it passes through your body.",
                  },
                  {
                    subtitle: "Inculcate Mindfulness into Daily Life: ",
                    desc: " Practice the cultivation of mindfulness into your daily activities and routine, paying attention to each moment with an open and non-judgmental mindset.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: mindfulnessRight1,
                list: [
                  {
                    subtitle: "Focus on the Present: ",
                    desc: "Focus your attention on your breath. Observe the heightened sensation of each inhale and exhale without judgment or attachment to thoughts or distractions that you may infer.",
                  },
                  {
                    subtitle: "Invoke Emotional Intelligence:",
                    desc: "As thoughts, feelings and emotions arise, subtly acknowledge them without getting caught up in them. Imagine them as passing clouds through your body.",
                  },
                  {
                    subtitle: "Non-judgmental Awareness:  ",
                    desc: " Practice welcoming your thoughts and emotions without judging/labelling them as good or bad. Develop and perfects the attitude of curiosity and acceptance which of course comes with practice.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Mindfulness Meditation: ",
                list: [
                  {
                    subtitle: "Reduces Stress and Anxiety:  ",
                    desc: "Mindfulness meditation allows us to focus specifically on the present, which helps calm the mind and reduces stress and anxiety as a by-product. It helps lower one's level of the stress hormone named cortisol, reducing overall stress and its negative impacts on the physical and mental body.",
                  },
                  {
                    subtitle: "Improves Mental Clarity: ",
                    desc: "By practising mindfulness meditation one enhances attention span and cognitive abilities, leading to better focus and concentration in daily chores. It can enhance the ability to concentrate, make better decisions, and increase overall mental clarity.",
                  },
                  {
                    subtitle: "Enhances Emotional Stability:",
                    desc: "Mindfulness meditation teaches us to acknowledge and accept our thoughts and emotions sans judgement, leading to improved emotional stability and well-being. It in turn leads to greater emotional resilience.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title:
                  "The Importance of Mindfulness Meditation in our Daily Lives:",
                desc: "",
                image: mindfulnessRight2,
                list: [
                  {
                    subtitle: "",
                    desc: "In today's fast-paced world, our minds are often overwhelmed with thoughts, worries, and distractions. This constant mental chatter can have severe detrimental effects on our well-being. Mindfulness meditation offers a way to step back, relax, observe our thoughts and feelings, and find inner peace. The benefits of mindfulness meditation depend on numerous factors and can vary from person to person, and regular practice is typically required to experience these advantages fully",
                  },
                  {
                    subtitle: "",
                    desc: "By incorporating mindfulness meditation into our daily lives, we can unlock several benefits such as improved mental clarity, significantly reduced stress, and enhanced emotional well-being. Consistency allows us to bond with the present moment and true self, rather than dwelling on the past or worrying about what the future holds.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,

              data: {
                title: "Conclusion: ",
                desc: "Mindfulness meditation is indeed a powerful yet simple practice that can bring numerous benefits to our lives if implemented in the right way. By dedicating a few minutes each day to mindfulness, we can cultivate a more profound sense of calm, clarity, and overall well-being within us. So why not give it a try and check ourselves? Start with small steps, be patient with yourself, and experience the transformative power of mindfulness meditation. Always remember to prioritize yourself and your mental well-being and stability, and do not hesitate to consult a professional if you have any major concerns or questions.",
                image: conclusionBulb,
              },
            },
          ],
        },
        {
          title: "Breadth Awareness Meditation",
          thumbnail: meditationType2,
          desc: "Observing the natural rhythm of the breath. Close attention to inhalation and exhalation, redirecting the mind back to the breath. It calms the mind, enhances focus, and reduces anxiety.",
          slug: "/activities/meditation/breath-awareness-meditation",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Breath Awareness Meditation",
                desc: "Breath awareness it is a form of meditation that involves focusing on the rhythm and sensation of our breathing pattern. By turning our attention explicitly to our breath, we can calm down our minds, reduce present stress and anxiety, and improve our overall well-being inside out. In this meditation while closing the eyes you can experience the stillness and focus on the depth of your breathing.",
                image: breadthHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "Practicing Mindfulness Meditation: ",
                image: breadthLeft1,
                list: [
                  {
                    subtitle: "Find a positive Space: ",
                    desc: "Choose a quiet and comfortable spot where you can sit or lie down without distractions and focus on yourself.",
                  },
                  {
                    subtitle: "Relax your body:",
                    desc: " Shut your eyes, take a few deep breaths, and allow your body to relax and settle down. Notice how each inhale and exhale feel as it passes through your body.",
                  },
                  {
                    subtitle: "Focus on the Present: ",
                    desc: " Focus your attention on your breath. Observe the heightened sensation of each inhale and exhale without judgment or attachment to thoughts or distractions that you may infer.",
                  },
                  {
                    subtitle: "Focus on Your Breath:  ",
                    desc: " Try invoking all your attention to your breath only. As you inhale visualize taking in the positivity around you, as you exhale remove toxins from within you.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                title: "Benefits of Breath Awareness Meditation:",
                desc: "Breath Awareness Meditation offers many benefits for the body and mind, including",
                image: breadthRight1,
                list: [
                  {
                    subtitle: "Count Your Breaths: ",
                    desc: "Count your every inhale and exhale, up to let's say 10. Start again from the beginning at 1, and continue the loop for a designated amount of time duration, typically 20mins.",
                  },
                  {
                    subtitle: "Beware of your Thoughts: ",
                    desc: "As with progression thoughts and emotions arise within you, gently acknowledge them and put them at rest rather than shoving them down or without getting caught up in them. Imagine them as a flowing river.",
                  },
                  {
                    subtitle:
                      "Integration of Breath Awareness into Daily Life:   ",
                    desc: " Now that you know the steps, occasionally take pauses throughout the day to focus solely on your breath, observing how wonderful it feels for you and letting the sensations please you.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Breath Awareness Meditation: ",
                list: [
                  {
                    subtitle: "Trigger down anxiety:",
                    desc: "By focusing all our attention on how we breathe, we can instantly quiet our minds, reduce ongoing stress and anxiety, and find a sense of inner calm and serenity.",
                  },
                  {
                    subtitle: "Relaxation and Better Concentration:  ",
                    desc: "Breath awareness meditation significantly improves our ability to concentrate on a matter and stay focused, which can enhance productivity and overall mental clarity with time as proven scientifically.",
                  },
                  {
                    subtitle: "Reduce blood pressure: ",
                    desc: "Numerous studies have proven the fact that mindfulness meditation can not only help one lower their blood pressure but also help maintain it.",
                  },
                  {
                    subtitle: "Enhanced Physical Well-being: ",
                    desc: " Focused and concentrated breathing can uplift our physical as well as mental well-being by reducing tension and inflammation present in our muscles, lowering blood pressure, and improving digestion and mobility.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title:
                  "The Importance of Breath Awareness Meditation in our Daily Lives:",
                desc: "",
                image: breadthRight2,
                list: [
                  {
                    subtitle: "",
                    desc: "In today's world, breath awareness is a simple yet powerful escape practice from the chaotic lifestyle that can help us find a sense of inner calm amidst the constant sense of stress and overburdened emotions. By regularly tuning our brain to dedicatedly focus on our breath, we can improve our ability to concentrate significantly, reduce any definite stress and anxiety, and improve our overall health. Moreover, incorporating breath awareness regularly into our daily routines can not only help us stay present in the moment but also improve our overall quality of life.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Breath awareness is a traditional effective form of meditation that offers a plethora of benefits for holistic i.e. mental, emotional, and physical well-being. By taking a few minutes each day to focus on our breath, we can cultivate a sense of inner calm, improve our ability to concentrate on ourselves and enhance our overall health and well-being. By dedicating a few minutes each day to mindfulness, we can cultivate a more profound sense of calm, clarity, and overall well-being within us. So why not give it a try and check ourselves? Start with small steps, be patient with yourself, and experience the transformative powers breathing meditation has to offer. Always remember to prioritize yourself and your mental well-being and stability, and do not hesitate to consult a professional if you have any major concerns or questions.",
                image: conclusionBulb,
                position: "left",
              },
            },
          ],
        },
        {
          title: "Kundalini Meditation",
          thumbnail: meditationType3,
          desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to Balance the chakras and achieve heightened spiritual awakening.",
          slug: "/activities/meditation/kundalini-meditation",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Kundalini Meditation",
                desc: "Kundalini is a Sanskrit word that refers to the coiled energy located at the base of our spine. It is often represented by a snake. The concept is that through Kundalini meditation, this hidden life energy can be awakened and guided up through the body's energy centres which are 7 in number, known as chakras, leading to a higher state of consciousness and spiritual awakening from within. ",
                image: kundaliniHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "Practicing Kundalini Meditation: ",
                image: kundaliniLeft1,
                list: [
                  {
                    subtitle: "",
                    desc: "Dress comfortably in light, loose clothing for your meditation session. Some practitioners find using shawls or cloth to cover their heads helps with energy flow.2.",
                  },
                  {
                    subtitle: "",
                    desc: " Start by tuning in to your meditative state. Sit upright, with a straight spine, whether on a chair or the floor. Place your hands together in a prayer pose at your chest, leaving your eyes slightly open.",
                  },
                  {
                    subtitle: " ",
                    desc: " Focus on your third eye chakra while tuning in. Direct your gaze to the space between your eyebrows with closed eyes.",
                  },
                  {
                    subtitle: " ",
                    desc: " Utilize a mantra to guide your focus. Kundalini meditation often involves mantras in Gurmukhi, but feel free to choose one that resonates with you. Repeat it silently or aloud.",
                  },
                  {
                    subtitle: " ",
                    desc: " Focus on your breathing pattern, inhaling and exhaling through your nose. Slow down your breathing, making each breath last about 8 seconds (3-4 seconds for inhale and exhale each). Feel the breath energizing your body.",
                  },
                  {
                    subtitle: " ",
                    desc: " Incorporate mudras, or hand positions, to enhance your meditation. For instance, the Gyan mudra (touching your first finger to your thumb) can promote wisdom and calmness, while the Shuni mudra (touching your middle finger to your thumb) can foster patience and commitment.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: kundaliniRight1,
                list: [
                  {
                    subtitle: "",
                    desc: "Divide your breathing into equal segments by inhaling and exhaling in four parts without pausing in between. Draw your navel towards your spine with each inhale and exhale.",
                  },
                  {
                    subtitle: "",
                    desc: "Whenever you feel your mind wanders away, gently tap into it to redirect your attention back to your breath. Acknowledge any wandering thoughts, then let them go as they flow free.",
                  },
                  {
                    subtitle: "  ",
                    desc: " Start with a 3 to 5-minute meditation if you're new to the practice. Gradually increase the time duration as you become more proficient and comfortable.",
                  },
                  {
                    subtitle: "  ",
                    desc: " End your session with a deep breath, inhaling as you raise your arms and exhaling to relax.",
                  },
                  {
                    subtitle: "  ",
                    desc: " Once you feel that your Kundalini energy has reached its peak, gradually try to bring your awareness back to your breath subtly. Take a few moments to ground yourself before ending the meditation and express gratitude.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Kundalini Meditation:",
                list: [
                  {
                    subtitle: "Explore beyond consciousness:",
                    desc: "Kundalini meditation can directly lead to a heightened state of awareness beyond the 5 senses and expanded consciousness merging with the universe, allowing individuals to tap into unlocking their full potential and explore higher realms of existence hidden from the rest of us.",
                  },
                  {
                    subtitle: "Emotional Uplifting: ",
                    desc: " With regular practice and consistency, Kundalini meditation can help release emotional baggage and other blockages and traumas stored in the body over time, bringing out the best of you in terms of healing, balance, and a greater sense of well-being inside out.",
                  },
                  {
                    subtitle: "Heightened E Vitality:",
                    desc: " Once successfully awakening the Kundalini energy, practitioners may expect to experience a significant increase in their energy, vitality, and a sense of empowerment in their daily lives from within",
                  },
                  {
                    subtitle: "Enhanced Intuition:",
                    desc: " Kundalini meditation has been proven and well-known to awaken dormant creativity and strengthen our inner intuition, allowing individuals to access the best of their inner wisdom and artistic expression.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Safety Precautions:",
                desc: "While Kundalini meditation can be a transformative practice, it is highly potent thus it is very essential to be under the guidance of a supervisor and approach it with caution and respect. Here are a few important safety measures and precautions to keep in mind by practitioners:",
                image: precautions,
                list: [
                  {
                    subtitle: "Practice under an Experienced Mentor:",
                    desc: " If you are new to Kundalini meditation, it is highly advisable to seek guidance from an experienced teacher with valid certifications who can provide proper instruction and support and guide you in this journey.",
                  },
                  {
                    subtitle: "Keep Slow Pace:",
                    desc: "Try to begin with shorter meditation sessions consistently and gradually increase the duration of sessions as you become more comfortable with the practice and master it.",
                  },
                  {
                    subtitle: "Listen to Your Intuition:",
                    desc: "Pay deep attention to any physical or emotional sensations or what we call gut feelings that arise during the meditation. If something feels uncomfortable or overwhelming kindly come to a halt, honor your boundaries and adjust your practice accordingly.",
                  },
                  {
                    subtitle: "Balance Grounding and Earthing: ",
                    desc: "Incorporate various grounding activities such as walking in nature barefoot, journaling down your emotions, or spending time with loved ones to help integrate the Kundalini energy and maintain balance with nature.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Kundalini meditation is indeed a transformative practice that can lead to spiritual growth, expanded consciousness, and enhanced well-being.  By taking a few minutes each day to focus on our breath, we can cultivate a sense of inner calm, improve our ability to concentrate on ourselves and enhance our overall health and well-being and awaken the dormant Kundalini energy within us, practitioners under guidance can tap into their true potential, experience emotional healing, and cultivate a deep sense of inner peace. However, it is important to approach Kundalini meditation with proper training and caution, seek guidance from experienced teachers and mentors, and listen to your body's wisdom throughout the journey and unlock the nirvana.",
                image: conclusionBulb,
                position: "left",
              },
            },
          ],
        },
        {
          title: "Zen Meditation (Zazen)",
          thumbnail: meditationType4,
          desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath, observing thoughts and sensations without attachment or judgment. Cultivate mindfulness into actual reality.",
          slug: "/activities/meditation/zen-meditation",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Zen Meditation(Zazen)",
                desc: "Zen meditation is a fundamental practice in Zen Buddhism that usually involves sitting meditation practising mudras. Zazen emphasizes specifically mindfulness of breath and posture to develop a deepened insight into one's true nature and achieve a state of mental clarity and calm away from the chaos leading to a higher state of consciousness and spiritual awakening from within.",
                image: zenHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "Practicing Zen Meditation:",
                image: kundaliniLeft1,
                list: [
                  {
                    subtitle: "",
                    desc: "Find a quiet and peaceful place for meditation. Remove any distractions, like electronic devices, and wear comfortable clothes to feel relaxed.",
                  },
                  {
                    subtitle: "",
                    desc: " Choose a meditation pose from the following options: Half Lotus, Full Lotus, Burmese Pose, or Seiza Pose. Select a pose that feels comfortable for you.",
                  },
                  {
                    subtitle: " ",
                    desc: " Close your eyes, focus on your breath, and stay with it. If your mind wanders, gently bring your attention back to your breath. Start with 5 minutes and gradually increase the duration.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: zenRight1,
                list: [
                  {
                    subtitle: "",
                    desc: "Develop a nonjudgmental attitude towards your thoughts and experiences. Avoid labelling thoughts as positive or negative, just let them be as they are. Embrace this new way of thinking to stay calm and patient.",
                  },
                  {
                    subtitle: "",
                    desc: "Consistency is key. Practice daily for at least one month, reflecting on any positive changes you observe. If you experience benefits, make meditation a part of your daily routine to enhance your life.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Zen Meditation:",
                list: [
                  {
                    subtitle: "Enhanced Creativity: ",
                    desc: " When we are stressed and overwhelmed, our ability to generate new ideas and be innovative suffers. However, Zen meditation can be a remedy for this issue. By promoting increased blood circulation to the brain and energizing the right side, which is associated with creativity, Zen meditation helps unlock our creative potential.",
                  },
                  {
                    subtitle: "Improved Mental Well-being:",
                    desc: "  Zen meditation addresses deep-seated anxiety and depression, offering a path to finding clarity and answers to troubling questions. Moreover, it facilitates reconnection with life, fostering empathy and inner awareness, leading to improved psychological well-being. It promotes our cognitive abilities.",
                  },
                  {
                    subtitle: "Heightened Knowledge and Insight: ",
                    desc: " Engaging in Zen meditation fosters a thirst for knowledge and a deeper understanding of life's essence. This practice provides profound insights into one's place and purpose in the world, enabling individuals to detach from societal expectations. As a result, they are better equipped to embrace and enjoy life to the fullest.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Safety Precautions:",
                desc: "While Zeni meditation can be a transformative practice, its some forms require supervised practice and thus it is very essential to be under the guidance of a supervisor and approach it with caution and respect. Here are a few important safety measures and precautions to keep in mind for practitioners:",
                image: precautions,
                list: [
                  {
                    subtitle: "Practice under an Experienced Mentor:",
                    desc: "  If you are new to Kundalini meditation, it is highly advisable to seek guidance from an experienced teacher with valid certifications who can provide proper instruction and support and guide you in this journey.",
                  },
                  {
                    subtitle: "Keep Slow Pace:",
                    desc: "Try to begin with shorter meditation sessions consistently and gradually increase the duration of sessions as you become more comfortable with the practice and master it.",
                  },
                  {
                    subtitle: "Do not practice it at home: ",
                    desc: " It is important to note that Zen meditation shouldn’t be practiced alone at home or by children below 14 years of age.",
                  },
                  {
                    subtitle: "Listen to Your Intuition:",
                    desc: "Pay deep attention to any physical or emotional sensations or what we call gut feelings that arise during the meditation. If something feels uncomfortable or overwhelming kindly come to a halt, honor your boundaries and adjust your practice accordingly.",
                  },
                  {
                    subtitle: "Balance Grounding and Earthing:",
                    desc: "Incorporate various grounding activities such as walking in nature barefoot, journaling down your emotions, or spending time with loved ones to help integrate the Kundalini energy and maintain balance with nature.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Zeni meditation is indeed a transformative practice that can lead to spiritual growth, expanded consciousness, and enhanced well-being with proficiency. By taking just a few minutes each day to focus on our breath, we can cultivate a sense of inner calm, improve our ability to concentrate on ourselves and enhance our overall health and well-being and awaken the inner true energy within us, practitioners under guidance can tap into their true potential, experience emotional healing, and cultivate a deep sense of inner peace and belonging. However, it is important to approach it with proper training and caution, seek guidance from experienced teachers and mentors, and listen to your body's wisdom throughout the journey and unlock the nirvana.",
                image: conclusionBulb,
                position: "left",
              },
            },
          ],
        },
        {
          title: "Spiritual Meditation",
          thumbnail: meditationType5,
          desc: "Activating one's consciousness. Spiritual meditation involves bonding with a higher conscience. Highly beneficial to those seeking spiritual growth and oneness with the supreme self.",
          slug: "/activities/meditation/spiritual-meditation",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Spiritual Meditation",
                desc: "Spiritual meditation is a unique form of contemplative practice that selectively focuses on invoking a deeper connection with one's inner true self, reaching higher consciousness or experiencing a divine presence from within. It is practiced primarily by people from various religious and spiritual backgrounds, as well as those who identify themselves as spiritual but not religious. It is an efficient way to lead away from the chaos leading to a higher state of consciousness and spiritual awakening from within.",
                image: spiritualHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "Practicing Spiritual Meditation:",
                image: spiritualLeft1,
                list: [
                  {
                    subtitle: "Release any grudges you’ve been holding: ",
                    desc: " The habit of holding grudges can weigh heavily on our minds and hearts, hindering our mental and emotional well-being and spiritual growth. To practice spiritual meditation effectively, let go of any lingering resentments you possess or negative feelings towards others. Forgiveness gratitude and compassion are very powerful tools that can liberate us thus fostering inner peace and healing within.",
                  },
                  {
                    subtitle: "Focus on your spiritual aspirations:",
                    desc: "Spiritual meditation encourages us to cultivate deepened selflessness which extends our spiritual aspirations to others. By directing our positive intentions and prayers towards the well-being and happiness of others, we enhance our sense of interconnections and compassion.",
                  },
                  {
                    subtitle: "Bring in your faith: ",
                    desc: " Combining with one's faith or spiritual beliefs can deepen the spiritual experience. Being fully present in moments of prayer, meditation, or religious rituals, one can connect deeply with spirituality. It allows us to engage with our faith practices.",
                  },
                  {
                    subtitle: "Welcome new possibilities:",
                    desc: " Spiritual meditation encourages us to have a welcoming and receptive mindset. By letting go of our rigid beliefs and conceptions, we can become more receptive to new ideas, insights, and spiritual experiences. This openness to exploring new possibilities expands our spiritual horizons fostering personal growth and understanding within us.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: spiritualRight1,
                list: [
                  {
                    subtitle: "Observe the rhythm of breathing:",
                    desc: "The steps of spiritual meditation often begin with focusing on the breathing pattern. The breath often serves as an anchor for the mind within, allowing the right to bring our attention to the present. Observing the rhythm of breathing patterns can help quieten the mind and dive deeper into a spiritual experience.",
                  },
                  {
                    subtitle: "Tune into your heart rate and heartbeats:",
                    desc: "Whenever you feel your mind wanders away, gently tap into it to redirect your attention back to your breath. Acknowledge any wandering thoughts, then let them go as they flow free.",
                  },
                  {
                    subtitle: "Tune into your heart rate and heartbeats: ",
                    desc: " As we progress further in the meditation, we gradually shift our awareness from the breath to the rhythm of our heartbeats. Connecting with the heart centre implants a deepened sense of self-awareness and emotional understanding. This part encourages us to openly embrace our emotions with kindness and gratitude.",
                  },
                  {
                    subtitle: "Thank yourself and rest:",
                    desc: " During spiritual meditation, it's quite normal to expect the mind to wander and the ego to assert its dominance. Instead of getting frustrated over it, we can acknowledge the ego's presence, thank it for its existence, and gently put it back to rest. This practice shall create a peaceful and centred mental state.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Spirtiual Meditation:",
                list: [
                  {
                    subtitle: "Increase aura positivity: ",
                    desc: "When we are stressed and overwhelmed, our ability to generate new ideas and be innovative suffers and our aura dims down. However, spiritual meditation can regenerate inner stillness and peace for this issue. By promoting increased blood circulation beyond the brain and energizing from within to unlock our creative potential.",
                  },
                  {
                    subtitle: "Improved Neutrality and Equanimity: ",
                    desc: "With spiritual meditation addresses deep-seated anxiety and depression, offering a path to finding sans judgement ruled by clarity and answers to troubling questions. Moreover, it facilitates reconnection with life, fostering empathy and inner awareness, leading to improved psychological well-being. It promotes our cognitive abilities.",
                  },
                  {
                    subtitle: "Heightened Knowledge and Insight: ",
                    desc: " Abundance, generosity and gratitude are fostered by a thirst for knowledge and a deeper understanding of life's essence. This practice provides profound insights into one's place and purpose in the world, enabling individuals to detach from societal expectations. As a result, they are better equipped to embrace and enjoy life to the fullest.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Safety Precautions:",
                desc: "While spiritual meditation can be really empowering, it might require a supervised practitioner like a guru and thus is very essential to be under a supervisor and approach with caution and respect. Here are a few important safety measures and precautions to keep in mind for practitioners:",
                image: precautions,
                list: [
                  {
                    subtitle: "Ending meditation:",
                    desc: "  By opening your eyes slowly and becoming aware of your surroundings allows us to inculcate the benefits of spirituality into our everyday experiences. It bridges the meditative state we possess with the maternal world and guides us in carrying spiritual insights throughout.",
                  },
                  {
                    subtitle: "Aftermath:",
                    desc: "By trying to incorporate the above steps along you into a spiritual meditation practice, individuals can expect to experience profound inner growth, mental-emotional healing, and a sounder connection with themselves and the world.",
                  },
                  {
                    subtitle: "Keep Slow Pace: ",
                    desc: "Try to begin with shorter meditation sessions consistently and gradually increase the duration of sessions as you become more comfortable with the practice and master it.",
                  },
                  {
                    subtitle: "Listen to Your Intuition: ",
                    desc: "Pay deep attention to any physical or emotional sensations or what we call gut feelings that arise during the meditation. If something feels uncomfortable or overwhelming kindly come to a halt, honor your boundaries and adjust your practice accordingly.",
                  },
                  {
                    subtitle: "Balance Grounding and Earthing:  ",
                    desc: " Incorporate various grounding activities such as walking in nature barefoot, journaling down your emotions, or spending time with loved ones to help integrate the Kundalini energy and maintain balance with nature.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Spiritual meditation is indeed an empowering and gradual practice which is a sure-shot way in leading one to spiritual growth and expanded consciousness beyond the norm and enhance well-being with proficiency. By taking just a few minutes each day to focus on our breath, we can cultivate a sense of inner calm, improve our ability to concentrate on ourselves and enhance our overall health and well-being and awaken the inner true energy within us, practitioners under guidance can tap into their true potential, experience emotional healing, and cultivate a deep sense of inner peace and belonging. However, it is important to approach it with proper training and caution, seek guidance from experienced teachers and mentors, and listen to your body's wisdom throughout the journey and unlock the nirvana.",
                image: conclusionBulb,
                position: "left",
              },
            },
          ],
        },
        {
          title: "Walking Meditation",
          thumbnail: meditationType6,
          desc: "Walking slowly and attentively, cultivating awareness of the present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquillity.",
          slug: "/activities/meditation/walking-meditation",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Walking Meditation",
                desc: "Walking Meditation is one of the most popular and beneficial forms of mental health practice. It not only helps to reduce stress and anxiety, but it can also help to improve mindfulness and focus. But did you know that walking meditation is also an excellent way to practice mindfulness and relaxation?It is an efficient way to lead away from the chaos leading to a higher state of consciousness and spiritual awakening from within ‘walking away from it’.",
                image: walkingHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "Practicing Walking Meditation:",
                image: walkingLeft1,
                list: [
                  {
                    subtitle: "",
                    desc: "Find a peaceful and quiet place to walk without distractions. It could be a garden, park, beach, or any open space with enough room to step back and forth for a few paces.",
                  },
                  {
                    subtitle: "",
                    desc: " Stand upright with your spine straight but not rigid. Let your shoulders relax, and place your arms comfortably, like clasping your hands together in front of you or letting them hang naturally at your sides.",
                  },
                  {
                    subtitle: " ",
                    desc: " Before walking, take a few deep breaths to center yourself. Pay attention to the sensations of your breath as it enters and leaves your body. This helps you become present and prepares your mind for walking meditation.",
                  },
                  {
                    subtitle: " ",
                    desc: " Begin to walk at a slow and deliberate pace. Pay attention to each step as you take it. Lift one foot slowly, move it forward, and gently place it on the ground. Feel the sensations in your feet and legs as they move.",
                  },
                  {
                    subtitle: " ",
                    desc: " As you walk, direct your attention to the physical sensations of walking. Feel the contact of your feet with the ground, the shifting of your weight from one foot to the other, and the movement of your legs and feet.",
                  },
                  {
                    subtitle: " ",
                    desc: "While walking, try to keep your attention on the act of walking itself. If your mind starts to wander or get caught up in thoughts, gently bring your focus back to the sensations of walking. Be patient with yourself; it's normal for the mind to wander.",
                  },
                  {
                    subtitle: " ",
                    desc: "Be fully present with each movement. Notice how your muscles engage as you walk, the subtle shifts in balance, and the coordination involved in each step.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: walkingRight1,
                list: [
                  {
                    subtitle: "",
                    desc: "You can also be aware of your surroundings while walking. Notice the sights, sounds, and smells around you without getting overly absorbed.",
                  },
                  {
                    subtitle: "",
                    desc: "Walking meditation is about being in the present moment. Try not to dwell on the past or worry about the future. Instead, immerse yourself fully in the experience of walking.",
                  },
                  {
                    subtitle: "  ",
                    desc: "Some people find repeating a simple mantra or affirmation with each step helpful to anchor their focus. For example, with each step, you can silently say, 'I am here' or 'I am present.' ",
                  },
                  {
                    subtitle: "  ",
                    desc: " Decide on your walking meditation practice duration. Depending on your preference and schedule, it could be as short as 5 minutes or as long as 30 minutes.",
                  },
                  {
                    subtitle: "  ",
                    desc: " With enough space, you can walk back and forth along a straight path. When reaching the end, pause momentarily, turn mindfully, and continue walking in the opposite direction. This continuous movement helps maintain focus.",
                  },
                  {
                    subtitle: "  ",
                    desc: " When you're ready to conclude the walking meditation, slow down gradually. Stand still for a moment, take a few deep breaths, and allow yourself to transition from a walking state to a still one.",
                  },
                  {
                    subtitle: "  ",
                    desc: " After the practice, take a moment to reflect on how you feel. Observe any changes in your mental state, emotions, or bodily sensations. Appreciate the sense of mindfulness and calmness that arises from walking meditation.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Walking Meditation:",
                list: [
                  {
                    subtitle: "Stress Reduction: ",
                    desc: "Walking meditation can be a great way to relieve stress and tension. The rhythmic movement and mindful breathing help calm the nervous system, leading to relaxation and ease.",
                  },
                  {
                    subtitle: "Improved Concentration and Focus: ",
                    desc: " Regular walking meditation enhances concentration and cognitive abilities. It trains the mind to sustain attention on the walking process, which can then be transferred to other tasks and activities in daily life.",
                  },
                  {
                    subtitle: "Physical Exercise:",
                    desc: " Walking is a low-impact exercise that can benefit cardiovascular health, strengthen muscles, and improve overall fitness. Incorporating mindfulness into walking adds a meditative dimension to the practice.",
                  },
                  {
                    subtitle: "Enhanced Self-Awareness:",
                    desc: " Walking meditation allows individuals to observe their thoughts, emotions, and bodily sensations as they arise during practice. This heightened self-awareness can lead to a better understanding and acceptance of one's inner experiences.",
                  },
                  {
                    subtitle: "Mood Regulation:",
                    desc: " Engaging in walking meditation can have positive effects on mood and emotional well-being. It has been found to reduce symptoms of anxiety and depression, promoting a more positive outlook on life.",
                  },
                  {
                    subtitle: "Connection with Nature:",
                    desc: " Walking meditation in natural settings, such as parks or forests, offers the added benefit of connecting with nature. This connection has been shown to enhance feelings of well-being and reduce stress.",
                  },
                  {
                    subtitle: "Mind-Body Integration:",
                    desc: "  Walking meditation fosters a deeper connection between the mind and body. It allows individuals to be more attuned to the physical sensations of walking, promoting a sense of grounding and embodiment.",
                  },
                ],
              },
            },

            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Walking meditation can be a highly adaptable practice. It can be integrated into your daily routine as a mindful walk to the office while strolling in a park, or even during mundane activities like grocery shopping. By taking a few minutes each day to focus on our breath, we can cultivate a sense of inner calm, improve our ability to concentrate on ourselves and enhance our overall health and well-being. By dedicating a few minutes each day to mindfulness, we can cultivate a more profound sense of calm, clarity, and overall well-being within us. So why not give it a try and check ourselves? Its versatility makes it an accessible form of meditation for individuals who may find sitting meditation challenging or prefer a more engaging practice.",
                image: conclusionBulb,
                position: "left",
              },
            },
          ],
        },
        {
          title: "Vipassana Meditation",
          thumbnail: meditationType7,
          desc: "The insight meditation practice of vipassana calls for very attentive observation of feelings, ideas, and sensations. Its goal is to help people comprehend how fleeting and ultimately unsatisfying life is.",
          slug: "/activities/meditation/vipassana-meditation",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Vipassana Meditation",
                desc: [
                  "A moment of stillness can feel like a luxury in today's fast-paced world. Amidst the chaos, Vipassana meditation emerges as a beacon of tranquillity, offering a path to profound self-discovery and inner peace. This ancient practice, rooted in the teachings of Gautama Buddha, has been revered for over 2,500 years.",
                  "Vipassana, which means 'clear seeing' or 'insight,' is a form of meditation that encourages a deep awareness of the present moment. Unlike concentration-based techniques, Vipassana aims to observe bodily sensations and mental phenomena without attachment or aversion.",
                ],
                image: vipasnaHeader,
                var: " ",
                variations: false,
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "Practicing Vipasna Meditation:",
                image: vipasnaPracticingLeft,
                list: [
                  {
                    subtitle: "Find a Quiet Space:",
                    desc: "Select a quiet, comfortable place where you won't be disturbed.",
                  },
                  {
                    subtitle: "Assume a Comfortable Posture:",
                    desc: "Sit cross-legged on the floor or a chair with your back straight. The key is to maintain a posture that is both relaxed and alert.",
                  },
                  {
                    subtitle: "Focus on the Breath: ",
                    desc: "Start by observing the natural rhythm of your breath. Pay attention to the sensation of the breath entering and leaving your nostrils.",
                  },
                  {
                    subtitle: "Body Scan:",
                    desc: "Gradually shift your attention to the sensations throughout your body. Start from the top of your head and work your way down to your toes. Be mindful of any tingling, warmth, pressure, or other sensations.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: vipasnaPracticingRight,
                list: [
                  {
                    subtitle: "Equanimous Observation:",
                    desc: "Remain equanimous, which means observing sensations without attachment or aversion. If discomfort arises, resist the urge to react; simply observe it.",
                  },
                  {
                    subtitle: "Persist with Patience:",
                    desc: " Initially, your mind may resist this process, seeking distraction. Gently guide it back to the sensations whenever it wanders.",
                  },
                  {
                    subtitle: "Practice Regularly: ",
                    desc: "Consistency is key. Aim to meditate daily, starting with shorter sessions and gradually extending the duration. ",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Vipasna Meditation:",
                list: [
                  {
                    subtitle: "Enhanced Awareness: ",
                    desc: "Vipassana sharpens your ability to observe thoughts, emotions, and bodily sensations, fostering a profound self-awareness.",
                  },
                  {
                    subtitle: "Stress Reduction:",
                    desc: "  Regular practice has been shown to reduce stress, anxiety, and symptoms of depression, allowing for a greater sense of mental calm and stability.",
                  },
                  {
                    subtitle: "Improved Concentration:",
                    desc: "Vipassana strengthens your ability to focus, leading to enhanced productivity and mental clarity in daily life.",
                  },
                  {
                    subtitle: "Emotional Resilience: ",
                    desc: " You learn to respond to life's challenges with a balanced mind, reducing reactivity and cultivating emotional resilience through equanimity.",
                  },
                  {
                    subtitle: "Spiritual Growth:",
                    desc: " Many practitioners report a deepened sense of spiritual connection and purpose, transcending the boundaries of the self.",
                  },
                ],
              },
            },

            {
              component: SubpagesConclusion,
              data: {
                image: conclusionBulb,

                title: "Conclusion: ",
                desc: "With its roots in ancient wisdom, Vipassana meditation offers a profound journey towards self-discovery and inner peace. Through diligent practice, one can experience heightened awareness, emotional resilience, and spiritual growth. While potential side effects are minimal, the benefits are boundless. So, take a step towards this transformative journey, and may it bring you the serenity and clarity you seek in today's bustling world.",
              },
            },
          ],
        },
        {
          title: "Concentrate Meditation",
          thumbnail: meditationType8,
          desc: "Focusing all your attention on singularity. Train your mind to focus on a particular vibration or sensation, enhancing your concentration capacity and decreasing distractions.",
          slug: "/activities/meditation/concentrative-meditation",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Concentrate Meditation",
                desc: `Finding moments of focus and inner peace can be a rare gift in our fast-paced world. Concentration meditation, a centuries-old practice, is a valuable tool to help you sharpen your mind, reduce stress, and cultivate a sense of calm amidst life's chaos.
                
                Concentration meditation, also known as focused attention meditation, is a practice that involves directing your attention to a single point of focus. This focus can be on an object, a sound, your breath, or even a specific thought or mantra. The goal is to train your mind to stay present and not wander, leading to enhanced concentration and mindfulness.
                
                `,
                image: concentrationHeader,
                var: " ",
                variations: false,
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "Practicing Concentrate Meditation:",
                image: concentrationPracticingLeft,
                list: [
                  {
                    subtitle: "Choose Your Point of Focus:",
                    desc: "Start by selecting your object of focus. It can be your breath, a candle flame, a word or phrase (mantra), or any other object that resonates with you.",
                  },
                  {
                    subtitle: "Find a Quiet Space:",
                    desc: "Select a peaceful environment where you won't be easily distracted.",
                  },
                  {
                    subtitle: "Assume a Comfortable Posture: ",
                    desc: "Sit relaxed but alert. You can sit cross-legged on the floor or in a chair with your back straight.",
                  },
                  {
                    subtitle: "Begin to Focus:",
                    desc: "Gently direct your attention to your chosen focus point. For instance, if you're focusing on your breath, observe the sensation of each inhale and exhale.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: concentrationPracticingRight,
                list: [
                  {
                    subtitle: "Maintain Your Focus:",
                    desc: "you may notice your mind wandering as you meditate. When this happens, gently bring your attention back to your chosen focus point without judgment.",
                  },
                  {
                    subtitle: "Start with Short Sessions: ",
                    desc: " If you're new to concentration meditation, begin with short sessions (5-10 minutes) and gradually extend the duration as you become more comfortable.",
                  },
                  {
                    subtitle: "Consistency Matters:",
                    desc: "Regular practice is key to reaping the full benefits of concentration meditation. Aim to meditate daily, even if it's for a short duration. ",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Concentration Meditation:",
                list: [
                  {
                    subtitle: "Enhanced Concentration: ",
                    desc: "As the name suggests, this practice significantly improves your ability to concentrate on tasks, making you more productive and efficient in your daily life.",
                  },
                  {
                    subtitle: "Stress Reduction:",
                    desc: "  Concentration meditation has been shown to reduce stress and anxiety, helping you manage life's challenges with a calmer and more collected mind. ",
                  },
                  {
                    subtitle: "Increased Mindfulness:",
                    desc: "This practice deepens awareness of the present moment, fostering greater mindfulness and appreciation for the here and now",
                  },
                  {
                    subtitle: "Emotional Regulation: ",
                    desc: " Concentration meditation can help you become more emotionally resilient, allowing you to respond to situations more easily.",
                  },
                  {
                    subtitle: "Spiritual Growth:",
                    desc: "  For some, concentration meditation is a gateway to deeper spiritual exploration and self-discovery.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                image: conclusionBulb,
                title: "Conclusion: ",
                desc: "Concentration meditation is valuable for anyone seeking greater mental clarity, focus, and inner peace in today's hectic world. While it requires patience and consistent practice, the benefits are worth the effort. By embracing this practice, you can cultivate and harness the power of concentration to lead a more balanced, mindful, and fulfilling life.",
                position: "right", // Specify the position here
              },
            },
          ],
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
  },
  {
    id: 3,
    name: "Sadhna",
    slug: "/activities/sadhna",
    header: {
      title: [
        {
          color: true,
          text: "Sadhna: ",
        },
        {
          color: false,
          text: "A Journey of Spiritual Growth",
        },
      ],
      desc: "Sadhna is like a journey that helps you grow spiritually, connecting you to deeper insights. When you embrace Sadhna, you're on a quest that takes care of your soul, helps you spiritually evolve, and makes your life more meaningful.",
      image: sadhnaHeader,
      alt: "Wleness - Sadhna A Journey of Spiritual Growth",
    },
    activities: {
      title: "Sadhna Techniques",
      desc: "Explore transformative Sadhna techniques for emotional healing, leading you to a brighter tomorrow, even amid life's darkestmoments.",
      types: [
        {
          title: "Yoga Sadhana",
          thumbnail: sadhnaType1,
          desc: "Originated from Hindu shastras, a practice involving attention to the present, focusing on breath and thoughts without judgment, fostering heightened awareness and acceptance.",
          slug: "/activities/sadhna/yoga-sadhna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Yoga Sadhana",
                desc: "Yoga Sadhana, the ancient practice of uniting body, mind, and soul, has been revered for centuries for its trans-formative power. Rooted in the teachings of ancient Indian philosophy, Yoga Sadhana goes beyond the physical postures we often associate with yoga. It encompasses a holistic approach to self-realization, promoting mental clarity, physical well-being, and spiritual growth. ",
                image: yogaSadhnaHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "The Procedure of Yoga Sadhana: ",
                image: activitiesSubpagesProcedure,
                list: [
                  {
                    subtitle: "Finding the Right Environment: ",
                    desc: "To begin your Yoga Sadhana, it's essential to find a quiet, clean, and peaceful space free from distractions. This will enable you to fully immerse yourself in the practice and connect with your inner self.",
                  },
                  {
                    subtitle: "Asanas (Physical Postures):",
                    desc: "Yoga Sadhana incorporates various asanas that improve flexibility, strength, and balance. Some common asanas include Mountain Pose (Tadasana), Downward Dog (Adho Mukha Svanasana), and Child's Pose (Balasana). Each posture is performed mindfully, focusing on breath and alignment.",
                  },
                  {
                    subtitle: "Pranayama (Breath Control): ",
                    desc: "Pranayama involves regulating the breath, harnessing the life force (prana), and calming the mind. Techniques like Ujjayi breathing and Nadi Shodhana (alternate nostril breathing) are commonly practiced during Yoga Sadhana.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: yogaSadhnaTypes,
                list: [
                  {
                    subtitle: "Dhyana (Meditation): ",
                    desc: "Meditation is a vital component of Yoga Sadhana, allowing practitioners to quiet the mind, cultivate awareness, and experience inner stillness. Focused meditation on a specific object or concept can lead to heightened mindfulness.",
                  },
                  {
                    subtitle: "Mantra Chanting: ",
                    desc: "Chanting sacred mantras can induce a sense of tranquillity and spiritual awakening. Repeating a mantra like 'Om' or other chants can create positive vibrations within the body and mind.",
                  },
                  {
                    subtitle: "Niyamas and Yamas: ",
                    desc: "Yoga Sadhana also emphasizes ethical principles known as Yamas (restraints) and Niyamas (observances). These include non-violence (Ahimsa), truthfulness (Satya), contentment (Santosha), and self-discipline (Tapas), among others.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Yoga Sadhana: ",
                list: [
                  {
                    subtitle: "Physical Health: ",
                    desc: "Regular practice of Yoga Sadhana can enhance flexibility, build muscle strength, improve posture, and boost immunity. It may also alleviate chronic conditions like back pain and arthritis.",
                  },
                  {
                    subtitle: "Mental Well-being: ",
                    desc: "Yoga Sadhana fosters clarity and reduces stress, anxiety, and depression. Combining breathwork and meditation helps calm the mind, promoting emotional balance and greater self-awareness.",
                  },
                  {
                    subtitle: "Spiritual Growth: ",
                    desc: "By exploring the depths of their inner selves, practitioners of Yoga Sadhana often experience spiritual growth and a profound connection with their spiritual essence.",
                  },
                  {
                    subtitle: "Improved Concentration: ",
                    desc: "The focused attention required during Yoga Sadhana translates into enhanced concentration and mental focus in daily life.",
                  },
                  {
                    subtitle: "Enhanced Self-Acceptance: ",
                    desc: "As Yoga Sadhana encourages non-judgment and self-compassion, practitioners develop a greater sense of self-acceptance and self-love.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Potential Complications and Precautions: ",
                desc: "While Yoga Sadhana offers numerous benefits, it is essential to approach the practice with mindfulness and care to avoid potential complications:",
                image: precautions,
                list: [
                  {
                    subtitle: "Physical Strain: ",
                    desc: "Overexertion or improper alignment during asanas can lead to muscle strains or injuries. Practitioners should listen to their bodies and avoid pushing beyond their limits.",
                  },
                  {
                    subtitle: "Breathing Difficulties: ",
                    desc: "Incorrect pranayama techniques may lead to breathing difficulties or dizziness. Proper guidance from a qualified instructor is crucial for mastering breath control.",
                  },
                  {
                    subtitle: "Mental Overload: ",
                    desc: "Attempting intense meditation practices without proper preparation can overwhelm the mind, leading to heightened anxiety or even panic attacks. Start with shorter meditation sessions and gradually increase the duration.",
                  },
                  {
                    subtitle: "Spiritual Imbalance: ",
                    desc: "While Yoga Sadhana can deepen spiritual connections, pushing oneself too hard to achieve spiritual goals can lead to spiritual imbalances. A balanced and gradual approach is critical.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Yoga Sadhana is a profound journey of self-discovery and transformation that unites the physical, mental, and spiritual aspects of our being. Through practicing asanas, pranayama, meditation, and ethical principles, practitioners can experience numerous physical and mental benefits. However, it is crucial to approach Yoga Sadhana with patience and self-awareness and under the guidance of a qualified instructor to avoid potential complications. Embrace this ancient practice, and may your journey on the path of Yoga Sadhana be filled with joy, peace, and self-realization.",
                image: conclusionBulb,
              },
            },
          ],
        },
        {
          title: "Meditation Sadhana",
          thumbnail: sadhnaType2,
          desc: "Observing the natural rhythm of the breath. Close attention to inhalation and exhalation, redirecting the mind back to the breath. It calms the mind, enhances focus, and reduces anxiety.",
          slug: "/activities/sadhna/meditation-sadhna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Meditation Sadhana",
                desc: "Meditation Sadhana, a practice dating back thousands of years, is a trans formative journey of self-discovery & inner peace. Rooted in ancient traditions and spiritual philosophies, meditation Sadhana aims to quiet the mind, cultivate mindfulness, and unlock our vast reservoir of inner potential. In this blog, we will explore the procedure, benefits, and potential complications of meditation Sadhana, shedding light on why it has become an essential tool for modern individuals seeking balance",
                image: meditationSadhnaHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "The Procedure of Meditation Sadhana:",
                image: activitiesSubpagesProcedure,
                list: [
                  {
                    subtitle: "Finding a Peaceful Space: ",
                    desc: "To begin Meditation Sadhana, choose a serene and quiet space where you won't be disturbed. Whether it's a corner of your home or a peaceful natural spot, the environment should be conducive to introspection and inner focus.",
                  },
                  {
                    subtitle: "Comfortable Seating: ",
                    desc: "Sit comfortably on the floor or a cushion with your spine erect, allowing the energy to flow freely. You can also meditate on a chair if sitting on the floor is uncomfortable for extended periods.",
                  },
                  {
                    subtitle: "Focusing the Mind: ",
                    desc: "Select a focus point for your meditation. It could be your breath, a mantra, a candle flame, or any other object of contemplation. The goal is to anchor your mind and prevent it from wandering.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: yogaSadhnaTypes,
                list: [
                  {
                    subtitle: "Observing the Breath: ",
                    desc: "Breath awareness is a common and powerful technique in Meditation Sadhana. Observe the natural flow of your breath without controlling it, bringing your mind back to the breath whenever it drifts away.",
                  },
                  {
                    subtitle: "Cultivating Mindfulness: ",
                    desc: "Be present at the moment and observe your thoughts and emotions without judgment. Allow them to come and go like passing clouds, maintaining a detached and non-reactive attitude.",
                  },
                  {
                    subtitle: "Gradual Progression: ",
                    desc: "Start with shorter meditation sessions, gradually increasing the duration as you build your mental stamina. Consistency is critical to experiencing the full benefits of Meditation Sadhana.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Meditation Sadhana: ",
                list: [
                  {
                    subtitle: "Stress Reduction: ",
                    desc: "Regular practice of meditation Sadhana can significantly reduce stress and anxiety levels by calming the mind and promoting relaxation.",
                  },
                  {
                    subtitle: "Enhanced Concentration and Focus: ",
                    desc: "Meditation strengthens the ability to concentrate, improving productivity and mental clarity in daily activities.",
                  },
                  {
                    subtitle: "Emotional Well-being: ",
                    desc: "By observing thoughts and emotions without attachment, practitioners develop emotional resilience and experience increased happiness and contentment.",
                  },
                  {
                    subtitle: "Better Sleep Quality: ",
                    desc: "Meditation Sadhana can improve sleep patterns and alleviate insomnia by promoting relaxation and calming the mind.",
                  },
                  {
                    subtitle: "Physical Health: ",
                    desc: "Meditation has numerous physical health benefits, such as lowering blood pressure, boosting the immune system, and reducing inflammation.",
                  },
                  {
                    subtitle: "Increased Self-Awareness: ",
                    desc: "Through meditation Sadhana, individuals gain deeper insights into their thoughts, behaviors, and patterns, leading to heightened self-awareness and personal growth.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Potential Complications and Precautions:",
                desc: "While Meditation Sadhana offers numerous benefits, it is essential to approach the practice with mindfulness and care to avoid potential complications:",
                image: precautions,
                list: [
                  {
                    subtitle: "Frustration and Impatience: ",
                    desc: "Beginners may experience frustration or impatience when their minds wander during meditation. It's crucial to be patient with yourself and recognize that it's normal for thoughts to arise.",
                  },
                  {
                    subtitle: "Emotional Release: ",
                    desc: "During meditation, suppressed emotions may surface, leading to feelings of sadness, anger, or anxiety. This is a natural part of the process, but seeking support from a counsellor or meditation teacher can be helpful if it becomes overwhelming.",
                  },
                  {
                    subtitle: "Avoidance of Underlying Issues: ",
                    desc: "Meditation can bring peace and stillness, but it should not be used to avoid underlying emotional or psychological issues. Addressing such matters with appropriate support is essential for long-term well-being.",
                  },
                  {
                    subtitle: "Physical Discomfort: ",
                    desc: "Sitting for extended periods during meditation may cause physical discomfort. Practitioners with physical limitations can explore alternative meditation positions or use supportive props.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Meditation Sadhana is a transformative journey that allows individuals to find inner calm, cultivate mindfulness, and discover their true selves. By creating a conducive environment, practicing regular meditation with patience, and embracing the present moment, practitioners can experience various mental, emotional, and physical benefits. However, it's essential to approach Meditation Sadhana with an open heart, acknowledging the potential challenges and seeking guidance when needed. Embrace this ancient practice, and may your meditation Sadhana lead you to a life filled with profound peace and self-awareness.",
                image: conclusionBulb,
              },
            },
          ],
        },
        {
          title: "Mantra Sadhana",
          thumbnail: sadhnaType3,
          desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to Balance the chakras and achieve heightened spiritual awakening.",
          slug: "/activities/sadhna/mantra-sadhna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Mantra Sadhana",
                desc: "Mantra Sadhana, an ancient spiritual practice, harnesses the power of sacred sounds or phrases to invoke positive energies and spiritual growth. Rooted in various religious and mystical traditions, mantra chanting has been regarded as a potent tool for self-realization and inner transformation. Mantras are sacred syllables, words, or phrases with significant spiritual energy and vibrational frequencies. They are often derived from ancient scriptures and are believed to embody divine powers and deities.",
                image: mantraSadhnaHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "The Procedure of Mantra Sadhana:",
                image: mantraSadhnaProcedure,
                list: [
                  {
                    subtitle: "Selection of the Mantra: ",
                    desc: "Choose a mantra that resonates with your intentions and spiritual goals. Mantras can be specific to particular deities or have universal themes like peace, love, or enlightenment. Seek guidance from a knowledgeable spiritual mentor or consult scriptures for appropriate mantras.",
                  },
                  {
                    subtitle: "Purification: ",
                    desc: "Cleanse yourself physically and mentally before beginning Mantra Sadhana. A bath or ablution can purify the body, while meditation or deep breathing helps clear the mind of distractions.",
                  },
                  {
                    subtitle: "Establish a Sacred Space: ",
                    desc: "Find a serene and quiet space for your practice. Create an altar or sacred spot with items like candles, incense, or images of deities, which symbolize spiritual devotion.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: mantraSadhnas,
                list: [
                  {
                    subtitle: "Set Intentions: ",
                    desc: "Before chanting the mantra, set your intentions. Whether seeking inner peace, healing, or spiritual connection, focus your mind on the purpose of your practice.",
                  },
                  {
                    subtitle: "Japa (Chanting): ",
                    desc: "Sit comfortably meditatively and begin chanting the mantra. You can use a mala (prayer beads) to keep track of the repetitions. Chant with devotion and concentration, allowing the sound to penetrate your being.",
                  },
                  {
                    subtitle: "Regular Practice: ",
                    desc: "Consistency is key in Mantra Sadhana. Aim to practice daily, dedicating a specific time to your chanting. Gradually increase the duration and repetitions as your practice deepens.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Mantra Sadhana: ",
                list: [
                  {
                    subtitle: "Spiritual Connection: ",
                    desc: "Mantra Sadhana creates a profound connection with the divine, helping practitioners feel closer to their chosen deities or the higher power they resonate with..",
                  },
                  {
                    subtitle: "Stress Reduction: ",
                    desc: "Chanting mantras induces relaxation and tranquillity, reducing stress and anxiety.",
                  },
                  {
                    subtitle: "Mental Clarity: ",
                    desc: "Regular practice sharpens focus and clarity, improving decision-making and problem-solving abilities.",
                  },
                  {
                    subtitle: "Emotional Healing: ",
                    desc: "Mantras can facilitate healing by releasing suppressed emotions and promoting a positive mindset.",
                  },
                  {
                    subtitle: "Increased Energy: ",
                    desc: "Mantra chanting generates a positive energy flow, revitalizing the body and mind.",
                  },
                  {
                    subtitle: "Protection and Blessings: ",
                    desc: "Certain mantras are believed to offer protection from negative influences and attract blessings.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Potential Complications and Precautions:",
                desc: "While Mantra Sadhana can be a transformative practice, it is essential to approach it with care and respect:",
                image: precautions,
                list: [
                  {
                    subtitle: "Pronunciation: ",
                    desc: "Incorrect pronunciation of mantras might yield different results. Seek guidance from an experienced teacher to ensure accuracy.",
                  },
                  {
                    subtitle: "Intentions and Humility: ",
                    desc: "Practice with pure intentions and humility, avoiding ego-driven desires for power or control.",
                  },
                  {
                    subtitle: "Overexertion: ",
                    desc: "Chanting excessively without proper guidance can lead to physical strain or vocal issues.",
                  },
                  {
                    subtitle: "Respect for Traditions: ",
                    desc: "When using mantras from specific traditions, respecting and understanding their cultural and religious significance is essential.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Mantra Sadhana is a sacred journey that allows individuals to tap into the powerful energies of divine vibrations. Through rhythmic chanting and devotion, practitioners can unlock the potential within, leading to spiritual growth, emotional healing, and a deeper connection with the divine. To embark on this transformative path, choose a mantra that resonates with your heart, practice with sincerity, and seek guidance from experienced mentors. Embrace Mantra Sadhana, and may the vibrations of your chants resonate throughout your being, leading you to higher states of consciousness and profound inner peace.",
                image: conclusionBulb,
              },
            },
          ],
        },
        {
          title: "Japa Sadhana",
          thumbnail: sadhnaType4,
          desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath, observing thoughts and sensations without attachment or judgment. Cultivate mindfulness into actual reality.",
          slug: "/activities/sadhna/japa-sadhna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Japa Sadhana",
                desc: "Japa Sadhana, an ancient spiritual practice, involves continuously repeating a sacred mantra, name, or prayer to connect with the divine and attain higher states of consciousness. Rooted in various religious and spiritual traditions, Japa Sadhana is a powerful tool for self-realization and inner transformation. Japa Sadhana centers on the meditative repetition of a mantra, divine name, or prayer. The chosen words carry spiritual vibrations, and the continuous repetition helps to focus the mind, purify thoughts, and invoke the divine presence within oneself.",
                image: japaSadhnaHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "The Procedure of Japa Sadhana:",
                image: japaSadhnaProcedure,
                list: [
                  {
                    subtitle: "Selection of the Mantra: ",
                    desc: "Choose a mantra or divine name that resonates with your spiritual inclination. It can be a single word or a more extended prayer. Seek guidance from a spiritual teacher or refer to sacred texts for an appropriate mantra.",
                  },
                  {
                    subtitle: "Setting the Intention: ",
                    desc: "Establish a clear intention for your practice before commencing Japa Sadhana. It could be personal growth, peace, healing, or spiritual insight. Connect with the purpose of your Sadhana.",
                  },
                  {
                    subtitle: "Create a Sacred Space: ",
                    desc: "Find a peaceful and undisturbed area for your Japa Sadhana. You can create a small altar with symbols of divinity, candles, or incense to set the ambiance.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: japaSadhnas,
                list: [
                  {
                    subtitle: "Sitting Posture: ",
                    desc: "Sit in a comfortable and meditative posture, with your spine straight and shoulders relaxed. You can sit on a cushion or chair if you are alert and relaxed.",
                  },
                  {
                    subtitle: "Begin Repetition: ",
                    desc: "Close your eyes and take a few deep breaths to center yourself. Then, start chanting the chosen mantra or name with focus and devotion. Use a mala (prayer beads) to keep track of the repetitions.",
                  },
                  {
                    subtitle: "Steady Practice: ",
                    desc: "Consistency is vital in Japa Sadhana. Set aside a dedicated time each day to practice, gradually increasing the duration and repetitions as you progress.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Japa Sadhana: ",
                list: [
                  {
                    subtitle: "Mental Clarity: ",
                    desc: "Japa Sadhana calms the mind and reduces mental chatter, increasing clarity and focus in daily life.",
                  },
                  {
                    subtitle: "Emotional Healing: ",
                    desc: "The meditative repetition of a mantra helps release emotional blockages, promoting healing and inner peace.",
                  },
                  {
                    subtitle: "Spiritual Connection: ",
                    desc: "Japa Sadhana deepens the connection with the divine and aids in experiencing profound spiritual insights.",
                  },
                  {
                    subtitle: "Stress Reduction: ",
                    desc: "Regular practice of Japa Sadhana induces relaxation, reducing stress and anxiety.",
                  },
                  {
                    subtitle: "Self-Discovery: ",
                    desc: "The continuous repetition of a mantra allows practitioners to delve into their inner selves, leading to self-discovery and self-awareness.",
                  },
                  {
                    subtitle: "Cultivation of Virtues: ",
                    desc: "Japa Sadhana instills positive qualities like patience, perseverance, and devotion.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Potential Complications and Precautions:",
                desc: "Although Japa Sadhana is generally safe and beneficial, it is essential to approach it with care:",
                image: precautions,
                list: [
                  {
                    subtitle: "Correct Pronunciation: ",
                    desc: "Proper pronunciation of the mantra is crucial to harness its full spiritual power. Seek guidance from a knowledgeable teacher to ensure accuracy.",
                  },
                  {
                    subtitle: "Ego Inflation: ",
                    desc: "Japa Sadhana should be practiced with humility and sincerity, avoiding ego-driven desires for recognition or powers.",
                  },
                  {
                    subtitle: "Mental Fatigue: ",
                    desc: "Excessive repetition without proper guidance can lead to mental fatigue or exhaustion.",
                  },
                  {
                    subtitle: "Meaningful Repetition: ",
                    desc: "Understand the meaning and significance of the mantra or name you are chanting to imbue your practice with deep intent.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Japa Sadhana is a sacred path that enables practitioners to connect with the divine and unlock the transformative power within. Meditative repetition can attain mental clarity, emotional healing, and spiritual growth. To begin Japa Sadhana, select a mantra that resonates with your heart, set a clear intention, and practice with sincerity and consistency. Embrace this ancient practice, and may your Japa Sadhana journey lead you to profound inner peace and spiritual fulfillment.",
                image: conclusionBulb,
              },
            },
          ],
        },
        {
          title: "Bhakti Sadhana",
          thumbnail: sadhnaType5,
          desc: "Activating one's consciousness. Spiritual meditation involves bonding with a higher conscience. Highly beneficial to those seeking spiritual growth and oneness with the supreme self.",
          slug: "/activities/sadhna/bhakti-sadhna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Bhakti Sadhana",
                desc: "Bhakti Sadhana, the practice of devotion, is a sacred journey that involves surrendering oneself to the divine with love and unwavering faith. Rooted in various religious and spiritual traditions, Bhakti Sadhana is a powerful means to transcend the ego, experience divine love, and attain spiritual liberation. Bhakti, meaning devotion, is the foundation of Bhakti Sadhana. It is a deep and heartfelt love for the divine, whether conceptualized as a personal deity, formless energy, or an all-pervading consciousness.",
                image: bhaktiSadhnaHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "The Procedure of Bhakti Sadhana: ",
                image: bhaktiSadhnaProcedure,
                list: [
                  {
                    subtitle: "Choosing a Form of the Divine: ",
                    desc: "Select a form of the divine that resonates with your heart and aligns with your spiritual beliefs. It can be a specific deity from your tradition or a universal concept of divine love.",
                  },
                  {
                    subtitle: "Setting Up a Sacred Space: ",
                    desc: "Create an altar or sacred space in your home to offer your prayers and devotion. Decorate it with images, idols, or symbols representing the form of the divine you connect with.",
                  },
                  {
                    subtitle: "Daily Prayers and Offerings: ",
                    desc: "Dedicate a specific time each day to offer prayers, devotional songs, or hymns to the divine. You can also deliver flowers, incense, or food to symbolize your love and gratitude.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: bhaktiSadhnas,
                list: [
                  {
                    subtitle: "Chanting and Kirtan: ",
                    desc: "Engage in chanting the divine names or singing kirtans (devotional songs) that glorify the holy. Let the melodies uplift your soul and immerse yourself in the sweetness of devotion.",
                  },
                  {
                    subtitle: "Reading Sacred Scriptures: ",
                    desc: "Spend time reading and reflecting on sacred texts and stories that inspire devotion and strengthen your connection with the divine.",
                  },
                  {
                    subtitle: "Selfless Service: ",
                    desc: "Bhakti Sadhana involves selfless service to the divine, often expressed through acts of kindness and compassion towards all beings.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Bhakti Sadhana: ",
                list: [
                  {
                    subtitle: "Divine Connection: ",
                    desc: "Bhakti Sadhana fosters a deep and intimate connection with the divine, allowing practitioners to experience a sense of oneness and divine love.",
                  },
                  {
                    subtitle: "Inner Peace: ",
                    desc: "Devotion and surrender bring inner peace and tranquillity, alleviating stress and anxiety.",
                  },
                  {
                    subtitle: "Emotional Healing: ",
                    desc: "Bhakti Sadhana helps heal emotional wounds by offering solace and comfort through the embrace of divine love.",
                  },
                  {
                    subtitle: "Ego Transcendence: ",
                    desc: "By surrendering the ego to the divine, Bhakti Sadhana facilitates ego transcendence, leading to spiritual growth.",
                  },
                  {
                    subtitle: "Compassion and Empathy: ",
                    desc: "Devotion cultivates compassion, empathy, and selflessness towards all living beings.",
                  },
                  {
                    subtitle: "Joy and Bliss: ",
                    desc: "Bhakti Sadhana fills the heart with joy and bliss, elevating one's consciousness.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Potential Complications and Precautions:",
                desc: "While Bhakti Sadhana is a beautiful and transformative practice, it is essential to be mindful of specific considerations:",
                image: precautions,
                list: [
                  {
                    subtitle: "Avoiding Ritualism: ",
                    desc: "Bhakti Sadhana should not become a mechanical ritual. Embrace it with sincerity, love, and a genuine heart.",
                  },
                  {
                    subtitle: "Balanced Approach: ",
                    desc: "Emphasize love and devotion but maintain a balanced perspective, incorporating other aspects of spiritual growth, such as self-inquiry and self-discipline.",
                  },
                  {
                    subtitle: "Respect for Diversity: ",
                    desc: "Embrace the diversity of religious and spiritual paths, acknowledging that different individuals may have unique ways of expressing their devotion.",
                  },
                  {
                    subtitle: "Avoiding Dogmatism: ",
                    desc: "Avoid rigid beliefs and dogmas, staying open to the universality of divine love that transcends boundaries and labels.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Bhakti Sadhana is a sacred journey of devotion, love, and surrender to the divine. By engaging in daily prayers, devotional practices, and selfless service, practitioners can experience a profound connection with the heavenly, inner peace, and spiritual growth. To embark on this transformative path, choose a form of the divine that resonates with your heart, practice with sincerity and love, and stay open to the limitless power of Bhakti Sadhana. May your journey of devotion lead you to a life filled with divine love, compassion, and spiritual liberation.",
                image: conclusionBulb,
              },
            },
          ],
        },
        {
          title: "Kundalini Sadhana",
          thumbnail: sadhnaType6,
          desc: "Walking slowly and attentively, cultivating awareness of the present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquillity.",
          slug: "/activities/sadhna/kundalini-sadhna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Kundalini Sadhana",
                desc: "Kundalini Sadhana is an ancient spiritual practice that awakens the dormant energy residing at the base of the spine, known as Kundalini. This powerful energy, often depicted as a coiled serpent, holds immense transformative potential and can lead the practitioner toward spiritual awakening and self-realization. ",
                image: kundaliniSadhnaHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "The Procedure of Kundalini Sadhana: ",
                image: kundaliniSadhnaProcedure,
                list: [
                  {
                    subtitle: "Preparation: ",
                    desc: "Before beginning Kundalini Sadhana, it is essential to prepare the body and mind. Regular physical exercises, breathing techniques (pranayama), and meditation help to purify the system and create a conducive environment for Kundalini awakening.",
                  },
                  {
                    subtitle: "Kundalini Activation: ",
                    desc: "The practitioner usually starts with guided meditation and chanting to connect with the divine energy within. Specific mantras and visualizations awaken the dormant energy, drawing it upwards through the central channel (Sushumna Nadi).",
                  },
                  {
                    subtitle: "Asanas: ",
                    desc: "Certain yoga poses stimulate and balance the chakras, the energy centers in the body. This ensures the smooth flow of Kundalini energy through the spine.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: kundaliniSadhnas,
                list: [
                  {
                    subtitle: "Pranayama: ",
                    desc: "Controlled breathing techniques help control the prana (life force energy) and direct it towards Kundalini's awakening.",
                  },
                  {
                    subtitle: "Meditation: ",
                    desc: "Regular meditation is a fundamental aspect of Kundalini Sadhana. It helps calm the mind, reduce distractions, and deepen the connection with the inner self.",
                  },
                  {
                    subtitle: "Guru Guidance: ",
                    desc: "It is highly recommended to practice Kundalini Sadhana under the guidance of an experienced guru or teacher. Awakening Kundalini is potent and should be approached with caution and care.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Kundalini Sadhana: ",
                list: [
                  {
                    subtitle: "Spiritual Awakening: ",
                    desc: "The primary goal of Kundalini Sadhana is to achieve spiritual awakening and self-realization. As Kundalini energy rises, it cleanses and purifies the chakras, leading to higher states of consciousness.",
                  },
                  {
                    subtitle: "Enhanced Awareness: ",
                    desc: "Practitioners often report heightened awareness and increased clarity and intuition.",
                  },
                  {
                    subtitle: "Emotional Healing: ",
                    desc: "Kundalini Sadhana can help release deep-seated emotional blockages, facilitating emotional healing and balance.",
                  },
                  {
                    subtitle: "Physical Well-being: ",
                    desc: "The practice involves yoga and meditation, contributing to physical health, flexibility, and overall well-being.",
                  },
                  {
                    subtitle: "Increased Creativity: ",
                    desc: "Kundalini's awakening is associated with enhanced creative abilities and a broader perspective on life.",
                  },
                  {
                    subtitle: "Inner Peace: ",
                    desc: "Regular practice of Kundalini Sadhana brings inner peace, even amidst life's challenges.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Potential Complications and Precautions:",
                desc: "Kundalini's awakening is a profound process that can change an individual's life significantly. However, it is crucial to approach this practice with caution and awareness of potential complications:",
                image: precautions,
                list: [
                  {
                    subtitle: "Overwhelming Experiences: ",
                    desc: "Some practitioners may encounter overwhelming physical, emotional, or psychic experiences during Kundalini's awakening. These experiences can be intense and challenging to handle.",
                  },
                  {
                    subtitle: "Unpreparedness: ",
                    desc: "Without proper preparation and guidance, the sudden awakening of Kundalini can lead to imbalances and difficulties in coping with daily life.",
                  },
                  {
                    subtitle: "Physical Discomfort: ",
                    desc: "Kundalini energy, when awakened, can cause physical discomfort and even lead to specific health issues if not channelled correctly.",
                  },
                  {
                    subtitle: "Mental Instability: ",
                    desc: "In some cases, improper Kundalini awakening may result in mental instability or emotional turmoil.",
                  },
                  {
                    subtitle: "Ego Dissolution: ",
                    desc: "Kundalini awakening can challenge one's ego, creating temporary confusion or loss of identity.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Kundalini Sadhana is a profound spiritual practice with immense personal growth and transformation potential. While its benefits are significant, practitioners must approach it with caution, preparation, and proper guidance. Kundalini's awakening is not to be taken lightly, as it can profoundly affect an individual's life's physical, emotional, and spiritual aspects. With the right approach and mindset, Kundalini Sadhana can be a transformative journey toward self-discovery and spiritual enlightenment.",
                image: conclusionBulb,
              },
            },
          ],
        },
        {
          title: "Seva Sadhana",
          thumbnail: sadhnaType7,
          desc: "Walking slowly and attentively, cultivating awareness of the present. Unlike seated meditation, it will enable individuals to engage their bodies and minds while maintaining tranquillity.",
          slug: "/activities/sadhna/seva-sadhna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Seva Sadhana",
                desc: "Seva Sadhna, also known as selfless or voluntary service, is a noble practice deeply ingrained in various spiritual and cultural traditions worldwide. It involves dedicating oneself to helping others without expecting anything in return. Seva Sadhna is not just an act of philanthropy; it is a profound spiritual practice that can lead to personal growth and a deeper connection with humanity. Seva Sadhna is rooted in the principle of selflessness and compassion. 'Seva' comes from Sanskrit, meaning service, and 'Sadhna' refers to a spiritual practice or discipline.",
                image: sevaSadhnaHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "The Procedure of Seva Sadhana: ",
                image: sevaSadhnaProcedure,
                list: [
                  {
                    subtitle: "Identify the Cause: ",
                    desc: "The first step is identifying a cause or a group of people in need. It could range from supporting underprivileged children and the elderly to providing food, shelter, or healthcare to the marginalized.",
                  },
                  {
                    subtitle: "Volunteering: ",
                    desc: "Once the cause is identified, individuals can volunteer their time, skills, or resources to contribute to the well-being of those in need.",
                  },
                  {
                    subtitle: "Selfless Giving: ",
                    desc: "Seva Sadhna involves giving without expecting reward or recognition. The focus is on serving others with a pure heart and genuine compassion.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: sevaSadhnas,
                list: [
                  {
                    subtitle: "Regular Engagement: ",
                    desc: "The practice of Seva Sadhna is most effective when done regularly and consistently. It is not a one-time act but a continuous commitment to service.",
                  },
                  {
                    subtitle: "Mindful Presence: ",
                    desc: "While engaging in Seva, practitioners must be fully present and mindful of their actions and intentions.",
                  },
                  {
                    subtitle: "Humility and Respect: ",
                    desc: "Practitioners approach Seva Sadhna with humility and respect for the dignity and worth of the individuals they serve.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Seva Sadhana: ",
                list: [
                  {
                    subtitle: "Personal Fulfillment: ",
                    desc: "Engaging in selfless service brings a deep sense of fulfillment and purpose, enhancing the practitioner's overall well-being.",
                  },
                  {
                    subtitle: "Cultivation of Empathy: ",
                    desc: "By directly interacting with those in need, Seva Sadhna helps cultivate empathy and a deeper understanding of human struggles.",
                  },
                  {
                    subtitle: "Inner Transformation: ",
                    desc: "Seva Sadhna promotes inner transformation, fostering compassion, kindness, and selflessness.",
                  },
                  {
                    subtitle: "Sense of Unity: ",
                    desc: "Through service, practitioners realize their interconnectedness with all living beings, fostering a sense of unity and oneness.",
                  },
                  {
                    subtitle: "Stress Reduction: ",
                    desc: "Volunteering and serving others have been shown to reduce stress and improve mental health.",
                  },
                  {
                    subtitle: "Positive Impact on Society: ",
                    desc: "Seva Sadhna contributes to building a more compassionate and caring society, fostering positive change and social cohesion.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Potential Complications and Precautions:",
                desc: "While Seva Sadhna is a noble practice, it is essential to approach it mindfully: ",
                image: precautions,
                list: [
                  {
                    subtitle: "Burnout: ",
                    desc: "Practitioners may risk burnout if they overextend themselves or neglect self-care while engaging in Seva Sadhna.",
                  },
                  {
                    subtitle: "Boundary Setting: ",
                    desc: "Healthy boundaries are crucial to ensure the practitioner's well-being is not compromised while serving others.",
                  },
                  {
                    subtitle: "Avoiding Ego Gratification: ",
                    desc: "The true essence of Seva Sadhna lies in selflessness. Practitioners must be vigilant to avoid seeking personal recognition or validation for their service.",
                  },
                  {
                    subtitle: "Sustainable Impact: ",
                    desc: "It is essential to ensure that the service provided is sustainable and has a lasting positive impact on the recipients.",
                  },
                  {
                    subtitle: "Equal Respect: ",
                    desc: "Practitioners must approach Seva Sadhna with equal respect for the dignity and autonomy of the individuals they serve.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Seva Sadhna is a powerful spiritual practice that goes beyond philanthropy and transforms the lives of both the giver and the receiver. By serving others selflessly, practitioners tap into the essence of humanity and experience a deeper connection with the world around them. The benefits of Seva Sadhna extend beyond personal fulfillment; they contribute to building a compassionate and caring society, fostering unity and positive change. However, practitioners must approach Seva Sadhna with mindfulness, ensuring their well-being and the sustainability of the service provided. Embracing Seva Sadhna as a way of life can lead to a profound spiritual journey and impact on the world.",
                image: conclusionBulb,
              },
            },
          ],
        },
        {
          title: "Nature Sadhana",
          thumbnail: sadhnaType8,
          desc: "Walking slowly and attentively, cultivating awareness of the present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquillity.",
          slug: "/activities/sadhna/nature-sadhna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Nature Sadhana",
                desc: "Nature Sadhna is a spiritual practice that involves cultivating a deep connection with nature and recognizing the inherent unity between humans and the natural world. It is a profound way of experiencing nature's beauty, wisdom, and harmony, leading to a greater sense of peace, purpose, and spiritual awakening. Nature Sadhna is based on the principle that humans are an integral part of nature, and by reconnecting with the natural world, we can rediscover our innate connection with all living beings. ",
                image: natureSadhnaHeader,
                variations: false,
                var: "",
              },
            },
            {
              component: RightProcedureList,
              data: {
                title: "The Procedure of Nature Sadhana: ",
                image: natureSadhnaProcedure,
                list: [
                  {
                    subtitle: "Mindful Observation: ",
                    desc: "Nature Sadhna begins with mindful observation of the natural world. This could be as simple as spending time in a park, sitting by a river, or walking through a forest.",
                  },
                  {
                    subtitle: "Connection with the Elements: ",
                    desc: "Practitioners consciously connect with the five elements of nature - earth, water, fire, air, and ether - and recognize their presence within themselves.",
                  },
                  {
                    subtitle: "Contemplative Practice: ",
                    desc: "In nature, practitioners engage in reflective practices like meditation, deep breathing, or silent reflection to enhance their connection with the environment.",
                  },
                ],
              },
            },
            {
              component: RightImageList2,
              data: {
                image: natureSadhnas,
                list: [
                  {
                    subtitle: "Gratitude and Reverence: ",
                    desc: "Nature Sadhna encourages practitioners to express gratitude and reverence for the abundance and beauty of the natural world.",
                  },
                  {
                    subtitle: "Communion with Plants and Animals: ",
                    desc: "Engaging in Nature Sadhna often involves direct rapport with plants and animals, fostering a sense of kinship and empathy.",
                  },
                  {
                    subtitle: "Eco-friendly Lifestyle: ",
                    desc: "Practitioners are encouraged to adopt an eco-friendly lifestyle, making conscious choices to protect and preserve the environment.",
                  },
                ],
              },
            },
            {
              component: LeftImageList3,
              data: {
                title: "Benefits of Nature Sadhana: ",
                list: [
                  {
                    subtitle: "Inner Peace and Stress Reduction: ",
                    desc: "Immersing oneself in nature can lead to inner peace and reduce stress and anxiety.",
                  },
                  {
                    subtitle: "Spiritual Awakening: ",
                    desc: "Nature Sadhna provides an opportunity for spiritual awakening and a deeper understanding of the interconnectedness of all life.",
                  },
                  {
                    subtitle: "Improved Mental Health: ",
                    desc: "Regular practice of Nature Sadhna is linked to improved mental health, including reduced depression and increased happiness.",
                  },
                  {
                    subtitle: "Physical Well-being: ",
                    desc: "Spending time in nature can boost physical health by reducing blood pressure and promoting overall well-being.",
                  },
                  {
                    subtitle: "Enhanced Creativity and Focus: ",
                    desc: "Nature Sadhna can stimulate creativity and enhance focus and productivity.",
                  },
                  {
                    subtitle: "Environmental Consciousness: ",
                    desc: "Practitioners of Nature Sadhna often become more conscious of their environmental impact and strive to adopt sustainable practices.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Potential Complications and Precautions:",
                desc: "While Nature Sadhna is generally safe and beneficial, some considerations should be considered: ",
                image: precautions,
                list: [
                  {
                    subtitle: "Respect for Wildlife: ",
                    desc: "When engaging with plants and animals in nature, respecting their space and not disturbing or harming them is essential.",
                  },
                  {
                    subtitle: "Wilderness Awareness: ",
                    desc: "Practitioners should be aware of potential risks in the wild, such as adverse weather conditions or encounters with wildlife.",
                  },
                  {
                    subtitle: "Sustainable Practices: ",
                    desc: "It is crucial to adopt sustainable practices and reduce our ecological footprint while engaging in Nature Sadhna.",
                  },
                  {
                    subtitle: "Allergies and Health Conditions: ",
                    desc: "Individuals with allergies or health conditions in outdoor environments should take necessary precautions.",
                  },
                ],
              },
            },
            {
              component: SubpagesConclusion,
              data: {
                title: "Conclusion: ",
                desc: "Nature Sadhna is a profound and accessible spiritual practice that allows individuals to connect with the natural world and rediscover their inherent oneness with all living beings. By immersing ourselves in nature, we gain insights into the beauty and wisdom of the environment, leading to personal growth, inner peace, and spiritual awakening. Nature Sadhna also fosters environmental consciousness and a profound responsibility toward protecting and preserving the earth. As we embrace Nature Sadhna, we embark on a transformative journey that nurtures our souls and renews our bond with the natural world, fostering harmony, balance, and reverence for all life.",
                image: conclusionBulb,
              },
            },
          ],
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
  },
];

export const brainExercise = {
  id: 1,
  name: "Brain Exercise",
  slug: BRAIN_EXERCISE,
  header: {
    title: [
      {
        color: false,
        text: "Nurturing mental health through ",
      },
      {
        color: true,
        text: "brain exercises",
      },
    ],
    desc: "Boost your mental health with our brain exercises program. These fun activities help your thinking and concentration. Join this journey to a sharper mind and more robust mental well-being.",
    image: brainExerciseHeader,
    alt: "Wleness - Nurturing mental health through Brain Exercises",
  },
  activities: {
    title: "Brain Games",
    desc: "Explore a range of brain-boosting exercises and activities, puzzles, techniques, and mental workouts tailored to enhance cognition and mental well-being, memory, focus, and overall brain health.",
    types: [
      {
        title: "The Turtle Hunter",
        buttonLink:
          "https://zv1y2i8p.play.gamezop.com/g/hfPOimYqY?_gl=1*jg57ya*_ga*MTgwMjE2MTc3Ny4xNjk2NTA4MTI5*_ga_2MDW41Z2GK*MTY5NjUwODEyOS4xLjEuMTY5NjUwODU5MS42MC4wLjA.",

        thumbnail: brainGameHunter,
        desc: "Welcome to Turtle Treasure Dash, an exciting adventure game where you control a brave and agile turtle on a quest to collect shimmering coins while navigating through a challenging obstacle course. Join our little hero on an epic journey through various terrains, from lush forests to treacherous caves and beyond, in search of precious treasure!",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Gold Chest Gambit",

        buttonLink:
          "https://zv1y2i8p.play.gamezop.com/g/B1MXhUFQke?_gl=1*bzevu1*_ga*MTgwMjE2MTc3Ny4xNjk2NTA4MTI5*_ga_2MDW41Z2GK*MTY5NjUwODEyOS4xLjEuMTY5NjUwODM4MS41Mi4wLjA.",
        thumbnail: brainGameGalaxy,
        desc: "In 'Gold Chest Gambit,' your smarts are your superpower. Your mission? Guide gold chests towards you using clever thinking. Solve tricky puzzles and plan your moves wisely as you unlock each chest. The more you progress, the tougher it gets. Are you up for the ultimate brain-teasing treasure hunt? Put your skills to the test and see if you can outsmart the challenges to claim the gold!",
        slug: "/",
        class: ["order-2", "order-1"],
      },
      {
        title: "The XO Rumble",
        buttonLink:
          "https://zv1y2i8p.play.gamezop.com/g/H1WmafkP9JQ?_gl=1*hxc13t*_ga*MTgwMjE2MTc3Ny4xNjk2NTA4MTI5*_ga_2MDW41Z2GK*MTY5NjUwODEyOS4xLjEuMTY5NjUwODIxNy42MC4wLjA.",

        thumbnail: brainGameTreasure,
        desc: "Prepare for an intense and strategic battle in 'XO Rumble,' the ultimate tic-tac-toe challenge. Engage in thrilling matches, outsmart your opponents, and claim your victory on the grid. Show off your wits, strategy, and tactical skills in this high-stakes game of Xs and Os.",
        slug: "/",
        class: ["order-1", "order-2"],
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

// Activity Yoga
export const activityYoga = {
  name: "Yoga",
  slug: "/activities/yoga",
  header: {
    title: [
      {
        color: false,
        text: "Exploring Mind Harmony through ",
      },
      {
        color: true,
        text: "Yoga",
      },
    ],
    desc: "Yoga is a path to feeling better in both your body and mind. Regular yoga makes you less stressed, more mindful, and balances your life. Start your journey with yoga for a refreshed body, calm mind, and a more harmonious life.",
    image: yogaHeader,
  },
  activities: {
    title: "Book Your Yoga Sessions",
    desc: "Let's embark on a journey to explore various types of yoga poses, guiding us toward inner harmony.",
    types: [
      {
        title: "Hatha Yoga",
        thumbnail: yoga__HathaYoga,
        desc: "Hatha yoga, rooted in ancient Indian traditions, blends asanas and pranayama for physical and mental well-being, emphasizing balance, alignment, and mindfulness.",
        slug: "/activities/yoga/hatha-yoga",
      },
      {
        title: "Ashtanga Yoga",
        thumbnail: yoga__AshtangaYoga,
        desc: "Dynamic Ashtanga yoga, rooted in ancient Indian traditions, combines poses with breath and movement, prioritizing strength, flexibility, stamina, guided by Tristhana principles for purification and inner stillness.",
        slug: "/activities/yoga/ashtanga-yoga",
      },
      {
        title: "Yoga for Weight Loss",
        thumbnail: yoga__WeightLoss,
        desc: "Yoga aids weight loss with systematic postures, breath control, and mindfulness. Vinyasa and Power Yoga burn calories, while mindfulness addresses emotional eating.",
      },
      {
        title: "Breathe and Mindfullness",
        thumbnail: yoga__MeditationAndMinfullness,
        desc: "Mindful breathing, essential to mindfulness, centers on conscious breath observation for present-moment stability, fostering calm awareness, enhancing clarity, reducing stress, and promoting mindfulness.",
      },
      {
        title: "Therapeutic yoga",
        thumbnail: yoga__TherapauticYoga,
        desc: "Therapeutic yoga blends yoga with medical science, addressing holistic health. Tailored to individual needs, it uses asanas, breathwork, and meditation for healing and well-being.",
        slug: "/activities/yoga/therapeutic-yoga",
      },
      {
        title: "Yoga for women",
        thumbnail: yoga__WomenYoga,
        desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
        slug: "/activities/yoga/yoga-for-women",
      },
      // {
      //   title: "Yoga For Thyroide",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga For Diabetes",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Hypertension",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for PCOS",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Pregnancy (Prenatal)",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Constipation",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for TB",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Arthritis",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Male Reproductive health",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Ashtama",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Skin health",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for tonsillitis",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Cervical Pain",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Yoga for Stress and anxiety",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "A session on Pranayama",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Talk on yogic lifestyle",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Talk on Prenatal care",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Talk on Sleep hygiene",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
      // {
      //   title: "Talk on Diet",
      //   thumbnail: yoga__WomenYoga,
      //   desc: "Transformative yoga for women addresses unique needs, with tailored sequences promoting strength, flexibility, balance, mindfulness, and relaxation for holistic well-being and empowerment.",
      //   slug: "/activities/yoga/yoga-for-women",
      // },
    ],
  },
};

// Activity Features Blocks
export const activityFeatures = [
  {
    name: "Available Exercises",
    image: feature1,
  },
  {
    name: "Flexible Schedule",
    image: feature2,
  },
  {
    name: "Proper Demonstration",
    image: feature3,
  },
];

export const blogsData = [
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail1,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail2,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail3,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail4,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail5,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail6,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail5,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail6,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail3,
  },
];

// Home Page data
// Objectives
export const homeServices = [
  {
    title: "Therapy",
    desc: "Experience an empowering therapeutic journey where your voice is valued, your strengths are recognized, and you're continuously supported and celebrated.",
    image: homeTherapy,
    slug: "/services/therapy",
  },
  {
    title: "Yoga",
    desc: "Yoga is not just an exercise, it's a profound journey of self-discovery and holistic well-being. Immerse yourself in an unique yoga experience designed to nourish your mind, body, and spirit.",
    image: homeYoga,
    slug: "/activities/yoga",
  },
  {
    title: "Lifestyle Coaching",
    desc: "A personalized roadmap to help you achieve balance, fulfillment, and lasting well-being.  Going beyond traditional fitness routines, addressing all aspects of life to create a balanced lifestyle. ",
    image: homeLifestyleCoaching,
    slug: "/life-coaching",
  },
  {
    title: "Executive Coaching",
    desc: "Executive coaching elevates leadership, empowers high-level staff, and drives positive results. It maximizes potential, navigates the challenges, and enhances performance.",
    image: homeExecutiveCoaching,
    slug: "/executive-coaching",
  },
  {
    title: "Corporate Wellbeing",
    desc: "Corporate mental wellness services focus on employee well-being, tackling challenges, reducing stress, and promoting emotional resilience at work.",
    image: homeCorporate,
    slug: "/corporate-wellbeing",
  },
  {
    title: "Music Healing",
    desc: "Music Healing addresses diverse needs through music. Therapists use musical interventions like listening, creating, singing, and playing instruments.",
    image: homeMusicalTherapy,
    slug: "/services/music-healing",
  },
  {
    title: "Meditation",
    desc: "Meditation fosters mental wellness by focusing the mind and reducing cluttered thoughts. It enhances clarity, relaxation, and self-awareness.",
    image: homeMeditation,
    slug: "/activities/meditation",
  },
  {
    title: "Internship",
    desc: "Unlock career opportunities and gain experience through our internship programs. Explore placements that align with your academic and professional goals, skills, and options.",
    image: homeInternship,
    slug: "/internship",
  },
  {
    title: "Self Care",
    desc: "Prioritize your well-being with our self-care solutions. We offer personalized self-care plans and resources to help you nurture your physical, mental, and emotional health.",
    image: homeSelfcare,
    slug: "/user/dashboard",
  },
  {
    title: "Community",
    desc: "Prioritize your well-being with our self-care solutions. We offer personalized self-care plans & resources to help you nurture your physical, mental, and emotional health. ",
    image: homeSelfcare,
    slug: "/community",
  },
];
export const objectives = [
  {
    name: "Safe",
    image: iconSafe,
  },
  {
    name: "Secure",
    image: iconSecure,
  },
  {
    name: "Effective",
    image: iconEffective,
  },
  {
    name: "Easy Access",
    image: iconEasyAccess,
  },
  {
    name: "Community",
    image: iconCommunity,
  },
];

export const whyChooseUs = [
  {
    title: "Experience",
    image: homeExperienceIcon,
    desc: "Experience top therapists, the best online psychologists, coaches, and guides based on international standards for your health in the comfort of your home.",
    alt: "Experience Wleness",
  },
  {
    title: "Commitment",
    desc: "We provide personalised care from India's top counsellors per your needs at every step, from family counselling to behavioural therapy.",
    image: homeCommitmentIcon,
    alt: "The Wleness Commitment",
  },
  {
    title: "Facilities",
    desc: "Experience the convenience and comfort of state-of-the-art facilities anytime and anywhere at one platform for all your needs with Wleness.",
    image: homeFacilitiesIcon,
    alt: "Wleness Facilities",
  },
];

export const home_how_wleness_works = [
  {
    title: "Find Best Therapist in India",
    image: homeExperienceIcon,
    desc: "Explore different top therapist profiles to find the one who understands your concerns and can most emotionally support you.",
    alt: "Experience Wleness",
  },
  {
    title: "Book an Online Therapy Session",
    desc: "Meet your therapist from the comfort of your home online, and work together to achieve your goals and see the positive changes in your mental health.",
    image: homeCommitmentIcon,
    dark: true,
    alt: "The Wleness Commitment",
  },
  {
    title: "Facilities",
    desc: "Use our top facilities to make progress outside sessions with therapist-recommended self-care tools, community support, and more.",
    image: homeFacilitiesIcon,
    alt: "Wleness Facilities",
  },
];

export const statistics = [
  {
    value: "24/7",
    title: "Online Support",
    suffix: "",
  },
  {
    value: "50",
    title: "Experts",
    suffix: "+",
  },
  {
    value: "10",
    title: "Active Users",
    suffix: "k",
  },
  {
    value: "1",
    title: "Interested",
    suffix: "M+",
  },
];

// Life style coaching
export const lifecoching = [
  {
    title: "Clarity",
    image: lifeCoachingClarity,
    desc: "Life coaching clarifies your goals, dreams, and aspirations. It helps you see a clear path forward and set achievable objectives. ",
  },
  {
    title: "Motivation",
    desc: "Feeling stuck or lacking motivation? A life coach can reignite your passion and keep you accountable for your aspirations.",
    image: lifeCoachingMotivation,
  },
  {
    title: "Confidence",
    desc: "Fear of failure? It's a common roadblock. Life coaching equips you with the tools to face your fears & move forward boldly.",

    image: lifeCoachingConfidence,
  },
  {
    title: "Overcoming Fear",
    desc: "Fear of failure? It's a common roadblock. Life coaching provides the tools to face your fears & move forward boldly.",
    image: lifeCoachingOvercomingfear,
  },
];

export const wlenessLifeCoaching = [
  {
    name: "One to One Power Coaching",
    image: lifeCoaching1,
    alt: "One to One Power Coaching - Wleness",
    desc: "Our transformative approach offers tailored strategies and unwavering personal and professional growth support. With a dedicated life coach, unlock your fullest potential and achieve your goals – advancing your career, enhancing relationships, or overall life improvement.",
  },
  {
    name: "Empowerment Exchange",
    image: lifeCoaching2,
    alt: "Empowerment Exchange - Wleness",
    desc: "Explore the advantages of our Group Life Coaching offering. By joining our community of dedicated individuals, you'll receive expert guidance in pursuing personal growth. Achieve clarity, reach your goals, and experience a more enriching life journey with the help of our experienced coaches.",
  },
  {
    name: "360-degree evaluation",
    image: lifeCoaching3,
    alt: "360-degree evaluation with Wleness",
    desc: "Our comprehensive approach examines all facets of your life, providing a clear roadmap for growth. Our expert coaches will assess your strengths, identify areas for improvement, & work with you to set & achieve meaningful goals. Elevate every aspect of your life.",
  },
  {
    name: "Public Speaking",
    image: lifeCoachingPublicSpeaking,
    alt: "Public Speaking Guidance from Wleness",
    desc: "Our expert coaches provide personalized guidance, practical strategies, and confidence-building exercises, empowering you to communicate with impact. Transform anxiety into assurance and captivate any audience with newfound fluency and charisma.",
  },
  {
    name: "Leadership Development",
    image: lifeCoachingLeadershipDevelopment,
    alt: "Leadership Development from Wleness",
    desc: "Our expert coaches offer personalized strategies, using your strengths and addressing areas for growth. Gain invaluable insights, refine decision-making, and foster effective communication. Upgrade your leadership presence, empowering you to inspire and lead with authenticity.",
  },
  {
    name: "Interview Preparation",
    image: lifeCoachingInterviewPreparation,
    alt: "Interview Preparation guidance from Wleness",
    desc: "Our comprehensive approach examines all facets of your life, providing a clear roadmap for growth. Our expert coaches will assess your strengths, identify areas for improvement, & work with you to set & achieve meaningful goals. Elevate every aspect of your life.",
  },
];

export const home_service_banner = [
  {
    name: "Individual Counselling",
    description:
      "Get personalised plans from the best therapists and psychologists online to meet your unique needs.",
    slug: "/experts",
    icon: faUser,
  },
  {
    name: "Couple Counselling",
    description:
      "Enhancing relationships with emotionally focused therapy, one conversation at a time.",
    slug: "/services/couples-therapy",
    selected: true,
    icon: faUserGroup,
  },
  {
    name: "Family Counselling",
    description:
      "Overcome families issues with India's best therapist, improving communication for growth",
    slug: "/services/therapy",
    icon: faUsers,
  },
  {
    name: "Musical Healing",
    description:
      "Try music therapy to feel better emotionally and stay positive every day.",
    slug: "/services/music-healing",
    icon: faMusic,
  },
];

export const home_why_wleness = [
  {
    name: "Individual Counselling",
    description: "Individual counselling provides personalized support.",
    slug: "/therapy",
    icon: faUser,
  },
  {
    name: "Couple Counselling",
    description: "Every couple, at one point or another, faces challenges.",
    slug: "/therapy",
    icon: faUser,
  },
  {
    name: "Family Counselling",
    description: "Family counselling plays a crucial role in promoting",
    slug: "/therapy",
    icon: faUser,
  },
];

export const home_services = [
  {
    title: ["Strengthen Mental Health", "and Wellness"],
    subtitle: "Therapy",
    image: homeThearpy,
    description:
      "Compassionate mental health support for your emotional healing and growth, just like a warm hug from your loved ones. Get the top therapists and counsellors near you—the best online consultations in India.",
    points: [
      "Guidance you can trust",
      "Personalised Mental Wellness",
      "Strategies to feel better",
      "Evidence-based approaches",
    ],
    button: {
      text: "Book Now",
      slug: "/services/therapy",
    },
    ltr: true,
  },
  {
    title: ["Discover Your ", "Best Self"],
    subtitle: "Lifestyle Coaching",
    image: homeLifeCoaching,
    description:
      "Transform your personal development with guidance and support through ICF-certified life coaching services. Find a life coach online at your fingertips—top life coaching guidance in India. Start your journey towards a healthier, happier life!",
    points: [
      "Goal oriented approach",
      "Customised Life Coach Strategies",
      "Positive thinking cultivation",
      "Skills for life success",
    ],
    button: {
      text: "Get Started",
      slug: "/life-coaching",
    },
    ltr: false,
  },
  {
    title: ["Lead with ", "Impact"],
    subtitle: "Executive Coaching",
    image: homeExecutiveCoachingImage,
    description:
      "Unlock your full potential and enhance your leadership abilities with personalised executive coaching. Get the best business and executive coaching from the comfort of your home. Start on a journey with certified leadership coaches towards growth and success!",
    points: [
      "Result-oriented leadership coaching",
      "Gain a solid executive presence",
      "Master time management",
      "Visible Career Progression",
    ],
    button: {
      text: "Get Started",
      slug: "/executive-coaching",
    },
    ltr: true,
  },
  {
    title: ["Get the best service for", " your Team!"],
    subtitle: "Corporate",
    image: homeCorporateImage,
    description:
      "Wleness provides the best employee health and well-being services for your team. Unlock increased productivity, job satisfaction, and outcomes. Associate with your company and get mental health support for all employees. Take your corporate well-being to the next level with Wleness",
    points: [
      "Best employee health and well-being",
      "Increased productivity",
      "Job Satisfaction",
      "Get mental health support",
    ],
    button: {
      text: "Get Started",
      slug: "/corporate-wellbeing",
    },
    ltr: false,
  },
];

export const homeCertified = [
  {
    title: "IAF",
    image: logoIAF,
    size: "scale-105",
    dark: false,
    description:
      "We are certified by the IAF. We meet the standards for excellence and quality in our services. You can trust that we're recognised for our expertise and commitment to high standards",
  },
  {
    title: "Startup India",
    image: startUpIndiaLogo,
    size: "scale-125",
    dark: true,
    description:
      "We're certified by Startup India. Our commitment to innovation and entrepreneurship confirms our dedication to driving growth and contributing to India's startup ecosystem.",
  },
  {
    title: "ISO",
    image: logoISO,
    size: "scale-125",
    dark: false,
    description:
      "We're ISO certified. We meet international standards for quality and efficiency in our operations. Our products or services meet customer requirements and regulatory standards.",
  },
];
