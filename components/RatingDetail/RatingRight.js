import React from "react";
import classes from "./RatingRight.module.css";
import Image from "next/image";

const RatingRight = (props) => {
  const changeRatingBook = (book) => {
    props.onChangeBook(book);
  };
  return (
    <div className={classes.right}>
      <h3>Rate another Book</h3>
      <div className={classes.rateList}>
        <div className={classes.list}>
          {props.books.map((book) => {
            return (
              <div
                className={classes.imageCont}
                key={book._id}
                onClick={() => changeRatingBook(book)}
              >
                <Image
                  src={book.image}
                  alt=""
                  width={150}
                  height={240}
                  className={classes.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RatingRight;
