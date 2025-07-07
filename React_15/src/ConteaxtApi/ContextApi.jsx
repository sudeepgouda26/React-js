import React, { Children } from 'react'
import { createContext } from 'react'

export let ContextApi = createContext()

let ContextProvider =({children})=>{
    return <ContextApi.Provider value={"sudeep"}>

        {children}
    </ContextApi.Provider>
}
export default ContextProvider