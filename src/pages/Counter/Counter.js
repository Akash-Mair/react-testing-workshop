import React, { useState } from 'react'

const Counter = ({ initialCountValue }) => {
    const [count, setCount] = useState(initialCountValue)
    return (
       <div>
           <h1>Counter</h1>
           <div>{count}</div>
           <button onClick={() => setCount(count + 1)}>Increment</button>
           <button onClick={() => setCount(count - 1)}>Decrement</button>
           <button onClick={() => setCount(initialCountValue)}>Reset</button>
       </div>
    )
}

export default Counter
