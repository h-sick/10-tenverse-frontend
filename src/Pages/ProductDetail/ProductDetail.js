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
    this.state = {
      product: [],
    };
    this.shoeDetailRef = React.createRef();
    this.reviewRef = React.createRef();
  }

  componentDidMount() {
    // const queryId = this.props.location.search.split("tail/")[1];

    // fetch(`http://10.58.3.38:8000/product/detail/1`);
    // fetch(`http://10.58.3.38:8000/product/detail/${this.props.match.params.id}`);
    fetch("http://localhost:3000/data/shoe.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          product: res.product,
        });
      });
  }

  scrollTo = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 50, behavior: "smooth" });
  };

  render() {
    const { product } = this.state;
    return (
      <div className="ProductDetail">
        <Banner />
        <Nav />
        <div className="ProductDetailWrapper">
          <div className="productDetailContainer">
            <ProductDetailLeft refArr={[this.shoeDetailRef, this.reviewRef]} product={product} />
            <ProductDetailRight
              scrollTo={this.scrollTo}
              refArr={[this.shoeDetailRef, this.reviewRef]}
              product={product}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
