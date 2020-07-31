import React, { Component } from "react";
import Banner from "../../Components/Nav/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";
import SearchModal from "../../Components/SearchModal/SearchModal";
import Footer from "../../Components/Footer/Footer";
import CartLeft from "./CartLeft/CartLeft";
import CartRight from "./CartRight/CartRight";
import EmptyCart from "./EmptyCart/EmptyCart";
import { cartAPI } from "../../config";
import { cartDeleteAPI } from "../../config";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalCount: 0,
      price: 0,
      totalPrice: 0,
      activatedBtn: false,
      sideBarDisplay: false,
    };
  }

  handleNavSearchBtn = () => {
    this.setState({ activatedBtn: !this.state.activatedBtn });
    document.body.style.overflow = this.state.activatedBtn ? "unset" : "hidden";
  };

  handleSideBar = () => {
    this.setState({ sideBarDisplay: !this.state.sideBarDisplay });
    document.body.style.overflow = this.state.sideBarDisplay
      ? "unset"
      : "hidden";
  };

  componentDidMount() {
    const { products } = this.state;
    fetch(cartAPI, {
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
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
        })
      );
  }

  removeHandler = (id) => {
    const { products } = this.state;
    const productFilter = products.filter((product) => product.id !== id);
    this.setState({ products: productFilter });
  };

  makeEmptyCart = () => {
    fetch(cartDeleteAPI, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
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
    const {
      products,
      totalPrice,
      price,
      sideBarDisplay,
      activatedBtn,
    } = this.state;
    const { removeHandler, makeEmptyCart } = this;
    return (
      <div className="Cart">
        <Banner />
        <div className="pageWrapper">
          <Nav
            handleNavSearchBtn={this.handleNavSearchBtn}
            handleSideBar={this.handleSideBar}
          />
          <SearchModal handleSearchModal={activatedBtn} />
          <SideBar
            sideBarDisplay={sideBarDisplay}
            handleSideBar={this.handleSideBar}
          />
          <div className="cartWrapper">
            {products.length ? (
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart;
