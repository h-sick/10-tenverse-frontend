import React from "react";
import { Link } from "react-router-dom";
import { iconHeart } from "../../../../config";
import "./MainItemBox.scss";

class MainItemBox extends React.Component {
  render() {
    const { price, name, imgUrl, hoverImgUrl, id } = this.props;
    let newPrice = price.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    return (
      <div className="MainItemBox">
        <Link to={`/product/detail/${id}`}>
          <div className="imgBox">
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
              <p className="price">{newPrice}원</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
export default MainItemBox;
