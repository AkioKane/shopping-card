import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import "../styles/Shop.css";

function Shop() {
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
    setActiveURL,
  } = useOutletContext();

  useEffect(() => {
    setActiveComponent("shop");
    setActiveURL("shop");
  }, [])

  const isMobile = () => {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const styleHeader = () => {
    if (isMobile() === false) {
      return {
        width: "100%"
      }
    } return {
      width: "10em"
    }
  }

  return (
    <>
      <div className="shop-content">
        <div 
          className="container-shop sneakers"
        >
          <h1 className="header-shop" style={styleHeader()}>Mobiles</h1>
          <div className="cards">
            {dataMobile ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Card key={id} 
                dataCategory={dataMobile ? dataMobile : null} 
                id={id} 
                cartList={cartList}
                setCartList={setCartList}
              />
            )) : ""}
          </div>
        </div>
        <div className="container-shop audio">
          <h1 className="header-shop" style={styleHeader()}>Audio</h1>
          <div className="cards">
            {dataAudio ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Card key={id} 
                dataCategory={dataAudio ? dataAudio : null} 
                id={id} 
                cartList={cartList}
                setCartList={setCartList}
              />
            )) : ""}
          </div>
        </div>
        <div className="container-shop gaming">
          <h1 className="header-shop" style={styleHeader()}>Gaming</h1>
          <div className="cards">
            {dataGaming ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Card key={id} 
                dataCategory={dataGaming ? dataGaming : null} 
                id={id} 
                cartList={cartList}
                setCartList={setCartList}
              />
            )) : ""}
          </div>
        </div>
        <div className="container-shop laptop">
          <h1 className="header-shop" style={styleHeader()}>Laptop</h1>
          <div className="cards">
            {dataLaptop ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Card key={id} 
                dataCategory={dataLaptop ? dataLaptop : null} 
                id={id} 
                cartList={cartList}
                setCartList={setCartList}
              />
            )) : ""}
          </div>
        </div>
        <div className="container-shop tv">
          <h1 className="header-shop" style={styleHeader()}>TV</h1>
          <div className="cards">
            {dataTv ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Card key={id} 
                dataCategory={dataTv ? dataTv : null} 
                id={id} 
                cartList={cartList}
                setCartList={setCartList}
              />
            )) : ""}
          </div>
        </div>
        <div className="container-shop appliances">
          <h1 className="header-shop" style={styleHeader()}>Appliances</h1>
          <div className="cards">
            {dataAppliances ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Card key={id} 
                dataCategory={dataAppliances ? dataAppliances : null} 
                id={id} 
                cartList={cartList}
                setCartList={setCartList}
              />
            )) : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;