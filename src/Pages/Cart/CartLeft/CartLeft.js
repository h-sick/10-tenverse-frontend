import React, { Component } from "react";
import EachProduct from "./EachProduct/EachProduct";
import "./CartLeft.scss";

class CartLeft extends Component {
  render() {
    const { products, totalPrice, price, removeHandler, makeEmptyCart } = this.props;

    return (
      <div className="CartLeft">
        <div className="productsCount">
          장바구니 (<span>{products.length}</span>)
        </div>
        <div className="discountCode">
          신규 회원 가입 시, 즉시 사용 가능한 1만원 할인 코드 발급해드립니다. (*5만원 이상 결제 시)
        </div>
        <div className="productsLists">
          {products.map((product) => {
            return (
              <EachProduct
                key={product.id}
                id={product.id}
                product={product}
                totalPrice={totalPrice}
                removeHandler={removeHandler}
                price={price}
              />
            );
          })}
        </div>
        <div className="emptyList">
          <button onClick={makeEmptyCart}>장바구니 비우기</button>
        </div>
      </div>
    );
  }
}

export default CartLeft;
