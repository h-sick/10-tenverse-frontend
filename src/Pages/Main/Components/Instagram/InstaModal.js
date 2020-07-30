import React, { Component } from "react";
import "./InstaModal.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

class InstaModal extends Component {
  clickNextHandler = () => {
    this.props.nextIdxHandler();
  };

  clickBackHandler = () => {
    this.props.backIdxHandler();
  };

  render() {
    const { user, image, text, user_profile_image } = this.props.data[0];

    return (
      <div className="InstaModal">
        <button className="backBtn" onClick={this.clickBackHandler}>
          <IoIosArrowBack className="btn" />
        </button>
        <div className="modalBox">
          <div
            className="modalLeft"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="modalRight">
            <div className="profileContainer">
              <img
                className="modalProfile"
                alt="모달 프로필 이미지"
                src={user_profile_image}
              />
              <div className="profileInfo">
                <p className="userId">{user}</p>
                <p>23 days ago</p>
              </div>
            </div>
            <div className="modalContent">
              <p>{text}</p>
            </div>
            <div className="btnBox">
              <button>이 스타일 구매하기</button>
            </div>
          </div>
        </div>
        <button className="nextBtn" onClick={this.clickNextHandler}>
          <IoIosArrowForward className="btn" />
        </button>
      </div>
    );
  }
}
export default InstaModal;
