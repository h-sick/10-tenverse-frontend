import React, { Component } from "react";
import ItemBox from "./ItemBox";
import "./ItemList.scss";

class ItemList extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ItemList">
        {product.length !== 0
          ? product.map((item, idx) => {
              return (
                <ItemBox
                  id={item.id}
                  name={item.shoe__detail__name}
                  price={item.shoe_id__price}
                  imgUrl={item.image__image}
                  hoverImgUrl={item.subimage__image}
                />
              );
            })
          : null}
      </div>
    );
  }
}
export default ItemList;
