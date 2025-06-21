import React, { Component } from 'react'

export default class Bulb extends Component {
    constructor(){

        super()

        this.state ={
            src:'https://tse3.mm.bing.net/th?id=OIP.ytRiA-5ZR7tFvnEigBORSAHaHa&pid=Api&P=0&h=180',
            state:true,
        }
    }

    imageChangeOn=()=>{
        this.setState({src:'https://tse2.mm.bing.net/th?id=OIP.565TcOat3QSHtMsuwdW4WwHaHk&pid=Api&P=0&h=180'})
        this.setState({state:false})
    }
s
    imageChangeoff=()=>{
        this.setState({src:'https://tse3.mm.bing.net/th?id=OIP.ytRiA-5ZR7tFvnEigBORSAHaHa&pid=Api&P=0&h=180'})
        this.setState({state:true})
    }
  render() {
    return (
      <div>
       <img src={this.state.src} />
       <br></br>
       {this.state.state ? <button onClick={this.imageChangeOn}>on</button> : <button onClick={this.imageChangeoff}>off</button>}
       
      </div>
    )
  }
}
