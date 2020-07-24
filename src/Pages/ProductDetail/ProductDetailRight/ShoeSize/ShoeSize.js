import React, { Component } from "react";
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

  handleOpenModal = () => {
    this.setState({
      modal: true,
    });
    document.body.style.overflow = "hidden";
  };

  handleCloseModal = () => {
    this.setState({
      modal: false,
    });
    document.body.style.overflow = "unset";
  };

  handleCountMinus = () => {
    this.state.count > 0 &&
      this.setState({
        count: this.state.count - 1,
      });
  };

  handleCountPlus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="ShoeSize">
        <div className="sizeGuide">
          <button onClick={this.handleOpenModal}>사이즈 가이드</button>
        </div>
        <SizeTable />
        <div className="countWrap">
          <div className="count num">{count}</div>
          <button onClick={this.handleCountMinus} className="count minus">
            -
          </button>
          <button onClick={this.handleCountPlus} className="count plus">
            +
          </button>
        </div>
        <button className="loginBtn">로그인</button>
        <div className="infoDelivery">5만원 이상 구매시 무료배송</div>
        <div className="infoDeliveryText">
          <span>배송정보</span>
        </div>
        {this.state.modal && <ModalSizeGuide onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default ShoeSize;
