// import { LOGO_URL } from "../utils/constants";
import {useState} from "react"
import LOGO_URL from "../utils/constants";

const Header = () => {

  // let btnName = "Login";

  console.log("Header");

  const [btnName, setBtnName] = useState("Login");



  return (
    <div className="header" style={{ backgroundColor: "#dfdfdf", border: "1px solid #dfdfdf" }}>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      {/* navlinks */}
      <nav className="navbar">
        <ul className="navlinks">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button style={{ padding: "0px 10px" }} onClick={() => {
            console.log("handleOnclick called");
            // btnName = "Logout";
            console.log(btnName);
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            console.log(btnName);
          }}>{btnName}</button>
        </ul>
      </nav>
    </div>
  )
}


export default Header;