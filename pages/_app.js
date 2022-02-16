import "../styles/globals.css";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModeProvider } from "../mode-context";

function MyApp({ Component, pageProps }) {
  const [navOnScroll, setNavOnScroll] = useState(false);

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavOnScroll(true);
      } else {
        setNavOnScroll(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <ModeProvider>
      <Layout onScrollNav={navOnScroll}>
        <Component {...pageProps} />
      </Layout>
    </ModeProvider>
  );
}

export default MyApp;
