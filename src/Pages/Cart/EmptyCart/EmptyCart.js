import React, { Component } from "react";
import "./EmptyCart.scss";
import { withRouter } from "react-router-dom";

class EmptyCart extends Component {
  goToMain = () => {
    this.props.history.push("/");
  };

  render() {
    const { goToMain } = this;

    return (
      <div className="EmptyCart">
        <div className="emptyCartTop">장바구니 (0)</div>
        <div className="emptyCartCenter">
          <div className="centerContainer">
            <div className="firstLine">장바구니에 담긴 상품이 없습니다.</div>
            <div className="midLine">
              척테일러, 척 70, 잭퍼셀, 원스타 등 지금 컨버스의 다양한 상품을 찾아보세요.
            </div>
            <button onClick={goToMain}>쇼핑 계속하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EmptyCart);
