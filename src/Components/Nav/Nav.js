import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ConverseLogo from "./svg/ConverseLogo";
import NavProfile from "./svg/NavProfile";
import NavCart from "./svg/NavCart";
import NavHeart from "./svg/NavHeart";
import NavCs from "./svg/NavCs";
import NavSearch from "./svg/NavSearch";
import "./Nav.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../Footer/Footer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navSearchBtnActive: false,
    };
  }

  handleNavSearchBtn = () => {
    let currentState = this.state.navSearchBtnActive;
    this.setState({ navSearchBtnActive: !currentState });
  };

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <>
        <div className="Nav">
          <div className="banner">
            <div className="slider">
              <img
                onClick={() => this.slider.slickNext()}
                className="arrow left"
                alt="슬라이더 화살"
                src="/Images/arrowLeft.png"
              />
              <img
                onClick={() => this.slider.slickNext()}
                className="arrow right"
                alt="슬라이더 화살"
                src="/Images/arrowRight.png"
              />
              <Slider ref={(a) => (this.slider = a)} {...settings}>
                <div className="eachSlider">
                  <div>NEW</div>
                  <div>새로운 조합으로 나만의 새로움을</div>
                </div>
                <div className="eachSlider">
                  <div>NEW</div>
                  <span>트위스티드 리조트 컬렉션 출시</span>
                </div>
                <div className="eachSlider">
                  <div>NEW</div>
                  <span>척70 리뉴 컬렉션 출시</span>
                </div>
                <div className="eachSlider">
                  <div>NEW</div>
                  <span>무통장 입금 서비스 종류 안내</span>
                </div>
                <div className="eachSlider">
                  <div>NEW</div>
                  <span>컨버스X로킷 컬렉션 출시</span>
                </div>
              </Slider>
            </div>
          </div>
          <nav>
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
                className={this.state.navSearchBtnActive ? "navSearchBtnChanged" : "navSearchBtn"}
                onClick={this.handleNavSearchBtn}
              >
                <div class="navSearchText">검색</div>
                <div class="navSearchClose">X</div>
                <NavSearch />
              </button>
            </div>
          </nav>
        </div>
        <Footer />
      </>
    );
  }
}

export default Nav;
