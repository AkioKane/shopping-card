import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../routes/Card";
import "../styles/Shop.css";

function Shop() {
  const { setActiveComponent } = useOutletContext();

  useEffect(() => {
    setActiveComponent("shop")
  }, [])

  return (
    <>
      <div className="content shop-content">
        <div className="container-shop sneakers">
          <h1 className="header-shop">Sneakers</h1>
          <div className="cards">
            {[1,2,3,4,5].map(id => <Card key={id} id={id} category={4}/>)}
          </div>


        </div>
      </div>
    </>
  )
}

export default Shop;