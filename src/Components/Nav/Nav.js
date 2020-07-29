import React, { Component } from "react";
import { Link } from "react-router-dom";
import ConverseLogo from "./svg/ConverseLogo";
import NavProfile from "./svg/NavProfile";
import NavCart from "./svg/NavCart";
import NavHeart from "./svg/NavHeart";
import NavCs from "./svg/NavCs";
import NavSearch from "./svg/NavSearch";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navSearchBtnActive: false,
    };
  }

  handleNavSearchBtn = () => {
    const { navSearchBtnActive } = this.state;
    this.setState({ navSearchBtnActive: !navSearchBtnActive });
  };

  render() {
    const { navSearchBtnActive } = this.state;

    return (
      <div className="Nav">
        <div className="navLeft">
          <Link to="/">
            <ConverseLogo />
          </Link>
          <ul>
            <li>신발</li>
            <li>의류</li>
            <li>아동</li>
            <li>런칭캘린더</li>
            <li>회원전용</li>
          </ul>
        </div>
        <div className="navRight">
          <NavProfile />
          <NavCart />
          <NavHeart />
          <NavCs />
          <button
            className={
              navSearchBtnActive ? "navSearchBtn Changed" : "navSearchBtn"
            }
            onClick={this.handleNavSearchBtn}
          >
            <div class="navSearchText">검색</div>
            <div class="navSearchClose">X</div>
            <NavSearch />
          </button>
        </div>
      </div>
    );
  }
}

export default Nav;
