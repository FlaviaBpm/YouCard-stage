import React from 'react'
import Navbar from '../Components/PageActu/Navbar/Navbar';
import Title from '../Components/PageActu/Title/Title';
import Carrousel from '../Components/PageActu/Carrousel/Carrousel';
import Titre2 from '../Components/PageActu/Titre2/Titre2';
import SearchActu from '../Components/PageActu/SearchActu/SearchActu';
import CardsActu from '../Components/PageActu/CardsActu/CardsActu';
import Footer from '../Components/PageActu/Footer/Footer'; 


function Actualités() {
  return (
    <div>
        <Navbar/> 
        <Title/>
        <Carrousel/>
        <Titre2/>
        <SearchActu/>
        <CardsActu/>
        <Footer/>
    </div>
  )
}

export default Actualités
