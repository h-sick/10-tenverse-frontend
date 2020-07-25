import React from "react";
import { iconHeart } from "../../../../config";
import "./ItemBox.scss";
import "../../../../Styles/Common.scss";

const colorValues = {
  black: "#000000",
  blue: "#0600FF",
  green: "#009900",
  indigo: "#141936",
  purple: "#6600CC",
  brown: "#986633",
  gray: "#999999",
  khaki: "#A39263",
  beige: "#F0E4D2",
  red: "#FF0400",
  orange: "#FF6600",
  pink: "#FFB6C1",
  yellow: "#FFCC00",
  white: "#FFFFFF",
};

class ItemBox extends React.Component {
  constructor() {
    super();
    this.state = {
      colorTextDisplay: true,
      colorClickedNumber: "",
    };
  }

  handleHover = () => {
    this.setState({ colorTextDisplay: false });
  };

  handleLeave = () => {
    this.setState({ colorTextDisplay: true });
  };

  handleColorNumber = (e) => {
    this.props.handleColorNumber(e.target.id);
    this.setState({ colorClickedNumber: e.target.id });
  };

  handleColorName = (colordata) => {
    const { colorTextDisplay, colorClickedNumber } = this.state;

    if (colorTextDisplay) {
      if (parseInt(colorClickedNumber) === colordata.shoecolor__id) {
        return "hidden selected";
      } else {
        return "hidden";
      }
    } else if (!colorTextDisplay) {
      if (parseInt(colorClickedNumber) === colordata.shoecolor__id) {
        return `colorCircle ${colordata.color_category__name} selected`;
      } else {
        return `colorCircle ${colordata.color_category__name}`;
      }
    }
  };

  render() {
    const { data, optionImgs } = this.props;
    const { colorTextDisplay, colorClickedNumber } = this.state;

    return (
      <div className="ItemBox">
        <div
          className="imgBox"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}
        >
          <div className="unhovered">
            <img
              className="productImg"
              alt="제품 이미지"
              src={
                optionImgs && optionImgs.id === parseInt(colorClickedNumber)
                  ? optionImgs.imgUrl
                  : data.productDetail.image__image
              }
            />
          </div>
          <div className="hover">
            <img
              className="productImg"
              alt="제품 이미지"
              src={
                optionImgs && optionImgs.id === parseInt(colorClickedNumber)
                  ? optionImgs.hoverUrl
                  : data.productDetail.subimage__image
              }
            />
          </div>
          <svg id="icon-heart" viewBox="0 0 38 34">
            <path fill-rule="nonzero" d={iconHeart}></path>
          </svg>
        </div>
        <div
          className="productText"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}
        >
          <p className="name">{data.productDetail.shoe__detail__name}</p>
          <p className="price">{data.productDetail.shoe__price} 원</p>
          <p className={colorTextDisplay ? "colors" : "hidden"}>
            {data.options.length} 컬러
          </p>
          <div className="colorBox">
            {data.options.map((colordata) => {
              return (
                <div
                  className={this.handleColorName(colordata)}
                  style={{
                    backgroundColor:
                      colorValues[colordata.color_category__name],
                  }}
                  onClick={this.handleColorNumber}
                  id={colordata.shoecolor__id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemBox;
