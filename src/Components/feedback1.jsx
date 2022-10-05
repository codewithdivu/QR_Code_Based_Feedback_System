import React from "react";
import GpLogo from "./gpLogo";

const Feedback1 = () => {
  return (
    <div class="main_container">
      <GpLogo />
      <div class="data_container">
        <div class="data_container_wrap">
          <div class="heading_auth">
            <h2>Feedback Form</h2>
            <hr />
            <p>Kindly enter the required fields of the form.</p>
          </div>

          <div class="questions_container">
            <div class="question_container">
              <p>Q. How did you come to the police station?</p>
              <div class="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">
                  Through a person known to a police officer{" "}
                </label>
              </div>
              <div class="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">Neighbour / local leader</label>
              </div>
              <div class="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">Parent/Guardian/Sibling</label>
              </div>
              <div class="option">
                <input type="radio" name="ques1" id="ques" />
                <label for="ques">On your own</label>
              </div>
            </div>
            <div class="question_container">
              <p>Q. After how much time you were heard in PS ?</p>
              <div class="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">More than 15 minutes</label>
              </div>
              <div class="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">15 minutes</label>
              </div>
              <div class="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">10 minutes</label>
              </div>
              <div class="option">
                <input type="radio" name="ques2" id="ques" />
                <label for="ques">Immediately </label>
              </div>
            </div>
            <div class="question_container">
              <p>Q. What was your problem ?</p>
              <div class="option">
                <input type="radio" name="ques3" id="ques" />
                <label for="ques">
                  Theft (mobile/vechile/electronic devices){" "}
                </label>
              </div>
              <div class="option">
                <input type="radio" name="ques3" id="ques" />
                <label for="ques">Harassment/Humiliation</label>
              </div>
              <div class="option">
                <input type="radio" name="ques3" id="ques" />
                <label for="ques">Internal/External Conflict</label>
              </div>
              <div class="option">
                <input type="radio" name="ques3" id="ques" />
                <label for="ques">Other</label>
              </div>
            </div>
          </div>
          <a href="./5.html">
            <button class="next">Next</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback1;
