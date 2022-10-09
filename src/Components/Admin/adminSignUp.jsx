import React from "react";

const AdminSignUp = () => {
  return (
    <>
      <div class="container-wrap">
        <div class="container">
          <div class="login_container">
            <div class="logos">
              <img src="/images/logo.png" alt="police_logo" />
            </div>
            <div class="heading">
              <p>Admin SignUp</p>
              <hr class="hr" />
              <div class="details">
                <p>
                  Hey , Enter your credentials to get sign up to your account
                </p>
              </div>
            </div>

            <div class="input_field">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div class="input_field">
              <input type="number" placeholder="Enter Phone No" />
            </div>
            <div class="input_field">
              <input type="number" placeholder="Enter Otp" />
            </div>
            <div class="input_field">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter your new passcode"
              />
            </div>
            <div class="btns">
              <div class="signIn_btn">
                <button class="login_btn">Get OTP</button>
              </div>
              <div class="signIn_btn">
                <a href="./index.html">
                  {" "}
                  <button class="login_btn">Sign Up</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignUp;
