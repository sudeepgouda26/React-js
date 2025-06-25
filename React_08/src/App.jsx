import React, { Component } from 'react'
import Product from './components/Product'
import Cart from './components/Cart'
import Makeup from './components/Makeup'
import Data from "./components/Data.json"

export default class App extends Component {
  render() {
    return (
      <div>
       <Product box1={<Cart box2={<Makeup json={Data}/>}/>} />
      </div>
    )
  }
}
