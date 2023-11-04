import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../Contexts/UserAuthContext";
import hin from "../transalation/hin.json";
import guj from "../transalation/hin.json";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import "../../src/css/loader.css";

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
  const langu = localStorage.getItem("lang");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  // console.log("errors", errors);
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
      if (err) {
        alert("please enter valid Mobile Number");
      }
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

      // console.log("bhai tame authenticate thay gaya chho");
      isLoading(false);
      onNext();
    } catch (err) {
      if (err) {
        alert("please enter valid OTP");
      }
      isLoading(false);
      setError(err.message);
    }
  };

  // if (langu) {
  //   i18n
  //     .use(initReactI18next) // passes i18n down to react-i18next
  //     .init({
  //       // the translations
  //       // (tip move them in a JSON file and import them,
  //       // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  //       resources: {
  //         en: {
  //           translation: hin,
  //         },
  //       },
  //       lng: "en", // if you're using a language detector, do not define the lng option
  //       fallbackLng: "en",

  //       interpolation: {
  //         escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  //       },
  //     });
  // }

  return (
    <div className="data_container">
      <div className="data_container_wrap">
        <div className="heading_auth">
          <h2>{t("Authentication")}</h2>
          <hr className="hr" />
          <p>
            {t("Kindly enter your mobile number to authenticate yourself.")}
          </p>
        </div>
        <div className="form_data" style={{ marginTop: "5rem" }}>
          {/* Get Otp */}

          <form
            onSubmit={handleSubmit(getOtp)}
            style={{ display: !flag ? "block" : "none" }}
          >
            <div className="mobile_num_label">
              <label htmlFor="mobile_num" className="mobile_num">
                {t("Enter mobile no :")}
              </label>
            </div>
            <div className="mobile_num_input">
              <input
                type="tel"
                placeholder="Enter 10-digit Mobile Number"
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
                id=""
                className={`mobile_num input ${
                  errors?.mobile_num?.message ? "error-outline" : ""
                }`}
              />
              {errors?.mobile_num?.message ? (
                <p className="error-message">{errors?.mobile_num?.message}</p>
              ) : (
                ""
              )}
            </div>

            <div id="recaptcha-container" style={{ marginTop: "15px" }} />
            <button type="submit" className="sendOtp button" disabled={loader}>
              {loader ? t("Sending....") : t("Send OTP")}
            </button>
          </form>

          {/* Verify OTP */}
          <form
            onSubmit={handleSubmit2(verifyOtp)}
            style={{ display: flag ? "block" : "none" }}
          >
            <div className="otp_label">{t("Enter OTP :")}</div>
            <div className="otp_input">
              <input
                type="number"
                className={`otp input ${
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

            <button
              type="submit"
              className="submit_btn button"
              disabled={loader}
            >
              {loader ? t("Checking....") : t("Verify OTP")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
