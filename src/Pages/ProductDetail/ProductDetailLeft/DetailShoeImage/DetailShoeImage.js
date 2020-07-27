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
    const { shoeDetailRef, product } = this.props;
    const featureList = product.length !== 0 ? product[0].features.split(", ") : null;
    const feature =
      product.length !== 0
        ? featureList.map((feat, i) => {
            return <li>{feat}</li>;
          })
        : null;
    return (
      <div className="DetailShoeImage" ref={shoeDetailRef}>
        <div className="detailShoeInfo">
          <div className="title">{product.length !== 0 ? product[0].name : null}</div>
          <div className="subTitle">{product.length !== 0 ? product[0].main_detail : null}</div>
          <ul>{product.length !== 0 ? feature : null}</ul>
          <div className="subImage">
            <img
              alt="readMust"
              src="https://image.converse.co.kr/cmsstatic/product/21552/PDP_01_1인5족안내_700_01.jpg"
            />
            <img
              className={showMoreActive ? null : "hideImage"}
              alt="상품 사진 모음"
              src={product.length !== 0 ? product[0].feature_image : null}
            />
          </div>
          <button onClick={this.handleShowMore}>{showMoreText}</button>
        </div>
      </div>
    );
  }
}

export default DetailShoeImage;
