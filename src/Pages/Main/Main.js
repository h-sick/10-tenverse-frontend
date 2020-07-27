import React from "react";
import Nav from "../../Components/Nav/Nav";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FifthPage from "./FifthPage/FifthPage";
import InstaPage from "./InstaPage/InstaPage";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";
import "../../Components/Nav/Nav.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.3.38:8000/product/mainpage")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          product: res.products,
        });
      });
  }

  render() {
    const { product } = this.state;
    console.log(product);
    // let page1 = product && product.filter((item, index) => index === 0);
    // let page2 = product && product.filter((item, index) => index === 1);
    // let page3 = product && product.filter((item, index) => index === 2);
    // let page4 = product && product.filter((item, index) => index === 2);
    // let page5 = product && product.filter((item, index) => index === 4);

    return (
      <div className="entireWrapper">
        <Nav />
        {/* {product.length > 0 ? ( */}
        <div className="pageWrapper">
          <FirstPage product={product.womens_collection} />
          <SecondPage product={product.jack_purcell} />
          <ThirdPage product={product} />
          <FourthPage product={product.pro_leather} />
          <FifthPage product={product} />
          <InstaPage />
        </div>
        {/* ) : null} */}
        <Footer />
      </div>
    );
  }
}

export default Main;
