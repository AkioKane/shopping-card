import { useState } from "react";
import check from "../assets/check.svg";
import "../styles/Card.css";

function Card({ dataCategory, id, setCartList, cartList }) {
  const [clickedAdd, setClickedAdd] = useState(false);
  const [onHover, setOnHover] = useState(false)

  return (
    <>
      <div
        className="card"
        onClick={() => {
          console.log(dataCategory[id]);
        }} // delete
        onMouseOver={() => {setOnHover(true)}}
        onMouseOut={() => {setOnHover(false)}}
      >
        <img
          className="img-card"
          src={dataCategory ? dataCategory[id].image : ""}
          alt={dataCategory ? "" : "Loading..."}
        />
        <div className="info-card">
          <h1 className="info-h1">{dataCategory ? dataCategory[id].model : "Loading..."}</h1>
          <h2 className="info-h2">
            {dataCategory
              ? dataCategory[id].brand.charAt(0).toUpperCase() + dataCategory[id].brand.slice(1)
              : "Loading..."}
          </h2>
          <div className="add-to-card">
            <button 
              className={`add-btn ${clickedAdd || cartList.includes(dataCategory[id]) ? "clicked" : ""}`}
              onClick={() => {
                if (cartList.includes(dataCategory[id])) {
                  let array = cartList.filter(item => item !== dataCategory[id])
                  setCartList(array);
                  setClickedAdd(false);
                  return;
                }

                setCartList((prevData) => [...prevData, dataCategory[id]]);
                setClickedAdd(true);
              }}
            >{clickedAdd || cartList.includes(dataCategory[id]) ? "Added" : "Add to card +"}
              {clickedAdd || cartList.includes(dataCategory[id]) ? <img src={check} alt="check mark" /> : ""}
            </button>
            <p>{dataCategory ? `$${dataCategory[id].price}` : "Loading..."}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;