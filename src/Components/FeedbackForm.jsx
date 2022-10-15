import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StartRatings from "../Assets/startRatings";
import EmojiRating from "react-emoji-rating";
import { questions1, questions2 } from "../constants/questions1";

const Feedback = ({
  onFinalSubmit,
  Questions,
  setQuestions,
  rating,
  setRating,
  review,
  setReview,
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
    console.log("emo1", emojiRating);
  };
  const handleRating2 = (emojiRating) => {
    console.log("emo2", emojiRating);
  };
  const handleRating3 = (emojiRating) => {
    console.log("emo3", emojiRating);
  };

  const renderCurrentFeedbackForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div class="questions_container">
            {questions1.map((item) => (
              <div class="question_container">
                <p>{item.q}</p>
                {item.options.map((option) => (
                  <div class="option">
                    <input
                      type="radio"
                      name={item.name}
                      id="ques"
                      value={option.label}
                      {...register(item.name, { required: true })}
                    />
                    <label htmlFor="ques">{option.label}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      // case 1:
      //   return (
      //     <div className="questions_container">
      //       {questions2.map((item) => (
      //         <div class="question_container">
      //           <p>{item.q}</p>
      //           {item.options.map((option) => (
      //             <div class="option">
      //               <input
      //                 type="radio"
      //                 name={item.name}
      //                 id="ques"
      //                 value={option.label}
      //                 {...register(item.name, { required: true })}
      //               />
      //               <label htmlFor="ques">{option.label}</label>
      //             </div>
      //           ))}
      //         </div>
      //       ))}
      //       <div className="question_container">
      //         <p className="special">Q. What was your conflict ?</p>
      //         <input
      //           type="text"
      //           name="conflicts"
      //           id=""
      //           {...register("conflicts", { required: true })}
      //           placeholder="Kindly explain your conflict in brief .."
      //         />
      //       </div>
      //       <StartRatings rating={rating} setRating={setRating} />
      //     </div>
      //   );
      // case 2:
      //   return (
      //     <>
      //       <div className="containar containar__1">
      //         <div className="wrapper">
      //           <p className="text">How was the behaviour of the attendee ?</p>
      //           {/* <div className="emoji">
      //             <div className="emoji1">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😞</h1>
      //               </button>{" "}
      //             </div>
      //             <div className="emoji2">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">☹️</h1>
      //               </button>
      //             </div>
      //             <div className="emoji3">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">🙂</h1>
      //               </button>
      //             </div>
      //             <div className="emoji4">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😃</h1>
      //               </button>
      //             </div>
      //             <div className="emoji5">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😍</h1>
      //               </button>
      //             </div>
      //           </div> */}
      //           <div className="emoji">
      //             <EmojiRating variant="classic" onChange={handleRating1} />
      //           </div>
      //         </div>
      //       </div>
      //       <div className="containar containar__1">
      //         <div className="wrapper">
      //           <p className="text">How would you rate the police station !</p>
      //           {/* <div className="emoji">
      //             <div className="emoji1">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😞</h1>
      //               </button>
      //             </div>
      //             <div className="emoji2">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">☹️</h1>
      //               </button>
      //             </div>
      //             <div className="emoji3">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">🙂</h1>
      //               </button>
      //             </div>
      //             <div className="emoji4">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😃</h1>
      //               </button>
      //             </div>
      //             <div className="emoji5">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😍</h1>
      //               </button>
      //             </div>
      //           </div> */}
      //           <div className="emoji">
      //             <EmojiRating variant="classic" onChange={handleRating2} />
      //           </div>
      //         </div>
      //       </div>
      //       <div className="containar containar__1">
      //         <div className="wrapper">
      //           <p className="text">
      //             How would you explain the enviroment of police station ?
      //           </p>
      //           {/* <div className="emoji">
      //             <div className="emoji1">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">☹️</h1>
      //               </button>
      //             </div>
      //             <div className="emoji2">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😞</h1>
      //               </button>
      //             </div>
      //             <div className="emoji3">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">🙂</h1>
      //               </button>
      //             </div>
      //             <div className="emoji4">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😃</h1>
      //               </button>
      //             </div>
      //             <div className="emoji5">
      //               <button className="btn200">
      //                 <h1 className="hedemoji">😍</h1>
      //               </button>
      //             </div>
      //           </div> */}
      //           <div className="emoji">
      //             <EmojiRating variant="classic" onChange={handleRating3} />
      //           </div>
      //         </div>
      //       </div>
      //       <div></div>
      //       <div className="textarea">
      //         <label htmlFor="">Review : </label>
      //         <textarea
      //           id=""
      //           name="review"
      //           rows="8"
      //           cols="50"
      //           class="textarea-input"
      //           // {...register("review", { required: true })}
      //           onChange={(e) => setReview(e.target.value)}
      //           placeholder="Please review your experience in 300 characters.."
      //         ></textarea>
      //         {/* <EmojiRating variant="classic" onChange={handleEmoji} /> */}
      //       </div>
      //     </>
      //   );

      default:
        return null;
    }
  };

  return (
    <div class="data_container">
      <div class="data_container_wrap">
        <div class="heading_auth">
          <h2>Feedback Form</h2>
          <hr />
          <p>Kindly enter the required fields of the form.</p>
        </div>

        <form onSubmit={handleSubmit(onRBSubmit)}>
          {renderCurrentFeedbackForm(step)}
          <button type="submit" class="next">
            {step === 2 ? "Final Submit" : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
