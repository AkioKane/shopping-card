import { useState } from "react";
import check from "../assets/check.svg";
import deleteIcon from "../assets/delete.svg";
import "../styles/Card.css";

function Card({ dataCategory, id, setCartList, cartList }) {
  const [clickedAdd, setClickedAdd] = useState(false);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          console.log(dataCategory[id]);
        }} // delete
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

function CardCart({ dataCategory, id, setCartList, cartList }) {
  const shortSentence = (sentence) => {
    const words = sentence.trim().split(/\s+/);
    const punctuationRegex = [".", ",", "!", "?", ";", ":"];

    const shortenedSentence = words.splice(0, 20).join(" ");

    const lastChar = shortenedSentence.charAt(shortenedSentence.length - 1);
    if (punctuationRegex.includes(lastChar)) {
      return shortenedSentence.slice(0, -1) + "...";
    }

    return shortenedSentence + "...";
  }

  return (
    <>
      <div className="card-cart">
        <div className="content-card-cart">
          <img className="item-img" src={dataCategory[id].image} alt="item" />
          <div className="info-card-cart">
            <h1 className="info-h1">{dataCategory ? dataCategory[id].title : "Loading..."}</h1>
            <h2 className="info-h2">
            {dataCategory
              ? dataCategory[id].brand.charAt(0).toUpperCase() + dataCategory[id].brand.slice(1)
              : "Loading..."}
            </h2>
            <p>{dataCategory ? shortSentence(dataCategory[id].description) : "Loading..."}</p>
            <h3>{dataCategory ? `Price: $ ${dataCategory[id].price.toLocaleString('en-US')}` : "Loading..."}</h3>
          </div>
        </div>
        <button 
          className="delete-card"
          onClick={() => {
            let array = cartList.filter(item => item !== dataCategory[id])
            setCartList(array);
          }}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </>
  )
}

export { CardCart };

export default Card;