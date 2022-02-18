import React from "react";
import classes from "./MainHeader.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { useGlobalModeContext } from "../mode-context";
import { useSession } from "next-auth/client";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";

const MainHeader = (props) => {
  const { modeState, darkModeHandler } = useGlobalModeContext();
  const [session, loading] = useSession();

  const router = useRouter();

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header
      style={{
        backgroundColor: `${props.onScrollNav && modeState.darkMode ? "" : ""}`,
      }}
      className={`${classes.header} ${
        props.onScrollNav && classes.changeNavBgd
      }`}
    >
      <Link href="/" passHref>
        <a>
          <h2>
            Bookmark
            <span style={{ color: "brown" }}>@</span>
          </h2>
        </a>
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <label
            className={`${classes.switch} ${session && classes.switchLogin}`}
          >
            <input type="checkbox" onClick={darkModeHandler} />
            <span className={`${classes.slider} ${classes.round}`}></span>
          </label>
          {session && (
            <li className={classes.ordersLink}>
              <Link href="/shipping">
                <a
                  className={classes.ordersLink}
                  style={{
                    backgroundColor: props.onScrollNav ? "#042541" : "",
                  }}
                >
                  My Orders
                </a>
              </Link>
            </li>
          )}
          <li
            style={{ display: "flex", alignItems: "center" }}
            className={classes.cart}
          >
            <FaShoppingCart />
            <Link href="/cart">Cart</Link>
            <p className={classes.cartQuantity}>
              {modeState.cart.totalQuantity}
            </p>
          </li>
          {session ? (
            <li>
              <button
                className={classes.logoutBtn}
                style={{
                  color: props.onScrollNav ? "wheat" : "black",
                  borderColor: props.onScrollNav ? "wheat" : "black",
                }}
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          ) : (
            <li className={classes.loginbtn}>
              <FaUserAlt />
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
