import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const res = await fetch("https://thingproxy.freeboard.io/fetch/" + MENU_URL + resId);
        const json = await res.json();
        console.log("data =>", json.data);
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
        || resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
        || resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card;
    console.log(itemCards);



    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => {
                    return <li key={item.card.info.id}>{item.card.info.name} - {" Rs. "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100} </li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu