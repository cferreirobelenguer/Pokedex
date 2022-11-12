import React,{useState,useEffect} from 'react'
import StyleList from '../assets/css/list.module.css'
import axios from 'axios'
import AddImage from './AddImage'
import PokemonIndividual from './PokemonIndividual'


const PokemonList=(props)=>{
    const [result, setResult]=useState([])
    

    useEffect(()=>{
        //llamada api para generar lista de pokemon, los resultados van en state result
        const createList=()=>{
            axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
            .then(res=>setResult(res.data.results))
            .catch((err) => console.log(err));
        }
        createList()
        
    },[])
    //console.log(result)
    //PokemonList es el componente padre de PokemonIndividual y le pasa por props los datos del searchBar
    return(
        <>
        <div className={StyleList.pokemonList}>
            {result.map((i)=>{
                return(
                    <div className="card bg-dark" id={StyleList.pokemonCard} key={i.name}>
                            <div className="card-header" id={StyleList.image_container}><AddImage url={i.url}></AddImage></div>
                            <div className="card-body"  id={StyleList.name_container}><h1>{i.name}</h1></div>
                            <div className="card-footer"><button>Más info</button></div>
                    </div>
                
                )
            })}
            
        </div>
        
        <PokemonIndividual data={props.dataInput}></PokemonIndividual>
        
        </>
    )
}
export default PokemonList