import React from 'react'
import data from "./Components/data.json"
import Product from './Components/Product'
import Cart from './Components/Cart'
import Food from './Components/Food'

const App = () => {
  return (
    <div>
      <Product  box1={<Cart box2={<Food box3={data}/>}/>}/>
    </div>
  )
}

export default App

