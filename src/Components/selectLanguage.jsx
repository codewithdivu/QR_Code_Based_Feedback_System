import React from "react";

const SelectLanguage = ({ selectedLanguage, onSelectLanguage, onNext }) => {
  // Handler Methods
  const handleSaveSelectedLanguage = (e) => {
    e.preventDefault();
    onSelectLanguage("en");
    console.log("object :>> ", selectedLanguage);
    localStorage.setItem("language", "en");
    onNext();
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
          <div className="language_opts">
            <div className="language_data">
              <input
                type="radio"
                className="options language_input"
                name="language_data"
                id="language_input"
              />
              <label for="language_data">English</label>
            </div>
            <div className="language_data">
              <span>
                <input
                  type="radio"
                  className="options language_input"
                  name="language_data"
                  id="language_input"
                />
              </span>
              <label for="language_data">हिन्दी</label>
            </div>
            <div className="language_data">
              <input
                type="radio"
                className="options language_input"
                name="language_data"
                id="language_input"
              />
              <label for="language_data">ગુજરાતી</label>
            </div>
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
