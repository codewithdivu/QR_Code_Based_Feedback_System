import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";

const GpLogo = () => {
  const { t } = useTranslation();
  return (
    <div className="police_logo_details_container">
      <div className="police_logo">
        <img src="/images/Logo.png" alt="GUJ_POLICE_LOGO" />
      </div>
      <div className="police_heading">{t("GUJARAT POLICE")}</div>
      <div className="police_feedback">{t("Feedback Portal")}</div>
    </div>
  );
};

export default GpLogo;
