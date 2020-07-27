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
    let sizeList = product.length !== 0 ? product[1].size_list.sort() : null;

    return (
      <div className="SizeTable">
        <ul>
          {product.length !== 0
            ? sizeList.map((size, i) => {
                return (
                  <li
                    onClick={() => this.sizeTableBtn(i)}
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
