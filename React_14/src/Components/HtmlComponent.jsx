import React from 'react'
import Hoc from './Hoc'

const HtmlComponent = ({toggeled}) => {
    const bgColor = toggeled === "white" ? "bg-white" : "bg-black";
    console.log(bgColor);
    
  return (
   <div className={`w-[60vw] h-[30vh] ${bgColor} border-2 border-black flex justify-between items-center px-10`}>
     
    </div>
  )
}

export default Hoc(HtmlComponent)

