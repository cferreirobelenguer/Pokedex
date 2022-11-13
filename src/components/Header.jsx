import React from 'react'
import header from '../assets/css/header.module.css'
import PokemonImage from '../assets/images/pokemon.png'


const Header=()=>{
    //Componente que tiene la foto de portada del header
    return(
    <>
        <div className={header.containerHeader}>
            <img src={PokemonImage} width="80" height="80" alt="" className="img-fluid"></img>
        </div>
        <div className={header.header_container}>
            <div>
                
            </div>
        </div>
        
    </>
        
    )
}
export default Header;