import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useGlobalModeContext } from "../../mode-context";
import CustomButton from "../CustomButton/CustomButton";
import Link from "next/link";

const Cart = (props) => {
  const { modeState } = useGlobalModeContext();

  if (!props.cartItems) {
    return <h1></h1>;
  }

  return (
    <React.Fragment>
      <div className={classes.cartHero}>
        <div className={classes.cartHeroContent}>
          <h3>My</h3>
          <h1>
            BOOK.<span style={{ color: "black" }}>LIST</span>
          </h1>
          <div className={classes.cartBox}>
            <div className={classes.cartBoxInner}>
              <h2>Total Price: ${modeState.cart.totalAmount.toFixed(2)}</h2>
              <h4 style={{ fontSize: "1.5rem" }}>
                {modeState.cart.totalQuantity}x
              </h4>
              <CustomButton>
                <Link href="/shipping">Order</Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.cartList}>
        {props.cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.slug}
              image={cartItem.image}
              price={cartItem.price}
              title={cartItem.title}
              author={cartItem.author}
              quantity={cartItem.quantity}
              sum={cartItem.sum}
              slug={cartItem.slug}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Cart;
