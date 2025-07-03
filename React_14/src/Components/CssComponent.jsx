import React from 'react'
import Hoc from './Hoc'

const CssComponent = ({toggeled}) => {
    const bgColor = toggeled === "white" ? "bg-white" : "bg-black";
  return (
 
       <div className={`w-[50vw] h-[30vh] ${bgColor} border-2 border-black flex justify-between items-center px-10`}>
      {/* <button onClick={()=>{handleClick(toggeled)}}> change Color</button> */}
    </div>
   
  )
}

export default Hoc(CssComponent)

