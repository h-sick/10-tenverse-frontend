import React from "react";
import { Link } from "react-router-dom";
import { iconHeart, colorValues } from "../../../../config";
import "./ItemBox.scss";
import "../../../../Styles/Common.scss";

class ItemBox extends React.Component {
  constructor() {
    super();
    this.state = {
      colorTextDisplay: true,
      colorClickedNumber: "",
      colorClicked: false,
    };
  }

  handleHover = () => {
    this.setState({ colorTextDisplay: false });
  };

  handleLeave = () => {
    this.setState({ colorTextDisplay: true });
  };

  handleColorNumber = (e) => {
    this.setState({ colorClickedNumber: e.target.id });
    this.setState({ colorClicked: true });
  };

  handleColorName = (colordata) => {
    const { colorTextDisplay, colorClickedNumber } = this.state;

    if (colorTextDisplay) {
      if (parseInt(colorClickedNumber) === colordata.shoe_id) {
        return "hidden selected";
      } else {
        return "hidden";
      }
    } else if (!colorTextDisplay) {
      if (parseInt(colorClickedNumber) === colordata.shoe_id) {
        return `colorCircle ${colordata.color_filter} selected`;
      } else {
        return `colorCircle ${colordata.color_filter}`;
      }
    }
  };

  render() {
    const { data } = this.props;
    const { colorTextDisplay, colorClickedNumber } = this.state;

    return (
      <div className="ItemBox">
        <div
          className="imgBox"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}
          onClick={() => this.props.history.push(`/productDetail/${data.id}`)}
        >
          <div className="unhovered">
            <img
              className="productImg"
              alt="제품 이미지"
              src={
                colorClickedNumber
                  ? data.color_list.find((item) => {
                      return item.shoe_id === parseInt(colorClickedNumber);
                    }).main_image
                  : data.product_detail.main_image
              }
            />
          </div>
          <div className="hover">
            <img
              className="productImg"
              alt="제품 이미지"
              src={
                colorClickedNumber
                  ? data.color_list.find((item) => {
                      return item.shoe_id === parseInt(colorClickedNumber);
                    }).sub_image
                  : data.product_detail.sub_image
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
          <p
            className="name"
            onClick={() => this.props.history.push(`/productDetail/${data.id}`)}
          >
            {data.product_detail.name}
          </p>
          <p className="price">{Math.floor(data.product_detail.price)} 원</p>
          <p className={colorTextDisplay ? "colors" : "hidden"}>
            {data.color_list.length} 컬러
          </p>
          <div className="colorBox">
            {data.color_list.map((colordata) => {
              return (
                <div
                  className={this.handleColorName(colordata)}
                  style={{
                    backgroundColor: colorValues[colordata.color_filter],
                  }}
                  onClick={this.handleColorNumber}
                  id={colordata.shoe_id}
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
