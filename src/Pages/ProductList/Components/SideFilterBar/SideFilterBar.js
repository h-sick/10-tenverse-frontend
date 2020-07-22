import React from "react";
import { Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import "./SideFilterBar.scss";

class SideFilterBar extends React.Component {
  render() {
    return (
      <aside className="SideFilterBar">
        <div>
          <header>
            <p>구분</p>
            <FiMinus />
          </header>
          <ul>
            <li>
              <Link to="/male">
                <input type="checkbox" name="gender" value="male" />
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideFilterBar;
