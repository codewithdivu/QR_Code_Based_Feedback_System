import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogIn from "./Components/Admin/adminLogIn";
import MainAdminPortalHome from "./Components/Admin/adminPortal/mainAdminPortalHome";
import AdminSignUp from "./Components/Admin/adminSignUp";
import Analysis from "./Components/Admin/analysis";
import ChangePassword from "./Components/Admin/changePassword";
import Content from "./Components/Admin/content";
import GenerateQRcode from "./Components/Admin/generateQRcode";
import Report from "./Components/Admin/report";
import FeedBackSystem from "./Components/FeedBackSystem";
import { UserAuthContextProvider } from "./Contexts/UserAuthContext";

const App = () => (
  <UserAuthContextProvider>
    <Routes>
      <Route
        path="/"
        element={<FeedBackSystem />}
        errorElement={<p>Something Went Wrong!</p>}
      />
      <Route
        path="/admin"
        element={<MainAdminPortalHome />}
        errorElement={<p>something went Wrong!</p>}
      />
      <Route path="/admin/login" element={<AdminLogIn />} />
      <Route path="/admin/signup" element={<AdminSignUp />} />
      <Route path="/admin/analysis" element={<Analysis />} />
      <Route path="/admin/changePassword" element={<ChangePassword />} />
      <Route path="/admin/content" element={<Content />} />
      <Route path="/admin/generateQR" element={<GenerateQRcode />} />
      <Route path="/admin/report" element={<Report />} />
    </Routes>
  </UserAuthContextProvider>
);

export default App;
