import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState(null)

    const fetchTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/8')
        .then(res => res.json())
        .then(data => setTodo(data))
    }

    return (
        <div>
            <h1>To do</h1>
            <button onClick={() => fetchTodo()}>Fetch Todo</button>
            { 
                todo != null ?
                <div>
                    <div>{todo.userId}</div>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.completed}</div>
                </div>
                :
                <span>No data yet</span>
            }
        </div>
    )
}

export default Todo
