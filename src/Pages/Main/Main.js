import React, { Component } from "react";
import Banner from "../../Components/Nav/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      sideBarDisplay: false,
    };
  }

  handleSideBar = () => {
    this.setState({ sideBarDisplay: !this.state.sideBarDisplay });
  };

  render() {
    const { sideBarDisplay } = this.state;

    return (
      <>
        <Banner />
        <Nav handleSideBar={this.handleSideBar} />
        <SideBar
          sideBarDisplay={sideBarDisplay}
          handleSideBar={this.handleSideBar}
        />
      </>
    );
  }
}

export default Main;
