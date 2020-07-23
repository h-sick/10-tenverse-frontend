import React, { Component } from "react";
import "./ShoeColor.scss";

class ShoeColor extends Component {
  render() {
    return (
      <div className="ShoeColor">
        <div className="shoeColorText">
          <span className="grey">컬러</span>
          <span>블랙</span>
        </div>
        <div className="shoeColorImage">
          <div className="shoeColorImageEach">
            <img
              alt="신발 이미지 색상"
              src="https://image.converse.co.kr/cmsstatic/product/560250C_560250C_pdp-option.jpg?browse="
            />
            <div className="underShoeColorImage first"></div>
          </div>
          <div className="shoeColorImageEach">
            <img
              alt="신발 이미지 색상"
              src="https://image.converse.co.kr/cmsstatic/product/560251C_560251C_pdp-option.jpg?browse="
            />
            <div className="underShoeColorImage"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoeColor;
