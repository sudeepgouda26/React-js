import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState([]);

  const [state, setState] = useState({
    name: '',
    password: ''
  })
  let {name, password} = state
  const handelChange=(e)=>{
    let {name,value} =e.target
    setState({...state,[name]:value})

  }
  const handelSubmit= async(e)=>{
    e.preventDefault()
    let user ={name, password}
   
   try{
       let data =await axios.post('http://localhost:8000/users',user)
   }catch(err){
       console.log(err)
   }
  }

  let fetchRecords = async()=>{
try{
  let respose = await axios.get("http://localhost:8000/users");
  setUser(respose.data);
  
}catch(err){
  console.log(err);
}
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
      <label> User name:</label>
      <input type="text" placeholder="Enter your name" name='name' onChange={handelChange}/>
      <label> password</label>
      <input type="password" placeholder="Enter your password" name='password' onChange={handelChange} />
     
      <input type="submit" placeholder='submit' />
      </form>


      <div>
        <button onClick={fetchRecords}>users</button>
      </div>

      {user.map((user)=>{
        return(
          <div>{user.name}</div>
        )

      })}


    </div>
  )
}

export default App
