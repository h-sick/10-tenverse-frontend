import React from "react";
import { iconFilter } from "../../../../config";
import "./TopFilterBar.scss";

class TopFilterBar extends React.Component {
  render() {
    return (
      <div className="TopFilterBar">
        <div className="box">
          <div className="filterHide">
            <p>필터 숨기기</p>
            <svg id="icon-filter" viewBox="0 0 36 27">
              <path d={iconFilter}></path>
            </svg>
          </div>
          <div className="productsCount">
            <p>총 221개의 상품</p>
          </div>
          <select name="priceFilter">
            <option value="높은 가격순">높은 가격순</option>
            <option value="낮은 가격순">낮은 가격순</option>
          </select>
        </div>
      </div>
    );
  }
}

export default TopFilterBar;
