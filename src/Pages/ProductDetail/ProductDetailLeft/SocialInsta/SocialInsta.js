import React, { Component } from "react";
import "./SocialInsta.scss";

class SocialInsta extends Component {
  render() {
    return (
      <div className="SocialInsta">
        <div className="socialTitle">LOOKS FROM THE CONVERSE COMMUNITY</div>
        <div className="socialSubtitle">
          컨버스 커뮤니티가 전하는 인스타그램 속 <span>#컨버스스타일</span>
        </div>
        <div className="instaContainer"></div>
        <button>더보기</button>
      </div>
    );
  }
}

export default SocialInsta;
