import React from "react";
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
        </div>
      </aside>
    );
  }
}

export default SideFilterBar;
