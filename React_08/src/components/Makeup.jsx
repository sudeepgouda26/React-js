import React, { Component } from 'react'
import { Fragment } from 'react';

export default class Makeup extends Component {
  render(props) {
    console.log(this.props.json.data);
    
    return (
      <div>
       {this.props.json.data.map((item, index) => {
         return <Fragment key={index}>
            <img src={item.image} id='value' height="300px" width="300px" alt={item.name} />
            </Fragment>
       })}
      </div>
    )
  }
}
