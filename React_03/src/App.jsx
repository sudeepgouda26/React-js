import React, { useState } from 'react'

const App = () => {
  const [count , SetCount]= useState(1);


  let handelIncrement =() =>{
    SetCount(count+1);
    if(count >=5){
      document.body.style.backgroundColor = 'red';
    }
    if(count >= 10){
      document.body.style.backgroundColor = 'blue';
    }
  }
  let handelDecrement =()=>{
    SetCount(count-1);
      if(count >=5){
      document.body.style.backgroundColor = 'red';
    }
    if(count >= 10){
      document.body.style.backgroundColor = 'blue';
    }
    if(count < 5){
      document.body.style.backgroundColor = 'white';
    }
    if(count < 10){
      document.body.style.backgroundColor = 'red';
    }

  }
  return (
    <div>
      <h2>{count}</h2>

    <button  onClick={handelIncrement}>Increment</button>
     <button  onClick={handelDecrement}>Deccrement</button>
    </div>
  )
}

export default App
