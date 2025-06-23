import React, { Component } from 'react'
import Counter from './Component/Counter'
import Card from './Component/Card'

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        {/* <Card></Card> */}
      </div>
    )
  }
}

