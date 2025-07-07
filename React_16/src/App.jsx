import React from 'react'
import { ThemeContextApi } from './Context/ThemeContextApi'
import { theme } from './Context/ThemeContextApi'
import Nav from './Component/Nav'
import './App.css'
import Component2 from './Component/Component2'

const App = () => {
  return (
    <div>
      <ThemeContextApi value={theme}>

        <Nav/>
        <Component2/>
        <

      </ThemeContextApi>
    </div>
  )
}

export default App
