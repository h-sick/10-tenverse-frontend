import React, { Component } from "react";
import "./ItemList.scss";
import ItemBox from "./ItemBox";

class ItemList extends Component {
  render() {
    return (
      <div className="ItemList">
        {this.props.itemDatas.map((item, idx) => {
          return (
            <ItemBox
              id={item.idx}
              name={item.name}
              price={item.price}
              colors={item.colors}
              imgUrl={item.imgs.imgUrl}
              hoverImgUrl={item.imgs.hoverImgUrl}
            />
          );
        })}
      </div>
    );
  }
}
export default ItemList;
