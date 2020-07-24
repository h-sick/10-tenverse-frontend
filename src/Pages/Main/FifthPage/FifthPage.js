import React from "react";
import "../ThirdPage/ThirdPage.scss";

const fifthImg = {
  backgroundImage: `url(${"https://image.converse.co.kr/cmsstatic/structured-content/17640/ddd.jpg?gallery"})`,
};

class FifthPage extends React.Component {
  render() {
    return (
      <div className="pageWrapper">
        <div className="fifthPage" style={fifthImg}>
          <div className="textContainer">
            <p
              className="title"
              style={{
                height: 80,
              }}
            >
              SUMMER SPECIAL
            </p>
            <p className="sub">
              일상적이지만 특별하게,
              <br />
              다양한 여름 시즌 제품을
              <br /> 컨버스 썸머 스페셜을 통해 만나보세요
            </p>
            <button className="btn">더 알아보기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FifthPage;
