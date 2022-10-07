import React from "react";

const ChangePassword = () => {
  return (
    <>
      <div className="container-wrap">
        <div className="container">
          <div className="login_container">
            <div className="logos">
              <img src="/images/logo.png" alt="police_logo" />
            </div>
            <div className="heading">
              <p>Admin Portal</p>
              <hr className="hr" />
              <div className="details">
                <p>Kindly enter your old passcode and set new passcode</p>
              </div>
            </div>

            <div className="input_field">
              <input type="number" placeholder="Enter Phone No" />
            </div>
            <div className="input_field">
              <input type="number" placeholder="Enter Otp" />
            </div>
            <div className="input_field">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter your old passcode"
              />
            </div>
            <div className="input_field">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter your new passcode "
              />
            </div>
            <div className="btns">
              <div className="signIn_btn">
                <button className="login_btn">Get OTP</button>
              </div>
              <div className="signIn_btn">
                <button className="login_btn">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
