import React, { createContext, useState } from 'react'
import ChildComp from './ChildComp'
export const UserContext = createContext()

const ParentComp = () => {
    const [userName, setUserName] = useState("Irfan Ahmad")
    
    return (
        <div>
            <h3>I am Parent Component</h3>
            <input type='text' name='username' onChange={(e) => setUserName(e.target.value)} />
            <UserContext.Provider value={userName} >
                <ChildComp />
            </UserContext.Provider>
        </div>
    )
}

export default ParentComp