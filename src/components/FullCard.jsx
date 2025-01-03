import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import back from "../assets/back.svg";
import add from "../assets/add.svg";
import subtrack from "../assets/subtrack.svg";
import remove from "../assets/deleteBlack.svg";
import "../styles/FullCard.css";

function FullCard() {
  const [data, setData] = useState(null);
  const [valueProducts, setValueProducts] = useState(data ? data.ammout : 1);
  const [added, setAdded] = useState(false);

  const {
    setActiveComponent,
    dataMobile,
    dataAudio,
    dataGaming,
    dataLaptop,
    dataTv,
    dataAppliances,
    setCartList,
    cartList,
    activeURL,
  } = useOutletContext();

  const { category, cardId } = useParams();

  const switchCategory = async (category, id) => {
    switch (category) {
      case "mobile":
        if (dataMobile === null) {
          return setData(null);
        } else {
          return setData(dataMobile[id]);
        }
      case "audio":
        if (dataAudio === null) {
          return setData(null);
        } else {
          return setData(dataAudio[id]);
        }
      case "gaming":
        if (dataGaming === null) {
          return setData(null);
        } else {
          return setData(dataGaming[id]);
        }
      case "laptop":
        if (dataLaptop === null) {
          return setData(null);
        } else {
          return setData(dataLaptop[id]);
        }
      case "tv":
        if (dataTv === null) {
          return setData(null);
        } else {
          return setData(dataTv[id]);
        }
      case "appliances":
        if (dataAppliances === null) {
          return setData(null);
        } else {
          return setData(dataAppliances[id]);
        }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      switchCategory(category, cardId);
    });
    setActiveComponent("shop");
  }, [dataMobile, dataAudio, dataGaming, dataLaptop, dataTv, dataAppliances]);

  const isMobile = () => {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const historyURL = () => {
    if (activeURL === "cart") {
      return "../cart/";
    }
    return "../shop/";
  };

  const removeIcon = () => {
    return (
      <>
        <img src={remove} alt="Remove from Cart"></img>
      </>
    );
  };

  const colorBtn = () => {
    if (cartList.includes(data)) {
      return ["#ffad98", true, "#EC6142"];
    } else {
      return ["#a9f0c5", false, "#3DD68C"];
    }
  };

  return (
    <>
      <div
        className="content-page"
        onClick={() => {
          console.log(data);
        }}
      >
        <div
          className="full-card-content"
          style={{
            flexDirection: isMobile() ? "column" : "",
            alignItems: isMobile() ? "center" : "",
          }}
          onClick={() => {
            console.log(data);
          }}
        >
          <Link
            to={historyURL()}
            style={{
              left: isMobile() ? "25px" : "auto",
            }}
            className="back-link"
          >
            <img src={back} alt="back" />
          </Link>
          <img
            className="img-full-card"
            style={{
              width: isMobile ? "400px" : "auto",
            }}
            src={data ? data.image : ""}
            alt={data ? data.category : ""}
          />
          <div className="information-card">
            <p>{data ? data.title : ""}</p>
            {/* <p>{data ? data.description : ""}</p> */}
            <div className="pay-container">
              <h3 className="price-card">
                {data ? `$ ${data.price * valueProducts}` : ""}
              </h3>
              <div className="value-products padding-element">
                <div className="case-buttons">
                  <div className="up-row">
                    <button
                      className="subtrack-product"
                      onClick={() => {
                        if (valueProducts > 1) {
                          setValueProducts(
                            (valueProducts) => valueProducts - 1
                          );

                          let array = cartList.filter((item) => item !== data);
                          setCartList(array);
                        }
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
                        setValueProducts((valueProducts) => valueProducts + 1);

                        let array = cartList.filter((item) => item !== data);
                        setCartList(array);
                      }}
                    >
                      <img src={add} alt="add" />
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="add-to-cart"
                style={{
                  backgroundColor: added
                    ? `${colorBtn()[2]}`
                    : `${colorBtn()[0]}`,
                }}
                onMouseEnter={() => {
                  setAdded(true);
                }}
                onMouseLeave={() => {
                  setAdded(false);
                }}
                onClick={() => {
                  data.ammout = valueProducts;
                  data.customId = cardId;

                  if (colorBtn()[1]) {
                    let array = cartList.filter((item) => item !== data);
                    setCartList(array);
                    return;
                  }

                  if (cartList.includes(data)) {
                    let array = cartList.filter((item) => item !== data);
                    array.push(data);
                    setCartList(array);
                    return;
                  }

                  setCartList((prevData) => [...prevData, data]);
                }}
              >
                {colorBtn()[1] ? removeIcon() : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullCard;
