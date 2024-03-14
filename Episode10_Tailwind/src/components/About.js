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
        return(
           <div className='p-8'>
                 <div className="about">
                    <h1 className='text-2xl font-bold my-4'>This is a About Us page</h1>
                    <UserClass />
                </div>
           </div>
        )
    }
}

export default About