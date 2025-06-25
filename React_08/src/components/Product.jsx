import React, { Component } from 'react'

export default class Product extends Component {
  render(props) {
    console.log(this.props.box1);
    
    
    return (
      <div>
    {this.props.box1}
      </div>
    )
  }
}
