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
              filters.type_filters.map((typefilter) => {
                return (
                  <li className="typeList">
                    <label for={typefilter}>
                      <input
                        type="checkbox"
                        name="type"
                        id={typefilter}
                        value={typefilter}
                        className={typefilter}
                      />
                      {typefilter}
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
