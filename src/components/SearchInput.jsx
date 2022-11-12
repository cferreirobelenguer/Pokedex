import React,{useState} from 'react'
import PokemonList from './PokemonList'
import PokemonIndividual from './PokemonIndividual'
import StyleSearch from '../assets/css/search.module.css'


const SearchInput=()=>{
    const [inputValue,setinputValue]=useState("")
    var inputData=""
    const handlerChange=(e)=>{
        //Se va cogiendo los datos que introduce el usuario en el input
        inputData=e.target.value
        
    }
    const handlerClick=()=>{
        //Cuando se hace click en go se almacenan los datos del input en el state
        setinputValue(inputData)
        
    }
    //Pasamos por props los datos del searchBar y llamamos al component PokemonList que coge esos datos
    //El componente SearchInput es el componente padre de PokemonIndividual y PokemonList
    
    return(
        <div className="container-fluid">
            <div className="input-group mb-3" id={StyleSearch.searchBar}>
                <input type="text" className="form-control" placeholder="Search" onChange={handlerChange}></input>
                <button className="btn btn-dark" type="submit" onClick={handlerClick}>Go</button>
            </div>
            <div className={StyleSearch.pokemon_container}>
                <div className={StyleSearch.pokemon_list}>
                    <PokemonList dataInput={inputValue}></PokemonList>
                </div>
                <div className={StyleSearch.pokemon_individual}>
                    <PokemonIndividual></PokemonIndividual>
                </div>
                
            </div>
        </div>
    )
}
export default SearchInput