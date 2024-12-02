import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../routes/Card";
import "../styles/Shop.css";

function Shop() {
  const { setActiveComponent, dataMobile } = useOutletContext();

  useEffect(() => {
    setActiveComponent("shop")
  }, [])

  return (
    <>
      <div className="shop-content">
        <div className="container-shop sneakers">
          <h1 className="header-shop">Mobiles</h1>
          <div className="cards">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Card key={id} 
                dataCategory={dataMobile ? dataMobile : null} 
                id={id} 
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;