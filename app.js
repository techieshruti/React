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
        <img className="logo" 
        src={new URL("/assets/logo1.png", import.meta.url).pathname} alt=""></img>
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
const Main = () => {
  return (
    <div className="main-container">
      <div className="search">
      <input type="text" placeholder="Search any resturant..."/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div id="rest-container"></div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app">
  <Header/> 
  <Main/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
