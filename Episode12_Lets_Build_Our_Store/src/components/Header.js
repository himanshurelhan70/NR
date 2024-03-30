import { useEffect, useState, useContext } from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"

// ! //
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log("loggedInUser", loggedInUser);

  // ! ///
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {}, []);

  return (
    <div
      className="header flex p-4 justify-between bg-slate-200 shadow-lg"
    >
      <div className="logo-container">
        <img className="logo w-16" src={LOGO_URL} alt="logo" />
      </div>
      {/* navlinks */}
      <nav className="navbar flex items-center">
        <ul className="navlinks flex">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/cart">Cart -  {cartItems.length}</Link>
          </li>
          <button
            style={{ padding: "0px 10px" }}
            onClick={() => {
              console.log("handleOnclick called");
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;



