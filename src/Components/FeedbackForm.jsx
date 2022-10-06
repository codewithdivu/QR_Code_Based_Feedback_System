import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StartRatings from "../Assets/startRatings";
import { questions1, questions2 } from "../constants/questions1";

const Feedback = ({ onFinalSubmit, Questions, setQuestions }) => {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleNext = () => {
    if (step === 2) {
      onFinalSubmit("test");
      return;
    }
    setStep((step) => step + 1);
    // setQuestions({ ...Questions, firstQ, secondQ, thirdQ });
  };

  const onRBSubmit = (res) => {
    // console.log("dropdown bhai", res);
    setQuestions({ ...Questions, res });
    handleNext();
  };

  const renderCurrentFeedbackForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div class="questions_container">
            {questions1.map((item) => (
              <div class="question_container">
                <p>{item.q}</p>
                {item.options.map((option) => (
                  <div class="option">
                    <input
                      type="radio"
                      name={item.name}
                      id="ques"
                      value={option.label}
                      {...register(item.name, { required: true })}
                    />
                    <label htmlFor="ques">{option.label}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="questions_container">
            {questions2.map((item) => (
              <div class="question_container">
                <p>{item.q}</p>
                {item.options.map((option) => (
                  <div class="option">
                    <input
                      type="radio"
                      name={item.name}
                      id="ques"
                      value={option.label}
                      {...register(item.name, { required: true })}
                    />
                    <label htmlFor="ques">{option.label}</label>
                  </div>
                ))}
              </div>
            ))}
            <div className="question_container">
              <p className="special">Q. What was your conflict ?</p>
              <input
                type="text"
                name="conflicts"
                id=""
                {...register("conflicts", { required: true })}
                placeholder="Kindly explain your conflict in brief .."
              />
            </div>
            <StartRatings />
          </div>
        );
      case 2:
        return (
          <>
            <div class="containar containar__1">
              <div class="wrapper">
                <p class="text">How was the behaviour of the attendee ?</p>
                <div class="emoji">
                  <div class="emoji1">😡</div>
                  <div class="emoji2">😠</div>
                  <div class="emoji3">🙂</div>
                  <div class="emoji4">😃</div>
                  <div class="emoji5">😍</div>
                </div>
              </div>
            </div>
            <div class="containar containar__1">
              <div class="wrapper">
                <p class="text">How would you rate the police station !</p>
                <div class="emoji">
                  <div class="emoji1">😡</div>
                  <div class="emoji2">😠</div>
                  <div class="emoji3">🙂</div>
                  <div class="emoji4">😃</div>
                  <div class="emoji5">😍</div>
                </div>
              </div>
            </div>
            <div class="containar containar__1">
              <div class="wrapper">
                <p class="text">
                  How would you explain the enviroment of police station ?
                </p>
                <div class="emoji">
                  <div class="emoji1">😡</div>
                  <div class="emoji2">😠</div>
                  <div class="emoji3">🙂</div>
                  <div class="emoji4">😃</div>
                  <div class="emoji5">😍</div>
                </div>
              </div>
            </div>
            <div class="textarea">
              <label htmlFor="">Review : </label>
              <textarea
                id=""
                name=""
                rows="4"
                cols="50"
                class="textarea-input"
                placeholder="Please review your experience in 300 characters.."
              ></textarea>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div class="data_container">
      <div class="data_container_wrap">
        <div class="heading_auth">
          <h2>Feedback Form</h2>
          <hr />
          <p>Kindly enter the required fields of the form.</p>
        </div>

        <form onSubmit={handleSubmit(onRBSubmit)}>
          {renderCurrentFeedbackForm(step)}
          <button type="submit" class="next">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
