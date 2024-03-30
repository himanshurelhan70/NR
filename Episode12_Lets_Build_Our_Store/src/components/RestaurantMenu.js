import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  
  const [activeIndex, setActiveIndex] = useState(null);

  if (resInfo === null)
    return (
      <div className="menu p-8">
        <ShimmerCard />
      </div>
    );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

    console.log("categories", categories);

  // console.log("categories", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(categories);

  return (
    <div className="menu p-8">
      <h1 className="text-2xl text-center font-bold my-1">{name}</h1>
      <p className="text-center text-lg my-2 ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories Accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === activeIndex ? true : false}
          setActiveIndex={() => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
