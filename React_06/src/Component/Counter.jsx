import React, { Component } from 'react'

export default class Counter extends Component {
    
  constructor() {
    super();
    this.state= {
      count : 0,
    }
  }


    hndelChange =()=>{

      this.setState({count: this.state.count+1})
      console.log(this.state.count);
      

      if(this.state.count ===4){
        document.body.style.backgroundColor = "red";
      }
      if (this.state.count === 9) {
        document.body.style.backgroundColor = "blue";
        
      }
    
  }
 hndelChange2=()=>{
    this.setState({count : this.state.count -1})
    console.log(this.state.count);
    
      if(this.state.count ===4){
        document.body.style.backgroundColor = "red";
      }
      if (this.state.count === 10) {
        document.body.style.backgroundColor = "blue";
        
      }
 }
  render() {
    return (
      <div>
         <div>
      <h1>Count : {this.state.count}</h1>
      <button onClick={this.hndelChange}>Increment</button>
      <button onClick={this.hndelChange2}>Decrement</button>

      </div>
      </div>
    )
  }
}
