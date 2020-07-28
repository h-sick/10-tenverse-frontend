import React from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import "./GenderFilterBox.scss";

class GenderFilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      fold: false,
    };
  }

  handleFolder = () => {
    this.setState({ fold: !this.state.fold });
  };

  handleFilterChange = (e) => {
    this.props.handleFilterChange(e.target.name, e.target.value);
  };

  render() {
    const { fold } = this.state;
    const { filters } = this.props;

    return (
      <div className="GenderFilterBox">
        <section className={fold ? "fold" : "display"}>
          <header onClick={this.handleFolder}>
            <p>구분</p>
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
                        name="gender"
                        id={filter}
                        value={filter}
                        className={filter}
                        onClick={this.handleFilterChange}
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

export default GenderFilterBox;
