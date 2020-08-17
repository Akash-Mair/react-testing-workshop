import React, { useState } from 'react'

const Counter = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
       <div>
           <div>{count}</div>
           <button onClick={() => setCount(count + 1)}>Increment</button>
           <button onClick={() => setCount(count - 1)}>Decrement</button>
           <button onClick={() => setCount(initialCount)}>Reset</button>
       </div>
    )
}

export default Counter
