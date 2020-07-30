import React, { Component } from "react";
import IconWish from "../../svg/IconWish";
import IconClock from "../../svg/IconClock";
import "./EachProduct.scss";

class EachProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.product.quantity || 1,
      eachPrice: Number(this.props.product.price),
      price: this.props.price,
      limit: false,
    };
  }

  countHandler = (num) => {
    const { order_id } = this.props.product;
    const { totalPrice } = this.props;
    const { quantity, eachPrice, price } = this.state;

    if (num === -1 && quantity === 1) {
      return;
    } else if (num === 1 && quantity === 5) {
      this.setState({
        limit: true,
        quantity: 5,
      });
    } else if (num === -1 && quantity === 5) {
      this.setState({
        limit: false,
        quantity: quantity + num,
      });
    } else {
      this.setState(
        {
          quantity: quantity + num,
          price: eachPrice * (quantity + num),
        },
        () => {
          this.setState({
            totalPrice: totalPrice + price,
          });
        },
      );
    }

    if (num === 1 && quantity === 5) {
      return;
    } else {
      fetch("http://10.58.3.38:8000/order/update", {
        method: "POST",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.6mlhvmw9MyBvInOVrhOnQNizB8iPI47xZ_2sC1gUcXs",
        },
        body: JSON.stringify({
          order_id: order_id,
          calculate: num === 1 ? "plus" : "minus",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          res.message === "OUT_OF_STOCK"
            ? alert("재고가 부족합니다.")
            : this.setState(
                {
                  products: res.pending_orders,
                  totalPrice: Number(res.total_price).toLocaleString(),
                },
                () => window.location.reload(),
              );
        });
    }
  };

  render() {
    const { id, product, removeHandler } = this.props;
    const { quantity, eachPrice, limit } = this.state;
    const { countHandler } = this;

    return (
      <div className="EachProduct">
        <div className="productPic">
          <img alt="장바구니 품목" src={product.image} />
        </div>
        <div className="productInfo">
          <div className="infoTopLine">
            <div className="productName">{product.name}</div>
            <div className="productPrice">
              <span>{eachPrice.toLocaleString()}</span>
              <span> 원</span>
            </div>
          </div>
          <div className="infoMidLine">
            <div className="colorSize">
              <div className="topLine">
                {product.color} / {product.size}
              </div>
              <div className="bottomLine">
                <span>수량 : </span>
                <span>{quantity}</span>
              </div>
            </div>
            <div className="productCount">
              <div className="countNumber">{quantity}</div>
              <button onClick={() => countHandler(-1)} className="countMinus">
                -
              </button>
              <button onClick={() => countHandler(1)} className="countPlus">
                +
              </button>
            </div>
          </div>
          <div className={limit ? "infoHideLine" : "hide"}>
            <span>5개까지 구매가능합니다.</span>
          </div>
          <div className="infoBottomLine">
            <div className="icon">
              <span>{<IconWish />}위시리스트 추가</span>
              <span>{<IconClock />}나중에 구매하기</span>
            </div>
            <div className="optionDelete">
              <span>옵션변경</span>
              <span onClick={() => removeHandler(id)}>삭제</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EachProduct;
