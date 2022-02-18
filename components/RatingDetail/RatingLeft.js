import React, { useState } from "react";
import classes from "./RatingLeft.module.css";
import BookRating from "../HomePage/MainSection/BookRating";
import LeftStarRank from "./LeftStarRank";
import Image from "next/image";

const RatingLeft = (props) => {
  const [rating, setRating] = useState(null);

  const onGetRatingHandler = (starRating) => {
    setRating(starRating);
  };

  const sendRatingHandler = async () => {
    const ratingData = {
      rating: rating,
      slug: props.slug,
    };

    const response = await fetch(`/api/rating/${props.slug}`, {
      method: "PATCH",
      body: JSON.stringify(ratingData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data.rating);
  };

  let averageRating;
  if (props.rating.length > 0) {
    averageRating = (
      props.rating.reduce((sum, el) => sum + el) / props.rating.length
    ).toFixed(1);
  }

  const averageRatingRounded = Math.round(averageRating);

  let ratingMap = {};
  props.rating.forEach((rating) => {
    if (ratingMap[rating]) {
      ratingMap[rating]++;
    } else {
      ratingMap[rating] = 1;
    }
  });

  const oneStar = ratingMap[1];
  const twoStars = ratingMap[2];
  const threeStars = ratingMap[3];
  const fourStars = ratingMap[4];
  const fiveStars = ratingMap[5];

  const oneStarProcent = oneStar ? (oneStar / props.rating.length) * 100 : 0;
  const twoStarProcent = twoStars ? (twoStars / props.rating.length) * 100 : 0;
  const threeStarProcent = threeStars
    ? (threeStars / props.rating.length) * 100
    : 0;
  const fourStarProcent = fourStars
    ? (fourStars / props.rating.length) * 100
    : 0;
  const fiveStarProcent = fiveStars
    ? (fiveStars / props.rating.length) * 100
    : 0;

  return (
    <div className={classes.left}>
      <div className={classes.ratingTop}>
        <Image src={props.image} alt="" width={70} height={120} />
        <h1>{props.title}</h1>
        <BookRating
          onTransRating={onGetRatingHandler}
          rating={averageRatingRounded}
        />
        <h2 style={{ color: "darkred" }}>
          {averageRating}
          <small
            className={classes.votes}
            style={{ fontSize: "20px", color: "grey" }}
          >{`${props.rating.length}(votes)`}</small>
        </h2>
        <button
          disabled={rating === null}
          className={classes.voteBtn}
          onClick={sendRatingHandler}
        >
          Vote
        </button>
      </div>
      <div className={classes.rankContainer}>
        <LeftStarRank
          star={5}
          width={`${fiveStarProcent}%`}
          votes={fiveStars}
        />
        <LeftStarRank
          star={4}
          width={`${fourStarProcent}%`}
          votes={fourStars}
        />
        <LeftStarRank
          star={3}
          width={`${threeStarProcent}%`}
          votes={threeStars}
        />
        <LeftStarRank star={2} width={`${twoStarProcent}%`} votes={twoStars} />
        <LeftStarRank star={1} width={`${oneStarProcent}%`} votes={oneStar} />
      </div>
    </div>
  );
};

export default RatingLeft;
