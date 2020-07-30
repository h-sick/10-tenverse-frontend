import React from "react";
import ListItemBox from "../ListItemBox/ListItemBox";
import "./ItemList.scss";

const handleLowPrice = function (a, b) {
  return b.product_detail.price - a.product_detail.price;
};
const handleHighPrice = function (a, b) {
  return a.product_detail.price - b.product_detail.price;
};

class ItemList extends React.Component {
  render() {
    const { datas, handleSort } = this.props;

    return (
      <div className="ItemList">
        <div className="box">
          {handleSort
            ? datas.sort(handleLowPrice).map((data) => {
                return <ListItemBox data={data} />;
              })
            : datas.sort(handleHighPrice).map((data) => {
                return <ListItemBox data={data} />;
              })}

          {/* {handleSort
            ? datas
                .sort(function (a, b) {
                  return b.product_detail.price - a.product_detail.price;
                })
                .map((data) => {
                  return <ItemBox data={data} />;
                })
            : datas
                .sort(function (a, b) {
                  return a.product_detail.price - b.product_detail.price;
                })
                .map((data) => {
                  return <ItemBox data={data} />;
                })} */}
        </div>
      </div>
    );
  }
}

export default ItemList;
