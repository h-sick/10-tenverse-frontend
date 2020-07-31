import React from "react";
import Nav from "../../Components/Nav/Nav";
import Banner from "../../Components/Nav/Banner/Banner";
import SearchModal from "../../Components/SearchModal/SearchModal";
import SideBar from "../../Components/SideBar/SideBar";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FifthPage from "./FifthPage/FifthPage";
import InstaPage from "./InstaPage/InstaPage";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";
import "../../Components/Nav/Nav.scss";
import { mainAPI } from "../../config";
import ProductDetail from "../ProductDetail/ProductDetail";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      activatedBtn: false,
      sideBarDisplay: false,
    };
  }

  handleNavSearchBtn = () => {
    this.setState({ activatedBtn: !this.state.activatedBtn });
  };

  handleSideBar = () => {
    this.setState({ sideBarDisplay: !this.state.sideBarDisplay });
  };

  componentDidMount() {
    fetch(mainAPI)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          product: res.products,
        });
      });
  }

  render() {
    const { product, sideBarDisplay, activatedBtn } = this.state;

    return (
      <div className="entireWrapper">
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
          <FirstPage product={product.women_collection} />
          <SecondPage product={product.jack_purcell} />
          <ThirdPage product={product} />
          <FourthPage product={product.pro_leather} />
          <FifthPage product={product} />
          <InstaPage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
