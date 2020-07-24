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
    modal ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
  };

  handleCount = (num) => {
    if (num === -1 && this.state.count === 0) {
      return;
    } else if (num === 1 && this.state.count >= 5) {
      return alert("5개");
    }
    this.setState({
      count: this.state.count + num,
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
          <button onClick={this.handleModal}>사이즈 가이드</button>
        </div>
        <SizeTable />
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
