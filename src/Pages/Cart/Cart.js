import React, { Component } from "react";
import Banner from "../../Components/Nav/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import CartLeft from "./CartLeft/CartLeft";
import CartRight from "./CartRight/CartRight";
import EmptyCart from "./EmptyCart/EmptyCart";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalCount: 0,
      price: 0,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    const { products } = this.state;
    fetch("http://10.58.3.38:8000/order/cart", {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.6mlhvmw9MyBvInOVrhOnQNizB8iPI47xZ_2sC1gUcXs",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          products: res.pending_orders,
          totalPrice: Number(res.total_price).toLocaleString(),
        });
      })
      .then(
        this.setState({
          totalCount: products.length,
        }),
      );
  }

  removeHandler = (id) => {
    const { products } = this.state;
    const productFilter = products.filter((product) => {
      return product.id !== id;
    });
    this.setState({ products: productFilter });
  };

  makeEmptyCart = () => {
    fetch("http://10.58.3.38:8000/order/delete", {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.6mlhvmw9MyBvInOVrhOnQNizB8iPI47xZ_2sC1gUcXs",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          products: res.pending_orders,
        });
      });
  };

  render() {
    const { products, totalPrice, price } = this.state;
    const { removeHandler, makeEmptyCart } = this;
    return (
      <div className="Cart">
        <Banner />
        <Nav />
        <div className="cartWrapper">
          {products.length > 0 ? (
            <>
              <CartLeft
                products={products}
                totalPrice={totalPrice}
                removeHandler={removeHandler}
                makeEmptyCart={makeEmptyCart}
                price={price}
              />
              <CartRight totalPrice={totalPrice} />
            </>
          ) : (
            <EmptyCart />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart;
