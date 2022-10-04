import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Components/logIn";
import SelectStation from "./Components/selectStation";
import { UserAuthContextProvider } from "./Contexts/UserAuthContext";

const App = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route index path="/login" element={<LogIn />} />
          <Route path="/station" element={<SelectStation />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
