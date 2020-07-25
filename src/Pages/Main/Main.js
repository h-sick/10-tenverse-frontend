import React from "react";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FifthPage from "./FifthPage/FifthPage";
import Nav from "../../Components/Nav/Nav";
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
    fetch("http://localhost:3000/data/main.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          product: res.product,
        });
      });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="entireWrapper">
        <Nav />
        <div className="pageWrapper">
          <FirstPage product={product} />
          <SecondPage product={product} />
          <ThirdPage product={product} />
          <FourthPage product={product} />
          <FifthPage product={product} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
