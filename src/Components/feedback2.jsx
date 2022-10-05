import React from "react";
import GpLogo from "./gpLogo";

const Feedback2 = () => {
  return (
    <div className="main_container">
      <GpLogo />
      <div className="data_container">
        <div className="data_container_wrap">
          <div className="heading_auth">
            <h2>Feedback Form</h2>
            <hr />
            <p>Kindly enter the required fields of the form.</p>
          </div>

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
          <a href="./6.html">
            <button className="next">Next</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback2;
