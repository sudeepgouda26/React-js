import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ApiHandeling = () => {
    let [details , setDetails] =useState(null);

    let fetchData = async()=>{
       let response = await axios.get("https://jsonplaceholder.typicode.com/users");
     console.log(response.data);
        setDetails(response.data);
     
    }

    useEffect(()=>{
       fetchData();  

    })

  return (
    <div>
      {details ==null ? ("loading...."):
      (<ul>
        {details.map((item)=>{
          return (
            <>
              <li>{item.name}</li>
              <li>{item.username}</li>
              
                  <li>{item.email}</li>
                
            </>
          )
        })}
      </ul>)}
    </div>
  )
}

export default ApiHandeling
