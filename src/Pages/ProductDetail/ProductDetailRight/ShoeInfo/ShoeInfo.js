import React, { Component } from "react";
import IconStar from "../svg/IconStar";
import "./ShoeInfo.scss";

class ShoeInfo extends Component {
  listIconStar = new Array(5).fill().map((num) => <IconStar />);

  render() {
    const { product } = this.props;
    const [shoeDetailRef, reviewRef] = this.props.refArr;
    const { name, price, gender, main_detail } = product || {};

    return (
      <div className="ShoeInfo">
        <>
          {product.name && (
            <>
              <div className="shoeName">{name}</div>
              <div className="shoePrice">{price} 원</div>
              <div className="gender">{gender}</div>
              <div>
                {main_detail}
                <span onClick={() => this.props.scrollTo(shoeDetailRef)} className="grey">
                  더보기
                </span>
              </div>
            </>
          )}
        </>

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
