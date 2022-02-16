import React from "react";
import classes from "./CartItem.module.css";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import { useGlobalModeContext } from "../../mode-context";

const CartItem = (props) => {
  const { addToCartHandler, removeBookHandler } = useGlobalModeContext();

  return (
    <div className={classes.cartItem}>
      <h5>{props.title}</h5>
      <h6>by {props.author}</h6>
      <Image src={props.image} width={100} height={180} alt="" />
      <p>${props.sum.toFixed(2)}</p>
      <small>{props.quantity}x</small>
      <div style={{ display: "flex" }}>
        <CustomButton
          btnClass={classes.btnB}
          onClick={() => removeBookHandler(props)}
        >
          Remove
        </CustomButton>
        <CustomButton
          btnClass={classes.btnB}
          onClick={() => addToCartHandler(props)}
        >
          Add
        </CustomButton>
      </div>
    </div>
  );
};

export default CartItem;
