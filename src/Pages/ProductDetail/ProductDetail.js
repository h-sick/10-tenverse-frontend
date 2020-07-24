import React, { Component } from "react";
import Banner from "../../Components/Nav/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import ProductDetailLeft from "./ProductDetailLeft/ProductDetailLeft";
import ProductDetailRight from "./ProductDetailRight/ProductDetailRight";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.shoeDetailRef = React.createRef();
    this.reviewRef = React.createRef();
  }

  scrollTo = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 50, behavior: "smooth" });
  };

  render() {
    return (
      <div className="ProductDetail">
        <Banner />
        <Nav />
        <div className="ProductDetailWrapper">
          <div className="productDetailContainer">
            {/* <ProductDetailLeft shoeDetailRef={this.shoeDetailRef} reviewRef={this.reviewRef} /> */}
            <ProductDetailLeft refArr={[this.shoeDetailRef, this.reviewRef]} />
            <ProductDetailRight
              scrollTo={this.scrollTo}
              refArr={[this.shoeDetailRef, this.reviewRef]}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
