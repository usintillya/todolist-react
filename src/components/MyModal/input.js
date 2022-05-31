import React from "react";
import myButton from "../myButton/myButton";
import "./input.css";

const MyModal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div>
          <h3>your todo</h3>
          <input className="myInp" placeholder="your todo"></input>
        </div>
        <div>
          <h3>select priority</h3>
          <select className="mySelect">
            <option disabled>select priority</option>
            <option className="mySelect_high">high</option>
            <option className="mySelect_middle">middle</option>
            <option className="mySelect_easy">easy</option>
          </select>
        </div>
        <div className="btn-grid">
          <myButton className="myBtn-sub">add</myButton>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
