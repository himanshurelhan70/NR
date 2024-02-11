import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log("props", props);
    const {name, cuisine, stars, deliveryTimes} = props.resData;
    
    return(
      <div className="res-card">
        <img src={CDN_URL} alt="" />
        <h4>{name}</h4>
        <h4>{cuisine}</h4>
        <h4>{stars} stars</h4>
        <h4>{deliveryTimes/100} minutes</h4>
      </div>
    )
  }  
  

export default RestaurantCard;