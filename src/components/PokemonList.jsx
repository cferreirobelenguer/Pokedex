import React from 'react'
import StyleList from '../assets/css/list.module.css'

const PokemonList=(props)=>{
    return(
        <div className={StyleList.pokemonList}>
            <div className={StyleList.pokemonCard}>
                <h1>valor del searchBar {props.dataInput}</h1>
            </div>
        </div>
    )
}
export default PokemonList