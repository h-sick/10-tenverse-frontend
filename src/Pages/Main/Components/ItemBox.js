import React from "react";
import { iconHeart } from "../../../config";
import "./ItemBox.scss";

class ItemBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTextDisplay: true,
    };
  }
  handleColorText = (e) => {
    const { colorTextDisplay } = this.state;
    this.setState({ colorTextDisplay: !colorTextDisplay });
  };
  render() {
    const { price, name, imgUrl, hoverImgUrl } = this.props;

    return (
      <div className="ItemBox">
        <div
          className="imgBox"
          onMouseEnter={this.handleColorText}
          onMouseLeave={this.handleColorText}
        >
          <div className="unhovered">
            <img className="productImg" alt="제품 이미지" src={imgUrl} />
          </div>
          <div className="hover">
            <img className="productImg" alt="제품 이미지" src={hoverImgUrl} />
          </div>
          <svg id="icon-heart" viewBox="0 0 38 34">
            <path fill-rule="nonzero" d={iconHeart}></path>
          </svg>
          <div className="productText">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemBox;
