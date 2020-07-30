import React, { Component } from "react";
import InstaBox from "./InstaBox";
import InstaModal from "./InstaModal";
import "./InstaList.scss";

class InstaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModalIdx: null,
      modalState: false,
      data: [],
    };
  }

  closeModal = (e) => {
    if (e.target.className === "InstaModal") {
      this.setState({
        modalState: false,
      });
    }
    document.body.style.overflow = "unset";
  };

  modalStateHandler = (index) => {
    const { modalState } = this.state;
    this.setState({
      modalState: !modalState,
      currentModalIdx: index,
    });
    document.body.style.overflow = "hidden";
  };

  nextIdxHandler = (index) => {
    const { currentModalIdx } = this.state;
    this.setState({
      currentModalIdx: currentModalIdx + 1,
    });
  };

  backIdxHandler = (index) => {
    const { currentModalIdx } = this.state;
    this.setState({
      currentModalIdx: currentModalIdx - 1,
    });
  };

  render() {
    const { posts } = this.props;
    const { currentModalIdx, modalState } = this.state;
    let data = posts.filter((item, index) => index === currentModalIdx);

    return (
      <div className="InstaList">
        {posts.length !== 0 &&
          posts.map((item, idx) => {
            return (
              <InstaBox
                idx={idx}
                id={item.id}
                img={item.image}
                text={item.text}
                userId={item.user}
                profile={item.user_profile_image}
                modalState={this.state.modalState}
                modalStateHandler={this.modalStateHandler}
              />
            );
          })}
        <div className={modalState ? "visible" : "hidden"}>
          {data.length !== 0 && (
            <InstaModal
              data={data}
              nextIdxHandler={this.nextIdxHandler}
              backIdxHandler={this.backIdxHandler}
              closeModal={this.closeModal}
            />
          )}
        </div>
      </div>
    );
  }
}
export default InstaList;
