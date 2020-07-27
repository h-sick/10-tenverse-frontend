import React, { Component } from "react";
import "./ShoeImage.scss";

class ShoeImage extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="ShoeImage">
        <img
          className="mainImage"
          alt="신발상세 메인사진"
          src={product.length !== 0 ? product[0].main_image : null}
        />
        <div className="subImageContainer">
          {product.length !== 0
            ? product[1].sub_image.map((el, i) => {
                if (el.includes("mp4")) {
                  return <video alt="신발상세 비디오" src={el} autoPlay />;
                } else {
                  return <img alt="신발상세 6컷" src={el} />;
                }
              })
            : null}
        </div>
      </div>
    );
  }
}

export default ShoeImage;
