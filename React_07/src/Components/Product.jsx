import React, { Component } from 'react'
import Cart from './Cart'

export default class Product extends Component {
  render(props) {
   
    
    return (
      <div>
        <h1>{this.props.data}</h1>
        <Cart data1 = {this.props.data1} data2={this.props.jsondata}></Cart>
      </div>
    )
  }
}
