import React, { Component } from "react";
import DetailInstaBox from "./DetailInstaBox";
import DetailInstaModal from "./DetailInstaModal";
import "./DetailInstaList.scss";

class DetailInstaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModalIdx: null,
      modalState: false,
      data: [],
    };
  }

  closeModal = (e) => {
    if (e.target.className === "DetailInstaModal") {
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
      <div className="DetailInstaList">
        {posts.length !== 0 &&
          posts.map((item, idx) => {
            return (
              <DetailInstaBox
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
            <DetailInstaModal
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
export default DetailInstaList;
