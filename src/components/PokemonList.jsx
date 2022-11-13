import React,{useState,useEffect} from 'react'
import StyleList from '../assets/css/list.module.css'
import axios from 'axios'
import AddImage from './AddImage'
import PokemonIndividual from './PokemonIndividual'


const PokemonList=(props)=>{
    
    
    const [result, setResult]=useState([])
    const [offset,setOffset]=useState(20)

    const [pokemonInfo,setPokemonInfo]=useState("")
    
    
    useEffect(()=>{
        //Se genera la lista de pokemon cada vez que se actualiza el state offset
        //offset es un state que indica la paginación cuyos límites son 20 y 1114
        const createList=()=>{
            axios.get("https://pokeapi.co/api/v2/pokemon/?offset="+offset+"&limit=20")
            .then(res=>setResult(res.data.results))
            .catch((err) => console.log(err));
        }
        createList()
        
    },[offset])
    //métodos de paginación
    const handlerPrevious=()=>{
        if(offset<=20){
            setOffset(20)
        }else{
            setOffset(offset-20)
        }
        console.log(offset)
    }
    const handlerNext=()=>{
    
            if(offset>=1114){
                setOffset(1114)
            }else{
                setOffset(offset+20)
            }
            
        
        console.log(offset)
    }
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
                            <div className="card-footer"><button className="btn" onClick={()=>{
                                console.log("evento más info")
                                setPokemonInfo(i.name)
                                console.log(pokemonInfo)
                            }} id={StyleList.button_info}>Más info</button></div>
                    </div>
                
                )
            })}
            <div className={StyleList.button_container}>
                <button className="btn btn-dark m-3" onClick={handlerPrevious} id={StyleList.button_Previous}>Anterior</button>
                <button className="btn btn-dark m-3" onClick={handlerNext} id={StyleList.button_Next}>Siguiente</button>
            </div>
        </div>
        
        <PokemonIndividual data={props.dataInput} info={pokemonInfo}></PokemonIndividual>
        
        </>
    )
}
export default PokemonList