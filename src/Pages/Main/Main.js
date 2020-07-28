import React, { Component } from "react";
import Banner from "../../Components/Nav/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import SearchModal from "../../Components/SearchModal/SearchModal";

class Main extends Component {
  render() {
    return (
      <nav className="Main">
        <Banner />
        <Nav />
        <SearchModal />
      </nav>
    );
  }
}

export default Main;
