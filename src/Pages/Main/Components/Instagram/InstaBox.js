import React from "react";
// import { iconHeart } from "../../../config";
import "./InstaBox.scss";

class InstaBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  hoverHandler = () => {
    const { isHovered } = this.state;
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  };

  render() {
    const { isHovered } = this.state;
    console.log(isHovered);
    const { img, text } = this.props;

    return (
      <div className="InstaBox">
        <div
          className="imgBox"
          onMouseEnter={this.hoverHandler}
          onMouseLeave={this.hoverHandler}
        >
          <img className="instaImg" alt="인스타 이미지" src={img} />
          <img
            className="icon"
            alt="아이콘"
            src="https://cdn.attractt.com/www/images/sprite/new/sprite_tag3x.png"
          />
          <div className={isHovered ? "instaHoverOn" : "instaHoverOff"}>
            <img
              // className={isHovered ? "instaHoverOn" : "instaHoverOff"}
              alt="호버 이미지"
              src={
                "https://static.vecteezy.com/system/resources/thumbnails/000/097/181/small/free-black-leather-vector.jpg"
              }
            />
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default InstaBox;
