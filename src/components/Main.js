import ResturantCard from "./ResturantCard"
import resList from "../utills/mockData"
import { useState } from "react";
import resList from "../utills/mockData";

const Main = () => {
const [resList, setresList] = useState(resList);
  return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search any resturant..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <button className="filter-btn" onClick={() => {
        const filterdList= resList.filter(
          (res) => res.info.avgRating>4.00
        );
        setresList(filterdList);
      }}>
        Top Rated Resturant
      </button>
      <div className="rest-container">
      {/* passing resObj data and resObj is and object so to pass object in JS we use {}. */}
        {
          resList.map(resturant => <ResturantCard key={resturant.info.id} resData={resturant}/>)
        }
        </div>
    </div>
  );
};

export default Main;