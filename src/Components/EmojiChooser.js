import React, { useState } from "react";

const questions = [
  {
    question: "Q1. How safe do you feel when visiting the police station?",
    emojis: ["😃", "😊", "😐", "😞", "😡"],
  },
  {
    question:
      "Q2. Were your interactions with the police officers respectful and courteous?",
    emojis: ["😇", "😊", "😐", "😡", "😠"],
  },
  {
    question:
      "Q3. How would you rate the overall service and assistance provided at the police station?",
    emojis: ["⭐", "✨", "😐", "💥", "💔"],
  },
  {
    question:
      "Q4. Did you experience any issues or delays when seeking assistance or information?",
    emojis: ["🕰️", "⌛", "😐", "⏳", "🕐"],
  },
  {
    question:
      "Q5. Were the facilities at the police station well-maintained and equipped?",
    emojis: ["🏢", "🏗️", "😐", "🚮", "🏚️"],
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
