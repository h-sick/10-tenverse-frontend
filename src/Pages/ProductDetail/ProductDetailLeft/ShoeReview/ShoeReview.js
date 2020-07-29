import React, { Component } from "react";
import ReviewArrowLeft from "./svg/ReviewArrowLeft";
import ReviewArrowRight from "./svg/ReviewArrowRight";
import IconStar from "../../ProductDetailRight/svg/IconStar";
import "./ShoeReview.scss";

class ShoeReview extends Component {
  listIconStar = new Array(5).fill().map((num) => <IconStar />);

  render() {
    return (
      <div className="Review" ref={this.props.reviewRef}>
        <div className="reviewTop">
          <div className="reviewCount">REVIEW(47)</div>
          <div>
            <ReviewArrowLeft />
            <ReviewArrowRight />
          </div>
        </div>
        <div className="reviews">
          <div className="reviewAverage">
            <div className="reviewScore">4.57</div>
            <div className="reviewStarScore">{this.listIconStar}</div>
            <div className="reviewCountText">47개의 상품리뷰가 있습니다.</div>
            <div className="reviewColorText">컬러</div>
            <div className="reviewBar color">
              <span className="colorBrightness"></span>
            </div>
            <div className="how colorBrightness">
              <div>밝아요</div>
              <div>어두워요</div>
            </div>
            <div className="reviewColorSize">사이즈</div>
            <div className="reviewBar size">
              <span className="sizeCorrectness"></span>
            </div>
            <div className="how sizeCorrectness">
              <div>커요</div>
              <div>작아요</div>
            </div>
            <button>리뷰쓰기</button>
          </div>
          <div className="reviewSlide">
            <div className="slider first">
              <div className="sliderImage first"></div>
              <div className="reviewComment first">"235, black사진보다 실물이 예쁜 것 같아요"</div>
              <div className="reviewStar">{this.listIconStar}</div>
            </div>
            <div className="slider second">
              <div className="sliderImage second"></div>
              <div className="reviewComment second">"품절풀리자마자 샀어요 예뻐요"</div>
              <div className="reviewStar">{this.listIconStar}</div>
            </div>
          </div>
        </div>
        <div className="seeAll">전체보기</div>
      </div>
    );
  }
}

export default ShoeReview;
