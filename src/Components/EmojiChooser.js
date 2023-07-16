import React, { useState } from "react";

const questions = [
  {
    question: "Q1. How do you feeel today ?",
    emojis: ["😄", "😊", "😐", "😞", "😢"],
  },
  {
    question: "Q2. What's your favorite food ?",
    emojis: ["🍕", "🍔", "🌮", "🍣", "🍦"],
  },
  {
    question: "Q3. How do you like Police Station ?",
    emojis: ["😄", "😊", "😐", "😞", "😢"],
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
