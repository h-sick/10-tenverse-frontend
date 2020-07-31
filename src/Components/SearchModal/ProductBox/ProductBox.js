import React from "react";
import "./ProductBox.scss";

class ProductBox extends React.Component {
  render() {
    const { title, src, alt, color } = this.props;

    return (
      <div className="ProductBox">
        <div className="darknessSmall">
          <p>더 알아보기</p>
        </div>
        <img alt={alt} src={src} className="smallImg" />
        <p className={color === "black" ? "black" : ""}>{title}</p>
      </div>
    );
  }
}

export default ProductBox;
