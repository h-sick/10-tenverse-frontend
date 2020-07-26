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
      itemDatas: {
        products: [
          {
            productDetail: {
              id: 1,
              shoe__id: 1,
              shoe__detail__name: "척 70 시그니처",
              shoe__price: 95000,
              image__image:
                "https://image.converse.co.kr/cmsstatic/product/167698C_167698C_pdp-primary.jpg?gallery=",
              subimage__image:
                "https://image.converse.co.kr/cmsstatic/product/167698C_167698C_3.jpg?browse=",
            },
            options: [
              {
                shoecolor__id: 1,
                color_category__name: "black",
              },
              {
                shoecolor__id: 2,
                color_category__name: "green",
              },
            ],
          },
          {
            productDetail: {
              id: 2,
              shoe__id: 2,
              shoe__detail__name: "원스타 프로 피그 스킨",
              shoe__price: 99000,
              image__image:
                "https://image.converse.co.kr/cmsstatic/product/168654C_168654C_pdp-primary.jpg?gallery=",
              subimage__image:
                "https://image.converse.co.kr/cmsstatic/product/168654C_168654C_03.jpg?browse=",
            },
            options: [
              {
                shoecolor__id: 2,
                color_category__name: "green",
              },
              {
                shoecolor__id: 3,
                color_category__name: "indigo",
              },
            ],
          },
          {
            productDetail: {
              id: 3,
              shoe__id: 3,
              shoe__detail__name: "척테일러 올스타 핵트 패션",
              shoe__price: 79000,
              image__image:
                "https://image.converse.co.kr/cmsstatic/product/168745C_168745C_pdp-primary.jpg?gallery=",
              subimage__image:
                "https://image.converse.co.kr/cmsstatic/product/168745C_168745C_03.jpg?browse=",
            },
            options: [
              {
                shoecolor__id: 3,
                color_category__name: "black",
              },
              {
                shoecolor__id: 5,
                color_category__name: "white",
              },
            ],
          },
        ],
      },
      filterLables: [],
      sortedByHighPrice: true,
    };
  }

  handleList = (i) => {
    i === 0
      ? this.setState({ sortedByHighPrice: true })
      : this.setState({ sortedByHighPrice: false });
  };

  // componentDidMount() {
  //   fetch("http://10.58.0.114:8000/product")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({ itemDatas: json });
  //     });
  // }

  handleColorNumber = (e) => {
    this.setState({ clickedColorNumber: e });
  };

  render() {
    const { products } = this.state.itemDatas;
    const { sortedByHighPrice, headerData, filterLables } = this.state;

    return (
      <section className="Shoes">
        <Nav />
        <Header
          links={headerData.links}
          title={headerData.title}
          imgUrl={headerData.imgUrl}
        />
        {products && (
          <TopFilterBar
            dataNumber={products.length}
            sortedByPrice={this.handleList}
          />
        )}
        <main>
          <div className="mainBox">
            <SideFilterBar filterLables={filterLables} />
            {products && (
              <ItemList datas={products} handleSort={sortedByHighPrice} />
            )}
          </div>
        </main>
        <Footer />
      </section>
    );
  }
}

export default Shoes;
