import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AddTrainer = () => {
  const [details, setDetails] =useState({
    name: '',
    password: ''
  })
  let {name, password} = details;
  let navigate = useNavigate();

  let handelChange=(e)=>{
    let {name,value} =e.target
    setDetails({...details, [name]:value})

  }
  let handelSubmit = async(e)=>{
      e.preventDefault();
    let user = {name,password}
    try {
      let response = await axios.post("http://localhost:3000/users",user);
      navigate('/alldetails');

      
    } catch (error) {
      console.error("Error submitting form:", error);
      
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
    </div>
  )
}

export default AddTrainer
