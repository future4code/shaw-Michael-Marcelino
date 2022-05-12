import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){

    return(
        <div className='card-pequeno'>
            <img src={props.imagem} />
            <h4>{props.nome}</h4>
            <p>{props.descricao}</p>
        </div>
    )
}

export default CardPequeno