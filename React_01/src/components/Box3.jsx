import React, { Component } from 'react'
import FirstRectangl from './FirstRectangl'
import SmallBox from './SmallBox'
import Boxes from './Boxes'

export class Box3 extends Component {
  render() {
    return (
      <div id='third-box'>
     <Boxes></Boxes>
      <Boxes></Boxes>
        <Boxes></Boxes>
      
      </div>
    )
  }
}

export default Box3
