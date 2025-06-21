import React from 'react'

const App = () => {
  const  data =["apple", "banana", "orange", "grape", "kiwi", "mango", "peach", "pear", "pineapple", "strawberry"];
  return (
    <div>
   {data.map((value,index)=>(
     <h2 key={index}>{value}</h2>

   ))}

 
    </div>
  )
}

export default App
