import React, { Component } from 'react'
import FirstRectangl from './FirstRectangl'
import SecondRectangle from './SecondRectangle'
import SmallRectangle from './SmallRectangle'

export class Box1 extends Component {
  render() {
    return (
      <div id='first-box'>
       
            <FirstRectangl></FirstRectangl>
           <SecondRectangle>
           </SecondRectangle>
      </div>
    )
  }
}

export default Box1
