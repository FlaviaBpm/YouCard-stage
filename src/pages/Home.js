import React from 'react';
import Navbar from '../Components/PageHome/Navbar/Navbar';
import About from '../Components/PageHome/About/About'
import CarteAv from '../Components/PageHome/CarteAv/CarteAv'
import Une from '../Components/PageHome/Une/Une'
import Agenda from '../Components/PageHome/Agenda/Agenda'
import Actu from '../Components/PageHome/Actu/Actu'
import Footer from '../Components/PageHome/Footer/Footer'

const Home = () => {
        return (
            <div>
                <Navbar/> 
                <About/>
                <CarteAv/>
                <Une/>
                <Agenda/>
                <Actu/>
                <Footer/>
            </div>
        );
    };
    
    export default Home;