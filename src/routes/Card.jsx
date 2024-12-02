import { useState } from "react";
import "../styles/Card.css";

function Card({ dataCategory, id }) {
  const [clickedAdd, setClickedAdd] = useState([])

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
              className="add-btn"
              onClick={() => {
                const newArray = []
                setClickedAdd()
              }}
            >Add to card +</button>
            <p>{dataCategory ? `$${dataCategory[id].price}` : "Loading..."}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;