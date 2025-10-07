import ResturantCard from "./ResturantCard"
import { useState, useEffect } from "react";
import resList from "../utills/mockData";

const Main = () => {
const [listOfRes, setlistOfRes] = useState(resList);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async ()=>{
  const data = async fetch("");
}

return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search any resturant..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <button className="filter-btn" onClick={() => {
        const filterdList= listOfRes.filter(
          (resList) => resList.info.avgRating>4.5
        );
        setlistOfRes(filterdList);
      }}>
        Top Rated Resturant
      </button>
      <div className="rest-container">
      {/* passing resObj data and resObj is and object so to pass object in JS we use {}. */}
        {
          listOfRes.map(resturant => <ResturantCard key={resturant.info.id} resData={resturant}/>)
        }
        </div>
    </div>
  );
};

export default Main;