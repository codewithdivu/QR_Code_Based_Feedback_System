import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setPhoneNumber(data.mobile_num);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("mobile_num", { required: true, maxLength: 10 })}
                />
                {errors.mobile_num && <p>Please check the Mobile Number</p>}
              </div>
              <div className="otp_label">Enter OTP :</div>
              <div className="otp_input">
                <input
                  type="number"
                  className="otp"
                  name="otp"
                  id=""
                  {...register("otp", { required: true })}
                />
                {errors.otp && <p>Please check the OTP</p>}
              </div>

              <button className="sendOtp">Send OTP</button>
              <button type="submit" className="submit_btn">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
