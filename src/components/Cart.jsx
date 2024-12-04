import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../routes/Card";
import "../styles/Cart.css";

function Cart() {
  const { setCartList, cartList } = useOutletContext();

  return (
    <>
      <div className="cart-content">
        <div className="content-cart">
          {cartList ? cartList.map((_, index) => {
            return (
              <Card key={index}
                dataCategory={cartList ? cartList : null}
                id={index}
                cartList={cartList}
                setCartList={setCartList}
              />
            )
          }) : ""}
        </div>
      </div>
    </>
  )
}

export default Cart;