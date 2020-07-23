import React from "react";
// import "./Main.scss";
// import Product from "./Components/Product";
import FirstPage from "./Components/FirstPage/FirstPage";

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
    return <FirstPage />;
  }
}

export default Main;
