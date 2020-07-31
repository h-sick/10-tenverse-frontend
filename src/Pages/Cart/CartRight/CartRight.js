import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { cartAPI } from "../../../config";
import "./CartRight.scss";

class CartRight extends Component {
  constructor() {
    super();
    this.state = {
      isUpOpened: true,
      isDownOpened: true,
    };
  }

  handleOrder = () => {
    fetch(cartAPI, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    }).then((res) => {
      alert("주문이 완료되었습니다.");
      if (window.confirm("메인 페이지로 이동하시겠습니까?")) {
        this.props.history.push("/");
      }
    });
  };

  handleOpener = (target) => {
    this.setState({
      [target]: !this.state[target],
    });
  };

  render() {
    const { totalPrice } = this.props;
    const { isUpOpened, isDownOpened } = this.state;
    const { handleOrder, handleOpener } = this;
    return (
      <div className="CartRight">
        <div className="orderPriceText">주문금액</div>
        <div className="showTotal">
          <div className="totalInfo">
            <div className="productTotalPrice">
              <div className="left">상품금액</div>
              <div className="right">
                <span>{totalPrice}</span>
                <span> 원</span>
              </div>
            </div>
            <div className="deliveryCharge">
              <div className="left">배송비</div>
              <div className="right">
                <span>0</span>
                <span> 원</span>
              </div>
            </div>
            <div className="discountPrice">
              <div className="left">총 할인금액</div>
              <div className="right">
                <span>0</span>
                <span> 원</span>
              </div>
            </div>
            <div className="totalPrice">
              <div className="text">총 결제금액</div>
              <div className="number">
                <span>{totalPrice}</span>
                <span> 원</span>
              </div>
            </div>
          </div>
          <div className="orderContainer">
            <button onClick={handleOrder}>주문하기</button>
          </div>
        </div>
        <div className="promotion">고객님의 프로모션 코드를 직접 확인하세요!</div>
        <div className="code">
          <input type="text" placeholder="코드입력"></input>
          <button>적용</button>
        </div>
        <div className="additionalInfo">
          <div className="half">
            <div className="more" onClick={() => handleOpener("isUpOpened")}>
              <span className="left">이용안내</span>
              <span className="right">+</span>
            </div>
            <div className={isUpOpened && "hide"}>
              <ul>
                <li>실 결제 금액은 주문서 내 고객님의 쿠폰/할인 적용에 따라 달라집니다.</li>
                <li>실제 쿠폰코드의 적용여부는 금액에서 확인하여 주세요.</li>
                <li>적용되지 않는 쿠폰은 등록은 되나 금액은 변동되지 않습니다.</li>
                <li>프로모션 제품은 중복할인 또는 쿠폰 사용이 불가합니다.</li>
              </ul>
            </div>
          </div>
          <div className="half">
            <div className="more" onClick={() => handleOpener("isDownOpened")}>
              <span className="left">배송비 안내</span>
              <span className="right">+</span>
            </div>
            <div className={isDownOpened && "hide"}>
              <ul>
                <li>
                  총 구매금액이 5만원 이상인 경우,배송비는 무료입니다. (5만원 미만인 경우,배송비
                  2,500원이 별도 부가됩니다.)
                </li>
                <li>
                  장기간 장바구니에 보관하신 상품은 시간이 지남에 따라 가격과 혜택이 변동 될 수
                  있으며, 최대 30일 동안 보관됩니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CartRight);
