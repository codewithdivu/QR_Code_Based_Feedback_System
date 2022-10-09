import React from "react";
import { languages } from "../constants/language";
import { useForm } from "react-hook-form";

const SelectLanguage = ({ selectedLanguage, onSelectLanguage, onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRBSubmit = (res) => {
    onSelectLanguage(res.language);
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
      </div>
    </div>
  );
};

export default SelectLanguage;
