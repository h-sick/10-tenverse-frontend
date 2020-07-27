import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ShoeColorList extends Component {
  changeShoeColor = (e) => {
    let endPoint = e.target.name;
    this.props.history.push(`/product/detail/${endPoint}`);
  };

  render() {
    const { shoeColorList, shoeIdList } = this.props;

    return (
      <img
        onClick={(e) => this.changeShoeColor(e)}
        alt="신발 이미지 색상"
        src={shoeColorList}
        name={shoeIdList}
      />
    );
  }
}

export default withRouter(ShoeColorList);
