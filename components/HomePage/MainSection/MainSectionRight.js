import React from "react";
import classes from "./MainSectionRight.module.css";
import MainSectionBook from "./MainSectionBook";

const MainSectionRight = ({ genres, books, genresOnScroll, onFilter }) => {
  return (
    <div className={classes.rightSection}>
      <div className={classes.rightHeader}>
        <h1>Popular by Genre</h1>
        <div
          className={`${classes.genres} ${
            genresOnScroll && classes.genresBackground
          }`}
        >
          {genres.map((genre) => {
            return (
              <button key={genre} onClick={() => onFilter(genre)}>
                {genre}
              </button>
            );
          })}
        </div>
      </div>
      <div className={classes.dividingLine}></div>
      <div style={{ padding: "2rem" }} className={classes.booksList}>
        {books.map((book) => {
          return (
            <MainSectionBook
              key={book.slug}
              image={book.image}
              price={book.price}
              title={book.title}
              author={book.author}
              slug={book.slug}
              rating={book.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainSectionRight;
