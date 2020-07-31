import React, { Component } from "react";
import MainItemBox from "./MainItemBox";
import "./MainItemList.scss";

class MainItemList extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="MainItemList">
        {product &&
          product.map((item, idx) => {
            return (
              <MainItemBox
                id={item.id}
                name={item.name}
                price={item.price}
                imgUrl={item.main_image}
                hoverImgUrl={item.sub_image}
              />
            );
          })}
      </div>
    );
  }
}
export default MainItemList;
