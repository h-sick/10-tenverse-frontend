import React from "react";
import "../FourthPage/FourthPage.scss";
import MainItemList from "../Components/Item/MainItemList";

class FourthPage extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <div className="FourthPage">
        <div className="largeBox">
          <div className="hoverCover">
            <p className="hoverText">EVERYONE HAS A PLACE HERE</p>
          </div>
          <img
            src="https://image.converse.co.kr/cmsstatic/structured-content/17541/01_Home_01_Template_1440x1800.jpg?gallery"
            className="hoverImg"
          ></img>
        </div>
        <div className="smallBox">
          <div className="video">
            <video
              controls
              loop
              src={
                "https://image.converse.co.kr/structured-content/17542/01_Home_02_Template_1440x900.mp4"
              }
              controls="controls"
              autoPlay
              muted
            />
          </div>
          <MainItemList product={product} />
        </div>
      </div>
    );
  }
}

export default FourthPage;
