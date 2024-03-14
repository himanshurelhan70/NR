import { useEffect, useState } from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
