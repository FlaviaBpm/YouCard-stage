import React from 'react'
import './CardPart.css'
import { FaCheck } from "react-icons/fa6";


function CardPart() {
  return (
    <div className='card-part-container'>
      <h2>Pourquoi devenir notre futur partenaire ?</h2>
        <p><FaCheck /> Faire partie d'un meme réseau</p>
        <p><FaCheck /> Profiter de plus de visibilité & communication</p>
        <p><FaCheck /> Profiter d'avantageux services</p>
        <button className='btn-part'>Complétez le formulaire</button>
    </div>
  )
}

export default CardPart

