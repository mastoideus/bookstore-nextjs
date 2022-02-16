import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = (props) => {
  return (
    <button
      className={`${classes.btn} ${props.btnClass}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
