import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../Contexts/UserAuthContext";
import "../css/newLoader.css";

const LogIn = ({
  onNext,
  phoneNumber,
  setPhoneNumber,
  capthaResponse,
  setCapthaResponse,
}) => {
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [loader, isLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  console.log("errors", errors);
  // Hooks
  const { setUpRecaptha } = useUserAuth();

  // OTP methods
  const getOtp = async ({ mobile_num: phoneNumber }) => {
    // console.log(phoneNumber);
    setError("");
    if (phoneNumber === "" || phoneNumber === undefined) {
      // setError("Please enter a valid phone number!");
      alert("mobile_num is required");
      return;
    }

    // return
    isLoading(true);
    try {
      const response = await setUpRecaptha("+91" + phoneNumber);
      setPhoneNumber(phoneNumber);
      // console.log(response);
      setCapthaResponse(response);
      setResult(response);
      setFlag(true);
      isLoading(false);
    } catch (err) {
      setError(err.message);
      isLoading(false);
    }
  };

  const verifyOtp = async ({ otp }) => {
    setError("");
    if (otp === "" || otp === null) return alert("otp must required");
    isLoading(true);
    try {
      await result.confirm(otp);
      console.log("bhai tame authenticate thay gaya chho");
      isLoading(false);
      onNext();
    } catch (err) {
      isLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="data_container">
      <div className="data_container_wrap">
        <div className="heading_auth">
          <h2>Authentication</h2>
          <hr />
          <p>Kindly enter your mobile number to authenticate yourself.</p>
        </div>
        <div className="form_data">
          {/* Get Otp */}
          <form
            onSubmit={handleSubmit(getOtp)}
            style={{ display: !flag ? "block" : "none" }}
          >
            <div className="mobile_num_label">
              <label htmlFor="mobile_num" className="mobile_num">
                Enter mobile no :
              </label>
            </div>
            <div className="mobile_num_input">
              <input
                type="tel"
                placeholder="9999999999"
                name="mobile_num"
                {...register("mobile_num", {
                  required: "Mobile number  is required.",
                  minLength: {
                    value: 10,
                    message: "Phone number must be 10 digit only",
                  },
                  maxLength: {
                    value: 10,
                    message: "Phone number must be 10 digit only",
                  },
                })}
                id="mobile_num"
                className={`mobile_num ${
                  errors?.mobile_num?.message ? "error-outline" : ""
                }`}
              />
              {errors?.mobile_num?.message ? (
                <p className="error-message">{errors?.mobile_num?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div id="recaptcha-container" />
            <button type="submit" className="sendOtp" disabled={loader}>
              {loader ? "Sending...." : "Send OTP"}
            </button>
          </form>

          {/* Verify OTP */}
          <form
            onSubmit={handleSubmit2(verifyOtp)}
            style={{ display: flag ? "block" : "none" }}
          >
            <div className="otp_label">Enter OTP :</div>
            <div className="otp_input">
              <input
                type="number"
                className={`otp ${
                  errors2?.mobile_num?.message ? "error-outline" : ""
                }`}
                name="otp"
                id="otp"
                {...register2("otp", {
                  required: "otp is required.",
                  minLength: {
                    value: 6,
                    message: "otp must be 6 digit only",
                  },
                  maxLength: {
                    value: 6,
                    message: "otp must be 6 digit only",
                  },
                })}
              />
              {errors2?.otp?.message ? (
                <p className="error-message">{errors2?.otp?.message}</p>
              ) : (
                ""
              )}
            </div>

            <button type="submit" className="submit_btn" disabled={loader}>
              {loader ? "Checking...." : "Verify OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
