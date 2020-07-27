import React from "react";
import ItemBox from "../ItemBox/ItemBox";
import "./ItemList.scss";

class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedColorId: "",
    };
  }
  handleColorNumber = (e) => {
    this.setState({ clickedColorId: e });
  };

  handleOptionImgs = () => {
    const { datas } = this.props;
    const optionImgs = datas.find((data) => {
      return data.product_detail.id === parseInt(this.state.clickedColorId);
    });
    if (optionImgs) {
      return {
        id: optionImgs.product_detail.id,
        imgUrl: optionImgs.product_detail.main_image,
        hoverUrl: optionImgs.product_detail.sub_image,
      };
    } else {
      return null;
    }
  };

  render() {
    const { datas, handleSort } = this.props;

    return (
      <div className="ItemList">
        <div className="box">
          {handleSort
            ? datas
                .sort(function (a, b) {
                  return b.product_detail.price - a.product_detail.price;
                })
                .map((data) => {
                  return (
                    <ItemBox
                      data={data}
                      handleColorNumber={this.handleColorNumber}
                      optionImgs={this.handleOptionImgs()}
                    />
                  );
                })
            : datas
                .sort(function (a, b) {
                  return a.product_detail.price - b.product_detail.price;
                })
                .map((data) => {
                  return (
                    <ItemBox
                      data={data}
                      handleColorNumber={this.handleColorNumber}
                      optionImgs={this.handleOptionImgs()}
                    />
                  );
                })}
        </div>
      </div>
    );
  }
}

export default ItemList;
