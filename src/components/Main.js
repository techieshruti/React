import ResturantCard from "./ResturantCard"
import resList from "../utills/mockData"
const Main = () => {
  return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search any resturant..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
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