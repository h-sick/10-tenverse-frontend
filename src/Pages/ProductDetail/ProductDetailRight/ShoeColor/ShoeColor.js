import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ShoeColorList from "./ShoeColorList";
import "./ShoeColor.scss";

class ShoeColor extends Component {
  render() {
    const product = this.props.product;
    const changeShoeColor = (e) => {
      let endPoint = e.target.name;
      this.props.history.push(`/product/detail/${endPoint}`);
    };

    const listShoeColor = product.map((_, i) => {
      if (i % 2 === 1) {
        const shoeColorList = product[i].color_list.map((color, j) => {
          return color.main_image;
        });
        const shoeIdList = product[i].color_list.map((color, j) => {
          return color.id;
        });
        return (
          <>
            {shoeColorList.map((_, k) => {
              console.log(shoeIdList[k]);
              if (k === 0) {
                return (
                  <div className="shoeColorImageEach">
                    <ShoeColorList
                      changeShoeColor={changeShoeColor}
                      shoeColorList={shoeColorList[k]}
                      shoeIdList={shoeIdList[k]}
                    />
                    <div className="underShoeColorImage first"></div>
                  </div>
                );
              } else {
                return (
                  <div className="shoeColorImageEach">
                    <ShoeColorList
                      changeShoeColor={changeShoeColor}
                      shoeColorList={shoeColorList[k]}
                      shoeIdList={shoeIdList[k]}
                    />
                    <div className="underShoeColorImage"></div>
                  </div>
                );
              }
            })}
          </>
        );
      }
    });

    return (
      <div className="ShoeColor">
        <div className="shoeColorText">
          <span className="grey">컬러</span>
          <span className="shoeColor">{product.length !== 0 ? product[0].color_name : null}</span>
        </div>
        <div className="shoeColorImage">{listShoeColor}</div>
      </div>
    );
  }
}

export default withRouter(ShoeColor);
