import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Avantages from './pages/Avantages';
import Devenir_Membre from './pages/Devenir_Membre';
import Actualités from './pages/Actualités';
import Connexion from './pages/Connexion';
import Agenda from './pages/Agenda';
import Recap from './pages/Recap';
import Partenaires from './pages/Partenaires';
import DescriptionActu from './pages/DescriptionActu';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Devenir_Membre" element={<Devenir_Membre />} />
        <Route path="/Avantages" element={<Avantages/>} />
        <Route path="/Actualités" element={<Actualités />} />
        <Route path='/Agenda' element={<Agenda/>}/>
        <Route path="/Connexion" element={<Connexion/>}/>
        <Route path='/Recap' element={<Recap/>}/>
        <Route path='/Partenaires' element={<Partenaires/>}/>
        <Route path='/DescriptionActu' element={<DescriptionActu/>}/>
      </Routes>
    </Router>
  );
}

export default App;