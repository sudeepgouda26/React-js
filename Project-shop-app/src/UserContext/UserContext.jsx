import { createContext, useState } from "react";
import React from "react";


 export let userContext = createContext();

 export const UserContextProvider = ({children})=>{
   let [user, setUser] = useState(false);
   return(
    <userContext.Provider value={{user, setUser}}>
    {children}    
    </userContext.Provider>
   )


 }