import React from "react";
import classes from "./BookDetail.module.css";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import { useGlobalModeContext } from "../../mode-context";
import { useRouter } from "next/router";

const BookDetail = (props) => {
  const { addToCartHandler } = useGlobalModeContext();
  const router = useRouter();

  const addToCartHandlerBegin = () => {
    addToCartHandler(book);
    router.push("/");
    return;
  };

  const book = {
    title: props.title,
    image: props.image,
    price: props.price,
    sum: props.price,
    quantity: 1,
    author: props.author,
    slug: props.slug,
  };
  return (
    <div className={classes.screen}>
      <div className={classes.book}>
        <div className={classes.rub}>
          <h1>{props.title}</h1>
          <h3>by {props.author}</h3>
          <div className={classes.imgRub}>
            <div className={classes.imgShadow}>
              <Image
                src={props.image}
                width={200}
                height={300}
                alt=""
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bookInfo}>
        <h1>
          <span style={{ color: "grey" }}>title:</span> {props.title}
        </h1>
        <h1>
          <span style={{ color: "grey" }}>author:</span> {props.author}
        </h1>
        <h1>
          <span style={{ color: "grey" }}>price:</span> ${props.price}
        </h1>
        <h1>
          <span style={{ color: "grey" }}>pages:</span> {props.pages}
        </h1>
        <CustomButton onClick={addToCartHandlerBegin}>Add to Cart</CustomButton>
      </div>
    </div>
  );
};

export default BookDetail;
