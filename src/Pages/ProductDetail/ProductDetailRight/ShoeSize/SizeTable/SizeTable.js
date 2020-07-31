import React, { Component } from "react";
import "./SizeTable.scss";

class SizeTable extends Component {
  render() {
    const { product, sizeTableBtn, isBtnActive } = this.props;

    return (
      <div className="SizeTable">
        <ul>
          <>
            {product.name &&
              product.size_list.sort().map((size, i) => {
                return (
                  <li
                    onClick={() => sizeTableBtn(size, i)}
                    className={isBtnActive === i ? "sizeBtnClicked" : null}
                  >
                    {size}
                  </li>
                );
              })}
          </>
        </ul>
      </div>
    );
  }
}

export default SizeTable;
