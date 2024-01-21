/*
<div id="parent">
    <div id="child">
        <h1>This is Heading 1</h1>
        <h2>This is Heading 2</h2>
    </div>
</div>
*/


const parentDiv = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "This is a heading 1"),
        React.createElement("h2", {}, "This is a heading 2")
    ])
);

//everything will render inside the root in React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv);