import React, { Component } from "react";
import ShoeImage from "./ShoeImage/ShoeImage";
import DetailShoeImage from "./DetailShoeImage/DetailShoeImage";
import ShoeReview from "./ShoeReview/ShoeReview";
import SocialInsta from "./SocialInsta/SocialInsta";
import "./ProductDetailLeft.scss";

class ProductDetailLeft extends Component {
  render() {
    const [shoeDetailRef, reviewRef] = this.props.refArr;
    return (
      <div className="ProductDetailLeft">
        <ShoeImage />
        <div className="border"></div>
        <DetailShoeImage shoeDetailRef={shoeDetailRef} />
        <div className="border black"></div>
        <ShoeReview reviewRef={reviewRef} />
        <div className="border black"></div>
        <SocialInsta />
      </div>
    );
  }
}

export default ProductDetailLeft;
