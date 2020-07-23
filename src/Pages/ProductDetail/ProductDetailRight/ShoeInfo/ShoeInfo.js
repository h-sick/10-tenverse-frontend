import React, { Component } from "react";
import IconStar from "../svg/IconStar";
import "./ShoeInfo.scss";

class ShoeInfo extends Component {
  iconStarArray = [1, 2, 3, 4, 5];
  listIconStar = this.iconStarArray.map((num) => <IconStar />);

  render() {
    return (
      <div className="ShoeInfo">
        <div className="shoeName">척테일러 올스타 리프트 캔버스</div>
        <div className="shoePrice">75,000 원</div>
        <div className="gender">여성</div>
        <div>
          베스트셀링 플랫폼 스니커즈<span className="grey">더보기</span>
        </div>
        <div className="iconStarWrap">
          {this.listIconStar}
          <span className="starPoint text">별점</span>
          <span className="starPoint num">4.57</span>
        </div>
      </div>
    );
  }
}

export default ShoeInfo;
