import React from "react";
import "./FirstPage.scss";
import ItemList from "./ItemList";
import ItemBox from "./ItemBox";

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDatas: [
        {
          name: "척테일러 올스타 리프트 인더스트리얼 글램",
          price: "79,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/27053/568630C_568630C_primary-1.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/27053/568630C_568630C_hover.jpg?browse",
          },
        },
        {
          name: "척테일러 올스타 리프트 캔버스",
          price: "79,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/27379/560846C_560846C_primary.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/27379/560846C_560846C_hover.jpg?browse",
          },
        },
        {
          name: "척테일러 올스타 리프트 캔버스",
          price: "75,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_primary.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_hover.jpg?browse",
          },
        },
        {
          name: "척테일러 올스타 리프트 캔버스",
          price: "75,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/21553/560251C_560251C.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/560251C_560251C_hover.jpg?browse",
          },
        },
        {
          name: "WOMEN'S COLLECTION",
          price: "75,000 원",
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/21553/560251C_560251C.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/560251C_560251C_hover.jpg?browse",
          },
        },
      ],
    };
  }

  render() {
    const { itemDatas } = this.state;
    let firstRow1 = itemDatas.filter((item, index) => index < 2);
    let firstRow2 = itemDatas.filter((item, index) => index > 1 && index < 4);

    console.log(firstRow1);
    return (
      <div className="pageContainer">
        <div className="leftBox">
          <ItemList itemDatas={firstRow1} />
          <ItemList itemDatas={firstRow2} />
        </div>
        <div className="rightBox">
          <div className="textContainer">
            <p className="title">WOMEN'S COLLECTION</p>
            <p className="sub">유니크한 연출이 가능한 스타일링의 완성</p>
            <div style={{ textAlign: "center" }}>
              <button className="btn">더 알아보기</button>
            </div>
          </div>
        </div>
        {/* {this.state.itemDatas.map((item) => {
          console.log(item);
          return <ItemBox data={item} />;
        })} */}
      </div>
    );
  }
}

export default FirstPage;
