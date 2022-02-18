import React from "react";
import classes from "./MainSectionLeft.module.css";
import CustomButton from "../../CustomButton/CustomButton";

const MainSectionLeft = (props) => {
  const authors = [...new Set(props.books.map((book) => book.author))];

  return (
    <div className={classes.leftSection}>
      <h1>Filter Books by:</h1>
      <div className={classes.filterActions}>
        <CustomButton onClick={props.onTitle}>Title</CustomButton>
        <CustomButton onClick={props.onPrice}>Price</CustomButton>
      </div>
      <h1>Search Books by Author:</h1>

      <div className={classes.authorList}>
        {authors.map((author) => {
          return (
            <button
              className={classes.btn}
              key={author}
              onClick={() => props.onAuthor(author)}
            >
              {author}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MainSectionLeft;
