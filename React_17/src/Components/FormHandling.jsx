import React, { useState } from 'react'

const FormHandling = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        gender: '',
        language: [],
        country: '',
    })

    let handelChange =(e)=>{

        let {name,value} =e.target;

        setState({...state, [name]:value});


    }

    let handelSubmit =(e)=>{
        e.preventDefault();
        console.log(state);
        

    }
  return (
    <div>
<form onSubmit={handelSubmit}>
  <label htmlFor='username'>TrainerName</label>
  <input type="text" id="username" name="username" placeholder="Enter your name" onChange={handelChange} />
  <br></br>
  <label htmlFor='password'>Password</label>
  <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handelChange} />
    <br></br>
  <label htmlFor='gender'>Gender</label>
  <input type="radio" id="male" name="gender" value="Male" onChange={handelChange} /> Male
  <input type="radio" id="female" name="gender" value="Female" onChange={handelChange} /> Female
    <br></br>
  <label htmlFor='language'>Language</label>
  <input type="checkbox" id="kannada" name="language" value="Kannada" onChange={handelChange} />Kannada
  <input type="checkbox" id="english" name="language" value="English" onChange={handelChange} />English
  <input type="checkbox" id="hindi" name="language" value="Hindi" onChange={handelChange} />Hindi
  <input type="checkbox" id="tamil" name="language" value="Tamil" onChange={handelChange} />Tamil
    <br></br>
  <label htmlFor='country'>Country</label>
  <select name="country" id="country" onChange={handelChange}>
    <option value="">Select Country</option>
    <option value="India">India</option>
    <option value="USA">USA</option>
    <option value="UK">UK</option>
    <option value="Australia">Australia</option>
  </select>
    <br></br>
  <button type='submit'>Submit</button>
</form>
    </div>
  )
}

export default FormHandling
