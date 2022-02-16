import React from "react";
import classes from "./MainSectionBook.module.css";
import Image from "next/image";
import CustomButton from "../../CustomButton/CustomButton";
import BookRating from "./BookRating";
import { useGlobalModeContext } from "../../../mode-context";
import Link from "next/link";

const MainSectionBook = (props) => {
  const { modeState } = useGlobalModeContext();

  let avRating = 0;
  if (props.rating.length > 0) {
    avRating = Math.round(
      props.rating.reduce((sum, el) => sum + el) / props.rating.length
    );
  }

  return (
    <div
      style={{ boxShadow: modeState.darkMode && "2px 4px 10px darkred" }}
      className={classes.mainBook}
    >
      <div className={classes.imgContainer}>
        <Image
          src={props.image}
          alt=""
          width={150}
          height={250}
          className={classes.image}
        />
      </div>

      <div className={classes.mainBookInfo}>
        <h1>{props.title}</h1>
        <h3>by {props.author}</h3>
        <div style={{ margin: "0 15px" }}>
          <BookRating smallStars="20px" avRating={avRating} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link href={`/book/rating/${props.slug}`}>
            <a className={classes.ratingBtn}>Rating</a>
          </Link>
          <CustomButton btnClass={classes.bookBtn}>
            <Link href={`/book/${props.slug}`}>Show Details</Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default MainSectionBook;
