import React from "react";
import GpLogo from "./gpLogo";

const Feedback3 = () => {
  return (
    <div class="main_container">
      <GpLogo />
      <div class="data_container">
        <div class="data_container_wrap">
          <div class="heading_auth">
            <h2>Feedback </h2>
            <hr />
            <p>Kindly give your valuable feedback.</p>
          </div>

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

          <a href="#">
            <button class="next">Submit</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback3;
