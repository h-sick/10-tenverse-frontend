import React, { Component } from "react";
import Slider from "react-slick";
import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Banner extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };

    return (
      <div className="Banner">
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
    );
  }
}

export default Banner;
