import React from "react";
import { iconHeart } from "../../../../config";
import "./ItemBox.scss";

class ItemBox extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }

  toggleHover = () => {
    const { hover } = this.state;
    this.setState({ hover: !hover });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="ItemBox">
        <div className="imgBox">
          <div className="unhovered">
            <img
              className="productImg"
              alt="제품 이미지"
              src={this.props.data.imgs.imgUrl}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            />
          </div>
          <svg id="icon-heart" viewBox="0 0 38 34">
            <path fill-rule="nonzero" d={iconHeart}></path>
          </svg>
        </div>
        <div className="productText">
          <p className="name">{data.name}</p>
          <p className="price">{data.price}</p>
          <p className="color">{data.color.length} 컬러</p>
        </div>
      </div>
    );
  }
}

export default ItemBox;
