import React from "react";
import { FiMinus } from "react-icons/fi";
import "../GenderFilterBox/GenderFilterBox.scss";

class TypeFilterBox extends React.Component {
  render() {
    return (
      <div className="TypeFilterBox">
        <header>
          <p>제품타입</p>
          <FiMinus />
        </header>
        <ul>
          <li>
            <label for="mule">
              <input
                type="checkbox"
                name="gender"
                id="mule"
                value="mule"
                className="mule"
              />
              뮬
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
              샌들&뮬
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
              스니커즈
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default TypeFilterBox;
