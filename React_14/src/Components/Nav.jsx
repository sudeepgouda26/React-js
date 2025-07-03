import React from 'react'
import Hoc from './Hoc'

const Nav = ({toggeled,handleClick}) => {
     const bgColor = toggeled === "white" ? "bg-white" : "bg-black";
    
  return (
    <div className={`w-[100vw] h-[10vh] ${bgColor} border-2 border-black flex justify-between items-center px-10`}>
      <button onClick={()=>{handleClick(toggeled)}}> change Color</button>
    </div>
  )
}

export default Hoc(Nav)
