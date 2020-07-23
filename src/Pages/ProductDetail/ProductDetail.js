import React, { Component } from "react";
import Banner from "../../Components/Nav/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import ProductDetailLeft from "./ProductDetailLeft/ProductDetailLeft";
import ProductDetailRight from "./ProductDetailRight/ProductDetailRight";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <>
        <Banner />
        <Nav />
        <div className="ProductDetail">
          <div className="productDetailContainer">
            <ProductDetailLeft />
            <ProductDetailRight />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ProductDetail;
