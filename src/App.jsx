import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import iconHead from "./assets/paw.png";
import home from "./assets/home.svg";
import homePink from "./assets/home-pink.svg";
import shop from "./assets/store.svg";
import shopPink from "./assets/store-pink.svg";
import cart from "./assets/shopping_cart.svg";
import cartPink from "./assets/shopping_cart_pink.svg";
import menu from "./assets/menu.svg";
import "./styles/App.css";

async function getData(category) {
  const response = await fetch(
    `https://fakestoreapi.in/api/products/category?type=${category}`,
    { mode: "cors" }
  );

  const data = await response.json();
  return data.products;
}

function App() {
  const [dataMobile, setDataMobile] = useState(null);
  const [dataAudio, setDataAudio] = useState(null);
  const [dataGaming, setDataGaming] = useState(null);
  const [dataLaptop, setDataLaptop] = useState(null);
  const [dataTv, setDataTv] = useState(null);
  const [dataAppliances, setDataAppliances] = useState(null);
  const [activeComponent, setActiveComponent] = useState("home");
  const [hoverElement, setHoverElement] = useState(null);
  const [cartList, setCartList] = useState([]);
  const [activeBar, setActiveBar] = useState(false);
  const [closeBar, setCloseBar] = useState(false);
  const [activeURL, setActiveURL] = useState(null);

  const isMobile = () => {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  useEffect(() => {
    async function fetchData() {
      setDataMobile(await getData("mobile"));
      setDataAudio(await getData("audio"));
      setDataGaming(await getData("gaming"));
      setDataLaptop(await getData("laptop"));
      setDataTv(await getData("tv"));
      setDataAppliances(await getData("appliances"));
    }
    fetchData();
  }, []);

  const mobileSideBar = () => {
    return (
      <button
        className="show-sidebar"
        style={{
          left: activeBar ? "calc(-2em + 320px)" : "-2em",
        }}
        onClick={() => {
          if (activeBar) {
            return setActiveBar(false);
          }
          return setActiveBar(true);
        }}
      >
        <img src={menu} alt="Menu" />
      </button>
    );
  };

  const styleSideBar = () => {
    if (isMobile() === false) {
      return {
        left: "0",
      };
    }
    return {
      left: activeBar ? "0" : "-320px",
    };
  };

  const asideBar = () => {
    return (
      <>
        <aside className="menu" id="main" style={styleSideBar()}>
          <div className="head">
            <h1>
              <span
                style={{
                  color: "#ff798f",
                  margin: 0,
                  marginRight: "0.1em",
                }}
              >
                Paw
              </span>
              Store
            </h1>
            <img className="logo-head" src={iconHead} alt="icon" />
          </div>

          <Link
            to={"/"}
            onClick={() => {
              setActiveComponent("home");
            }}
            onMouseOver={() => {
              setHoverElement("home");
            }}
            onMouseOut={() => {
              setHoverElement(null);
            }}
            style={{
              color: activeComponent === "home" ? "#ff798f" : "white",
              transform: activeComponent === "home" ? "scale(1.1)" : "none",
              transition: "all 0.1s ease-in-out",
            }}
          >
            <h2>
              <img
                className="icon"
                src={
                  activeComponent === "home" || hoverElement === "home"
                    ? homePink
                    : home
                }
                alt="home"
              />
              Home
            </h2>
          </Link>

          <Link
            to={"shop"}
            className="shop-link"
            onClick={() => {
              setActiveComponent("shop");
            }}
            onMouseOver={() => {
              setHoverElement("shop");
            }}
            onMouseOut={() => {
              setHoverElement(null);
            }}
            style={{
              color: activeComponent === "shop" ? "#ff798f" : "white",
              transform: activeComponent === "shop" ? "scale(1.1)" : "none",
              transition: "all 0.1s ease-in-out",
            }}
          >
            <h2>
              <img
                className="icon"
                src={
                  activeComponent === "shop" || hoverElement === "shop"
                    ? shopPink
                    : shop
                }
                alt="cart"
              />
              Shop
            </h2>
          </Link>
          <Link
            to={"cart"}
            onClick={() => {
              setActiveComponent("cart");
            }}
            onMouseOver={() => {
              setHoverElement("cart");
            }}
            onMouseOut={() => {
              setHoverElement(null);
            }}
            style={{
              color: activeComponent === "cart" ? "#ff798f" : "white",
              transform: activeComponent === "cart" ? "scale(1.1)" : "none",
              transition: "all 0.1s ease-in-out",
            }}
          >
            <h2>
              <img
                className="icon"
                src={
                  activeComponent === "cart" || hoverElement === "cart"
                    ? cartPink
                    : cart
                }
                alt="cart"
              />
              Cart
            </h2>
          </Link>
          {isMobile() ? mobileSideBar() : ""}
        </aside>
        <div
          className="black-background"
          onClick={() => {
            return setActiveBar(false);
          }}
          style={{
            opacity: activeBar ? "0.6" : "0",
            zIndex: activeBar ? "1" : "-1",
          }}
        ></div>
      </>
    );
  };

  return (
    <>
      <div className="main">
        {asideBar()}

        <div
          className="content"
          style={{
            width: isMobile() ? "100vw" : "var(--content-head-width)",
            marginLeft: isMobile() ? "0" : "calc(300px + 5em)",
          }}
        >
          <Outlet
            context={{
              setActiveComponent,
              dataMobile,
              dataAudio,
              dataGaming,
              dataLaptop,
              dataTv,
              dataAppliances,
              cartList,
              setCartList,
              setActiveURL,
              activeURL,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
