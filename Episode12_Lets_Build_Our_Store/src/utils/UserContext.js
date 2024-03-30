import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Himanshu Relhan",
    addItem : ()=> {
        console.log("add");
    }
});

export default UserContext;