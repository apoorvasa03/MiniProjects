import {useState, useEffect, useRef} from 'react'
const TodoForm = ({onSubmit, edit}) => {
    let [input, setInput] = useState(edit ? edit.value: '')
    let inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    function handleSubmit(e){
        e.preventDefault()
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {edit ? 
            <>
                <input type="text" 
            className="todo-input" 
            value={input} name='text' 
            placeholder="Update todo"
            onChange={handleChange}
            ref = {inputRef}/>
            <button className='todo-button'>Update todo</button>
            </> :
            <>
                <input type="text" 
                className="todo-input" 
                value={input} name='text' 
                placeholder="Add a todo"
                onChange={handleChange}
                ref = {inputRef}/>
                <button className='todo-button'>Add todo</button>
            </>

            
        }
           
        </form>
    )
}

export default TodoForm