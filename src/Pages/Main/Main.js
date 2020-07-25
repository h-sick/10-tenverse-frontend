import React from "react";
import "./Main.scss";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FifthPage from "./FifthPage/FifthPage";
import "../../Components/Nav/Nav.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("") // api 주소 data 가져옴
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) => this.setState({ products: res }));
  }

  render() {
    return (
      <>
        <div className="entireWrapper">
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
          <FifthPage />
        </div>
      </>
    );
  }
}

export default Main;
