import React from "react";
import { iconHeart } from "../../../../config";
import "./ItemBox.scss";

class ItemBox extends React.Component {
  constructor() {
    super();
    this.state = {
      colorTextDisplay: true,
    };
  }

  handleColorText = (e) => {
    const { colorTextDisplay } = this.state;
    this.setState({ colorTextDisplay: !colorTextDisplay });
  };

  render() {
    const { data } = this.props;
    const { colorTextDisplay } = this.state;

    return (
      <div className="ItemBox">
        <div
          className="imgBox"
          onMouseEnter={this.handleColorText}
          onMouseLeave={this.handleColorText}
        >
          <div className="unhovered">
            <img
              className="productImg"
              alt="제품 이미지"
              src={data.imgs.imgUrl}
            />
          </div>
          <div className="hover">
            <img
              className="productImg"
              alt="제품 이미지"
              src={data.imgs.hoverImgUrl}
            />
          </div>
          <svg id="icon-heart" viewBox="0 0 38 34">
            <path fill-rule="nonzero" d={iconHeart}></path>
          </svg>
        </div>
        <div className="productText">
          <p className="name">{data.name}</p>
          <p className="price">{data.price}</p>
          <p className={colorTextDisplay ? "colors" : "hidden"}>
            {data.colors.length} 컬러
          </p>
          <div className="colorBox">
            {data.colors.map((color) => {
              return (
                <div
                  className={
                    colorTextDisplay ? "hidden" : `colorCircle ${color}`
                  }
                  style={{
                    backgroundColor: color,
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
