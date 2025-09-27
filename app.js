import React from "react";
import ReactDOM from "react-dom/client";
/*
header
  -logo
  -nav bar
body
  -search
  -resturant container
    -resturants card
      - img, title, rating, cusine, location
footer
  -copyright
  -link
  -address
  -contact   
*/

//header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={new URL("/assets/logo1.png", import.meta.url).pathname}
          alt="Grabit Logo"
        ></img>
      </div>

      <div className="nav-container">
        <ul>
          <a href="#home.html">Home</a>
          <a href="#about.html">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </ul>
      </div>
    </div>
  );
};

//Main Component

// resturant card
const ResturantCard = () => {
  return (
    <div className="rescard-container">
      <div className="res-img">
      <img src={new URL("/assets/pizza.png", import.meta.url).pathname}></img>
        <div className="dicount"></div>
      </div>
      <div className="res-name">Domino's Pizza</div>
      <div className="res-rating"></div>
      <div className="res-cusine"></div>
      <div className="res-location"></div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search any resturant..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <div id="rest-container">
        <ResturantCard/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
