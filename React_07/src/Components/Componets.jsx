import React, { Component } from 'react'
import Product from './Product';
import jsondata from '../data.json'

export default class Componets extends Component {

    constructor(){
        super();
        this.name ="sudeep";

        this.state = {
            place:"bengaluru"
        }
    }
  render() {
    return (
      <div>
        <Product data={this.name} data1={this.state.place} jsondata={jsondata}></Product>
      </div>
    )
  }
}
