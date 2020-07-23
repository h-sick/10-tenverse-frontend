import React, { Component } from "react";
import SizeTable from "./SizeTable/SizeTable";
import "./ShoeSize.scss";

class ShoeSize extends Component {
  render() {
    return (
      <div className="ShoeSize">
        <div className="sizeGuide">
          <span>사이즈 가이드</span>
        </div>
        <SizeTable />
        <div className="countWrap">
          <div className="count num">1</div>
          <div className="count minus">-</div>
          <div className="count plus">+</div>
        </div>
        <button className="loginBtn">로그인</button>
        <div className="infoDelivery">5만원 이상 구매시 무료배송</div>
        <div className="infoDeliveryText">
          <span>배송정보</span>
        </div>
      </div>
    );
  }
}

export default ShoeSize;
