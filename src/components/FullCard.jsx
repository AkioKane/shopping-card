import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import back from "../assets/back.svg";
import add from "../assets/add.svg";
import subtrack from "../assets/subtrack.svg";
import "../styles/FullCard.css";

function FullCard() {
  const [data, setData] = useState(null);
  const [price, setPrice] = useState(null);
  const [valueProducts, setValueProducts] = useState(1);

  const {
    dataMobile,
    dataAudio,
    dataGaming,
    dataLaptop,
    dataTv,
    dataAppliances,
    setCartList,
    cartList,
    activeURL
  } = useOutletContext();

  const { category, cardId } = useParams();

  const switchCategory = (category, id) => {
    switch (category) {
      case "mobile": 
        return setData(dataMobile[id]);
      case "audio":
        return setData(dataAudio[id]);
      case "gaming":
        return setData(dataGaming[id]);
      case "laptop":
        return setData(dataLaptop[id]);
      case "tv":
        return setData(dataTv[id]);
      case "appliances":
        return setData(dataAppliances[id]);
    }
  }
  
  useEffect(() => {
    switchCategory(category, cardId);
  }, [])

  const historyURL = () => {
    if (activeURL === "cart") {
      return "../cart/";
    }
    return "../shop/";
  }

  return (
    <>
      <div className="content-page">
        <div 
          className="full-card-content"
          onClick={() => {
            console.log(data)
          }}
        >
          <Link
            to={historyURL()}
            className="back-link"
          >
            <img src={back} alt="back" />
          </Link>
          <img 
            className="img-full-card"
            src={data ? data.image : ""} 
            alt={data ? data.category : ""} 
          />
          <div className="information-card">
            <p>{data ? data.title : ""}</p>
            {/* <p>{data ? data.description : ""}</p> */}
            <div className="pay-container">
              <h3 className="price-card">{data ? `$ ${data.price * valueProducts}` : ""}</h3>
              <div className="value-products padding-element">
                <div className="case-buttons">
                  <div className="up-row">
                    <button 
                      className="subtrack-product"
                      onClick={() => {
                        if (valueProducts > 1) {
                          setValueProducts((valueProducts) => valueProducts - 1)
                        }
                        console.log(valueProducts)
                      }}
                    >
                      <img src={subtrack} alt="subtrack" />
                    </button>
                  </div>
                  <span>{valueProducts}</span>
                  <div className="down-row">
                    <button 
                      className="add-product"
                      onClick={() => {
                        setValueProducts((valueProducts) => valueProducts + 1)
                      }}
                    >
                      <img src={add} alt="add" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FullCard;