import React from "react";
import { FiMinus } from "react-icons/fi";
import "./ColorFilterBox.scss";

class ColorFilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: [
        { name: "black", color: "#000000" },
        { name: "blue", color: "#0600ff" },
        { name: "green", color: "#009900" },
        { name: "indigo", color: "#141936" },
        { name: "purple", color: "#6600cc" },
        { name: "brown", color: "#986633" },
        { name: "gray", color: "#999999" },
        { name: "khaki", color: "#a39263" },
        { name: "beige", color: "#f0e4d2" },
        { name: "red", color: "#ff0400" },
        { name: "orange", color: "#ff6600" },
        { name: "pink", color: "#ffb6c1" },
        { name: "yellow", color: "#ffcc00" },
        { name: "white", color: "#ffffff" },
      ],
    };
  }

  render() {
    const { colors } = this.state;

    return (
      <div className="ColorFilterBox">
        <header>
          <p>색상</p>
          <FiMinus />
        </header>
        <ul>
          {colors.map((color) => {
            return (
              <li>
                <div
                  value={color.name}
                  className={(() => {
                    if (color.name === "white") {
                      return "white";
                    } else {
                      return null;
                    }
                  })()}
                  style={{ backgroundColor: color.color }}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ColorFilterBox;
