import React,{useState,useEffect} from 'react'
import StyleIndividual from '../assets/css/individual.module.css'
import axios from 'axios'
import pokedex from '../assets/images/pokedex.jpg'

const PokemonIndividual=(props)=>{
    const [dataPokemon,setDataPokemon]=useState("")
    const[resultInfo, setResultInfo]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{ 
        const sendData=()=>{
            //sendData actualiza el state dataPokemon con los datos que el usuario pone en el input
            //Se renderiza cada vez que se actualiza el input
            console.log(resultInfo)
            if(props.data!==""){
                setDataPokemon(props.data)
            }
        }
        sendData()
        
    })

    useEffect(()=>{
        const sendInfo=()=>{
            setLoading(true)
            //sendInfo hace una búsqueda en la api cada vez que se actualiza el state dataPokemon
            //Se almacenan los resultados de la búsqueda en el state ResultInfo en caso de 404 ResultInfo está vacío
            if(dataPokemon!==""){
                axios.get("https://pokeapi.co/api/v2/pokemon/"+dataPokemon+"/")
                .then(res=>{
                    console.log("dato de input: "+res.data)
                    setResultInfo(res.data)
                    setLoading(false)
                    
                })
                .catch((err) =>{
                    console.log(err)
                    
                });
            }
        }
        
        sendInfo()
        
        
    },[dataPokemon])
    //si loading es true es que los datos aún no están cargados porque no se ha hecho la llamada a la api
    //Si loading es false se muestran los datos encontrados
        return(
            loading?(
                <><div id={StyleIndividual.containerFav}>
                    <div className="mt-4 p-5 bg-dark text-white rounded" id={StyleIndividual.fav}>
                        <h2>Encuentra a tu pokemon favorito</h2>
                        
                    </div>
                    <div id={StyleIndividual.imgFav}>
                        <img src={pokedex} alt="" width="600" height="700" className="img-fluid"></img>
                    </div>
                </div>
                    
                </>
            ):(
                <>
                <aside className="card bg-dark" id={StyleIndividual.individual_card} >
                    <div className="card-header"><img src={resultInfo.sprites.other.dream_world.front_default} width="300" height="300" className="img-fluid" alt=""></img></div>
                    <div className="card-body"><h2>Nombre: {resultInfo.name}</h2></div>
                    <div className="card-body"><h2>ID: {resultInfo.id}</h2></div>
                    <div className="card-body"><h2>Abilidades: {resultInfo.abilities.map((i)=>{
                        return(
                            <div key={i.ability.name}>
                                <h2>{i.ability.name}</h2>
                            </div>
                        )
                    })}</h2></div>
                    <div className="card-body"><h2>Tipo: {resultInfo.types.map((i)=>{
                        return(
                            <div key={i.type.name}><h2>{i.type.name}</h2></div>
                        )
                        
                    })}</h2></div>
                    
                </aside>
                
            </>
            )
            
        )
    
    
}
export default PokemonIndividual