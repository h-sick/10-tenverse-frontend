import React, { Component } from "react";
import "./DetailShoeImage.scss";

class DetailShoeImage extends Component {
  constructor() {
    super();
    this.state = {
      showMoreActive: false,
      showMoreText: "더보기+",
    };
  }

  handleShowMore = () => {
    const { showMoreActive } = this.state;
    this.setState({
      showMoreActive: !showMoreActive,
      showMoreText: "닫기-",
    });
  };

  render() {
    const { showMoreActive, showMoreText } = this.state;
    return (
      <div className="DetailShoeImage" ref={this.props.shoeDetailRef}>
        <div className="detailShoeInfo">
          <div className="title">척테일러 올스타 리프트 캔버스</div>
          <div className="subTitle">아이코닉 척테일러 올스타를 플랫폼 솔과 함께 만나보세요.</div>
          <ul>
            <li>가볍고 견고한 캠퍼스 어퍼</li>
            <li>시즌리스, 타임리스한 실루엣</li>
            <li>기존 제품보다 높은 고무 플랫폼 미드솔</li>
          </ul>
          <div className="subImage">
            <img
              alt="readMust"
              src="https://image.converse.co.kr/cmsstatic/product/21552/PDP_01_1인5족안내_700_01.jpg"
            />
            <img
              className={showMoreActive ? null : "hideImage"}
              alt="상품 사진 모음"
              src="https://image.converse.co.kr/cmsstatic/product/21552/560250C-2.jpg"
            />
          </div>
          <button onClick={this.handleShowMore}>{showMoreText}</button>
        </div>
      </div>
    );
  }
}

export default DetailShoeImage;
