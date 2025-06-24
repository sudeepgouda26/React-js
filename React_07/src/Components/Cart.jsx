import React, { Component } from 'react'
import { Fragment } from 'react';

export default class Cart extends Component {
  render(props) {
   
    // console.log(this.props.data2.data[0].image)
        
      
    return (
      <div>
        <h2>{this.props.data1}</h2>

     {this.props.data2.data.map((value)=>{
        console.log(value.image);
        return <Fragment>
            <img src={value.image} id='value' height="300px" width="300px" />
</Fragment>        
     })}
        
      </div>
    )
  }
}
