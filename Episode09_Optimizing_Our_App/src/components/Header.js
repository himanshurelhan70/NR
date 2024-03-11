// import { LOGO_URL } from "../utils/constants";
import {useEffect, useState} from "react"
import LOGO_URL from "../utils/constants"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();





  useEffect(() => {
    // console.log("useEffect Rendered");  
  }, []);

  // console.log("Header Rendered");

  return (
    <div className="header" style={{ backgroundColor: "#dfdfdf", border: "1px solid #dfdfdf" }}>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      {/* navlinks */}
      <nav className="navbar">
        <ul className="navlinks">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <button style={{ padding: "0px 10px" }} onClick={() => {
            console.log("handleOnclick called");
            // btnName = "Logout";
            // console.log(btnName);
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            // console.log(btnName);
          }}>{btnName}</button>
        </ul>
      </nav>
    </div>
  )
}


export default Header;