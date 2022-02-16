import React, { Fragment } from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { useGlobalModeContext } from "../mode-context";

const Layout = (props) => {
  const { modeState } = useGlobalModeContext();

  return (
    <Fragment>
      <MainHeader onScrollNav={props.onScrollNav} />
      <main
        style={{
          boxSizing: "border-box",
          paddingBottom: "140px",
          backgroundColor: `${
            modeState.darkMode ? "rgba(117, 190, 218, 0.5)" : "transparent"
          }`,
        }}
      >
        {React.cloneElement(props.children, { ...props })}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
