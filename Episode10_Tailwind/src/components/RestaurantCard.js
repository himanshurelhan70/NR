import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = props.resData.info;
    
    return(
      <div className="res-card border bg-orange-200 rounded-xl overflow-hidden w-full h-full shadow">
        <div className="h-52">
          <img src={CDN_URL + cloudinaryImageId} alt="" 
            className="object-cover rounded-xl w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h4 className="font-bold">{name}</h4> 
          <h4 className="break-words break-all">{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} minutes</h4>
        </div>
       
      </div>
    )
  }  
  

export default RestaurantCard;