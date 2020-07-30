import React, { Component } from "react";
import ItemBox from "./ItemBox";
import "./ItemList.scss";

class ItemList extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ItemList">
        {product &&
          product.map((item, idx) => {
            return (
              <ItemBox
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
export default ItemList;
