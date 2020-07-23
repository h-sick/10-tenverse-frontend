import React from "react";
import { FiMinus } from "react-icons/fi";
import "./GenderFilterBox.scss";

class GenderFilterBox extends React.Component {
  render() {
    return (
      <div className="GenderFilterBox">
        <header>
          <p>구분</p>
          <FiMinus />
        </header>
        <ul>
          <li>
            <label for="male">
              <input
                type="checkbox"
                name="gender"
                id="male"
                value="male"
                className="male"
              />
              남성
            </label>
          </li>
          <li>
            <label for="female">
              <input
                type="checkbox"
                name="gender"
                id="female"
                value="female"
                className="female"
              />
              여성
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default GenderFilterBox;
