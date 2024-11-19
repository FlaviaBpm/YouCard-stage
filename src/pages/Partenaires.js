import React from 'react'
import Navbar from '../Components/PagePartenaires/Navbar/Navbar'
import Footer from '../Components/PagePartenaires/Footer/Footer'
import Title from '../Components/PagePartenaires/Title/Title'
import Verif from '../Components/PagePartenaires/Verif/Verif'
import FormContainer from '../Components/PagePartenaires/FormContainer'

const Partenaires = () => {
  return (
    <div>
        <Navbar/>
        <Title/>
        <Verif/>
        <FormContainer/>
        <Footer/>
    </div>
  )
}

export default Partenaires
