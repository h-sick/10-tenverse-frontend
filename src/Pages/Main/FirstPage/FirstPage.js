import React from "react";
import ItemList from "../Components/Item/ItemList";
import "./FirstPage.scss";

const firstImg = {
  backgroundImage: `url(${"https://image.converse.co.kr/cmsstatic/structured-content/17636/KakaoTalk_20200721_172805223.jpg?gallery"})`,
};

class FirstPage extends React.Component {
  render() {
    const { product } = this.props;
    // console.log("fistPage :", product);
    // let firstPageShoe = product.filter((item, index) => index < 4);
    return (
      <div className="FirstPage">
        <div className="smallBox">
          <ItemList product={product} />
        </div>
        <div className="largeBox" style={firstImg}>
          <div className="textContainer">
            <p className="title">WOMEN'S COLLECTION</p>
            <p className="sub">유니크한 연출이 가능한 스타일링의 완성</p>
            <button className="btn">더 알아보기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
