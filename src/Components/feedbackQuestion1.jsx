import React from "react";

const FeedbackQuestion1 = () => {
  return (
    <div class="main">
      <img class="police__img" src="./images/Logo.png" alt="" />
      <span class="police__heading">GUJARAT POLICE</span>
      <span class="police__feedback">(FEEDBACK PORTAL)</span>

      <span class="lang__heading">Feedback questions </span>

      <form action="">
        <div class="questions">
          <p>Q. How did you come to the police station?</p>
          <div>
            <input type="radio" name="ques1" id="ques" />
            <label for="ques">
              Through a person known to a police officer{" "}
            </label>
          </div>
          <div>
            <input type="radio" name="ques1" id="ques" />
            <label for="quest">With a neighbour/ local leader</label>
          </div>
          <div>
            <input type="radio" name="ques1" id="ques" />
            <label for="quest">On your own</label>
          </div>
        </div>

        <div class="questions">
          <p>Q. After how much time you were heard in PS</p>
          <div>
            <input type="radio" name="ques3" id="ques" />
            <label for="ques">More than 15 minutes </label>
          </div>
          <div>
            <input type="radio" name="ques3" id="ques" />
            <label for="quest">15 minutes</label>
          </div>
          <div>
            <input type="radio" name="ques3" id="ques" />
            <label for="quest">10 minutes</label>
          </div>
          <div>
            <input type="radio" name="ques3" id="ques" />
            <label for="quest">Immediately</label>
          </div>
        </div>
        <div class="questions">
          <p>Q. What was your problem ?</p>
          <div>
            <input type="radio" name="ques2" id="ques" />
            <label for="ques">Theft (mobile/vechile)</label>
          </div>
          <div>
            <input type="radio" name="ques2" id="ques" />
            <label for="quest">Harassment/Humiliation</label>
          </div>
          <div>
            <input type="radio" name="ques2" id="ques" />
            <label for="quest">Internal/External Conflict</label>
          </div>
          <div>
            <input type="radio" name="ques2" id="ques" />
            <label for="quest">Other</label>
          </div>
        </div>
      </form>
      <div class="police_btn">
        <button class="police_btn1">NEXT</button>
      </div>
    </div>
  );
};

export default FeedbackQuestion1;
