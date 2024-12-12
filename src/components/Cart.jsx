import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardCart } from "./Card";
import "../styles/Cart.css";

function Cart() {
  const { setCartList, cartList, setActiveComponent } = useOutletContext();
  const [total, setTotal] = useState(0)

  const isMobile = () => {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  useEffect(() => {
    const newTotal = cartList.reduce((acc, el) => acc + el.price, 0);
    setTotal(newTotal);
    setActiveComponent("cart");
  }, [cartList])

  const checkForEmpty = () => {
    if (cartList.length === 0) {
      return <h2
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "98%",
          height: "80%",
          fontFamily: "Park",
          fontSize: "36px",
          fontWeight: "100",
          color: "#a6a6a6"
        }}
      >Empty...</h2>
    }
  }

  return (
    <>
      <div 
        className="cart-content"
        style={{
          width: isMobile() ? "100%" :"calc(100vw - var(--size-sidebar-width))"
        }}
      >
        <h1 className="head-cart">{`Your Cart (${cartList.length})`}</h1>
        <div className="content-cart">
          {cartList ? checkForEmpty() : ""}
          {cartList ? cartList.map((_, index) => {
            return (
              <CardCart key={index}
                dataCategory={cartList ? cartList : null}
                id={index}
                cartList={cartList}
                setCartList={setCartList}
              />
            )
          }) : ""}
        </div>
        <div 
          className="order-bar"
        >
          <h1>Subtotal:</h1>
          <h1>{`$ ${total.toLocaleString('en-US')}`}</h1>
        </div>
      </div>
    </>
  )
}

export default Cart;