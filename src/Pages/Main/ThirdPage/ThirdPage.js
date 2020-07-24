import React from "react";
import "../ThirdPage/ThirdPage.scss";

const thirdImg = {
  backgroundImage: `url(${"https://image.converse.co.kr/cmsstatic/structured-content/17638/KakaoTalk_20200722_173521496.jpg?gallery"})`,
};

class ThirdPage extends React.Component {
  render() {
    return (
      <div className="pageWrapper">
        <div className="thirdPage" style={thirdImg}>
          <div className="textContainer">
            <p className="title">
              CHUK 70
              <br />
              GIPSY FLOWER
            </p>
            <p className="sub">
              숨길 수 없는 열정과 자유,
              <br />
              강렬하면서도 절제된 보헤미안 스타일의 <br /> 척70 집시 플라워를
              만나보세요
            </p>
            <button className="btn">구매하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdPage;
