import React, { memo } from 'react'

const Todos = ({ todos, addTodo }) => {
    console.log(`Child Component`)
    return (
        <div>
            <h3>Welcome To Todo List :</h3>
            <h4> {todos.length < 1 ? "No Data" : ""} </h4>
            {
                todos.map((data, index) => {
                    return (
                        <>
                            <p key={index}> {data + index} </p>
                        </>
                    )
                })
            }
            <br />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default memo(Todos)