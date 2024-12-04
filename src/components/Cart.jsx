import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../routes/Card";
import "../styles/Cart.css";

function Cart() {
  const { setCartList, cartList } = useOutletContext();
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = cartList.reduce((acc, el) => acc + el.price, 0);
    setTotal(newTotal);
  }, [cartList])

  return (
    <>
      <div className="cart-content">
        <div className="content-cart">
          <h1 className="head-cart">Cart</h1>
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
        <div className="order-bar">
          <h1>Total:</h1>
          <h1>{`$ ${total.toLocaleString('en-US')}`}</h1>
        </div>
      </div>
    </>
  )
}

export default Cart;