import React from "react";

const LogIn = () => {
  return (
    <div className="main_container">
      <div className="police_logo_details_container">
        <div className="police_logo">
          <img src="./images/Logo.png" alt="GUJ_POLICE_LOGO" />
        </div>
        <div className="police_heading">GUJARAT POLICE</div>
        <div className="police_feedback">(Feedback Portal)</div>
      </div>
      <div className="data_container">
        <div className="data_container_wrap">
          <div className="heading_auth">
            <h2>Authentication</h2>
            <hr />
            <p>Kindly enter your mobile number to authenticate yourself.</p>
          </div>

          <div className="form_data">
            <div className="mobile_num_label">
              <label for="mobile_num" className="mobile_num">
                Enter mobile no :
              </label>
            </div>
            <div className="mobile_num_input">
              <input
                type="number"
                name="mobile_num"
                id=""
                className="mobile_num"
              />
            </div>
            <div className="otp_label">Enter OTP :</div>
            <div className="otp_input">
              <input type="number" className="otp" name="otp" id="" />
            </div>

            <button className="sendOtp">Send OTP</button>
            <button className="submit_btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
