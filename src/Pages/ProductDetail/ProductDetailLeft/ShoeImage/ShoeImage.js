import React, { Component } from "react";
import "./ShoeImage.scss";

class ShoeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ShoeImage">
        <img
          className="mainImage"
          alt="신발상세 메인사진"
          src="https://image.converse.co.kr/cmsstatic/product/560250C_560250C_pdp-primary.jpg?gallery="
        />
        <div className="subImageContainer">
          <img
            alt="신발상세 서브사진"
            src="https://image.converse.co.kr/cmsstatic/product/560250C_560250C_02.jpg?browse="
          />
          <img
            alt="신발상세 서브사진"
            src="https://image.converse.co.kr/cmsstatic/product/560250C_560250C_03.jpg?browse="
          />
          <img
            alt="신발상세 서브사진"
            src="https://image.converse.co.kr/cmsstatic/product/560250C_560250C_04.jpg?browse="
          />
          <img
            alt="신발상세 서브사진"
            src="https://image.converse.co.kr/cmsstatic/product/560250C_560250C_05.jpg?browse="
          />
          <img
            alt="신발상세 서브사진"
            src="https://image.converse.co.kr/cmsstatic/product/560250C_560250C_06.jpg?browse="
          />
          <img
            alt="신발상세 서브사진"
            src="https://image.converse.co.kr/cmsstatic/product/560250C_560250C_07.jpg?browse="
          />
        </div>
      </div>
    );
  }
}

export default ShoeImage;
