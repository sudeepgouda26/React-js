import React from 'react'
import { createContext } from 'react'

export let ContextApi = createContext()

let ContextProvider =()=>{
    return <ContextApi.Provider value={"sudeep"}></ContextApi.Provider>
}
export default ContextProvider