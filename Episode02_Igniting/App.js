import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
    "h1", 
    {id: "heading", abc: "xyz"},
    "Hello World by React"
);

//everything will render inside the root in React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

