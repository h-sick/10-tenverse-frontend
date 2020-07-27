import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { magnifier } from "../../config";
import "./SearchModal.scss";

class SearchModal extends React.Component {
  render() {
    return (
      <section className="SearchModal">
        <div className="serchBoxes">
          <div className="boxLeft">
            <div className="colectionBox imgBox">
              <img
                alt="썸머 티 컬렉션 이미지"
                src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw079e7f00/firstspirit/media/09_global_elements/2020_fall/search_nav_5/07_35/D-Converse-SearchModule-JULY-20-Converse-CLASSICS.jpg"
              />
              <p>썸머 티 컬렉션</p>
            </div>
            <div>
              <div className="bestSeller textBox">
                <h2>베스트셀러</h2>
                <div>
                  <FiArrowRight />
                  <p>구매하기</p>
                </div>
              </div>
              <div className="memberOnly imgBox">
                <img
                  alt="회원전용상품 이미지"
                  src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw8b1211a2/firstspirit/media/09_global_elements/2020_fall/search_nav_5/07_35/D-Converse-SearchModule-JULY-20-Converse-CUSTOM.jpg"
                />
                <p>회원전용상품</p>
              </div>
            </div>
            <div>
              <div className="qeustion textBox">
                <h2>무엇을 도와드릴까요?</h2>
                <div>
                  <FiArrowRight />
                  <p>FAQ에서 궁금한 내용을 찾아보세요.</p>
                </div>
              </div>
              <div className="jackpurcell">
                <img
                  alt="잭퍼셀 상품이미지"
                  src="https://image.converse.co.kr/cmsstatic/product/164057C_164057C_pdp-primary.jpg?gallery="
                />
                <p>잭퍼셀 클래식 화이트</p>
              </div>
            </div>
            <div className="chuckBox">
              <img
                alt="척70 상품 이미지"
                src="https://image.converse.co.kr/cmsstatic/product/168508C_168508C_hover.jpg?browse="
              />
              <p>척 70 뉴컬러</p>
            </div>
          </div>
          <div className="boxRight">
            <div className="search">
              <h1>검색</h1>
              <input type="text" placeholder="검색어를 입력해주세요">
                <svg id="nav-search" viewBox="0 0 32 32">
                  <path d={magnifier}></path>
                </svg>
              </input>
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
      </section>
    );
  }
}

export default SearchModal;
