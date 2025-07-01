import React from 'react'

const Hoc = (ColorComponent) => {
 return function Color(){
    return <ColorComponent color={{ dark : "black" , light : "white"}}></ColorComponent>
 }
}

export default Hoc
