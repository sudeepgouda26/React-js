import React from 'react'

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product