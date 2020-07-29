import React, { Component } from "react";
import Banner from "../../Components/Nav/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import SearchModal from "../../Components/SearchModal/SearchModal";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      activatedBtn: false,
    };
  }

  handleNavSearchBtn = () => {
    // const { activatedBtn } = this.state;
    this.setState({ activatedBtn: !this.state.activatedBtn });
  };

  render() {
    const { activatedBtn } = this.state;
    return (
      <nav className="Main">
        <Banner />
        <Nav handleNavSearchBtn={this.handleNavSearchBtn} />
        <SearchModal handleSearchModal={activatedBtn} />
      </nav>
    );
  }
}

export default Main;
