import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const[resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const res = await fetch("https://thingproxy.freeboard.io/fetch/" + MENU_URL + resId);
        const json = await res.json();
        console.log("data =>", json.data);
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu