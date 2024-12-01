import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import iconHead from "./assets/paw.png";
import home from "./assets/home.svg";
import homePink from "./assets/home-pink.svg";
import shop from "./assets/store.svg";
import shopPink from "./assets/store-pink.svg";
import './styles/App.css';

async function getData(category) {
  const response = await fetch(
    `https://fakestoreapi.in/api/products/category?type=${category}`, 
    {mode: "cors"}
  );
  const data = await response.json();
  return data.products;
}

function App() {
  const [dataMobile, setDataMobile] = useState(null)
  const [activeComponent, setActiveComponent] = useState("home");
  const [hoverElement, setHoverElement] = useState(null)

  useEffect(() => {
    async function fetchData(category) {
      setDataMobile(await getData(category))
    }
    fetchData("mobile")
  }, []);

  return (
    <>
      <div className="main">
        <aside className="menu">
          <div className="head">
            <h1>
              <span 
                style={{
                  color: "#ff798f",
                  margin: 0,
                  marginRight: "0.1em",
                }}
              >Paw
              </span>
              Store
            </h1>
            <img className='logo-head' src={iconHead} alt="icon" />
          </div>
          
          <Link 
            to={'/'} 
            onClick={() => {setActiveComponent("home")}}
            onMouseOver={() => {setHoverElement("home")}}
            onMouseOut={() => {setHoverElement(null)}}
            style={{
              color: activeComponent === "home" ? "#ff798f" : "white",
              transform: activeComponent === "home" ? "scale(1.1)" : "none",
              transition: "all 0.1s ease-in-out",
            }}
          >
            <h2>
              <img 
                className='icon' 
                src={activeComponent === "home" || 
                  hoverElement === "home" ? homePink : home}
                alt="home" 
                onClick={() => {console.log(dataMobile)}}
              />
              Home
            </h2>
          </Link>

          <Link 
            to={'shop'} 
            onClick={() => {setActiveComponent("shop")}}
            onMouseOver={() => {setHoverElement("shop")}}
            onMouseOut={() => {setHoverElement(null)}}
            style={{
              color: activeComponent === "shop" ? "#ff798f" : "white",
              transform: activeComponent === "shop" ? "scale(1.1)" : "none",
              transition: "all 0.1s ease-in-out",
            }}
          >
            <h2>
              <img 
                className='icon' 
                src={activeComponent === "shop" || 
                  hoverElement === "shop" ? shopPink : shop}
                alt="home" 
              />
              Shop
            </h2>
          </Link>
        </aside>

        <div className="content">
          <Outlet context={{ setActiveComponent, dataMobile }}/>
        </div>
      </div>
    </>
  )
}

export default App
