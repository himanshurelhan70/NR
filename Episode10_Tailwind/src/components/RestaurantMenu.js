import ShimmerCard from './ShimmerCard';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

function RestaurantMenu() {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    if (resInfo === null) return  <div className="menu p-8"> <ShimmerCard /></div>

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
        || resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
        || resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card;
    console.log(itemCards);



    return (
        <div className="menu p-8">
            <h1 className='text-xl font-bold my-1'>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2 className='text-lg font-bold my-4'>Menu</h2>
            <ul>
                {itemCards.map((item) => {
                    return <li key={item.card.info.id}>{item.card.info.name} - {" Rs. "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100} </li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu