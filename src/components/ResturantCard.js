import { CDN_URL } from "../utills/constant";

// resturant card
const ResturantCard = (props) => {
  const {resData} = props;
const {cloudinaryImageId, name, avgRating, cuisines, costForTwo,locality} = resData?.info;
  return (
    <div className="rescard-container">
      <div className="res-img">
        <img src={CDN_URL+cloudinaryImageId}></img>
        <div className="dicount"></div>
      </div>
      <div className="rescard-text">
        <div className="res-name">{name}</div>
        <div>
          <i className="fa-solid fa-star"></i>{avgRating} star
        </div>
        <div>{cuisines.join(", ")}</div>
        <div>{costForTwo}</div>
        <div>{locality}</div>
      </div>
    </div>
  );
};

export default ResturantCard;