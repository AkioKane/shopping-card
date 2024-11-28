import { useEffect, useState } from "react";
import "../styles/Card.css";

async function getData(category, id) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${category}`, 
    {mode: "cors"}
  );
  const data = await response.json();
  return data[id];
}

function Card({ category, id }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setData(await getData(category, id))
    }

    fetchData()
  }, []);

  return (
    <>
      <div 
        className="card"
        onClick={() => {
          console.log(data)
        }} // comment
      >
        <img 
          className="img-card"
          src={data ? data.images[0] : ""} 
          alt={data ? "" : "Loading..."} 
        />
        <div className="info-card">
          
        </div>
      </div>
    </>
  )
}

export default Card;