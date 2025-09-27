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
        <img className="logo" src="./assets/logo.png" alt=""></img>
      </div>
      
      <div className="nav-container">
        <ul>
          <li></li>
          <li></li>
          <li></li>
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
