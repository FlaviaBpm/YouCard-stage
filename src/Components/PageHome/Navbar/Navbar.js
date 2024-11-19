import React from 'react'
import'./Navbar.css'
function Navbar () {
  return (
    <nav className='container'>
    <a href="/"><h1> Youcard</h1></a>
      <ul>
        <a href="/Avantages"><li>Avantages</li></a>
        <a href="/Actualités"><li>Actualités</li></a>
        <a href="/Agenda"><li>Agenda</li></a>
        <a href='/Partenaires'><li>Partenaires</li></a>
        <a href='/devenir_membre'><li>Devenir Membre</li></a>
        <li><button className='btn'>Connexion</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
