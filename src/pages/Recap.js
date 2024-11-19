import React from 'react'
import Navbar from '../Components/PageRecap/Navbar/Navbar';
import CadreCarte from '../Components/PageRecap/CadreCarte/CadreCarte';
import Contact from '../Components/PageRecap/Contact/Contact';
import Description from '../Components/PageRecap/Description/Description';
import Avantages from '../Components/PageRecap/Avantages/Avantages';
import Agenda from '../Components/PageRecap/Agenda/Agenda';
import Footer from '../Components/PageRecap/Footer/Footer';


const Recap = () => {
  return (
    <div>
      <Navbar/>
      <CadreCarte/>
      <Contact/>
      <Description/>
      <Avantages/>
      <Agenda/>
      <Footer/>
    </div>
  )
}

export default Recap