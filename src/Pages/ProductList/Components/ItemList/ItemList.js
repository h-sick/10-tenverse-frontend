import React from "react";
import ItemBox from "../ItemBox/ItemBox";
import "./ItemList.scss";

class ItemList extends React.Component {
  render() {
    return (
      <div className="ItemList">
        {this.props.itemDatas.map((data) => {
          return <ItemBox data={data} />;
        })}
      </div>
    );
  }
}

export default ItemList;
