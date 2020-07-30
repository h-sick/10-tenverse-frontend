import React from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import "./SizeFilterBox.scss";

class SizeFilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      fold: false,
      isBtnActive: null,
    };
  }

  handleFolder = () => {
    this.setState({ fold: !this.state.fold });
  };

  handleSizeClick = (e, i) => {
    this.setState({ isBtnActive: i });
    this.props.handleFilterChange(e.target.name, e.target.value);
  };

  render() {
    const { fold, isBtnActive } = this.state;
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
              filters.map((size, i) => {
                return (
                  <button
                    onClick={(e) => this.handleSizeClick(e, i)}
                    name="size"
                    value={size}
                    className={isBtnActive === i ? "sizeBtnClicked" : null}
                  >
                    {size}
                  </button>
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}

export default SizeFilterBox;
