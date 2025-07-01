import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssComponent from './Components/CssComponent'
import HtmlComponent from './Components/HtmlComponent'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  let ChangeColor = (color) => {
    console.log(color);
  }
  return (
  <div>
    <Nav  ChangeColor={ ChangeColor}></Nav>
    <CssComponent></CssComponent>
    <HtmlComponent></HtmlComponent>

  </div>
     
  )
}

export default App
