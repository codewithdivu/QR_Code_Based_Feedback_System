import React, { useState } from "react";

import Feedback from "../FeedbackForm";
import GpLogo from "../../Assets/Logos/gpLogo";
import GreetingPage from "../greetingPage";
import LogIn from "../logIn";
import SelectLanguage from "../selectLanguage";
import SelectStation from "../selectStation";

const FeedBackSystem = () => {
  const [step, setStep] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedPoliceStation, setSelectedPoliceStation] = useState({
    district: "",
    taluka: "",
    police: "",
  });

  console.log("step :>> ", step);
  // en gj hn

  const handleNext = () => {
    setStep(step + 1);
  };

  const onFinalSubmit = (feedBackData) => {
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
        return <LogIn onNext={handleNext} />;
      case 2:
        return (
          <SelectStation
            onNext={handleNext}
            onSelectStation={setSelectedPoliceStation}
            selectedStation={selectedPoliceStation}
          />
        );
      case 3:
        return <Feedback onFinalSubmit={onFinalSubmit} />;
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
