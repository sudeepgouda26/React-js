import React, { Component } from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Box4 from './Box4'

export default class Nav extends Component {
  render() {
    return (
   <nav>
    <div>
        <Box1></Box1>
    </div>
     <div><Box2></Box2></div>
     <div><Box3></Box3></div>
     <div><Box4></Box4></div>
   </nav>
    )
  }
}
