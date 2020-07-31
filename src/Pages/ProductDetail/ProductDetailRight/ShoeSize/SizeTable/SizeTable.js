import React, { Component } from "react";
import "./SizeTable.scss";

class SizeTable extends Component {
  constructor() {
    super();
    this.state = {
      isBtnActive: null,
      shoeSize: 0,
    };
  }

  sizeTableBtn = (size, i) => {
    this.setState({
      isBtnActive: i,
      shoeSize: size,
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
                    onClick={() => sizeTableBtn(size, i)}
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
