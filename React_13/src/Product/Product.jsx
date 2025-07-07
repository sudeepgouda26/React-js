import React from 'react'
import Cart from './Cart';

const Product = () => {
    const [status, setStaus] = React.useState(false);
     const [Secondstatus, setSecndStatus] = React.useState(false);

   let firstFunction=()=>{
    setStaus(true)


    }
    let SecondFunction =()=>{
        setSecndStatus(true)
    }
  return (
    <div>
    <h2>Phone A</h2>
    <button onClick={firstFunction}>Add to Cart</button>

    {status ? <Cart cartitems={"phoneA"}/> : null}
     <h2>Book B</h2>
    <button onClick={SecondFunction}>Add to Cart</button>

    {Secondstatus ? <Cart cartitems={"Book B"}/> : null}

    </div>
  )
}

export default Product
