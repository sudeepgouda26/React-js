import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from "./data.json"
import Youtube from './Componets/Youtube'

function App() {
const [state, setState] = useState(Data);
const [play,setPlay] = useState(state[0]);

let handelChange =(max)=>{
  console.log(max);
  
  setPlay(max)
}

  return (
    <>
     <Youtube state={state} play={play} run={handelChange}/>
    </>
  )
}

export default App
