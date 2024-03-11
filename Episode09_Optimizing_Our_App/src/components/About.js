import User from './User';
import UserClass from "./UserClass"
import React from 'react';


class About extends React.Component{

    constructor(props){
        super(props);

        console.log("Parent Cosntructor");
    }

    componentDidMount(){
        console.log("Parent Mounted");
    }

    render(){

        console.log("Parent Render");
        return(
            <div className="about">
            <h1>This is a About Us page</h1>
            {/* <UserClass name="Himanshu (CBC1)" location="Mohali" contact="himanshu@gmail.com"/>
            <UserClass name="Himanshu (CBC2)" location="Mohali" contact="himanshu@gmail.com"/> */}
            <UserClass />
        </div>
        )
    }
}

// const About = () => {

//     return(
//         <div className="about">
//             <h1>This is a About Us page</h1>
//             <User name="Himanshu (FBC)" location="Mohali" contact="himanshu@gmail.com"/>
//             <UserClass name="Himanshu (CBC)" location="Mohali" contact="himanshu@gmail.com"/>
//         </div>
        
//     )
// }

export default About