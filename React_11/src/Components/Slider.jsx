import React from 'react'

const Slider = () => {
    
    const arr =["https://plus.unsplash.com/premiuym_photo-1749668819550-43e7a3712a31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1750875936215-0c35c1742cd6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1750755068342-ee85ebad9615?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1749741331500-04c330bc53a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
     let [state, setState] = React.useState(arr[0]);
    let [index, setIndex] = React.useState(0);
    let handelDecrement=()=>{
        if(index ==0){
            setIndex(arr.length-1);
            setState(arr[index]);
        }else{
            setIndex(index-1);
            setState(arr[index]);
        }
    }
    let handelIncrement =()=>{
        if (index == arr.length-1) {
            setIndex(0);
            setState(arr[index]);
            
        }else{
            setIndex(index+1);
            setState(arr[index]);
        }
    }
    return (
    <div>
      <button onClick={handelIncrement}><h2>+</h2></button>
      <div><img src={state}/></div>
      <button onClick={handelDecrement}><h2>-</h2></button>
    </div>
  )
}

export default Slider
