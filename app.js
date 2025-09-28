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
  const {resData} = props;
  return (
    <div className="rescard-container">
      <div className="res-img">
        <img src={new URL("/assets/pizza.png", import.meta.url).pathname}></img>
        <div className="dicount"></div>
      </div>
      <div className="rescard-text">
        <div className="res-name">{resData.info.name}</div>
        <div className="res-rating">
          <i className="fa-solid fa-star"></i>{resData.info.avgRating} star
        </div>
        <div className="res-cusine">{resData.info.cuisines.join(", ")}</div>
        <div className="res-cusine">{resData.info.costForTwo}</div>
        <div className="res-location">{resData.info.locality}</div>
      </div>
    </div>
  );
};
// res-name="Domino's Pizza" res-cusine="Pizzas, Italian, Pastas, Desserts" res-location="Mayur Vihar"

// Resturant API data
const resObj=[
   {
                    "info": {
                      "id": "831065",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
                      "locality": "Chandni Chowk",
                      "areaName": "Omaxe mall",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "parentId": "61955",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "456",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-28 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "66% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-98a0e356-4bf7-4971-939d-d7419e35d872"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/chinese-wok-chandni-chowk-omaxe-mall-rest831065",
                      "type": "WEBLINK"
                    }
                  }
];

const Main = () => {
  return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search any resturant..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <div className="rest-container">
        <ResturantCard 
        // passing resObj data and resObj is and object so to pass object in JS we use {}.
        resData = {resObj[0]}
        />
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
