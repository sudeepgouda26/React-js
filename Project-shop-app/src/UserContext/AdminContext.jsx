import { createContext } from "react";
import React, { useState } from 'react';

 export let AdminContext =createContext();


 export const AdminProvider =({children})=>{
    let[admin, setAdmin] = useState(false);
    return(
        <AdminContext.Provider value={{admin, setAdmin}}>
            {children}
        </AdminContext.Provider>
    )
 }