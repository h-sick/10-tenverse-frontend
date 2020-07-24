import React from "react";
import { iconHeart } from "../../../../config";
import "./ItemBox.scss";
import "../../../../Styles/Common.scss";

const colors = {
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
    };
  }

  handleHover = () => {
    this.setState({ colorTextDisplay: false });
  };

  handleLeave = () => {
    this.setState({ colorTextDisplay: true });
  };

  render() {
    const { data } = this.props;
    const { colorTextDisplay } = this.state;

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
              // src={data.imgs.imgUrl}
              src={data.image}
            />
          </div>
          <div className="hover">
            <img
              className="productImg"
              alt="제품 이미지"
              // src={data.imgs.hoverImgUrl}
              src={data.hover_image}
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
          <p className="name">{data.name}</p>
          <p className="price">{data.price} 원</p>
          <p className={colorTextDisplay ? "colors" : "hidden"}>
            {data.colors.length} 컬러
          </p>
          <div className="colorBox">
            {data.colors.map((color) => {
              return (
                <div
                  className={
                    colorTextDisplay ? "hidden" : `colorCircle ${color.color}`
                  }
                  style={{
                    backgroundColor: colors[color.color],
                  }}
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
