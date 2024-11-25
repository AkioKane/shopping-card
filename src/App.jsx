import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import iconHead from "./assets/paw.png";
import home from "./assets/home.svg";
import './styles/App.css';

function App() {
  return (
    <>
      <div className="main">
        <aside className="menu">
          <div className="head">
            <h1>
              <span 
                style={{
                  color: "pink",
                  margin: 0,
                  marginRight: "0.1em",
                }}
              >Paw
              </span>
              Clothes
            </h1>
            <img className='logo-head' src={iconHead} alt="icon" />
          </div>
          
          <Link to={'/'}>
            <h2>
              <img className='icon' src={home} alt="home" />
              Home
            </h2>
          </Link>
        </aside>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
