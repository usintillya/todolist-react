import React from "react";
import "./myButton.css";

const myButton = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default myButton;
