import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  // ! /////////// Search Text
  const [searchText, setSearchText] = useState("");

  // ! ///////// top rated
  const [isTopRatedOpen, setISTopRatedOpen] = useState(false);

  // ! //////////// useEffect
  useEffect(() => {
    console.log("Body UseEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://thingproxy.freeboard.io/fetch/" + "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    // console.log("data", data);
    // /////
    const liveData =
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
      || data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
    console.log("liveData =>", liveData);
    ///////
    setListOfRes(liveData);
    setFilteredListOfRes(liveData);
  };

  // ! //////////// Search
  const handleSearch = (e) => {
    const { value } = e.target;
    console.log("value =>", value);

    if (!value) {
      console.log("empty value");
      setFilteredListOfRes([...listOfRes]);
      return;
    }

    const list = [...listOfRes];
    setFilteredListOfRes(
      list.filter((res) =>
        res.info.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // ! ///////
  const onlineStatus = useOnlineStatus();
  console.log("Body", onlineStatus);
  
  if(!onlineStatus){
    console.log("log in status is ", onlineStatus);
    return <h1> Looks like You are offline!! Please check your Internet Connection</h1>;
  }

  return filteredListOfRes?.length === 0  ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        {/* // ! Search Bar */}
        <div className="search-box">
          {/* <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredListOfRes(filteredRes);
          }}>Search</button> */}

          <input
            type="search"
            style={{ marginRight: "20px" }}
            name="search"
            onChange={(e) => handleSearch(e)}
          />

        </div>

        {/* // ! Top Rated Restaurants */}
        <button
          className="filter"
          style={{ backgroundColor: isTopRatedOpen ? "green" : "#efefef" }}
          onClick={() => {
            if (isTopRatedOpen) {
              setFilteredListOfRes([...listOfRes]);
              setISTopRatedOpen(false);
              return;
            }

            const filteredRes = listOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredListOfRes(filteredRes);
            setISTopRatedOpen(true);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container" style={{ margin: "50px 0" }}>
        {filteredListOfRes.map((resData) => {
          return <Link to={`/restaurants/${resData.info.id}`} key={resData.info.id}><RestaurantCard resData={resData}  /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
