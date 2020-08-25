import React from 'react'

export default function Todos({todos,deleteTodo}) {

    const todoList = todos.length
    ?(
        todos.map(todo=>{
            return (
                <div className="collection-item" onClick={()=>deleteTodo(todo.id)} key={todo.id}>
                   {todo.content}
                </div>
            )
        })
    )
    :(<p className="center">You have no todos, yay!</p>)
    return (
        <div className="items todos collection">
            {todoList}
        </div>
    )
}
