import React, { useState } from "react";
import "../css/startRating.css";

const StartRatings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  console.log("ratings", rating);
  console.log("hover", hover);

  return (
    <>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              id="start"
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <h1 className="star">&#9733;</h1>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default StartRatings;
