import React from "react";
import Header from "../Components/Header/Header";
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
      </section>
    );
  }
}

export default Shoes;
