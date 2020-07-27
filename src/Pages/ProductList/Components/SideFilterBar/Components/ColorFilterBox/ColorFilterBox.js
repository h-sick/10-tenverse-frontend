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
              filters.map((filter) => {
                return (
                  <li>
                    <div
                      value={filter}
                      className={(() => {
                        if (filter === "white") {
                          return "white";
                        } else {
                          return null;
                        }
                      })()}
                      style={{ backgroundColor: colorValues[filter] }}
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
