import React, { Component } from "react";

class ShoeColorList extends Component {
  render() {
    const { changeShoeColor, shoeColorList, shoeIdList } = this.props;
    return (
      <img
        onClick={(e) => changeShoeColor(e)}
        alt="신발 이미지 색상"
        src={shoeColorList}
        name={shoeIdList}
      />
    );
  }
}

export default ShoeColorList;
