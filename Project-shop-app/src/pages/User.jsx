import React, { useContext } from 'react'
import { userContext } from '../UserContext/UserContext'

const User = () => {
    let {user} = useContext(userContext)
   return (
    <div>
      <h1>User Information</h1>
      {user ? (
        <h2>hello</h2>
      ) : (
        <p>No user information available</p>
      )}
    </div>
  )
}

export default User
