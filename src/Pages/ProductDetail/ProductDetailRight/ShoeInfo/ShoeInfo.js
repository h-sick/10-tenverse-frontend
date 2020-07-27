import React, { Component } from "react";
import IconStar from "../svg/IconStar";
import "./ShoeInfo.scss";

class ShoeInfo extends Component {
  listIconStar = new Array(5).fill().map((num) => <IconStar />);

  render() {
    const product = this.props.product;
    const [shoeDetailRef, reviewRef] = this.props.refArr;
    // console.log(product);
    return (
      <div className="ShoeInfo">
        <div className="shoeName">{product.length !== 0 ? product[0].name : null}</div>
        <div className="shoePrice">{product.length !== 0 ? product[0].price : null} 원</div>
        <div className="gender">{product.length !== 0 ? product[0].gender : null}</div>
        <div>
          {product.length !== 0 ? product[0].main_detail : null}
          <span onClick={() => this.props.scrollTo(shoeDetailRef)} className="grey">
            더보기
          </span>
        </div>
        <div onClick={() => this.props.scrollTo(reviewRef)} className="iconStarWrap">
          {this.listIconStar}
          <span className="starPoint text">별점</span>
          <span className="starPoint num">4.5</span>
        </div>
      </div>
    );
  }
}

export default ShoeInfo;
