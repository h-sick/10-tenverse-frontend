import React, { Component } from "react";
import "./DetailShoeImage.scss";

class DetailShoeImage extends Component {
  constructor() {
    super();
    this.state = {
      showMoreActive: true,
      showMoreText: true,
    };
  }

  handleShowMore = () => {
    const { showMoreActive, showMoreText } = this.state;
    this.setState({
      showMoreActive: !showMoreActive,
      showMoreText: !showMoreText,
    });
  };

  render() {
    const { showMoreActive, showMoreText } = this.state;
    const { shoeDetailRef, product } = this.props;
    const { name, main_detail, features, feature_image } = product || {};

    return (
      <div className="DetailShoeImage" ref={shoeDetailRef}>
        <div className="detailShoeInfo">
          {product.name && (
            <>
              <div className="title">{name}</div>
              <div className="subTitle">{main_detail}</div>
              <ul>
                {features.split(", ").map((feat) => {
                  return <li>{feat}</li>;
                })}
              </ul>
              <div className="subImage">
                <img
                  alt="readMust"
                  src="https://image.converse.co.kr/cmsstatic/product/21552/PDP_01_1인5족안내_700_01.jpg"
                />
                <img
                  className={showMoreActive && "hideImage"}
                  alt="상품 사진 모음"
                  src={feature_image}
                />
              </div>
            </>
          )}

          <button onClick={this.handleShowMore}>{showMoreText ? "더보기+" : "닫기-"}</button>
        </div>
      </div>
    );
  }
}

export default DetailShoeImage;
