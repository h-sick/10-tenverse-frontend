import React from "react";
import Header from "../Components/Header/Header";
import TopFilterBar from "../Components/TopfilterBar/TopFilterBar";
import SideFilterBar from "../Components/SideFilterBar/SideFilterBar";
import ItemList from "../Components/ItemList/ItemList";
import "./Shoes.scss";

class Shoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerData: {
        links: [
          { linkText: "Home", linkTo: "/" },
          { linkText: "신발", linkTo: "/shoes" },
        ],
        title: "SHOES",
        imgUrl:
          "https://image.converse.co.kr/cmsstatic/structured-content/15400/D-Converse-SP20-PWH-Best-Sellers-.jpg",
      },
      itemDatas: [
        {
          name: "척테일러 올스타 데인티 데님 데이즈",
          price: "55,000 원",
          color: ["black"],
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/567872C_567872C_primary.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/567872C_567872C_hover.jpg?browse",
          },
        },
        {
          name: "척테일러 올스타 리프트 EVA",
          price: "109,000 원",
          color: ["gray"],
          imgs: {
            imgUrl:
              "https://image.converse.co.kr/cmsstatic/product/565829C_565829C_primary.jpg?browse",
            hoverImgUrl:
              "https://image.converse.co.kr/cmsstatic/product/565829C_565829C_hover.jpg?browse",
          },
        },
      ],
    };
  }

  render() {
    return (
      <section className="Shoes">
        <Header
          links={this.state.headerData.links}
          title={this.state.headerData.title}
          imgUrl={this.state.headerData.imgUrl}
        />
        <TopFilterBar />
        <main>
          <div className="mainBox">
            <SideFilterBar />
            <ItemList itemDatas={this.state.itemDatas} />
          </div>
        </main>
      </section>
    );
  }
}

export default Shoes;
