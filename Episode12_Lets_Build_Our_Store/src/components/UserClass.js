import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo : {
                name: "John",
                location: "USA",
                contact: "946776"
            }
        }
        console.log("constructor");
    }


    async componentDidMount(){
        console.log("ComponentDidMount");
        const res = await fetch("https://api.github.com/users/himanshurelhan70");
        const json = await res.json();

        console.log("json", json);

        this.setState({
            userInfo: json
        });
    }


    componentDidUpdate(){
        console.log("ComponentDidUpdate");

    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
    


    render() {
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user">
                <img src={avatar_url} alt="avatar" className='rounded-md shadow-sm' />
                <h2 className='my-2'>Name : {name}</h2>
                <h3>Location: {location}</h3>
            </div> 
        )

    }
}


export default UserClass