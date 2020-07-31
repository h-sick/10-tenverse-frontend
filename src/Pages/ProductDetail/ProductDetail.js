import React, { Component } from "react";
import Banner from "../../Components/Nav/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";
import SearchModal from "../../Components/SearchModal/SearchModal";
import Footer from "../../Components/Footer/Footer";
import ProductDetailLeft from "./ProductDetailLeft/ProductDetailLeft";
import ProductDetailRight from "./ProductDetailRight/ProductDetailRight";
import { shoeDetailAPI } from "../../config";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      activatedBtn: false,
      sideBarDisplay: false,
    };
    this.shoeDetailRef = React.createRef();
    this.reviewRef = React.createRef();
  }

  handleNavSearchBtn = () => {
    this.setState({ activatedBtn: !this.state.activatedBtn });
  };

  handleSideBar = () => {
    this.setState({ sideBarDisplay: !this.state.sideBarDisplay });
  };

  componentDidMount() {
    const urlId = this.props.match.params.id;
    fetch(`${shoeDetailAPI}${urlId}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          product: res.product,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const urlId = this.props.match.params.id;
    const prevUrlId = prevProps.match.params.id;
    if (urlId !== prevUrlId) {
      fetch(`${shoeDetailAPI}${urlId}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            product: res.product,
          });
        });
    }
  }

  scrollTo = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 50, behavior: "smooth" });
  };

  render() {
    const { product, sideBarDisplay, activatedBtn } = this.state;
    return (
      <div className="ProductDetail">
        <Banner />
        <div className="ProductDetailWrapper">
          <Nav handleNavSearchBtn={this.handleNavSearchBtn} handleSideBar={this.handleSideBar} />
          <SearchModal handleSearchModal={activatedBtn} />
          <SideBar sideBarDisplay={sideBarDisplay} handleSideBar={this.handleSideBar} />

          <div className="productDetailContainer">
            {product.name && (
              <>
                <ProductDetailLeft
                  refArr={[this.shoeDetailRef, this.reviewRef]}
                  product={product}
                />
                <ProductDetailRight
                  scrollTo={this.scrollTo}
                  refArr={[this.shoeDetailRef, this.reviewRef]}
                  product={product}
                  urlId={this.urlId}
                />
              </>
            )}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
