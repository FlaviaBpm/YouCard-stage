import React from 'react'
import Navbar from '../Components/PageAgenda/Navbar/Navbar'
import Title from '../Components/PageAgenda/Title/Title'
import Footer from '../Components/PageAgenda/Footer/Footer'
import CardAgenda from '../Components/PageAgenda/CardAgenda/CardAgenda'
import SearchAg from '../Components/PageAgenda/SearchAg/SearchAg'


function Agenda() {
  return (
    <div>
      <Navbar/>
      <Title/>
      <SearchAg/>
      <CardAgenda/>
      <Footer/>
    </div>
  )
}

export default Agenda
