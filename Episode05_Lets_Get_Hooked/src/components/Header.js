// import { LOGO_URL } from "../utils/constants";
import LOGO_URL  from "../utils/constants";

const Header = () => {
    return (
      <div className="header" style={{backgroundColor: "#dfdfdf"}}>
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
          </ul>
        </nav>
      </div>
    )
  }
  

export default Header;