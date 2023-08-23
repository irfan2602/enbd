import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(false)

    const ExpensiveCal = (num) => {
        for (var i = 0; i < 500000000; i++) { }
        return num
    }
    const result = useMemo(() => {
        return ExpensiveCal(counter)
    }, [counter])
    //const result = ExpensiveCal(counter)
    return (
        <div>
            <h4> Counter: {result} </h4>
            <button onClick={() => setCounter(counter + 1)} >Update Counter</button>
            <hr />
            <button onClick={() => setShow(!show)} >
                {show ? "CLick Me" : "You Clicked Me"}
            </button>
        </div>
    )
}

export default UseMemo