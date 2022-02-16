import React, { useState } from "react";
import classes from "./RatingDetail.module.css";
import RatingLeft from "./RatingLeft";
import RatingRight from "./RatingRight";

const RatingDetail = (props) => {
  const { book, books } = props;
  const [ratingBook, setRatingBook] = useState(book);

  const onChangeRatingBookHandler = (anotherBook) => {
    setRatingBook(anotherBook);
  };

  return (
    <div className={classes.ratingDetail}>
      <RatingLeft
        title={ratingBook.title}
        image={ratingBook.image}
        slug={ratingBook.slug}
        rating={ratingBook.rating}
      />
      <RatingRight books={books} onChangeBook={onChangeRatingBookHandler} />
    </div>
  );
};

export default RatingDetail;
