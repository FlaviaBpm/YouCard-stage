import React from 'react';
import './Connexion.css';
import facebook from "../../../assets/images/ImageDevenirMembre/facebook.png";
import apple from "../../../assets/images/ImageDevenirMembre/apple.png";
import google from "../../../assets/images/ImageDevenirMembre/google.png";


const connexion = () => {
  return (
    <div className='container-cnx'>
      <div className='container-connexion'>
        <h1>Connexion</h1>
        <div className='container-input'>
        <p>Email</p> 
        <input type="text" className='inpt-cnx' placeholder='Email'/>
        <p>Mot de passe</p>
        <input type="text" className='inpt-cnx' placeholder='Mot de passe' />
        <div className='input-chbx'>
        <input type="checkbox" />
        <p className='chbx-svnr'>Se souvenir de moi</p>
        </div>
        </div>
        <button className='btn-cnx'>Connexion</button>
        <p>Vous n'avez pas de compte ? <a href="/Partenaires" className='inscription-color'>Inscrivez-vous !</a></p>
        <p className='inscription-color'>ou</p>
        <div className='img-rsx'>
        <img src={facebook} alt="facebook.png" />
        <img src={apple} alt="apple.png" />
        <img src={google}alt="google.png" />
        </div>
        
      </div>
    </div>
  );
};

export default connexion;
