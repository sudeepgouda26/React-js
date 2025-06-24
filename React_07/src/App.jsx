import React from 'react'
import { useState } from 'react'

const App = () => {

  const [src, SetSrc] =useState("https://tse3.mm.bing.net/th?id=OIP.ytRiA-5ZR7tFvnEigBORSAHaHa&pid=Api&P=0&h=180");
  const [state, SetState] = useState(false);

 let hanndelChangeOff =()=>{
  SetSrc("https://tse3.mm.bing.net/th?id=OIP.ytRiA-5ZR7tFvnEigBORSAHaHa&pid=Api&P=0&h=180")
  SetState(false)
 }

 let hanndelChangeOn = ()=>{
  SetSrc("https://tse2.mm.bing.net/th?id=OIP.565TcOat3QSHtMsuwdW4WwHaHk&pid=Api&P=0&h=180")
  SetState(true)
 }
  return (
    <div>
      <img src={src} />

      <br></br>

      {state? <button onClick={hanndelChangeOff}>Off</button>:<button onClick={hanndelChangeOn}>on</button>}
    
           


    </div>
  )
}

export default App
