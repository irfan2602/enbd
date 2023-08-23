import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const CounterForTodos = () => {
    const [counter, setCounter] = useState(0)
    const [todoList, setTodoList] = useState([])

    const addTodo = useCallback(() => {
        setTodoList((prev) => [...prev , `New Todo`])
    }, [todoList])
    
    return (
        <div>
            <Todos todos={todoList} addTodo={addTodo} />
            <hr />
            <h4>Counter: {counter} </h4>
            <button onClick={() => setCounter(counter + 1)} >Update</button>
        </div>
    )
}

export default CounterForTodos