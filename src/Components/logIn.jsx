import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Contexts/UserAuthContext";
import "../css/newLoader.css";

const LogIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const [loader, isLoading] = useState(false);
  const navigate = useNavigate();

  // OTP methods

  const getOtp = async (e) => {
    // console.log("phoneNumber", phoneNumber);
    e.preventDefault();
    console.log(phoneNumber);
    setError("");
    if (phoneNumber === "" || phoneNumber === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha("+91"+phoneNumber);
      console.log(response);
      setResult(response);
      setFlag(true);
      isLoading(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      console.log("bhai tame authenticate thay gaya chho");
      isLoading(false);
      navigate("/station");
    } catch (err) {
      setError(err.message);
    }
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
          <div className="form_data">
            {/* {isLoading ? (
              <div className="spinner"></div>
            ) : (
              <> */}
            <form
              onSubmit={getOtp}
              style={{ display: !flag ? "block" : "none" }}
            >
              <div className="mobile_num_label">
                <label for="mobile_num" className="mobile_num">
                  Enter mobile no :
                </label>
              </div>
              <div className="mobile_num_input">
                <input
                  // type="number"
                  name="mobile_num"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  id=""
                  className="mobile_num"
                />
              </div>
              <div id="recaptcha-container" />
              <button className="sendOtp">Send OTP</button>
            </form>

            <form
              onSubmit={verifyOtp}
              style={{ display: flag ? "block" : "none" }}
            >
              <div className="otp_label">Enter OTP :</div>
              <div className="otp_input">
                <input
                  type="number"
                  className="otp"
                  name="otp"
                  onChange={(event) => setOtp(event.target.value)}
                />
              </div>

              <button type="submit" className="submit_btn">
                Verify OTP
              </button>
            </form>
            {/* </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
