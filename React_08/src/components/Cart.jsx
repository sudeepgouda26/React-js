import React, { Component } from 'react'

export default class Cart extends Component {
  render(props) {
    console.log(this.props.box2);
    
    return (
      <div>
       {this.props.box2}
      </div>
    )
  }
}
