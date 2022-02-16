import { createContext, useReducer, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const ModeContext = createContext();

const modeReducer = (state, action) => {
  if (action.type === "DARK_MODE_ONOFF") {
    return {
      ...state,
      darkMode: !state.darkMode,
    };
  }
  if (action.type === "ADD_TO_CART") {
    const selectedBook = action.payload;
    const existingBook = state.cart.cartBooks.find(
      (book) => book.slug === selectedBook.slug
    );
    const totalQuantity = state.cart.totalQuantity + 1;

    if (existingBook) {
      const copiedCartBooks = [...state.cart.cartBooks];
      const updatedExistingBook = {
        ...existingBook,
        quantity: existingBook.quantity + 1,
        sum: existingBook.sum + selectedBook.price,
      };
      const existingBookIndex = copiedCartBooks.findIndex(
        (book) => book.slug === updatedExistingBook.slug
      );
      copiedCartBooks[existingBookIndex] = updatedExistingBook;

      Cookies.set("cartBooks", JSON.stringify(copiedCartBooks));
      Cookies.set("totalQuant", totalQuantity);

      return {
        ...state,
        cart: {
          totalQuantity: state.cart.totalQuantity + 1,
          cartBooks: copiedCartBooks,
          totalAmount: state.cart.totalAmount + selectedBook.price,
        },
        cartChange: true,
      };
    } else {
      const updatedCartBooks = state.cart.cartBooks.concat(selectedBook);

      Cookies.set("cartBooks", JSON.stringify(updatedCartBooks));

      return {
        ...state,
        cart: {
          totalQuantity: state.cart.totalQuantity + 1,
          cartBooks: updatedCartBooks,
          totalAmount: state.cart.totalAmount + selectedBook.price,
        },
        cartChange: true,
      };
    }
  }
  if (action.type === "REMOVE_BOOK") {
    const removedBook = action.payload;
    if (removedBook.quantity === 1) {
      const filteredCart = state.cart.cartBooks.filter(
        (book) => book.slug !== removedBook.slug
      );
      return {
        ...state,
        cart: {
          totalQuantity: state.cart.totalQuantity - 1,
          cartBooks: filteredCart,
          totalAmount: state.cart.totalAmount - removedBook.price,
        },
        cartChange: true,
      };
    } else {
      const copiedCart = [...state.cart.cartBooks];
      const removedBookIndex = copiedCart.findIndex(
        (book) => book.slug === removedBook.slug
      );
      const updatedBook = {
        ...removedBook,
        quantity: removedBook.quantity - 1,
        sum: removedBook.sum - removedBook.price,
      };
      copiedCart[removedBookIndex] = updatedBook;
      return {
        ...state,
        cart: {
          totalQuantity: state.cart.totalQuantity - 1,
          cartBooks: copiedCart,
          totalAmount: state.cart.totalAmount - removedBook.price,
        },
        cartChange: true,
      };
    }
  }
  if (action.type === "REPLACE_CART") {
    const cartData = action.payload;

    return {
      ...state,
      cart: cartData,
    };
  }

  return state;
};

export const ModeProvider = (props) => {
  const [modeState, dispatch] = useReducer(modeReducer, {
    darkMode: false,
    cart: {
      cartBooks: /*Cookies.get("cartBooks")
        ? JSON.parse(Cookies.get("cartBooks"))
        :*/ [],
      totalQuantity: /* Cookies.get("totalQuant") ? Cookies.get("totalQuant") :*/ 0,
      totalAmount: 0,
    },
    cartChange: false,
  });

  const { cartChange, cart } = modeState;

  /*sending the cart to firebase*/
  useEffect(() => {
    if (cartChange) {
      const sendCartData = async () => {
        const response = await fetch(
          "https://routing-app-7957b-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        return data;
      };

      sendCartData();
    }
  }, [cart, cartChange]);

  /*fetching the cart from firebase */

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://routing-app-7957b-default-rtdb.firebaseio.com/cart.json"
      );
      const data = response.json();

      return data;
    };

    const dispatchCartReplace = async () => {
      const cartData = await fetchData();

      if (!cartData || !cartData.cartBooks) {
        return;
      }
      dispatch({ type: "REPLACE_CART", payload: cartData });
    };

    dispatchCartReplace();
  }, []);

  const darkModeHandler = () => {
    dispatch({ type: "DARK_MODE_ONOFF" });
  };

  const addToCartHandler = (book) => {
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const removeBookHandler = (book) => {
    dispatch({ type: "REMOVE_BOOK", payload: book });
  };

  return (
    <ModeContext.Provider
      value={{
        modeState,
        darkModeHandler,
        addToCartHandler,
        removeBookHandler,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};

export const useGlobalModeContext = () => {
  return useContext(ModeContext);
};
