import React,{useState,useEffect} from 'react'
import axios from 'axios'


const AddImage=(props)=>{
    const [imagen,setImagen]=useState("")

    useEffect(()=>{
        const getData=()=>{
            axios.get(`${props.url}`)
            .then(res=>{
                console.log(res.data)
                setImagen(res.data.sprites.other.dream_world.front_default)
            })
        }
        getData()
    },[])

    return(
        <>
            <img src={imagen}  alt="" className="img-fluid" width="200" height="200"></img>
        </>
            
    )
}
export default AddImage