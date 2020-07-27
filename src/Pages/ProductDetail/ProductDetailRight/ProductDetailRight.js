import React, { Component } from "react";
import ShoeInfo from "./ShoeInfo/ShoeInfo";
import ShoeColor from "./ShoeColor/ShoeColor";
import ShoeSize from "./ShoeSize/ShoeSize";
import "./ProductDetailRight.scss";

class ProductDetailRight extends Component {
  render() {
    const { scrollTo, refArr, product } = this.props;
    return (
      <div className="ProductDetailRight">
        <ShoeInfo scrollTo={scrollTo} refArr={refArr} product={product} />
        <ShoeColor product={product} />
        <ShoeSize product={product} />
      </div>
    );
  }
}

export default ProductDetailRight;
