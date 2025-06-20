import React, { Component } from 'react'
import Boxes from './Boxes'

export class SmallBox extends Component {
  render() {
    return (
      <div id='SmallBox'>
        <Boxes></Boxes>
           <Boxes></Boxes>
      </div>
    )
  }
}

export default SmallBox
