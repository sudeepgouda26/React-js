import React from 'react'
import { ThemeContextApi } from './Context/ThemeContextApi'
import { theme } from './Context/ThemeContextApi'
import Nav from './Component/Nav'
import './App.css'
import Component2 from './Component/Component2'
import Component1 from './Component/Component1'

const App = () => {
const [toggle, setToggle] = React.useState(false);





  return (
    <div>
      <ThemeContextApi value={theme}>

        <Nav/>
        <Component2/>
        <Component1/>

      </ThemeContextApi>
    </div>
  )
}

export default App
