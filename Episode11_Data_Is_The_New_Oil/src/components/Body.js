import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withTopRated } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  const {loggedInUser ,setUserName} = useContext(UserContext);

  // ! ////////// Higher Ordered Component(HOC)
  const RestaurantWithTopRated = withTopRated(RestaurantCard);

  // ! /////////// Search Text
  const [searchText, setSearchText] = useState("");

  // ! ///////// top rated
  const [isTopRatedOpen, setISTopRatedOpen] = useState(false);

  // ! //////////// useEffect
  useEffect(() => {
    console.log("Body UseEffect");
    fetchData();
  }, []);

  // ! ////////////// API Call
  const fetchData = async () => {
    const res = await fetch(
      "https://thingproxy.freeboard.io/fetch/" +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();

    const liveData =
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("liveData =>", liveData);

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

    const filList = list.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filList.length === 0) {
      setFilteredListOfRes(listOfRes);
      return;
    }
    setFilteredListOfRes(filList);
  };

  // ! ///////
  const onlineStatus = useOnlineStatus();
  console.log("Body", onlineStatus);

  if (!onlineStatus) {
    console.log("log in status is ", onlineStatus);
    return (
      <h1>
        {" "}
        Looks like You are offline!! Please check your Internet Connection
      </h1>
    );
  }

  return filteredListOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-8">
      <div className="filters flex ">
        {/* // ! Search Bar */}
        <div className="search-box">
          <input
            type="search"
            style={{ marginRight: "20px" }}
            name="search"
            onChange={(e) => handleSearch(e)}
            className="border border-orange-400 border-2 rounded py-1"
          />
        </div>

        {/* // ! Top Rated Restaurants */}
        <button
          className={`filter px-5 py-1 shadow ease-in transition-all rounded ${
            isTopRatedOpen ? " bg-green-500 text-white" : "bg-slate-200"
          }`}
          onClick={() => {
            console.log("isTopRatedOpen", isTopRatedOpen);
            if (isTopRatedOpen) {
              setFilteredListOfRes([...listOfRes]);
              setISTopRatedOpen(false);
              return;
            }

            const filteredRes = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredListOfRes(filteredRes);
            setISTopRatedOpen(true);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* // ! ////////// */}
        <div className="p-2 m-2">
          <input type="text" value={loggedInUser} onChange={(e) =>{setUserName(e.target.value)}} 
            className="border border-black"
          />

        </div>
      </div>

      <div
        className="res-container flex justify-center gap-8 flex-wrap"
        style={{ margin: "50px 0" }}
      >
        {filteredListOfRes.map((resData) => {
          return (
            <Link
              to={`/restaurants/${resData.info.id}`}
              className="block w-72 cursor-pointer"
              key={resData.info.id}
            >
              {resData.info.avgRating > 4 ? (
                <RestaurantWithTopRated resData={resData} />
              ) : (
                <RestaurantCard resData={resData} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
