import React from "react";
import "../FirstPage/FirstPage.scss";
import ItemList from "../Components/ItemList";
import ItemBox from "../Components/ItemBox";

const secondImg = {
  backgroundImage: `url(${"https://image.converse.co.kr/cmsstatic/structured-content/17531/KakaoTalk_20200709_134326255.jpg?gallery"})`,
};
class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDatas: [
        {
          name: "잭퍼셀 컬러블록",
          price: "89,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/168976C_168976C_primary.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/168976C_168976C_hover.jpg?browse",
          },
        },
        {
          name: "척 70 핵트패션",
          price: "99,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/168695C_168695C_primary.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/168695C_168695C_hover.jpg?browse",
          },
        },
      ],
      shoeLists: [
        {
          name: "척테일러 올스타",
          img:
            "https://image.converse.co.kr/cmsstatic/structured-content/15195/화이트_척테일러올스타2.jpg?gallery",
        },
        {
          name: "척 70",
          img:
            "https://image.converse.co.kr/cmsstatic/structured-content/15196/화이트_척702.jpg?gallery",
        },
        {
          name: "원스타",
          img:
            "https://image.converse.co.kr/cmsstatic/structured-content/15197/화이트_원스타.jpg?gallery",
        },
        {
          name: "잭퍼셀",
          img:
            "https://image.converse.co.kr/cmsstatic/structured-content/15198/화이트_잭퍼셀.jpg?gallery",
        },
      ],
    };
  }

  render() {
    const { itemDatas, shoeLists } = this.state;
    let secondRow1 = itemDatas.filter((item, index) => index < 2);
    return (
      <div className="pageWrapper">
        <div className="pageContainer">
          <div className="largeBox" style={secondImg}></div>

          <div className="smallBox">
            <div className="img">
              <img
                alt="잭퍼셀&척70"
                src="https://image.converse.co.kr/cmsstatic/structured-content/17530/01_1440x900.jpg?gallery"
              />
            </div>
            <ItemList itemDatas={secondRow1} />
          </div>
        </div>
        <div className="connectingBox">
          <p className="chooseIcon">CHOOSE YOUR ICON</p>
          <div className="flex">
            <svg class="linkIcon" role="img" viewBox="0 0 50 50">
              <g>
                <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
              </g>
            </svg>
            <p className="viewAllShoe">신발 전체 보기</p>
          </div>
          <div className="shoeLists">
            {this.state.shoeLists.map((shoe) => {
              return (
                <div className="shoeBox">
                  <img src={shoe.img} />
                  <div>{shoe.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;