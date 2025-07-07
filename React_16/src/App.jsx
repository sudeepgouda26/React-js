import React from 'react'
import { ThemeContextApi } from './Context/ThemeContextApi'
import { theme } from './Context/ThemeContextApi'
import Nav from './Component/Nav'
import './App.css'

const App = () => {
  return (
    <div>
      <ThemeContextApi value={theme}>

        <Nav/>

      </ThemeContextApi>
    </div>
  )
}

export default App
