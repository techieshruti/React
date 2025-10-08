import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import resList from "../utills/mockData";
import shimmer from "./shimmer";

const Main = () => {
  const [listOfRes, setlistOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6146243&lng=77.3121575&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistOfRes(json?.data?.cards.find((item) => item?.card?.card.id?.includes("restaurant_grid"))?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

 if(listOfRes===0){
  return <shimmer/>
 }
  

  return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search any resturant..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filterdList = listOfRes.filter(
            (resList) => resList.info.avgRating > 4.5
          );
          setlistOfRes(filterdList);
        }}
      >
        Top Rated Resturant
      </button>
      <div className="rest-container">
        {/* passing resObj data and resObj is and object so to pass object in JS we use {}. */}
        {listOfRes.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Main;
