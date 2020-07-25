import React from "react";
import "../FourthPage/FourthPage.scss";
import ItemList from "../Components/ItemList";

class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDatas: [
        {
          name: "컨버스 X 로킷 프로레더",
          price: "129,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/27380/169217C_169217C_primary-1.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/27380/169217C_169217C_hover.jpg?browse",
          },
        },
        {
          name: "컨버스 X 로킷후디",
          price: "99,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/26762/10020773-A01_10020773-A01_primary.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/26762/10020773-A01_10020773-A01_hover.jpg?browse",
          },
        },
      ],
    };
  }

  render() {
    const { itemDatas } = this.state;
    let fourthRow1 = itemDatas.filter((item, index) => index < 2);
    return (
      <div className="pageWrapper">
        <div className="pageContainer">
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
            <ItemList itemDatas={fourthRow1} />
          </div>
        </div>
      </div>
    );
  }
}

export default FourthPage;
