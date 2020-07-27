import React from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import "./ColorFilterBox.scss";

const colors = {
  black: "#000000",
  blue: "#0600ff",
  green: "#009900",
  indigo: "#141936",
  purple: "#6600cc",
  brown: "#986633",
  gray: "#999999",
  khaki: "#a39263",
  beige: "#f0e4d2",
  red: "#ff0400",
  orange: "#ff6600",
  pink: "#ffb6c1",
  yellow: "#ffcc00",
  white: "#ffffff",
};

class ColorFilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      fold: false,
    };
  }

  handleFolder = () => {
    this.setState({ fold: !this.state.fold });
  };

  render() {
    const { fold } = this.state;
    const { filters } = this.props;

    return (
      <div className="ColorFilterBox">
        <section className={fold ? "fold" : "display"}>
          <header onClick={this.handleFolder}>
            <p>색상</p>
            <FiMinus className={fold ? "hidden" : "minusIcon"} />
            <FiPlus className={fold ? "plusIcon" : "hidden"} />
          </header>
          <ul>
            {filters &&
              filters.color_filters.map((colorFilter) => {
                return (
                  <li>
                    <div
                      value={colorFilter}
                      className={(() => {
                        if (colorFilter === "white") {
                          return "white";
                        } else {
                          return null;
                        }
                      })()}
                      style={{ backgroundColor: colors[colorFilter] }}
                    ></div>
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    );
  }
}

export default ColorFilterBox;
