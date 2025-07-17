import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllDetails = () => {
 let [details, setDetails] = useState();

let fetchRecords =async()=>{
  try {
    let response = await axios.get("http://localhost:3000/users");
    console.log(response.data);
    
    
    
    setDetails(response.data);
    
  } catch (error) {
    console.error("Error fetching records:", error);
    
  }
}
 useEffect(() => {
  fetchRecords();
 }, []);
  return (
    <div>
      {
    details==null?  ("loading")  : details.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.password}</p>
          </div>
        );
      })
      }
    </div>
  )
}

export default AllDetails
