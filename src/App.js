import React from "react";
import { Routes, Route } from "react-router-dom";
import Feedback1 from "./Components/feedback1";
import Feedback2 from "./Components/feedback2";
import Feedback3 from "./Components/feedback3";
import GreetingPage from "./Components/greetingPage";
import LogIn from "./Components/logIn";
import SelectLanguage from "./Components/selectLanguage";
import SelectStation from "./Components/selectStation";
import { UserAuthContextProvider } from "./Contexts/UserAuthContext";

const App = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route index path="/login" element={<LogIn />} />
          <Route path="/station" element={<SelectStation />} />
          <Route path="/language" element={<SelectLanguage />} />
          <Route path="/feedback1" element={<Feedback1 />} />
          <Route path="/feedback2" element={<Feedback2 />} />
          <Route path="/feedback3" element={<Feedback3 />} />
          <Route path="/greeting" element={<GreetingPage />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
