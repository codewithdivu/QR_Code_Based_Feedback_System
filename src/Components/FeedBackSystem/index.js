import React, { useState } from "react";

import Feedback from "../FeedbackForm";
import GpLogo from "../../Assets/Logos/gpLogo";
import GreetingPage from "../greetingPage";
import LogIn from "../logIn";
import SelectLanguage from "../selectLanguage";
import SelectStation from "../selectStation";
import { addData } from "../../firebase/services";

const FeedBackSystem = () => {
  const [step, setStep] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedPoliceStation, setSelectedPoliceStation] = useState({
    district: "",
    taluka: "",
    police: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [capthaResponse, setCapthaResponse] = useState("");

  const [Questions, setQuestions] = useState([]);

  // console.log("questionsyaar", Questions);

  const handleNext = () => {
    setStep(step + 1);
  };

  const onFinalSubmit = async (feedBackData) => {
    // Store in fb
    handleNext();
    localStorage.clear();
  };

  // Render Methods
  const renderCurrentComponent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <SelectLanguage
            onNext={handleNext}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={setSelectedLanguage}
          />
        );
      case 1:
        return (
          <LogIn
            onNext={handleNext}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            capthaResponse={capthaResponse}
            setCapthaResponse={setCapthaResponse}
          />
        );
      case 2:
        return (
          <SelectStation
            onNext={handleNext}
            onSelectStation={setSelectedPoliceStation}
            selectedStation={selectedPoliceStation}
          />
        );
      case 3:
        return (
          <Feedback
            onFinalSubmit={onFinalSubmit}
            Questions={Questions}
            setQuestions={setQuestions}
          />
        );
      case 4:
        return <GreetingPage />;
      default:
        return null;
    }
  };

  return (
    <div className="main_container">
      <GpLogo />
      {renderCurrentComponent(step)}
    </div>
  );
};

export default FeedBackSystem;
