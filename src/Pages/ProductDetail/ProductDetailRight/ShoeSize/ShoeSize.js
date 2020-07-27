import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SizeTable from "./SizeTable/SizeTable";
import ModalSizeGuide from "./ModalSizeGuide/ModalSizeGuide";
import "./ShoeSize.scss";

class ShoeSize extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      count: 1,
    };
  }

  handleModal = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
    document.body.style.overflow = modal ? "hidden" : "unset";
  };

  handleCount = (num) => {
    const { count } = this.state;
    if (num === -1 && count === 1) {
      return;
    } else if (num === 1 && count >= 5) {
      return alert("5개");
    }
    this.setState({
      count: count + num,
    });
  };

  moveToLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    const { count } = this.state;
    return (
      <div className="ShoeSize">
        <div className="sizeGuide">
          <div className="sizeConsider">사이즈가 고민되면 클릭하세요!</div>
          <button onClick={this.handleModal}>사이즈 가이드</button>
        </div>
        <SizeTable product={this.props.product} />
        <div className="countWrap">
          <div className="count num">{count}</div>
          <button onClick={() => this.handleCount(-1)} value="-" className="count minus">
            -
          </button>
          <button onClick={() => this.handleCount(1)} value="+" className="count plus">
            +
          </button>
        </div>
        <button onClick={this.moveToLogin} className="loginBtn">
          로그인
        </button>
        <div className="infoDelivery">5만원 이상 구매시 무료배송</div>
        <div className="infoDeliveryText">
          <span>배송정보</span>
        </div>
        {this.state.modal && <ModalSizeGuide handleModal={this.handleModal} />}
      </div>
    );
  }
}

export default withRouter(ShoeSize);
