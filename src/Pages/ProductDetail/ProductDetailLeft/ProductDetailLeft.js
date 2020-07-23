import React, { Component } from "react";
import ShoeImage from "./ShoeImage/ShoeImage";
import DetailShoeImage from "./DetailShoeImage/DetailShoeImage";
import ShoeReview from "./ShoeReview/ShoeReview";
import SocialInsta from "./SocialInsta/SocialInsta";
import "./ProductDetailLeft.scss";

class ProductDetailLeft extends Component {
  render() {
    return (
      <div className="ProductDetailLeft">
        <ShoeImage />
        <div className="border"></div>
        <DetailShoeImage />
        <div className="border black"></div>
        <ShoeReview />
        <div className="border black"></div>
        <SocialInsta />
      </div>
    );
  }
}

export default ProductDetailLeft;
