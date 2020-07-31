import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SizeTable from "./SizeTable/SizeTable";
import ModalSizeGuide from "./ModalSizeGuide/ModalSizeGuide";
import { orderAPI } from "../../../../config";
import "../../../../Components/Nav/svg/NavHeart";
import "./ShoeSize.scss";
import NavHeart from "../../../../Components/Nav/svg/NavHeart";

class ShoeSize extends Component {
  constructor() {
    super();
    this.state = {
      isBtnActive: null,
      shoeSize: 0,
      count: 1,
      modal: false,
      limit: false,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("access_token")) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  sizeTableBtn = (size, i) => {
    this.setState({
      isBtnActive: i,
      shoeSize: size,
    });
  };

  handleModal = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
    document.body.style.overflow = modal ? "unset" : "hidden";
  };

  handleCount = (num) => {
    const { count } = this.state;

    if (num === -1 && count === 1) {
      return;
    } else if (num === 1 && count === 5) {
      this.setState({
        limit: true,
      });
    } else {
      this.setState({
        count: count + num,
      });
      if (count === 5) {
        this.setState({
          limit: false,
        });
      }
    }
  };

  moveToLogin = () => {
    this.props.history.push("/login");
  };

  addToCart = () => {
    const { product } = this.props;
    const { shoeSize, count } = this.state;

    shoeSize !== 0
      ? fetch(orderAPI, {
          method: "POST",
          headers: {
            Authorization: sessionStorage.getItem("access_token"),
          },
          body: JSON.stringify({
            id: product.id,
            size: shoeSize,
            quantity: count,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.message === "OUT_OF_STOCK") {
              return alert("재고가 부족합니다.");
            } else if (window.confirm("장바구니로 이동하시겠습니까?")) {
              this.props.history.push("/cart");
            }
          })
      : alert("신발 사이즈를 선택해주세요.");
  };

  render() {
    const { product } = this.props;
    const { modal, count, isBtnActive, isLoggedIn, limit } = this.state;
    const {
      sizeTableBtn,
      addToCart,
      handleModal,
      handleCount,
      moveToLogin,
    } = this;
    return (
      <div className="ShoeSize">
        <div className="sizeGuide">
          <div className="sizeConsider">사이즈가 고민되면 클릭하세요!</div>
          <button onClick={handleModal}>사이즈 가이드</button>
        </div>
        <SizeTable
          product={product}
          sizeTableBtn={sizeTableBtn}
          isBtnActive={isBtnActive}
        />
        <div className="countWrap">
          <div className="count num">{count}</div>
          <button onClick={() => handleCount(-1)} className="count minus">
            -
          </button>
          <button onClick={() => handleCount(1)} className="count plus">
            +
          </button>
        </div>
        <div className={limit ? "infoHideLine" : "hide"}>
          <span>5개까지 구매가능합니다.</span>
        </div>
        {isLoggedIn ? (
          <div className="afterLogin">
            <button className="basketBtn" onClick={addToCart}>
              장바구니
            </button>
            <button className="directBuy">바로구매</button>
            <button className="iconWish">
              <NavHeart />
            </button>
          </div>
        ) : (
          <button onClick={moveToLogin} className="loginBtn">
            로그인
          </button>
        )}
        <div className="infoDelivery">5만원 이상 구매시 무료배송</div>
        <div className="infoDeliveryText">
          <span>배송정보</span>
        </div>
        {modal && <ModalSizeGuide handleModal={handleModal} />}
      </div>
    );
  }
}

export default withRouter(ShoeSize);
