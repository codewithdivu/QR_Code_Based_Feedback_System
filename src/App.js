import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogIn from "./Components/Admin/adminLogIn";
import MainAdminPortalHome from "./Components/Admin/adminPortal/mainAdminPortalHome";
import AdminSignUp from "./Components/Admin/adminSignUp";
import Analysis from "./Components/Admin/analysis";
import ChangePassword from "./Components/Admin/changePassword";
import Content from "./Components/Admin/content";
import GenerateQRcode from "./Components/Admin/generateQRcode";
import Report from "./Components/Admin/report";
import FeedBackSystem from "./Components/FeedBackSystem";
import LandingPage from "./Components/LandingPage";
import { ADMIN_EMAIL } from "./constants/staticData";
import { UserAuthContextProvider } from "./Contexts/UserAuthContext";
import { useAuth } from "./hooks";
import { AdminDashboardLayout, AuthLayout } from "./layouts";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import AddPoliceStation from "./Components/Admin/AddPoliceStation";

const App = () => {
  const { user, isLoading } = useAuth();
  const isAdmin = user && user?.email === ADMIN_EMAIL;

  // i18 package

  // i18n
  //   .use(initReactI18next) // passes i18n down to react-i18next
  //   .init({
  //     // the translations
  //     // (tip move them in a JSON file and import them,
  //     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  //     resources: {
  //       en: {
  //         translation: {
  //           "Welcome to React": "Welcome to React and react-i18next",
  //         },
  //       },
  //     },
  //     lng: "en", // if you're using a language detector, do not define the lng option
  //     fallbackLng: "en",

  //     interpolation: {
  //       escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  //     },
  //   });

  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/user/feedback"
          element={<FeedBackSystem />}
          errorElement={<p>Something Went Wrong!</p>}
        />
        <Route
          path="/admin"
          element={
            isAdmin ? <AdminDashboardLayout /> : <Navigate to="/auth/login" />
          }
          errorElement={<p>something went Wrong!</p>}
        >
          <Route index element={<MainAdminPortalHome />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="content" element={<Content />} />
          <Route path="generateQR" element={<GenerateQRcode />} />
          <Route path="addPoliceStation" element={<AddPoliceStation />} />
          <Route path="report" element={<Report />} />
        </Route>
        <Route
          path="/auth"
          element={!isAdmin ? <AuthLayout /> : <Navigate to="/admin" />}
          errorElement={<p>something went Wrong!</p>}
        >
          <Route path="login" element={<AdminLogIn />} />
          <Route path="signup" element={<AdminSignUp />} />
        </Route>
      </Routes>
    </UserAuthContextProvider>
  );
};

export default App;
