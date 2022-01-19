import React from "react";
import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return <img src={spinner} style={spinnerStyle} alt="" />;
};

const spinnerStyle = {
  width: "100px",
  display: "block",
  margin: "auto",
};

export default Spinner;
