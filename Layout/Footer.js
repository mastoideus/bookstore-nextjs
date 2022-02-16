import React from "react";
import classes from "./Footer.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import AppButton from "./AppButton";
import appleIcon from "../public/images/appleStore.png";
import googleIcon from "../public/images/googlePlay.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.appBtns}>
          <div>
            <AppButton
              image={appleIcon}
              subTitle="GET IT ON"
              title="Google Play"
            />
            <AppButton
              image={googleIcon}
              subTitle="Download on the"
              title="Apple Store"
            />
          </div>
        </div>
        <div className={classes.sectionContainer}>
          <div className={classes.sections}>
            <h3>Info</h3>
            <p>About us</p>
            <p>Privacy policy</p>
            <p>Terms of use</p>
          </div>
          <div className={classes.sections}>
            <h3>Join us</h3>
            <p>Become a Partner</p>
            <p>Sell with us</p>
            <p>Job on Bookmark@</p>
          </div>
          <div className={classes.sections}>
            <h3>User support</h3>
            <span className={classes.telInfo}>
              <BsFillTelephoneFill />
              <p>
                <span style={{ fontWeight: "bold" }}>033 567 345</span> User
                support line
              </p>
            </span>
            <span className={classes.telInfo}>
              <BsFillTelephoneFill />
              <p>
                <span style={{ fontWeight: "bold" }}>033 467 232</span> Partner
                support line
              </p>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <button className={classes.supportBtn}>User support</button>
              <span
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  marginLeft: "1rem",
                }}
              >
                <FaFacebookSquare className={classes.faIcons} />
                <FaInstagramSquare className={classes.faIcons} />
              </span>
            </span>
          </div>
        </div>
      </div>
      <p style={{ marginTop: "7rem" }}>Bookmark@ © 2021 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
