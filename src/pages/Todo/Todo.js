import React, { useState } from 'react'
import { TODO_URL } from '../../Constants'

const Todo = () => {

    const [todo, setTodo] = useState(null)

    const fetchTodo = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(data => setTodo(data))
    }

    return (
        <div>
            <h1>To do</h1>
            <button onClick={() => fetchTodo(TODO_URL)}>Fetch Todo</button>
            { 
                todo &&
                <div>
                    <div>{todo.userId}</div>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.completed}</div>
                </div>
            }
        </div>
    )
}

export default Todo
