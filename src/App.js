import React, {Component} from 'react'
import Todos from './Todos'
import AddTodo from './AddForm'

export default class App extends Component{
    state = {
        todos: []
    }
    deleteTodo=(id)=>{
        const todos = this.state.todos.filter(todo=>todo.id!==id)
        this.setState({
            todos
        })
    }
    addTodo =(newTodo)=>{
        newTodo.id = Math.random()
        let todos =[...this.state.todos, newTodo]
        this.setState({
            todos
        })
    }
    render(){
        return (
            
            <div className="todo-app  container">
                <h1 className="center blue-text">Todo's</h1>
                <div className="alert">CLICK TO DELETE</div>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo add={this.addTodo}/>
            </div>
        )
    }
}