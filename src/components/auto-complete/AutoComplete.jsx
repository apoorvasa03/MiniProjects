import axios from 'axios'
import {useState, useEffect, useCallback} from 'react'
import debounce from "lodash.debounce";
import './autocomplete.css'
const AutoComplete = () => {
    let [users, setUsers] = useState([])
    let [text, setText] = useState('')
    let [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const getUsers = async() => {
            let response = await axios('https://reqres.in/api/users')
            setUsers(response.data.data)
        }
        getUsers()
    }, [])

    

    const onChangeHandler = (text) => {
        let matchs = []
        if(text.length){
            matchs = users.filter(user => {
                let regEx = new RegExp(`${text}`, 'gi')
                return user.email.match(regEx)
            })
            setSuggestions(matchs)
        }
        setText(text)
    }

    const onSuggestionHandler = (text) => {
        setText(text)
        setSuggestions([])
    }

    return (
        <div>
            <input type='text' value={text} className='col-md-12 input' style={{marginTop: 10}} 
            onChange={e => onChangeHandler(e.target.value)}
            onBlur={() => 
            setTimeout(() => 
            { 
                setSuggestions([])
            }, 100)} />
            {suggestions && suggestions.map((suggestion) => 
                    <div key={suggestion.id} onClick={e => onSuggestionHandler(suggestion.email)} className='col-md-12 suggestion justify-content-md-center'>{suggestion.email}</div>
            )}
        </div>
    )
}

export default AutoComplete