import React, { Component } from "react";
import "./SizeTable.scss";

class SizeTable extends Component {
  constructor() {
    super();
    this.state = {
      isBtnActive: null,
    };
  }

  sizeTableBtn = (i) => {
    this.setState({
      isBtnActive: i,
    });
  };

  render() {
    const product = this.props.product;
    const { isBtnActive } = this.state;
    const { sizeTableBtn } = this;

    return (
      <div className="SizeTable">
        <ul>
          {product.length !== 0
            ? product[1].size_list.sort().map((size, i) => {
                return (
                  <li
                    onClick={() => sizeTableBtn(i)}
                    className={isBtnActive === i ? "sizeBtnClicked" : null}
                  >
                    {size}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default SizeTable;
