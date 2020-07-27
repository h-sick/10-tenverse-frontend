import React from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import "../GenderFilterBox/GenderFilterBox.scss";

class TypeFilterBox extends React.Component {
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
      <div className="TypeFilterBox">
        <section className={fold ? "fold" : "display"}>
          <header onClick={this.handleFolder}>
            <p>제품타입</p>
            <FiMinus className={fold ? "hidden" : "minusIcon"} />
            <FiPlus className={fold ? "plusIcon" : "hidden"} />
          </header>
          <ul>
            {filters &&
              filters.map((filter) => {
                return (
                  <li className="typeList">
                    <label for={filter}>
                      <input
                        type="checkbox"
                        name="type"
                        id={filter}
                        value={filter}
                        className={filter}
                      />
                      {filter}
                    </label>
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    );
  }
}

export default TypeFilterBox;
