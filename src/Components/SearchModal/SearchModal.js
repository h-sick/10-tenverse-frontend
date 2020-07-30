import React from "react";
import { withRouter } from "react-router-dom";
import CollectionBox from "../SearchModal/CollectionBox/CollectionBox";
import ProductBox from "../SearchModal/ProductBox/ProductBox";
import TextBox from "../SearchModal/TextBox/TextBox";
import { shoesListAPI } from "../../config";
import {
  magnifier,
  memberOnlyImg,
  jackpurcellImg,
  chuckImg,
  collectionImg,
} from "../../config";
import "./SearchModal.scss";

class SearchModal extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      nameDatas: [],
      nameResult: [],
    };
  }

  handleInputChange = (e) => {
    const { nameDatas } = this.state;
    const { value } = e.target;
    const { keyCode } = e;

    let resultFunction = nameDatas
      .filter((name) => {
        return name.includes(value);
      })
      .slice(0, 4);

    if (value.length) {
      if (keyCode === 13) {
        this.props.history.push(`/search/${value}`);
      }
      this.setState({ nameResult: resultFunction });
    } else this.setState({ nameResult: [] });

    this.setState({ nameInput: value });
  };

  componentDidMount() {
    const searchAPI = `${shoesListAPI}/search`;

    fetch(searchAPI)
      .then((res) => res.json())
      .then(({ products }) => {
        this.setState({ nameDatas: products });
      });
  }

  render() {
    const { handleSearchModal } = this.props;
    const { nameResult } = this.state;

    return (
      <section className="SearchModal">
        <div className={`modalOverlay ${handleSearchModal ? "" : "hidden"}`} />
        <div className="searchBox">
          <div className="searchContainer">
            <div className="boxLeft">
              <CollectionBox
                title="썸머 티 컬렉션"
                src={collectionImg}
                color="white"
              />
              <div className="box">
                <TextBox title="베스트셀러" text="구매하기" />
                <ProductBox
                  title="회원전용상품"
                  alt="회원전용상품 이미지"
                  src={memberOnlyImg}
                />
              </div>
              <div className="box">
                <TextBox
                  title="무엇을 도와드릴까요?"
                  text="FAQ에서 궁금한 내용을 찾아보세요."
                />
                <ProductBox
                  title="젝퍼셀 클래식 화이트"
                  alt="젝퍼셀 상품이미지"
                  src={jackpurcellImg}
                  color="black"
                />
              </div>
              <CollectionBox
                title="척 70 뉴컬러"
                src={chuckImg}
                color="black"
              />
            </div>
            <div className="boxRight">
              <div className="search">
                <h1>검색</h1>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    onKeyUp={this.handleInputChange}
                  />
                  <svg id="nav-search" viewBox="0 0 32 32">
                    <path d={magnifier}></path>
                  </svg>
                </div>
                <ul className="searchResult">
                  {nameResult.map((name) => {
                    return <li>{name}</li>;
                  })}
                </ul>
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

export default withRouter(SearchModal);
