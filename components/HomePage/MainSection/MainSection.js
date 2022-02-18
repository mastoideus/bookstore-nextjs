import React, { useEffect, useState } from "react";
import classes from "./MainSection.module.css";
import MainSectionLeft from "./MainSectionLeft";
import MainSectionRight from "./MainSectionRight";

const MainSection = (props) => {
  const [sortedBooks, setSortedBooks] = useState(props.books);
  const [genresOnScroll, setGenresOnScroll] = useState(false);

  console.log(sortedBooks);

  const onPriceHandler = () => {
    const filterByPrice = sortedBooks.sort((a, b) => (a > b ? 1 : -1));
    setSortedBooks([...filterByPrice]);
  };

  const genres = ["All", ...new Set(props.books.map((book) => book.genre))];

  const filterBooksHandler = (genre) => {
    if (genre === "All") {
      setSortedBooks(props.books);
      return;
    }
    const filteredBooks = props.books.filter((book) => book.genre === genre);
    setSortedBooks(filteredBooks);
  };

  const onTitleHandler = () => {
    const filterByTitle = sortedBooks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    setSortedBooks([...filterByTitle]);
  };

  const onAuthorHandler = (author) => {
    const booksByAuthor = props.books.filter((book) => book.author === author);
    setSortedBooks(booksByAuthor);
  };

  useEffect(() => {
    const genresListener = window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        setGenresOnScroll(true);
      } else {
        setGenresOnScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", genresListener);
    };
  }, []);

  return (
    <section className={classes.mainSection}>
      <MainSectionLeft
        books={props.books}
        onTitle={onTitleHandler}
        onPrice={onPriceHandler}
        onAuthor={onAuthorHandler}
      />
      <MainSectionRight
        genres={genres}
        books={sortedBooks}
        genresOnScroll={genresOnScroll}
        onFilter={filterBooksHandler}
      />
    </section>
  );
};

export default MainSection;
