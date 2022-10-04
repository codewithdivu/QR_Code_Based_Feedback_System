import React from "react";
import { Routes, Route } from "react-router-dom";
import ChooseLanguage from "./Components/chooseLanguage";
import FeedbackQuestion1 from "./Components/feedbackQuestion1";
import FeedbackQuestion2 from "./Components/feedbackQuestion2";
import FeedbackQuestion3 from "./Components/feedbackQuestion3";
import LogIn from "./Components/logIn";
import SelectStation from "./Components/selectStation";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<LogIn />} />
        <Route path="/language" element={<ChooseLanguage />} />
        <Route path="/station" element={<SelectStation />} />
        <Route path="/feedback1" element={<FeedbackQuestion1 />} />
        <Route path="/feedback2" element={<FeedbackQuestion2 />} />
        <Route path="/feedback3" element={<FeedbackQuestion3 />} />
      </Routes>
    </>
  );
};

export default App;
