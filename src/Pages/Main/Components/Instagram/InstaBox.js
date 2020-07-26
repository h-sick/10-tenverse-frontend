import React from "react";
// import { iconHeart } from "../../../config";
import "./InstaBox.scss";

class InstaBox extends React.Component {
  render() {
    const { img, text } = this.props;

    return (
      <div className="InstaBox">
        <div className="imgBox">
          <div className="unhovered">
            <img className="InstaImg" alt="인스타 이미지" src={img} />
          </div>
          {/* <div className="hover">
            <img
              className="Instahover"
              alt="제품 이미지"
              src={
                "https://cdn.attractt.com/embed/images/pattern/bg-black-gra50.png"
              }
            />
            <p>{text}</p> */}
        </div>
      </div>
    );
  }
}
export default InstaBox;
