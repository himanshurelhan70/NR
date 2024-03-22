import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = props.resData.info;

    const {loggedInUser} = useContext(UserContext);
    
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
          <h4>{loggedInUser}</h4>
        </div>
       
      </div>
    )
  }  
  

export const withTopRated = (RestaurantCard) => {

  return (props) => {

    return(
      <div className="w-full h-full">
         <label className="bg-green-500 shadow-sm text-white py-1 px-2 m-2 absolute rounded-md">4+</label>
         <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;