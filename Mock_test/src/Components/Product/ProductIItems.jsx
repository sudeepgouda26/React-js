import React from 'react'

const ProductIItems = ({values ,addtoCart}) => {
    console.log(values[0].name);
    
  return (
    <div>
        {values.map((item)=>{
            return <div>
                <h2>{item.name}</h2>
            <button onClick={()=>addtoCart(item)}>addToCart</button>
        </div>
        })}
      
    </div>
  )
}

export default ProductIItems
