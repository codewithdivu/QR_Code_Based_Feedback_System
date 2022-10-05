import React from "react";
import { useState } from "react";

const Feedback = ({ onFinalSubmit, Questions, setQuestions }) => {
  const [step, setStep] = useState(0);

  const [firstQ, setFirstQ] = useState("Good");
  const [secondQ, setSecondQ] = useState("Bood");
  const [thirdQ, setThirdQ] = useState("Bad");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNext = () => {
    if (step === 2) {
      onFinalSubmit("test");
      return;
    }
    setStep((step) => step + 1);
    setQuestions({ ...Questions, firstQ, secondQ, thirdQ });
  };

  const handleChange1 = (event) => {
    setFirstQ(event.target.value);
  };
  const handleChange2 = (event) => {
    setSecondQ(event.target.value);
  };
  const handleChange3 = (event) => {
    setThirdQ(event.target.value);
  };

  const renderCurrentFeedbackForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div class="questions_container">
            <div class="question_container" onChange={handleChange1}>
              <p>Q. How did you come to the police station?</p>
              <div class="option">
                <input type="radio" name="ques1" id="ques" value={firstQ} />
                <label for="ques">
                  Through a person known to a police officer{" "}
                </label>
              </div>
              <div class="option">
                <input type="radio" name="ques1" id="ques" value={firstQ} />
                <label for="ques">Neighbour / local leader</label>
              </div>
              <div class="option">
                <input type="radio" name="ques1" id="ques" value={firstQ} />
                <label for="ques">Parent/Guardian/Sibling</label>
              </div>
              <div class="option">
                <input type="radio" name="ques1" id="ques" value={firstQ} />
                <label for="ques">On your own</label>
              </div>
            </div>
            <div class="question_container" onChange={handleChange2}>
              <p>Q. After how much time you were heard in PS ?</p>
              <div class="option">
                <input type="radio" name="ques2" id="ques" value={secondQ} />
                <label for="ques">More than 15 minutes</label>
              </div>
              <div class="option">
                <input type="radio" name="ques2" id="ques" value={secondQ} />
                <label for="ques">15 minutes</label>
              </div>
              <div class="option">
                <input type="radio" name="ques2" id="ques" value={secondQ} />
                <label for="ques">10 minutes</label>
              </div>
              <div class="option">
                <input type="radio" name="ques2" id="ques" value={secondQ} />
                <label for="ques">Immediately </label>
              </div>
            </div>
            <div class="question_container" onChange={handleChange3}>
              <p>Q. What was your problem ?</p>
              <div class="option">
                <input type="radio" name="ques3" id="ques" value={thirdQ} />
                <label for="ques">
                  Theft (mobile/vechile/electronic devices){" "}
                </label>
              </div>
              <div class="option">
                <input type="radio" name="ques3" id="ques" value={thirdQ} />
                <label for="ques">Harassment/Humiliation</label>
              </div>
              <div class="option">
                <input type="radio" name="ques3" id="ques" value={thirdQ} />
                <label for="ques">Internal/External Conflict</label>
              </div>
              <div class="option">
                <input type="radio" name="ques3" id="ques" value={thirdQ} />
                <label for="ques">Other</label>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="questions_container">
            <div className="question_container">
              <p>Q. What was stolen from you ?</p>
              <div className="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">Mobile </label>
              </div>
              <div className="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">Vechile</label>
              </div>
              <div className="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">Electronic Device / Gadget</label>
              </div>
              <div className="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">Other</label>
              </div>
              <div className="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">NA </label>
              </div>
            </div>
            <div className="question_container">
              <p>Q. By whom you has been harrassed or humilated ?</p>
              <div className="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">From blood realtion </label>
              </div>
              <div className="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">Someone from locality</label>
              </div>
              <div className="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">Stranger at public place</label>
              </div>
              <div className="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">Other </label>
              </div>
              <div className="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">NA </label>
              </div>
            </div>
            <div className="question_container">
              <p className="special">Q. What was your conflict ?</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Kindly explain your conflict in brief .."
              />
            </div>
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
              <label for="">Review : </label>
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
        <form onSubmit={handleSubmit}>
          {renderCurrentFeedbackForm(step)}
          <button class="next" onClick={handleNext}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
