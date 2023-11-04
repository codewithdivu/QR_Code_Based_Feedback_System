import React, { useState } from "react";

const questions = [
  {
    question:
      "Q1.  How satisfied are you with the responsiveness, lanugage and communication of the police station staff?",
    emojis: ["😢", "☹️", "😐", "😊", "😄"],
  },
  {
    question:
      "Q2.  How would you rate the fairness and respectfulness of your treatment during your interactions with the police station?",
    emojis: ["😢", "☹️", "😐", "😊", "😄"],
  },
  {
    question:
      "Q3.  Were you satisfied with the cleanliness and organization of the police station?",
    emojis: ["😢", "☹️", "😐", "😊", "😄"],
  },
  {
    question:
      "Q4.  How would you rate the effectiveness of problem resolution by the police station?",
    emojis: ["😢", "☹️", "😐", "😊", "😄"],
  },
  {
    question: "Q5.  How safe do you feel when visiting the police station?",
    emojis: ["😢", "☹️", "😐", "😊", "😄"],
  },
];

const EmojiChooser = () => {
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const selectEmoji = (questionIndex, emoji) => {
    setSelectedEmojis((prevSelectedEmojis) => {
      const updatedSelectedEmojis = [...prevSelectedEmojis];
      updatedSelectedEmojis[questionIndex] = emoji;
      return updatedSelectedEmojis;
    });
  };

  return (
    <>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="question-emoji">
          <p>{question.question}</p>
          <div className="emojis">
            {question.emojis.map((emoji, emojiIndex) => (
              <span
                key={emojiIndex}
                className={`emoji ${
                  selectedEmojis[questionIndex] === emoji ? "selected" : ""
                }`}
                onClick={() => selectEmoji(questionIndex, emoji)}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default EmojiChooser;
