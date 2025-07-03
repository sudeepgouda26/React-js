
import React, { useState } from 'react'

const Hoc = (Color) => {
  
    

    function ColorChange()
     {
      
  
      const [toggeled,setToggeled] =useState(false)
       const handleClick = () => {
      if(toggeled === false){
      setToggeled(true)
      }else{
        setToggeled(false)
      }
   }
     

      return <Color toggeled ={toggeled ?  "black": "white"} handleClick={handleClick}/>
   }
   return ColorChange
}

export default Hoc
