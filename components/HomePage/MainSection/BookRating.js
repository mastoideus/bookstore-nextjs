import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import classes from "./BookRating.module.css";

const BookRating = (props) => {
  const [hover, setHover] = useState(null);

  const transferRatingHandler = (starIndx) => {
    props.onTransRating(starIndx);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={classes.starsContainer}
    >
      {[...Array(5)].map((star, i) => {
        const starIndex = i + 1;

        return (
          <label key={i}>
            <input
              type="checkbox"
              value={props.rating}
              name="star"
              style={{ display: "none" }}
            />
            <AiFillStar
              className={classes.stars}
              color={
                starIndex <= ((props.avRating ? "" : hover) || props.rating)
                  ? "yellow"
                  : "grey"
              }
              style={{
                cursor: "pointer",
                fontSize: props.smallStars ? "20px" : "50px",
                color:
                  props.avRating && starIndex <= props.avRating ? "yellow" : "",
              }}
              onClick={
                props.avRating
                  ? () => {}
                  : () => transferRatingHandler(starIndex)
              }
              onMouseEnter={() => setHover(starIndex)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default BookRating;
