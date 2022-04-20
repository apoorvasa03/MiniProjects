import {useEffect, useState} from 'react'
import PokeCard from './PokeCard';
import './pokemon.css'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokeId, setPokeId] = useState([1]);
   
   
    useEffect(() => {
        getAllPokemon()
        .then(res => {
            setPokemons(res)
        })
    }, [])

    async function getAllPokemon() {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=100&offset=0').then(res => res.json())
        return response.results
    }
    
    function changePokeId(id){
        setPokeId(Number(id))
    }

    function handleChange(e){
        let id = e.target.value;
        e.target.size=1;
        e.target.blur();
        changePokeId(id)
        
    }

    function handleClick(state){
        if(state === 'prev'){
            if(pokeId > 1) changePokeId(pokeId-1)
        }else{
            if(pokeId < pokemons.length - 1) changePokeId(pokeId+1)
        }

    }
    return (
        <div className='pokemon-container'>
            <div className='pokemon-wrapper'>
                <select className='pokemon-selector' 
                onChange={handleChange} 
                value={pokeId} 
                onFocus = {(e) => e.target.size = 10}
                onBlur = {(e) => e.target.size = 1}
                >
                    <option>select</option>
                    {pokemons.map((pokemon, idx) => (
                        <option key= {idx} value={idx+1}>{pokemon.name}</option>
                    ))}
                </select>
                {pokemons.length ? <PokeCard id={pokeId} name={pokemons[pokeId-1].name}/> : <></>}
                
                
                <div className='pokemon-buttons'>
                    <button onClick={() => handleClick('prev')}>previous</button>
                    <button onClick={() => handleClick('next')}>next</button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon