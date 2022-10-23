import React from "react";
import { languages } from "../constants/language";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import EmojiSlider from "../Assets/emojiSlider";
import hin from "../transalation/hin.json";
import guj from "../transalation/guj.json";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const SelectLanguage = ({
  selectedLanguage,
  onSelectLanguage,
  onNext,
  onSelectStation,
  selectedStation,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [searchParams] = useSearchParams();

  const district = searchParams.get("district");
  const taluka = searchParams.get("taluka");
  const station = searchParams.get("station");

  const onRBSubmit = (res) => {
    onSelectStation({
      district: district,
      taluka: taluka,
      police: station,
    });

    if (!district && !taluka && !station) {
      return alert("please there is issues....");
    }

    onSelectLanguage(res.language);

    if (res.language === "hn") {
      i18n.changeLanguage("hn");
    } else if (res.language === "gj") {
      i18n.changeLanguage("du");
    } else {
      i18n.changeLanguage("en");
    }
    localStorage.setItem("lang", JSON.stringify(res.language));

    onNext();
  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: "en",
        },
        hn: {
          translation: hin,
        },
        du: {
          translation: guj,
        },
      },
      lng: "en", // if you're using a language detector, do not define the lng option
      fallbackLng: "en",

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });

  return (
    <div className="data_container">
      <div className="data_container_wrap">
        <div className="heading_auth">
          <h2>Select language</h2>
          <hr />
          <p>Kindly select your preferred language</p>
        </div>
        <form onSubmit={handleSubmit(onRBSubmit)}>
          <div className="language_ops_wrap">
            <div
              className="language_opts"
              // onChange={handleChange}
            >
              {languages.map((lang) => (
                <div key={lang.id} className="language_data">
                  <input
                    type="radio"
                    className="options language_input"
                    name="language"
                    id="language_input"
                    {...register("language", { required: true })}
                    value={lang.value}
                  />
                  <label htmlFor="language_data">{lang.label}</label>
                </div>
              ))}
              {errors.language && alert("Language selection is required")}
            </div>
          </div>
          <button
            type="submit"
            className="sendOtp"
            // onClick={handleSaveSelectedLanguage}
          >
            Next
          </button>
        </form>
        {/* <EmojiSlider /> */}
      </div>
    </div>
  );
};

export default SelectLanguage;
