import React, { useContext } from 'react'
import { UserContext } from './ParentComp'

const ChildComp = () => {
    const user = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <h3>I am Child Component</h3>
            <h3> Hi {user} </h3>
        </div>
    )
}

export default ChildComp