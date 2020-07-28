import React from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { colorValues } from "../../../../../../config";
import "./ColorFilterBox.scss";

class ColorFilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      fold: false,
      colorFilterValue: "",
    };
  }

  handleFolder = () => {
    this.setState({ fold: !this.state.fold });
  };

  handleFilterChange = (e) => {
    this.props.handleFilterChange(e.target.name, e.target.value);
    this.setState({ colorFilterNumber: e.target.value });
  };

  handleClassName = (filter) => {
    const { colorFilterValue } = this.state;
    if (colorFilterValue === filter) {
      if (filter === "white") {
        return "white selected";
      }
      return "selected";
    } else if (filter === "white" && colorFilterValue !== filter) {
      return "white";
    }
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
              filters.map((filter) => {
                return (
                  <li>
                    <button
                      name="color"
                      value={filter}
                      className={this.handleClassName(filter)}
                      style={{ backgroundColor: colorValues[filter] }}
                      onClick={this.handleFilterChange}
                    ></button>
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
