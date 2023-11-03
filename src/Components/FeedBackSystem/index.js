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
  const [loader, setLoader] = useState(false);

  // language
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  // phoneNumber
  const [phoneNumber, setPhoneNumber] = useState("");
  // captha details
  const [capthaResponse, setCapthaResponse] = useState("");
  // Questions
  const [Questions, setQuestions] = useState([]);
  // rating;
  const [rating, setRating] = useState(0);
  //textReview
  const [review, setReview] = useState("");
  // EMOJI REVIEW
  const [emojis, setEmojis] = useState([]);

  // console.log("final emojis", emojis);

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

  // console.log("selectedPoliceStation", selectedPoliceStation);

  const handleNext = () => setStep(step + 1);

  const onFinalSubmit = async (feedBackData) => {
    // Store in fb
    console.log("whole data", {
      selectedLanguage,
      phoneNumber,
      selectedPoliceStation,
      Questions,
      rating,
      review,
      emojis,
    });
    setLoader(true);
    const dudu = await addData({
      selectedLanguage,
      phoneNumber,
      selectedPoliceStation,
      Questions,
      rating,
      review,
    });
    setLoader(false);
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
            onSelectStation={setSelectedPoliceStation}
            selectedStation={selectedPoliceStation}
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
      // case 2:
      //   return (
      //     <SelectStation
      //       onNext={handleNext}
      //       onSelectStation={setSelectedPoliceStation}
      //       selectedStation={selectedPoliceStation}
      //     />
      //   );
      case 2:
        return (
          <Feedback
            onFinalSubmit={onFinalSubmit}
            Questions={Questions}
            setQuestions={setQuestions}
            rating={rating}
            setRating={setRating}
            review={review}
            setReview={setReview}
            emojis={emojis}
            setEmojis={setEmojis}
            loader={loader}
            setLoader={setLoader}
          />
        );
      case 3:
        return <GreetingPage />;
      default:
        return null;
    }
  };

  return (
    <div className="main_container">
      <GpLogo />
      {loader ? (
        <div class="waterfall">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>{renderCurrentComponent(step)}</>
      )}
    </div>
  );
};

export default FeedBackSystem;
