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
      colorClickedNumber: 0,
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
    this.setState({ colorClickedNumber: e.target.id, colorClicked: true });
  };

  handleColorName = ({ shoe_id, color_filter }) => {
    const { colorTextDisplay, colorClickedNumber } = this.state;
    const isSame = parseInt(colorClickedNumber) === shoe_id;
    const activated = `hidden ${isSame ? "selected" : ""}`;
    const unActivated = `colorCircle ${color_filter} ${
      isSame ? "selected" : ""
    }`;

    return colorTextDisplay ? activated : unActivated;
  };

  render() {
    const { product_detail } = this.props.data;
    const { colorTextDisplay, colorClickedNumber } = this.state;

    return (
      <div className="ItemBox">
        <Link to={`/product/detail/${product_detail.id}`}>
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
                  colorClickedNumber
                    ? product_detail.color_list.find((item) => {
                        return item.shoe_id === parseInt(colorClickedNumber);
                      }).main_image
                    : product_detail.main_image
                }
              />
            </div>
            <div className="hover">
              <img
                className="productImg"
                alt="제품 이미지"
                src={
                  colorClickedNumber
                    ? product_detail.color_list.find((item) => {
                        return item.shoe_id === parseInt(colorClickedNumber);
                      }).sub_image
                    : product_detail.sub_image
                }
              />
            </div>
            <svg id="icon-heart" viewBox="0 0 38 34">
              <path fill-rule="nonzero" d={iconHeart}></path>
            </svg>
          </div>
        </Link>
        <div
          className="productText"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}
        >
          <p
            className="name"
            onClick={() =>
              this.props.history.push(`/productDetail/${product_detail.id}`)
            }
          >
            {product_detail.name}
          </p>
          <p className="price">
            {product_detail.price.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}원
          </p>
          <p className={colorTextDisplay ? "colors" : "hidden"}>
            {product_detail.color_list && product_detail.color_list.length} 컬러
          </p>
          <div className="colorBox">
            {product_detail.color_list &&
              product_detail.color_list.map((colordata) => {
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
