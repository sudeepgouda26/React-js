

// export default App
import { useRef, useState } from 'react'

const App = () => {
  
  const [username, setUsername] = useState({
    name:"",
    passWord:""
  });


  let textRef = useRef();
  let passWordRef = useRef();

  let handelChange = () => {
    setUsername({
      name: textRef.current.value,
      passWord: passWordRef.current.value
    });
  }

  return (

   
    <div>
       <input type='text' ref={textRef}></input>
        <input type='password' ref={passWordRef}></input>
        <button onClick={handelChange}>Submit</button>
         <table border="1">
        <tr>
          <th>USernane</th>
          <th>passWord</th>
           </tr>
        <tr>
          <td>
          {username.name}
        </td>
        <td>
          {username.passWord}
        </td>
       
        </tr>

        
      </table>
     

    </div>
  )
}

export default App
