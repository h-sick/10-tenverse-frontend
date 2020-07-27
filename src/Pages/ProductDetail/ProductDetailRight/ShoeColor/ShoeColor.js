import React, { Component } from "react";
import ShoeColorList from "./ShoeColorList";
import "./ShoeColor.scss";

class ShoeColor extends Component {
  render() {
    const { product } = this.props;

    const listShoeColor = product.map((_, i) => {
      if (i % 2 === 1) {
        const shoeColorList = product[i].color_list.map((color, j) => {
          return color.main_image;
        });
        const shoeIdList = product[i].color_list.map((color, j) => {
          return color.id;
        });
        return (
          <>
            {shoeColorList.map((_, k) => {
              console.log(shoeIdList[k]);
              return (
                <div className="shoeColorImageEach">
                  <ShoeColorList shoeColorList={shoeColorList[k]} shoeIdList={shoeIdList[k]} />
                  <div className="underShoeColorImage"></div>
                </div>
              );
            })}
          </>
        );
      }
    });

    return (
      <div className="ShoeColor">
        <div className="shoeColorText">
          <span className="grey">컬러</span>
          <span className="shoeColor">{product.length !== 0 ? product[0].color_name : null}</span>
        </div>
        <div className="shoeColorImage">{listShoeColor}</div>
      </div>
    );
  }
}

export default ShoeColor;
