import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";

const GreetingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="data_container">
      <div className="data_container_wrap">
        <div className="heading_auth">
          <h2>{t("Thank you !!")}</h2>
          <hr className="hr" />
          <p></p>
        </div>
        <div className="thankyou_data">
          <div className="thanks">
            <h2>{t("Thanks for your feedback")}</h2>
          </div>
          <div className="number_feedback">
            <span>{t("Dial 079 2563 0220 for further help.")}</span>
            <div className="citizen_app">
              <a href="https://play.google.com/store/apps/details?id=com.tcs.digigov.mobility.dhs.citizen.gj&hl=en_IN&gl=US">
                <p>{t("Download Citizen")}</p>
                <p>{t("First App for Citizen")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingPage;
