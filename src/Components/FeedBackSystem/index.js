import React, { useEffect, useState } from "react";

import Feedback from "../FeedbackForm";
import GpLogo from "../../Assets/gpLogo";
import GreetingPage from "../greetingPage";
import LogIn from "../logIn";
import SelectLanguage from "../selectLanguage";
import SelectStation from "../selectStation";
import { addData, getAllUsers, getNumberData } from "../../firebase/services";
import { auth } from "../../firebase/config";
import { useSearchParams } from "react-router-dom";

const FeedBackSystem = () => {
  const [step, setStep] = useState(0);

  // language
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  // phoneNumber
  const [phoneNumber, setPhoneNumber] = useState("");
  // captha details
  const [capthaResponse, setCapthaResponse] = useState("");
  // Questions
  const [Questions, setQuestions] = useState([]);
  // rating;

  //selected police station object
  const [selectedPoliceStation, setSelectedPoliceStation] = useState({
    district: "",
    taluka: "",
    police: "",
  });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const district = searchParams.get("district");
    const taluka = searchParams.get("taluka");
    const police = searchParams.get("police");
    district &&
      taluka &&
      police &&
      setSelectedPoliceStation({
        district,
        taluka,
        police,
      });
  }, [searchParams]);

  const handleNext = () => setStep(step + 1);

  const onFinalSubmit = async (feedBackData) => {
    // Store in fb
    const dudu = await addData({
      selectedLanguage,
      phoneNumber,
      selectedPoliceStation,
      Questions,
    });
    console.log("dudu", dudu);
    handleNext();
    auth.signOut();
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
