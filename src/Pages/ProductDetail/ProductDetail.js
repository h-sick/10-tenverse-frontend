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
      product: {},
    };
    this.shoeDetailRef = React.createRef();
    this.reviewRef = React.createRef();
  }

  componentDidMount() {
    const urlId = this.props.match.params.id;
    fetch(`http://10.58.3.38:8000/product/detail/${urlId}`)
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
      fetch(`http://10.58.3.38:8000/product/detail/${urlId}`)
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
    const { product } = this.state;
    return (
      <div className="ProductDetail">
        <Banner />
        <Nav />
        <div className="ProductDetailWrapper">
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
