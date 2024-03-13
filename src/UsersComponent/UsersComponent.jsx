
import axios from 'axios'
import React, { useState } from 'react'

const UsersComponent = () => {
    const [Userdata,setUserData]=useState(null)
    const getDataFromApi =async()=>{
        // const response=await fetch("https://jsonplaceholder.typicode.com/users")
        // const data=await response.json()
        // console.log(data)
        // setUserData(data)
        const receivedData=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(receivedData)
        setUserData(receivedData.data)
    }
  return (
    <React.Fragment>
    <h1>Users list</h1>
<button onClick={getDataFromApi}>Get Users</button>
<ul> 
{Userdata && Userdata.map((iterator)=>(
<li key={iterator.id}>
    <p>{iterator.name},{iterator.address.city}</p>
    </li>
    ))}
</ul>
    </React.Fragment>
  )
}

export default UsersComponent