import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      count : 0,
      delete:false
    }
    
  }

  // componentDidMount= ()=>{
  //   document.title = `Count is ${this.state.count}`;
  // }

  // componentDidUpdate =()=>{
  //   document.title = `Count is ${this.state.count}`;
  // }



  render() {
    return (
      <div>
      <h2>{this.state.count}</h2>  

      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click</button>    

      <button onClick={()=>{this.setState({delete:true})}}>delete</button>  
      {this.state.delete ? null: <App2 />}
      </div>
    )
  }
}

class App2 extends React.Component{
  constructor(){
    super();
    this.state ={
      name: "John",
    }
  }

  componentWillUnmount= () =>{
    alert("Component is going to be unmounted");
  }
render(){
  return(
    <div>
      <h2>My Name is {this.state.name}</h2>
    </div>
  )
}
}
