import React, { Component } from "react";
import "./ShoeImage.scss";

class ShoeImage extends Component {
  render() {
    const { product } = this.props;

    return (
      <>
        {product.name && (
          <div className="ShoeImage">
            <img className="mainImage" alt="신발상세 메인사진" src={product.main_image} />
            <div className="subImageContainer">
              {product.sub_image.map((el) => {
                if (el.includes("mp4")) {
                  return <video alt="신발상세 비디오" src={el} autoPlay />;
                } else {
                  return <img alt="신발상세 6컷" src={el} />;
                }
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ShoeImage;
