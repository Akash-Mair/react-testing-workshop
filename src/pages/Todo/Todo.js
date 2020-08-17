import React, { useState } from 'react'
import { TODO_URL } from '../../Constants'

const Todo = () => {

    const [todo, setTodo] = useState(null)

    const fetchTodo = () => {
        fetch(TODO_URL)
        .then(res => res.json())
        .then(data => setTodo(data))
    }

    return (
        <div>
            <button onClick={() => fetchTodo()}>Fetch Todo</button>
            { 
                todo != null ?
                <div data-testid="todo">
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
