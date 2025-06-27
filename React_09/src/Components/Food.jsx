import React, { Fragment } from 'react'

const Food = (props) => {
    console.log(props.box3.data.map(()=>{
        
    }));
    
  return (
    <div>
    {props.box3.data.map((item)=>{
       return <Fragment>
        <img src={item.image} id='value' height="300px" width="300px" alt={item.name} />
        </Fragment>
        
    })}
    </div>
  )
}

export default Food
