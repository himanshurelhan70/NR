// import { LOGO_URL } from "../utils/constants";
import {useEffect, useState} from "react"
import LOGO_URL from "../utils/constants"
import {Link} from "react-router-dom"

const Header = () => {

  // let btnName = "Login";

  // console.log("Header");

  const [btnName, setBtnName] = useState("Login");


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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
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