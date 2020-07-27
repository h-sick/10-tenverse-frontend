import React from "react";
import "../SecondPage/SecondPage.scss";
import ItemList from "../Components/ItemList";

class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { shoeLists } = this.state;
    const { product } = this.props;
    // let secondPageShoe = product.filter(
    //   (item, index) => index > 3 && index < 6
    // );

    return (
      <div className="SecondPage">
        <div className="boxContainer">
          <div className="largeBox">
            <div className="hoverCover">
              <p className="hoverText">더 알아보기</p>
            </div>
            <img
              src="https://image.converse.co.kr/cmsstatic/structured-content/17531/KakaoTalk_20200709_134326255.jpg?gallery"
              className="hoverImg"
            ></img>
          </div>

          <div className="smallBox">
            <div className="img">
              <img
                alt="잭퍼셀&척70"
                src="https://image.converse.co.kr/cmsstatic/structured-content/17530/01_1440x900.jpg?gallery"
              />
            </div>
            <ItemList product={product} />
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
            {shoeLists.map((shoe) => {
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
