import React from "react";
import Image from "next/image";
import classes from "./AppButton.module.css";

const AppButton = (props) => {
  return (
    <button className={classes.appBtn}>
      <Image
        src={props.image}
        width={70}
        height={70}
        alt=""
        className={classes.img}
      />
      <div className={classes.appBtnCont}>
        <span className={classes.subTitle}>{props.subTitle}</span>
        <span className={classes.title}>{props.title}</span>
      </div>
    </button>
  );
};

export default AppButton;
