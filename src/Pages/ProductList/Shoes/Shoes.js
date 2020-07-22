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
            <ItemList />
          </div>
        </main>
      </section>
    );
  }
}

export default Shoes;
