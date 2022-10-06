import React from "react";
import { Routes, Route } from "react-router-dom";
import MainAdminPortalHome from "./Components/Admin/adminPortal/mainAdminPortalHome";
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
    </Routes>
  </UserAuthContextProvider>
);

export default App;
