import React, { useState } from 'react'

function User(props) {
  const {name, location, contact} = props;

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);

  return (
    <div className="user">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <h5>State Variable{count1}</h5>
        <h5>State Variable{count2}</h5>
        <button onClick={() => {setCount1(count1+1); setCount2(count2+1)}}>Increment Value</button>
    </div>
  )
}

export default User