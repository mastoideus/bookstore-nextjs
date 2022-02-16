import React from "react";
import BookDetail from "../../components/BookDetail/BookDetail";
import Book from "../../models/Book";
import db from "../../utils/db";

const BookDetailPage = (props) => {
  const { book } = props;

  if (!book) {
    return (
      <div
        style={{
          backgroundColor: "brown",
          fontFamily: "Oswald",
          width: "30%",
          height: "150px",
          margin: "200px auto",
          color: "whitesmoke",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Book not Found</h2>
      </div>
    );
  }

  return (
    <BookDetail
      title={book.title}
      author={book.author}
      image={book.image}
      pages={book.pages}
      price={book.price}
      slug={book.slug}
      rating={book.rating}
    />
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const book = await Book.findOne({ slug: slug }).lean();
  await db.disconnect();

  return {
    props: {
      book: db.convertDocToObj(book),
    },
  };
};

export default BookDetailPage;
