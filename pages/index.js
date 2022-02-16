import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import FeaturedList from "../components/HomePage/FeaturedList";
import MainSection from "../components/HomePage/MainSection/MainSection";
import db from "../utils/db";
import Book from "../models/Book";

const HomePage = ({ onScrollNav, books }) => {
  return (
    <React.Fragment>
      <HeroSection onScrollNav={onScrollNav} />
      <FeaturedList />
      <MainSection books={books} />
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  await db.connect();
  const books = await Book.find({}).lean();
  await db.disconnect();

  return {
    props: {
      books: books.map(db.convertDocToObj),
    },
    revalidate: 6000,
  };
};

export default HomePage;
