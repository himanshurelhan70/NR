import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data, showItems, setActiveIndex}) => {
    const {itemCards, title} = data;
    // const [showItems, setShowItems] = useState(false);

    return(
        // accordion
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg">
            {/* accordion header */}
            {/* <div className="flex justify-between my-4 cursor-pointer" onClick={() => setShowItems(!showItems)}> */}
            <div className="flex justify-between my-4 cursor-pointer" onClick={() => setActiveIndex()}>
                <h3 className="font-bold text-lg">{title} ({itemCards.length})</h3>
                <span>🔽</span>
            </div>
            {/* accordion body */}
            {
                showItems && <ItemList itemCards={itemCards} /> 
            }
        </div>
    )
}


export default RestaurantCategory