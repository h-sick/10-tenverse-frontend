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
    return (
      <div className="ItemBox">
        <div
          className="productImg"
          style={{
            backgroundImage: `url(this.state.hover ? ${this.props.data.imgs.hoverImgUrl} : ${this.props.data.imgs.imgUrl})`,
          }}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <svg id="icon-heart" viewBox="0 0 38 34">
            <path fill-rule="nonzero" d={iconHeart}></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default ItemBox;
