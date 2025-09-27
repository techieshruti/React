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
        <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=1024x1024&w=is&k=20&c=rizmPsIj6qOq-xUv3-uVbI53K0sWTn65awE321rKZm4="></img>
      </div>
      ,
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
  return <div className="app">//header //body //footer</div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
