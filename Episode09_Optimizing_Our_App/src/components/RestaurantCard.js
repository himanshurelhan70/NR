import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log("props", props);
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = props.resData.info;
    
    return(
      <div className="res-card" style={{border: "1px solid #dfdfdf"}}>
        <img src={CDN_URL + cloudinaryImageId} alt="" style={{height: "200px", ObjectFit: "cover", borderRadius: "15px"}}/>
        <h4>{name}</h4> 
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    )
  }  
  

export default RestaurantCard;