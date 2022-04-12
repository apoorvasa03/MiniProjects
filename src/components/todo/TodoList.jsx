import TodoForm from "./todoForm"
import {useState} from "react"
import Todo from "./Todo"
import './todo.css'
const TodoList = () => {
    let [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        if(!todo.text) return;
        setTodos([...todos, todo])
    }

    const completeTodo = (id) => {
        let updatedTodo = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodo)
    }

    const updateTodo = (id, newTodo) => {
        if(!newTodo) return;

        setTodos(prev => prev.map(todo => todo.id === id ? newTodo : todo))
    }

    const removeTodo = (id) => {
        let updatedTodo = todos.filter(todo => {
            return todo.id !== id
        })

        setTodos(updatedTodo)
    }
    return (
        <div class="todo-app">
            <h1> What's todays Plan</h1>
            <TodoForm onSubmit= {addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo= {removeTodo} updateTodo= {updateTodo}/>
        </div>
        
    )
}

export default TodoList