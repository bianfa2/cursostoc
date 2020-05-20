import React from "react";
import "./Input.scss";

const Input = (props) => {
  return <input type="text" className="custom-input" {...props} />;
};

export default Input;
