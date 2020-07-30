import React from "react";
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

  modalHandler = (e) => {
    this.props.modalStateHandler(this.props.idx);
  };

  render() {
    const { isHovered } = this.state;
    const { img, text } = this.props;
    let changedText = text.split("%").join("\n");

    return (
      <div className="InstaBox" onClick={this.modalHandler}>
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
              alt="호버 이미지"
              src={
                "https://static.vecteezy.com/system/resources/thumbnails/000/097/181/small/free-black-leather-vector.jpg"
              }
            />
            <p>{changedText}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default InstaBox;
