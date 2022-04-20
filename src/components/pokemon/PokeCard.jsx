
import {useEffect, useState} from 'react'
const PokeCard = ({id, name}) => {
    const [pokemon, setPokemon] = useState('') 

    useEffect(() => {
        const getPokemon = async (id) => {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`).then(res => res.json());
            let pokemon = {
                pokeUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                desc: data.flavor_text_entries[0].flavor_text.replace(/[\n\f]/ig, "")
            }
            return pokemon
    
        }

        getPokemon(id).then(res => {
            setPokemon(res)
        })
    }, [id])

    

    return (
        <div className="poke-card">
            <img src={pokemon.pokeUrl} alt='pokemon-img'/>
            <h4>{name}</h4>
            <p>{pokemon.desc}</p>
        </div>
    )
}

export default PokeCard