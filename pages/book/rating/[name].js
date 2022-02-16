import React from "react";
import Book from "../../../models/Book";
import db from "../../../utils/db";
import RatingDetail from "../../../components/RatingDetail/RatingDetail";

const RatingDetailPage = (props) => {
  const { book, books } = props;
  return <RatingDetail book={book} books={books} />;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { name } = params;
  await db.connect();
  const books = await Book.find({}).lean();
  const ratedBook = books.find((book) => book.slug === name);
  await db.disconnect();

  return {
    props: {
      book: db.convertDocToObj(ratedBook),
      books: books.map((book) => db.convertDocToObj(book)),
    },
  };
};

export default RatingDetailPage;
