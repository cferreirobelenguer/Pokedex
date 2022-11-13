import React,{useState,useEffect} from 'react'
import axios from 'axios'
import StyleImage from '../assets/css/image.module.css'


const AddImage=(props)=>{
    const [imagen,setImagen]=useState("")
    const [pokemonType,setPokemonType]=useState("")

    useEffect(()=>{
        const getData=()=>{
            axios.get(`${props.url}`)
            .then(res=>{
                console.log(res.data)
                setImagen(res.data.sprites.other.dream_world.front_default)
                setPokemonType(res.data.types[0].type.name)
            })
        }
        getData()
    },[])

    return(
        <>
            <div className={pokemonType==="fire"?StyleImage.image_fire:pokemonType==="water"?StyleImage.image_water:pokemonType==="grass"?StyleImage.image_grass:pokemonType==="electric"?StyleImage.image_electric:pokemonType==="fighting"?StyleImage.image_fighting:pokemonType==="poison"?StyleImage.image_poison:pokemonType==="flying"?StyleImage.img_flying:pokemonType==="ground"?StyleImage.img_ground:pokemonType==="rock"?StyleImage.img_rock:pokemonType==="psychic"?StyleImage.img_psychic:pokemonType==="ice"?StyleImage.img_ice:pokemonType==="bug"?StyleImage.img_bug:pokemonType==="ghost"?StyleImage.img_ghost:pokemonType==="steel"?StyleImage.img_steel:pokemonType==="dragon"?StyleImage.img_dragon:pokemonType==="dark"?StyleImage.img_dark:pokemonType==="fairy"?StyleImage.img_fairy:StyleImage.image_normal}>
                <img src={imagen}  alt="" className="img-fluid" width="200" height="200"></img>
            </div> 
        </>
            
    )
}
export default AddImage