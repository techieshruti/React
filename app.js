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
        src={new URL("/assets/logo.png", import.meta.url).pathname} alt=""></img>
      </div>
      
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app">
  <Header/> 
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
