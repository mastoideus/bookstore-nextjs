import React from "react";
import classes from "./FeaturedBook.module.css";
import Image from "next/image";
import Link from "next/link";

const FeaturedBook = (props) => {
  return (
    <div className={classes.featuredBook}>
      <div className={classes.imgContainer}>
        <Image
          className={classes.image}
          src={props.image}
          width={600}
          height={1000}
          alt=""
          layout="responsive"
        />
      </div>

      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>by {props.author}</p>
        <p className={classes.description}>{props.description}</p>
        <button className={classes.btn}>
          <Link href={`/book/${props.slug}`}>See the Book</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedBook;
