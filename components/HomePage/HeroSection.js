import React from "react";
import classes from "./HeroSection.module.css";
import heroImage from "../../public/images/herobooks.jpg";
import Image from "next/image";
import { FaTruck } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";
import { FaTicketAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

const InfoComponent = (props) => {
  return (
    <div className={classes.infoComp}>
      <div className={classes.infoCompIcon}>{props.icon}</div>
      <div className={classes.infoCompContent}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

const HeroSection = (props) => {
  return (
    <React.Fragment>
      <div className={classes.hero}>
        <Image
          src={heroImage}
          alt=""
          width={700}
          height={400}
          className={classes.heroImg}
        />
      </div>
      <div className={classes.infoContainer}>
        <h2
          className={`${classes.hiddenText} ${
            props.onScrollNav && classes.goUp
          }`}
        >
          BOOKSTORE FOR THE WISE ONE
        </h2>
        <div className={classes.infoInnerContainer}>
          <InfoComponent
            title="Quick Delivery"
            description="As soon as you buy we deliver. The next day you are in the world of your new Book."
            icon={<FaTruck />}
          />

          <InfoComponent
            title="Pay with Ease"
            description="Choose the way you wanna pay. Paypal or Cash your in the game. Dont wait to long its a shame."
            icon={<GrPaypal />}
          />
          <InfoComponent
            title="Best Deal"
            description="The site with the best prices. If you wait for special occasions you will be truly awarded."
            icon={<FaTicketAlt />}
          />
          <InfoComponent
            title="Secured Payment"
            description="You can be asure that there will be no nightmare regarding the payment security wall."
            icon={<RiSecurePaymentLine />}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
