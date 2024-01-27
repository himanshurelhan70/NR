import React from "react";
import ReactDOM from "react-dom/client";

// ! ////////////////////////////////////////// Without JSX
// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "This is a React Element"
// );

// console.log("react ->", heading);

// //everything will render inside the root in React
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ! /////////////////////////////////////////// With JSX
// * * Better Comments
// * hi
// TODO
// ! hi
// ? hi

// const jsxHeading = (
//   <h1 id="heading" className="headings">
//     This is JSX Heading
//   </h1>
// );

// console.log("jsxHeading ->", jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// ! ////////////////////////////// React Component -> Returning JSX
// const HeadingComponent = () => {
//   return <div id="container">
//           <h1 id="heading">This is a React Component returning JSX</h1>
//         </div>

// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

// ! /////////////////////////////// React Component -> Returning React Element
// const HeadingComponent = () => {
//   return React.createElement(
//          "h1",
//         {id: "heading"},
//         "This is a React Component returning React Element"
//     );

// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);


// ! ////////////////////////////////// Component Composition/Nesting
const Navbar = () => {
  return <h1>This is a Navbar Component</h1>;
};

const App = () => {
  return (
    <div id="container">
      <Navbar />
      <Navbar></Navbar>
      {Navbar()}
      <h1 id="heading">This is the main Component {Math.random()*100} </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
