import React from "react";
import ItemBox from "../ItemBox/ItemBox";
import "./ItemList.scss";

class ItemList extends React.Component {
  render() {
    return (
      <div className="ItemList">
        <div className="box">
          {this.props.datas.map((data) => {
            return <ItemBox data={data} />;
          })}
        </div>
      </div>
    );
  }
}

export default ItemList;
