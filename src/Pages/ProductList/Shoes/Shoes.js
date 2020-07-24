import React from "react";
import Nav from "../../../Components/Nav/Nav";
import Header from "../Components/Header/Header";
import TopFilterBar from "../Components/TopfilterBar/TopFilterBar";
import SideFilterBar from "../Components/SideFilterBar/SideFilterBar";
import ItemList from "../Components/ItemList/ItemList";
import Footer from "../../../Components/Footer/Footer";
import "./Shoes.scss";

class Shoes extends React.Component {
  constructor() {
    super();
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
      itemDatas: [],
      filterLables: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.0.114:8000/product")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ itemDatas: json });
      });
  }

  render() {
    const products = this.state.itemDatas.products;
    console.log(products);
    return (
      <section className="Shoes">
        <Nav />
        <Header
          links={this.state.headerData.links}
          title={this.state.headerData.title}
          imgUrl={this.state.headerData.imgUrl}
        />
        {products && <TopFilterBar dataNumber={products.length} />}
        <main>
          <div className="mainBox">
            <SideFilterBar filterLables={this.state.filterLables} />
            {products && <ItemList datas={products} />}
          </div>
        </main>
        <Footer />
      </section>
    );
  }
}

export default Shoes;
