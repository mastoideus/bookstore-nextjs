import React from "react";
import FeaturedBook from "./FeaturedBook";
import { books } from "../../data/dummy-data";
import classes from "./FeaturedList.module.css";
import { Component } from "react";
import Slider from "react-slick";

let slidestoShow = 3;
let slidesWidth = "96%";

export default class MultipleItems extends Component {
  componentDidUpdate() {
    if (typeof window !== undefined && window.innerWidth < 666) {
      slidestoShow = 1;
      slidesWidth = "86%";
    } else {
      slidestoShow = 3;
      slidesWidth = "96%";
    }
  }

  render() {
    const featured = books.filter((book) => {
      return book.featured === true;
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidestoShow,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    return (
      <div
        style={{ margin: "auto", maxWidth: slidesWidth }}
        className={classes.container}
      >
        <h2 className={classes.featuredTitle}> Popular Books </h2>
        <Slider {...settings}>
          {featured.map((book) => {
            return (
              <FeaturedBook
                key={book.slug}
                slug={book.slug}
                title={book.title}
                author={book.author}
                image={book.image}
                description={book.description}
                rating={book.rating}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}
