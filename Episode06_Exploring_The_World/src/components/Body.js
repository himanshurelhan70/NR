import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  // ! /////////// Search Text
  const [searchText, setSearchText] = useState("");

  // ! ///////// top rated
  const [isTopRatedOpen, setISTopRatedOpen] = useState(false);

  // ! //////////// useEffect
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://thingproxy.freeboard.io/fetch/" + "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    // /////
    const liveData =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
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

  // ////////////
  console.log("Body Rendered");

  // ! ////////// Conditional Rendering
  // if(listOfRes.length === 0){
  //   return <Shimmer/>
  // }

  return listOfRes.length === 0 ? (
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
          return <RestaurantCard resData={resData} key={resData.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
