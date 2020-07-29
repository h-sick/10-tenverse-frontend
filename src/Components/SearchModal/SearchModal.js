import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  magnifier,
  collectionImg,
  memberOnlyImg,
  jackpurcellImg,
  chuckImg,
} from "../../config";
import "./SearchModal.scss";

class SearchModal extends React.Component {
  handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { handleSearchModal } = this.props;

    return (
      <section className="SearchModal">
        <div className={`modalOverlay ${handleSearchModal ? "" : "hidden"}`} />
        <div className="searchBox">
          <div className="searchContainer">
            <div className="boxLeft">
              <div className="collectionBox imgBox box">
                <div className="darknessBig">
                  <p>더 알아보기</p>
                </div>
                <img
                  alt="썸머 티 컬렉션 이미지"
                  src={collectionImg}
                  className="colectionImg"
                />
                <p>썸머 티 컬렉션</p>
              </div>
              <div className="box">
                <div className="bestSeller textBox">
                  <h2>베스트셀러</h2>
                  <div>
                    <FiArrowRight />
                    <p>구매하기</p>
                  </div>
                </div>
                <div className="memberOnly imgBox">
                  <div className="darknessSmall">
                    <p>더 알아보기</p>
                  </div>
                  <img
                    alt="회원전용상품 이미지"
                    src={memberOnlyImg}
                    className="smallImg"
                  />
                  <p>회원전용상품</p>
                </div>
              </div>
              <div className="box">
                <div className="qeustion textBox">
                  <h2>무엇을 도와드릴까요?</h2>
                  <div>
                    <FiArrowRight />
                    <p>FAQ에서 궁금한 내용을 찾아보세요.</p>
                  </div>
                </div>
                <div className="jackpurcell imgBox">
                  <div className="darknessSmall">
                    <p>더 알아보기</p>
                  </div>
                  <img
                    alt="잭퍼셀 상품이미지"
                    src={jackpurcellImg}
                    className="smallImg"
                  />
                  <p>잭퍼셀 클래식 화이트</p>
                </div>
              </div>
              <div className="chuckBox imgBox box">
                <div className="darknessBig">
                  <p>더 알아보기</p>
                </div>
                <img
                  alt="척70 상품 이미지"
                  src={chuckImg}
                  className="collectionImg"
                />
                <p>척 70 뉴컬러</p>
              </div>
            </div>
            <div className="boxRight">
              <div className="search">
                <h1>검색</h1>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    onChange={this.handleChange}
                  />
                  <svg id="nav-search" viewBox="0 0 32 32">
                    <path d={magnifier}></path>
                  </svg>
                </div>
                <div className="searchResult"></div>
              </div>
              <div className="popularWords">
                <h1>인기 검색어</h1>
                <ul>
                  <li>척테일러</li>
                  <li>잭퍼셀</li>
                  <li>척 70</li>
                  <li>뮬</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchModal;
