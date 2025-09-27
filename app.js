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
const ResturantCard = (props) => {
  return (
    <div className="rescard-container">
      <div className="res-img">
        <img src={new URL("/assets/pizza.png", import.meta.url).pathname}></img>
        <div className="dicount"></div>
      </div>
      <div className="rescard-text">
        <div className="res-name">{props.resName}</div>
        <div className="res-rating">
          <i className="fa-solid fa-star"></i>{props.rating}
        </div>
        <div className="res-cusine">{props.resCusine}</div>
        <div className="res-location">{props.resLocation}</div>
      </div>
    </div>
  );
};
// res-name="Domino's Pizza" res-cusine="Pizzas, Italian, Pastas, Desserts" res-location="Mayur Vihar"

const Main = () => {
  return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search any resturant..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <div className="rest-container">
        <ResturantCard resName="Domino's Pizza" rating="4.2 30-45 min" resCusine="Pizzas, Italian, Pastas, Desserts" resLocation="Mayur Vihar"/>
        <ResturantCard resName="Dunkin' Donuts" rating="4.0 30 min" resCusine="Desserts, Cafe, Bakery, Beverages" resLocation="Trilok Puri"/>
        <ResturantCard resName="Burger King" rating="4.6 45 min" resCusine="Desserts, Burgers, Snacks, Beverages" resLocation="Noida Sec 62"/>
        <ResturantCard resName="The Waffle Co." rating="4.3 20-30 min"resCusine="Desserts, Burgers, Bakery, Waffle" resLocation="Noida sec 15"/>
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
