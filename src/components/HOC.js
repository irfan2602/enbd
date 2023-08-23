import React, { useState } from 'react'

const HOC = () => {
    return (
        <div>
            <RedWrapper cmp={Generic} />
            <GreenWrapper cmp={Generic} />
        </div>
    )
}

const RedWrapper = (props) => {
    return <h2 style={{ background: 'red', width: '100px' }}> <props.cmp /> </h2>
}
const GreenWrapper = (props) => {
    return <h2 style={{ background: 'green', width: '100px' }}> <props.cmp /> </h2>
}


const Generic = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <h4>Counter value is : {counter} </h4>
            <button type='submit' onClick={(e) => setCounter(counter + 1)} >+</button>
        </>
    )
}

export default HOC