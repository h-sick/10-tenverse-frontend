import React from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import "./SizeFilterBox.scss";

class SizeFilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      fold: false,
      clicked: false,
    };
  }

  handleFolder = () => {
    this.setState({ fold: !this.state.fold });
  };

  handleSizeClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { fold, clicked } = this.state;
    const { filters } = this.props;

    return (
      <section className="SizeFilterBox">
        <div className={fold ? "SizeFilterBox fold" : "SizeFilterBox display"}>
          <header onClick={this.handleFolder}>
            <p>사이즈</p>
            <FiMinus className={fold ? "hidden" : "minusIcon"} />
            <FiPlus className={fold ? "plusIcon" : "hidden"} />
          </header>
          <ul className="box">
            {filters &&
              filters.map((filter) => {
                return (
                  <li
                    onclick={this.handleSizeClick}
                    name={clicked ? "sizeBtnClicked" : null}
                  >
                    {filter}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}

export default SizeFilterBox;
