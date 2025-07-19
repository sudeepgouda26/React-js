import { useState } from 'react'
import React from 'react'
import axios from 'axios';

const Register = () => {
    let   usernameRegex = /^[a-zA-Z]+$/;
       let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       
 let[userDetails,setUserDetails] =useState({
    userName : "",
    userEmail : "",
    userPassword : ""
 })

 let {userName,userEmail,userPassword} =userDetails;

 let handelSubmit = async(e)=>{
    e.preventDefault();

   let users={userName,userEmail,userPassword}
   if((!usernameRegex.test(userDetails.userName))||(userDetails.userName=="")){
    alert("please enter valid name");
    return;
   }
    if(!emailRegex.test((userDetails.userEmail)||(userDetails.userEmail==""))){
    alert("please enter valid email");
    return;
   }
   if (userDetails.userPassword.length<=8) {
    alert("password must be at least 8 characters long");
    return;
    
   }
   try {
    let response = await axios.post("http://localhost:5000/users",users)
    
   } catch (error) {
    console.log("error");
    
   }
  


    
 }
 let handelChange= (e)=>{

    let {name,value}= e.target;

    console.log({name,value});

    
setUserDetails({...userDetails, [name]:value});


 }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="enter yourName" name="userName" onChange={handelChange} required/>
        <br></br>
        <input type="email" placeholder="enter yourEmail" name="userEmail" onChange={handelChange} />
        <br></br>
        <input type="password" placeholder="enter yourPassword" name="userPassword" onChange={handelChange} />
        <br></br>
        <input type="submit"  />

      </form>
    </div>
  )
}

export default Register
