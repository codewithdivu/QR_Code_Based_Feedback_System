import React from "react";

const LogIn = () => {
  return (
    <div class="main">
      <img class="police__img" src="./images/Logo.png" alt="" />
      <span class="police__heading">GUJARAT POLICE</span>
      <span class="police__feedback">(FEEDBACK PORTAL)</span>
      <form class="police__num">
        <div>
          <input
            class="police__num1"
            placeholder="Enter Your Mobile Number..."
            type="number"
            pattern="[0-9] {10}"
          />
        </div>
        <div class="policeotp">
          <button class="police__otp">Send OTP</button>
        </div>

        <div class="police__scnd">
          <input class="policeotp1" placeholder="Enter OTP..." type="number" />
        </div>
        <div class="policeotp ">
          <button class="police__otp policevrfy">Verify</button>
        </div>

        <div class="policenext1">
          <button class="policenext">NEXT</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
