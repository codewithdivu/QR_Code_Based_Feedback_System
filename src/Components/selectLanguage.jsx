import React from "react";
import { languages } from "../constants/language";

const SelectLanguage = ({ selectedLanguage, onSelectLanguage, onNext }) => {
  // Handler Methods
  const handleSaveSelectedLanguage = (e) => {
    e.preventDefault();
    // console.log("object :>> ", selectedLanguage);
    localStorage.setItem("language", "en");
    onNext();
  };

  const handleChange = (event) => {
    // console.log("radio_button", event.target.value);
    onSelectLanguage(event.target.value);
  };

  return (
    <div className="data_container">
      <div className="data_container_wrap">
        <div className="heading_auth">
          <h2>Select language</h2>
          <hr />
          <p>Kindly select your preferred language</p>
        </div>
        <div className="language_ops_wrap">
          <div className="language_opts" onChange={handleChange}>
            {languages.map((lang) => (
              <div key={lang.id} className="language_data">
                <input
                  type="radio"
                  className="options language_input"
                  name="language"
                  id="language_input"
                  value={lang.value}
                />
                <label for="language_data">{lang.label}</label>
              </div>
            ))}
          </div>
        </div>
        <button className="sendOtp" onClick={handleSaveSelectedLanguage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectLanguage;
