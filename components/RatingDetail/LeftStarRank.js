import React from "react";
import classes from "./LeftStarRank.module.css";

const LeftStarRank = (props) => {
  return (
    <div className={classes.starRank}>
      <h3>{`${props.star} ${props.star > 1 ? "Stars" : "Star"}`}</h3>
      <div className={classes.starLineCont}>
        <div style={{ width: props.width }} className={classes.starLine}></div>
      </div>
      <small style={{ marginLeft: "10px" }}>{`${
        props.votes === undefined ? "0" : props.votes
      } (votes)`}</small>
    </div>
  );
};

export default LeftStarRank;
