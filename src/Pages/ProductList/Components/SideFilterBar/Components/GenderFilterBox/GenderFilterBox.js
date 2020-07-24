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

  render() {
    const { fold } = this.state;
    const { filters } = this.props;
    console.log(filters);

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
              filters.gender_filters.map((genderFilter) => {
                return (
                  <li className="typeList">
                    <label for={genderFilter}>
                      <input
                        type="checkbox"
                        name="gender"
                        id={genderFilter}
                        value={genderFilter}
                        className={genderFilter}
                      />
                      {genderFilter}
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
