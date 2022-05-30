import React from "react";
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
          <input placeholder="your todo"></input>
        </div>
        <div>
          <h3>select priority</h3>
          <select>
            <option disabled>select priority</option>
            <option>high</option>
            <option>middle</option>
            <option>easy</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
