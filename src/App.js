import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './App.css';

class App extends Component {
    state = {
        todo: [
            { sNo: 1, id: 1, content: "Welcom Vivek" },
            { sNo: 2, id: 2, content: "Hello Every one" }
        ]
    }
    // to Delete Entry
    deleteTodo = (id) =>{
        const todoData = this.state.todo.filter(todos =>{
            return todos.id != id;
        });
        this.setState({
            todo: todoData
        });
    }
    // Add Custom Data
    addTodos = (data) => {
        let no = this.state.todo[this.state.todo.length - 1];
        data.sNo = no.sNo + 1;
        data.id = Math.random();
        let todoData = [...this.state.todo, data];
        this.setState({
            todo: todoData
        })

    }
    render() {
        return ( < div className = "todo-app container" >
            <h1 className = "center blur-text" > Welcome To Todo React App </h1> 
                <Todos todos = {this.state.todo } deleteTodo = {this.deleteTodo}/>  
                <AddTodo addTodos = {this.addTodos}/>
            </div>
        )
    }
}
export default App;