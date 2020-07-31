import React, { Component } from "react";
import ShoeColorList from "./ShoeColorList";
import "./ShoeColor.scss";

class ShoeColor extends Component {
  render() {
    const { product } = this.props;
    const shoeIdList = product.color_list.map((color) => {
      return color.id;
    });

    const shoeColorList = product.color_list.map((color) => {
      return color.main_image;
    });

    const listShoeColor = shoeColorList.map((_, k) => {
      return (
        <div className="shoeColorImageEach">
          <ShoeColorList shoeColorList={shoeColorList[k]} shoeIdList={shoeIdList[k]} />
          <div className="underShoeColorImage"></div>
        </div>
      );
    });

    return (
      <div className="ShoeColor">
        <div className="shoeColorText">
          <span className="grey">컬러</span>
          <span className="shoeColor">
            <>{product.name && product.color_name}</>
          </span>
        </div>
        <div className="shoeColorImage">{listShoeColor}</div>
      </div>
    );
  }
}

export default ShoeColor;
