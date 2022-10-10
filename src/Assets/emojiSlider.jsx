import React, { useState } from "react";

const EmojiSlider = () => {
  const emojis = [
    { id: 1, emoji: "&#x1F621", text: "Hate it" },
    { id: 2, emoji: "&#x1F613", text: "Difficult to understand" },
    { id: 3, emoji: "&#x1F642", text: "Satisfied" },
    { id: 4, emoji: "&#x1F600", text: "Very happy" },
    { id: 5, emoji: "&#x1F618", text: "Loved it" },
  ];

  const [value, setValue] = useState(null);

  //   const handleChange = () => {};

  return (
    <form>
      <div className="emoji-container">
        <h3>Communication</h3>
        <div className="emoji">{String.fromCodePoint(0x1f60a)}</div>
        <p className="emoji-text">Satisfied</p>
        <input
          type="range"
          name="status[communication]"
          onChange={(e) => setValue(e.target.value)}
          min="0"
          max="4"
          step="1"
        />
        <hr />
      </div>
    </form>
  );
};

export default EmojiSlider;
