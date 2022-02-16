import React from "react";
import { useGlobalModeContext } from "../mode-context";
import Cart from "../components/Cart/Cart";

const CartPage = () => {
  const { modeState } = useGlobalModeContext();

  const cartItems = modeState.cart.cartBooks;

  return (
    <div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
