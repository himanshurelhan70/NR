import React from "react";
import ReactDOM from "react-dom/client";
import {data} from './data';


// ! 
// HEADER
//   - LOGO
//   - Nav Items
// BODY
//   - Search
//   - RestaurantContainer
//     - RestaurantCard
// Footer
//   - Copyright
//   - Links
//   - Address
//   - Contact


// const Header = () => {
//   return (
//     <div className="header" style={{backgroundColor: "#dfdfdf"}}>
//       <div className="logo-container">
//         <img className="logo" src="https://icon-library.com/images/food-app-icon/food-app-icon-9.jpg" alt="logo" />
//       </div>
//       {/* navlinks */}
//       <nav className="navbar">
//         <ul className="navlinks">
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// const RestaurantCard = (props) => {
//   console.log("props", props);
//   return(
//     <div className="res-card">
//       <img src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" alt="" />
//       <h4>{props.resName}</h4>
//       <h4>{props.resCousine}</h4>
//       <h4>4.4 stars</h4>
//       <h4>38 minutes</h4>
//     </div>
//   )
// }  

// const Body = () => {
//   return (
//     <div className="body">
//     <div className="search">Search</div>
//       <div className="res-container">
//         <RestaurantCard resName="Tung Trip" resCousine="Biryani, North Indian" />
//         <RestaurantCard resName="Flavour Vibes" resCousine="paratha, North Indian" />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//       </div>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <div className="footer">
//       <p>Copyright</p>
//     </div>
//   )
// }


// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   )
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);



// ! List, map(), keys
const Header = () => {
  return (
    <div className="header" style={{backgroundColor: "#dfdfdf"}}>
      <div className="logo-container">
        <img className="logo" src="https://icon-library.com/images/food-app-icon/food-app-icon-9.jpg" alt="logo" />
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

const RestaurantCard = (props) => {
  console.log("props", props);
  const {name, cuisine, stars, deliveryTimes} = props.resData;
  
  return(
    <div className="res-card">
      <img src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" alt="" />
      <h4>{name}</h4>
      <h4>{cuisine}</h4>
      <h4>{stars} stars</h4>
      <h4>{deliveryTimes/100} minutes</h4>
    </div>
  )
}  

const Body = () => {
  return (
    <div className="body">
    <div className="search">Search</div>
      <div className="res-container">
      {/* // ! ///// */}
      {
        data.map((resData) => {
          return <RestaurantCard resData={resData} key={resData.id}/>
        })
      }
      {/* // ! ///// */}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright &copy;</p>
    </div>
  )
}


const AppLayout = () => {

  console.log("data => ", data);

  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);