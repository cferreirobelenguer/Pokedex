import React from 'react'
import StyleIndividual from '../assets/css/individual.module.css'

const PokemonIndividual=()=>{
    return(
        <section className={StyleIndividual.individual_container}>
            <div className={StyleIndividual.individual_card}>
                <h1>Component Individual</h1>
            </div>
        </section>
    )
}
export default PokemonIndividual