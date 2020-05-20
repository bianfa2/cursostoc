import React from "react";
import "./Slider.scss";

const Slider = ({ buttonBackground, buttonColor, ...props }) => {
  return <section className="slider" {...props}></section>;
};

export default Slider;
