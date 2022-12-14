import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StartRatings from "../Assets/startRatings";
import EmojiRating from "react-emoji-rating";
import { questions1, questions2 } from "../constants/questions1";
import { useTranslation, initReactI18next } from "react-i18next";

const Feedback = ({
  onFinalSubmit,
  Questions,
  setQuestions,
  rating,
  setRating,
  review,
  setReview,
  emojis,
  setEmojis,
  loader,
  setLoader,
}) => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleNext = () => {
    if (step === 2) {
      onFinalSubmit("test");
      return;
    }
    setStep((step) => step + 1);
    // setQuestions({ ...Questions, firstQ, secondQ, thirdQ });
  };

  const onRBSubmit = (res) => {
    // console.log("dropdown bhai", res);
    setQuestions({ res });
    handleNext();
  };

  const handleRating1 = (emojiRating) => {
    // console.log("emoj", emojiRating);
    setEmojis([...emojis, emojiRating]);
  };
  const handleRating2 = (emojiRating) => {
    setEmojis([...emojis, emojiRating]);
    // console.log("emoj", emojiRating);
  };
  const handleRating3 = (emojiRating) => {
    setEmojis([...emojis, emojiRating]);
    // console.log("emoj", emojiRating);
  };
  const handleRating4 = (emojiRating) => {
    setEmojis([...emojis, emojiRating]);
    // console.log("emoj", emojiRating);
  };

  const { t } = useTranslation();
  const renderCurrentFeedbackForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div class="questions_container">
            {questions1.map((item) => (
              <div class="question_container">
                <p>{t(item.q)}</p>
                {item.options.map((option) => (
                  <div class="option">
                    <input
                      type="radio"
                      name={item.name}
                      id="ques"
                      value={option.label}
                      {...register(item.name, { required: true })}
                    />
                    <label htmlFor="ques">{t(option.label)}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="questions_container">
            {questions2.map((item) => (
              <div class="question_container">
                <p>{t(item.q)}</p>
                {item.options.map((option) => (
                  <div class="option">
                    <input
                      type="radio"
                      name={item.name}
                      id="ques"
                      value={option.label}
                      {...register(item.name, { required: true })}
                    />
                    <label htmlFor="ques">{t(option.label)}</label>
                  </div>
                ))}
              </div>
            ))}
            <div className="question_container">
              <p className="special">{t("Q. What was your conflict ?")}</p>
              <input
                type="text"
                name="conflicts"
                id=""
                {...register("conflicts", { required: true })}
                placeholder="Kindly explain your conflict in brief .."
              />
            </div>
            <div className="question_container">
              <StartRatings rating={rating} setRating={setRating} />
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div className="emojis_container_for_css">
              <div className="containar containar__1">
                <div className="wrapper">
                  <p className="text">
                    {t(
                      "How would you rate the language tone used by the policemen with you?"
                    )}
                  </p>

                  <div className="emoji">
                    <EmojiRating variant="classic" onChange={handleRating1} />
                  </div>
                </div>
              </div>
              <div className="containar containar__1">
                <div className="wrapper">
                  <p className="text">
                    {t(
                      "How would you rate the attentiveness of the policemen towards your complaints?"
                    )}
                  </p>
                  <div className="emoji">
                    <EmojiRating variant="classic" onChange={handleRating3} />
                  </div>
                </div>
              </div>
              <div className="containar containar__1">
                <div className="wrapper">
                  <p className="text">
                    {t("How would you rate cleanliness of the Police Station?")}
                  </p>

                  <div className="emoji">
                    <EmojiRating variant="classic" onChange={handleRating3} />
                  </div>
                </div>
              </div>
              <div className="containar containar__1">
                <div className="wrapper">
                  <p className="text">
                    {t(
                      "How Would you rate the Overall experience of the police station?"
                    )}
                  </p>

                  <div className="emoji">
                    <EmojiRating variant="classic" onChange={handleRating3} />
                  </div>
                </div>
              </div>

              <div className="textarea">
                <label htmlFor="">Review : </label>
                <textarea
                  id=""
                  name="review"
                  rows="8"
                  cols="50"
                  class="textarea-input"
                  // {...register("review", { required: true })}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Please review your experience in 300 characters.."
                ></textarea>
                {/* <EmojiRating variant="classic" onChange={handleEmoji} /> */}
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div class="data_container">
      <div class="data_container_wrap">
        <div class="heading_auth">
          <h2>{t("Feedback Form")}</h2>
          <hr />
          <p>{t("Kindly enter the required fields of the form.")}</p>
        </div>

        <form onSubmit={handleSubmit(onRBSubmit)}>
          {renderCurrentFeedbackForm(step)}
          <div className="temp_btns">
            <button type="submit" class="next temporary">
              {step === 2
                ? loader
                  ? t("Submitting........")
                  : t("Final Submit")
                : t("Next")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
