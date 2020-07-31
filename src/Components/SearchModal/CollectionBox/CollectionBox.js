import React from "react";
import "./CollectionBox.scss";

class BigImgBox extends React.Component {
  render() {
    const { title, src, color } = this.props;

    return (
      <div className="CollectionBox">
        <div className="darknessBig">
          <p>더 알아보기</p>
        </div>
        <img alt="컬렉션 이미지" src={src} className="colectionImg" />
        <p className={color === "black" ? "blackTitle" : ""}>{title}</p>
      </div>
    );
  }
}

export default BigImgBox;
