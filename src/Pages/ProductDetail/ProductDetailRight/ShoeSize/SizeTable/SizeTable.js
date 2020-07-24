import React, { Component } from "react";
import "./SizeTable.scss";

class SizeTable extends Component {
  constructor() {
    super();
    this.state = {
      shoeSizeStart: 220,
      isBtnActive: null,
    };
  }

  sizeTableBtn = (i) => {
    this.setState({
      isBtnActive: i,
    });
  };

  render() {
    const { shoeSizeStart, isBtnActive } = this.state;
    let shoeSizeArr = Array(17).fill(shoeSizeStart);

    return (
      <div className="SizeTable">
        <ul>
          {shoeSizeArr.map((size, i) => {
            return (
              <li
                onClick={() => this.sizeTableBtn(i)}
                className={isBtnActive === i ? "sizeBtnClicked" : null}
              >
                {(size += 5 * i)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SizeTable;
