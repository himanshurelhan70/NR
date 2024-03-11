import React from 'react'

// class UserClass extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count1: 1,
//             count2: 2
//         }

//         console.log(this.props.name + "Child Constructor");
//     }


//     componentDidMount(){
//         console.log(this.props.name + "Child Mounted");
//     }

//     render() {
//         console.log(this.props.name + "Child Render");

//         const { name, location, contact } = this.props;
//         const {count1, count2} = this.state;


//         return (
//             <div className="user">
//                 <h2>Name : {name}</h2>
//                 <h3>Location: {location}</h3>
//                 <h4>Contact: {contact}</h4>
//                 <h5>State variable{count1}</h5>
//                 <h5>State variable{count2}</h5>
//                 <button onClick={() => this.setState({
//                     count1: this.state.count1 + 1
//                 })}>Increment Value</button>
//             </div> 
//         )

//     }
// }

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
        console.log("render");

        const {name, location, avatar_url} = this.state.userInfo;
        // debugger;
        return (
            <div className="user">
                <img src={avatar_url} alt="avatar" />
                <h2>Name : {name}</h2>
                <h3>Location: {location}</h3>
            </div> 
        )

    }
}


export default UserClass