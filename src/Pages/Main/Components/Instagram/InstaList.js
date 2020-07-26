import React, { Component } from "react";
import InstaBox from "./InstaBox";
import "./InstaList.scss";

class InstaList extends Component {
  render() {
    const { posts } = this.props;
    console.log(posts);

    return (
      <div className="InstaList">
        {posts.length !== 0
          ? posts.map((item, idx) => {
              return (
                <InstaBox id={item.id} img={item.image} text={item.text} />
              );
            })
          : null}
      </div>
    );
  }
}
export default InstaList;
