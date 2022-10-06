import React from "react";

const AdminLogIn = () => {
  return (
    <>
      <div class="container-wrap">
        <div class="container">
          <div class="login_container">
            <div class="logos">
              <img src="./images/Logo.png" alt="police_logo" />
            </div>
            <div class="heading">
              <p>Admin LogIn</p>
              <hr class="hr" />
              <div class="details">
                <p>
                  Hey , Enter your credentials to get sign in to your account
                </p>
              </div>
            </div>

            <div class="input_field">
              <input type="number" placeholder="Enter Phone No" />
            </div>
            <div class="input_field">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Passcode"
              />
            </div>
            <div class="login_details">
              <a href="./faq.html">Having trouble in sign in ?</a>
            </div>
            <div class="signIn_btn">
              <a href="./index_main_portal.html">
                {" "}
                <button class="login_btn">Sign in</button>
              </a>
            </div>
            <hr class="lastline" />
            <div class="signUp_details">
              <span> Don't have an account? &nbsp;</span>
              <a href="./signup.html">Request Now</a>
              {/* </span></span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogIn;
