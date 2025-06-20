import React, { Component } from 'react'
import SmallRectangle from './SmallRectangle'

export class SecondRectangle extends Component {
  render() {
    return (
      <div id='SecondRectangle'>
        <SmallRectangle></SmallRectangle>
      </div>
    )
  }
}

export default SecondRectangle
