import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// Data
import { activities, brainExercise } from "./data";
import { coachesData } from "./data/coach";
import { lifestyleCoaches } from "./data/life-coaching";
import { therapiesData } from "./data/issues";
import useToken from "./utils/useToken";
import xmlFile from "/sitemap.xml";
import robotsFile from "/robots.txt";
// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/icon/ScrollToTop";
import SignupLayout from "./components/layout/SignupLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import TabSwitcher from "./components/SwitchTab";
import Error404 from "./components/Error404";
import UserDashboardLayout from "./components/layout/UserDashboardLayout";
import UserDashboardHistory from "./components/UserDashboardHistory";
import WhatsappChat from "./components/WhatsappChat";
import Confirmation from "./components/Modals/Confirmation";
import Success from "./components/RedirectPages/Success";
// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Experts from "./pages/Experts";
import Internship from "./pages/Internship";
import Activities from "./pages/Activities";
import Blogs from "./pages/Blogs";
import ActivityLayout from "./pages/Activities/ActivityLayout";
import BrainExercise from "./pages/Activities/BrainExercise";
import CouplesTherapy from "./pages/Services/CouplesTherapy";
import MusicalTherapy from "./pages/Services/MusicalTherapy";
import ActivitySubPageLayout from "./pages/Activities/ActivitySubPageLayout";
import CampusAmbassador from "./pages/CampusAmbassador";
import Psychiatrist from "./pages/Services/Psychiatrist";
import Therapy from "./pages/Services/Therapy";
import ExpertsDetails from "./pages/Experts/ExpertsDetails";
import Appointment from "./pages/Appointment";
import Faqs from "./pages/Faqs";
import Community from "./pages/Community";
import IssueSubPageLayout from "./pages/Issues/IssueSubPageLayout";
import DoctorDashboard from "./pages/Dashboard/DoctorDashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import Corporate from "./pages/Corporate";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import TermsAndConditions from "./pages/Policies/TermsAndConditions";
import ContactUs from "./pages/ContactUs";
import LifeCoching from "./pages/coching/LifeCoching";
import ExecutiveCoaching from "./pages/Coaches";
import RoutineCare from "./pages/Dashboard/RoutineCare";
import TherapistJoining from "./pages/JoinUs/TherapistJoining";
import PsychiatristJoining from "./pages/JoinUs/PsychiatristJoining";
import Chat from "./pages/Community/Chat";
import BlogDetails from "./pages/Blogs/BlogDetails";
import Cancellation from "./pages/Policies/Cancellation";
import StudentsPolicy from "./pages/Policies/StudentsPolicy";
import ExpertProfile from "./pages/Experts/ExpertProfile";
import Gauth from "./pages/Authentication/Gauth";
import FacebookAuth from "./pages/Authentication/FacebookAuth";
import Career from "./pages/Career";
import Consent from "./pages/Policies/Consent";
import CoachSubpage from "./pages/Coaches/CoachSubpage";
import ExpertsLogin from "./pages/Authentication/ExpertsLogin";
import ForgotPassword from "./pages/Authentication/Forget";
import UserProfile from "./pages/Dashboard/UserProfile";
import DoctorsPayment from "./pages/Dashboard/DoctorsPayment";
import MusicalHealingTracks from "./pages/Services/MusicalHealingTracks";
import MainAssessment from "./pages/Assessment";
import AssessmentQuestions from "./pages/Assessment/AssessmentQuestions";
import AssessmentResult from "./pages/Assessment/AssessmentResult";
import YogaPage from "./pages/Activities/YogaPage";
import YogaBooking from "./pages/Appointment/YogaBooking";
import YogaSubscription from "./pages/Activities/YogaSubscription";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";
import {
  ABOUT_US,
  ACTIVITIES,
  ALL_EXPERTS,
  ASSESSMENT,
  ASSESSMENT_RESULT,
  ASSESSMENT_SLUG,
  BLOGS,
  BLOGS_CATEGORY,
  BLOGS_DETAILS,
  CAMPUS_AMBASSADOR,
  CANCELLATION,
  CAREER,
  COMMUNITY,
  CONSENT,
  CONTACT_US,
  CORPORATE_WELLBEING,
  COUPLES_THERAPY,
  EXECUTIVE_COACHING,
  EXPERTS,
  EXPERTS_BOOKING,
  EXPERTS_LOGIN,
  EXPERTS_PROFILE,
  EXPERT_DASHBOARD,
  EXPERT_DASHBOARD_PAYMENT,
  FAQ,
  FORGOT_PASSWORD,
  HOME,
  INTERNSHIP,
  LIFESTYLE_COACHING,
  LOGIN,
  MUSICAL_HEALING,
  MUSICAL_HEALING_TRACKS,
  PRIVACY_POLICY,
  PSYCHIATRIST,
  PSYCHIATRIST_JOIN,
  SIGNUP,
  STUDENTS_POLICY,
  SUCCESS,
  TERMS_AND_CONDITIONS,
  THANKS_YOU,
  THERAPIST_JOIN,
  THERAPY,
  USER_DASHBOARD,
  USER_HISTORY,
  USER_PROFILE,
  USER_ROUTINE_CARE,
  YOGA,
  YOGA_BOOKING,
  YOGA_FOR_99,
} from "./data/urls";
import SelfAssessmentButton from "./components/Buttons/SelfAssessmentButton";
import BlogsCategories from "./pages/Blogs/BlogsCategories";

function App() {
  const { token, removeToken, setToken } = useToken();
  // Disable right click on website
  function handleContextMenu(e) {
    e.preventDefault(); // prevents the default right-click menu from appearing
  }
  // add the event listener to the component's root element
  const rootElement = document.getElementById("root");
  // rootElement.addEventListener("contextmenu", handleContextMenu);

  // Serve xml file
  axios.get(xmlFile, {
    "Content-Type": "application/xml; charset=utf-8",
  });

  // Serve robots.txt file
  axios.get(robotsFile, {
    "Content-Type": "application/text; charset=utf-8",
  });

  // Activity Subpages Routing - Yoga, Meditation, Sadhna
  const activitiesMenu = activities.map((value, index) => {
    return (
      <Route
        key={index}
        path={value.slug}
        element={
          <Layout
            children={
              <ActivityLayout
                name={value.name}
                header={value.header}
                activities={value.activities}
                blogs={value.blogs}
              />
            }
          />
        }
      />
    );
  });

  // Activity Subpages Routing - Yoga subpages
  const activitiesInnerSubpages = activities.map((value) => {
    const innerSubPages = value.activities.types.map((key, i) => {
      return (
        <Route
          key={i}
          path={key.slug}
          element={
            <Layout children={<ActivitySubPageLayout data={key.sections} />} />
          }
        />
      );
    });

    return innerSubPages;
  });

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={HOME} element={<Layout children={<Home />} />} />
        <Route path={ABOUT_US} element={<Layout children={<AboutUs />} />} />
        <Route
          path={ASSESSMENT}
          element={<Layout children={<MainAssessment />} />}
        />
        <Route
          path={ASSESSMENT_SLUG}
          element={<Layout children={<AssessmentQuestions />} />}
        />
        <Route
          path={ASSESSMENT_RESULT}
          element={<Layout children={<AssessmentResult />} />}
        />

        <Route path="/gauth" element={<Layout children={<Gauth />} />} />

        <Route
          path="/facebook"
          element={<Layout children={<FacebookAuth />} />}
        />

        <Route
          path={PSYCHIATRIST}
          element={<Layout children={<Psychiatrist />} />}
        />
        <Route path={THERAPY} element={<Layout children={<Therapy />} />} />
        <Route
          path={COUPLES_THERAPY}
          element={<Layout children={<CouplesTherapy />} />}
        />
        <Route
          path={MUSICAL_HEALING}
          element={<Layout children={<MusicalTherapy />} />}
        />
        <Route
          path={MUSICAL_HEALING_TRACKS}
          element={<Layout children={<MusicalHealingTracks token={token} />} />}
        />
        <Route path={COMMUNITY} element={<Layout children={<Community />} />} />
        <Route path={EXPERTS} element={<Layout children={<Experts />} />} />
        <Route
          path={ALL_EXPERTS}
          element={<Layout children={<ExpertsDetails />} />}
        />
        <Route
          path={EXPERTS_PROFILE}
          element={<Layout children={<ExpertProfile />} />}
        />
        <Route
          path="/tab-switch"
          element={<Layout children={<TabSwitcher />} />}
        />
        <Route
          path={EXPERTS_BOOKING}
          element={<Layout children={<Appointment />} />}
        />
        <Route
          path={YOGA_BOOKING}
          element={<Layout children={<YogaBooking />} />}
        />
        <Route path={SUCCESS} element={<Layout children={<Success />} />} />

        {/* Therapies Subpages */}
        {therapiesData.map((value, index) => {
          return (
            <Route
              key={index}
              path={value.slug}
              element={
                <Layout
                  children={
                    <IssueSubPageLayout
                      header={value.header}
                      symptoms={value.symptoms}
                      doctors={value.doctors}
                      quote={value.quote}
                      approach={value.approach}
                    />
                  }
                />
              }
            />
          );
        })}
        <Route
          path={INTERNSHIP}
          element={<Layout children={<Internship />} />}
        />
        <Route
          path={ACTIVITIES}
          element={<Layout children={<Activities />} />}
        />

        {/* =========== Yoga =========== */}
        <Route path={YOGA} element={<Layout children={<YogaPage />} />} />
        <Route
          path={YOGA_FOR_99}
          element={<Layout children={<YogaSubscription />} />}
        />

        {/* Activity Subpages - Yoga, Meditation, Sadhna */}
        {activitiesMenu}
        {/* Inner pages of yoga, meditation and sadhna */}
        {activitiesInnerSubpages}
        <Route
          path={brainExercise.slug}
          element={<Layout children={<BrainExercise />} />}
        />

        {/* =========== Blogs =========== */}
        <Route
          path={brainExercise.slug}
          element={<Layout children={<BrainExercise />} />}
        />
        {/* This is comment for routes */}
        <Route path={BLOGS} element={<Layout children={<Blogs />} />} />
        <Route
          path={BLOGS_CATEGORY}
          element={<Layout children={<BlogsCategories />} />}
        />
        <Route
          path={BLOGS_DETAILS}
          element={<Layout children={<BlogDetails />} />}
        />
        <Route path={FAQ} element={<Layout children={<Faqs />} />} />
        <Route
          path={EXPERTS_LOGIN}
          element={
            <SignupLayout
              children={<ExpertsLogin setToken={setToken} token={token} />}
            />
          }
        />
        <Route
          path={EXPERT_DASHBOARD}
          element={
            <DashboardLayout children={<DoctorDashboard token={token} />} />
          }
        />
        <Route
          path={EXPERT_DASHBOARD_PAYMENT}
          element={
            <DashboardLayout children={<DoctorsPayment token={token} />} />
          }
        />
        <Route
          path={FORGOT_PASSWORD}
          element={
            <SignupLayout
              children={<ForgotPassword setToken={setToken} token={token} />}
            />
          }
        />
        <Route
          path={LOGIN}
          element={<LoginPage setToken={setToken} token={token} />}
        />
        <Route
          path={SIGNUP}
          element={<SignupPage setToken={setToken} token={token} />}
        />
        <Route
          path={USER_PROFILE}
          element={
            <UserDashboardLayout
              token={token}
              children={<UserProfile token={token} />}
            />
          }
        />
        <Route
          path={USER_DASHBOARD}
          element={
            <UserDashboardLayout
              token={token}
              children={<UserDashboard token={token} />}
            />
          }
        />
        <Route
          path={USER_HISTORY}
          element={
            <UserDashboardLayout
              token={token}
              children={<UserDashboardHistory token={token} />}
            />
          }
        />

        <Route path="*" element={<Error404 />} />
        <Route
          path="/community/chat"
          element={<DashboardLayout children={<Chat token={token} />} />}
        />
        <Route
          path={USER_ROUTINE_CARE}
          element={<DashboardLayout children={<RoutineCare token={token} />} />}
        />
        <Route
          path={CAMPUS_AMBASSADOR}
          element={<Layout children={<CampusAmbassador />} />}
        />
        <Route
          path={CORPORATE_WELLBEING}
          element={<Layout children={<Corporate />} />}
        />
        <Route
          path={THERAPIST_JOIN}
          element={<Layout children={<TherapistJoining />} />}
        />
        <Route
          path={PSYCHIATRIST_JOIN}
          element={<Layout children={<PsychiatristJoining />} />}
        />

        {/* Policies Pages */}
        <Route
          path={PRIVACY_POLICY}
          element={<Layout children={<PrivacyPolicy />} />}
        />
        <Route
          path={STUDENTS_POLICY}
          element={<Layout children={<StudentsPolicy />} />}
        />
        <Route
          path={CANCELLATION}
          element={<Layout children={<Cancellation />} />}
        />
        <Route path={CONSENT} element={<Layout children={<Consent />} />} />
        <Route
          path={TERMS_AND_CONDITIONS}
          element={<Layout children={<TermsAndConditions />} />}
        />
        <Route
          path={CONTACT_US}
          element={<Layout children={<ContactUs />} />}
        />
        <Route
          path={THANKS_YOU}
          element={<Layout children={<Confirmation />} />}
        />
        <Route path={CAREER} element={<Layout children={<Career />} />} />
        <Route
          path={LIFESTYLE_COACHING}
          element={<Layout children={<LifeCoching />} />}
        />
        <Route
          path={EXECUTIVE_COACHING}
          element={<Layout children={<ExecutiveCoaching />} />}
        />
        {coachesData.map((value, i) => {
          return (
            <Route
              key={i}
              path={value.slug}
              element={<Layout children={<CoachSubpage data={value} />} />}
            />
          );
        })}
        {lifestyleCoaches.map((value, i) => {
          return (
            <Route
              key={i}
              path={value.slug}
              element={<Layout children={<CoachSubpage data={value} />} />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <SelfAssessmentButton />
      <WhatsappChat />
      <Footer />
    </>
  );
}

export default App;
