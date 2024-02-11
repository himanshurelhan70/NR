import { useState } from "react";
import data from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Normal Js variable
  // let listOfRes = data;

  // State variable that is in sync with UI layer
  let [listOfRes, setListOfRes] = useState([...data]);
  console.log(listOfRes);

  // listOfRes = [];


  // ! ///////// top rated 
  const [isTopRatedOpen, setISTopRatedOpen] = useState(false);
 

  // ! ////////////Search Button
  const handleSearch = (e) => {
      const {value} = e.target;
      console.log("value =>", value);

      if(!value){
          console.log("empty value")
          setListOfRes([...data]);
          return;
      }
    
      const list = [...data];
      setListOfRes(list.filter((res) => res.name.toLowerCase().includes(value.toLowerCase())));
    
  }

  return (
    <div className="body">
      <div className="filter">
        <input type="search" style={{marginRight: "20px"}} name="search"  onChange={(e) => handleSearch(e)}/>
        <button className="filter" style={{backgroundColor: isTopRatedOpen ? "green" : "#efefef"}} onClick={() => {
          // listOfRes = []; 

          if(isTopRatedOpen){
            setListOfRes([...data]);
            setISTopRatedOpen(false);
            return;
          }
          const filteredRes = listOfRes.filter((res) => res.stars > 4)
          setListOfRes(filteredRes);
          setISTopRatedOpen(true);
          console.log("clicked");
          console.log(listOfRes);

        }}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {/* // ! ///// */}
        {
          listOfRes.map((resData) => {
            return <RestaurantCard resData={resData} key={resData.id} />
          })
        }
        {/* // ! ///// */}
      </div>
    </div>
  )
}

export default Body;