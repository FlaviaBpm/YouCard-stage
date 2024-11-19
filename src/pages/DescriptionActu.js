import React from 'react';
import TitreActu from '../Components/PageDescriptionActu/TitreActu/TitreActu';
import Navbar from '../Components/PageDescriptionActu/Navbar/Navbar';
import Footer from '../Components/PageDescriptionActu/Footer/Footer';
import TexteDescription from '../Components/PageDescriptionActu/TexteDescription/TexteDescription';
import CadreActu from '../Components/PageDescriptionActu/CadreActu/CadreActu';

const DescriptionActu = () => {
  return (
    <div>
      <Navbar/>
      <TitreActu/>
      <TexteDescription/>
      <CadreActu/>
      <Footer/>
    </div>
  )
}

export default DescriptionActu;