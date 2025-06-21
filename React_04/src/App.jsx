import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bulb from './components/Bulb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   < div className=" bg-amber-200">
   <Bulb></Bulb>
   </div>
    </>
  )
}

export default App
