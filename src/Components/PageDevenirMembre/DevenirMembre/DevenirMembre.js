import React from "react";
import "./DevenirMembre.css";
import membre from "../../../assets/images/ImageDevenirMembre/membre.png";
import facebook from "../../../assets/images/ImageDevenirMembre/facebook.png";
import apple from "../../../assets/images/ImageDevenirMembre/apple.png";
import google from "../../../assets/images/ImageDevenirMembre/google.png";

const DevenirMembre = () => {
  return (
    <div className="color">
      <div className="container-membre">
        <div className="visual-membre">
          <h1 className="titre-membre">Devenir membre</h1>
          <img src={membre} alt="image_membre" className="image-membre" />
          <p className="texte-connexion">Connexion avec :</p>
          <div className="reseau-membre">
            <img src={facebook} alt="" />
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>

        <div className="container-form">
          <div className="id-form">
            <div className="nom-form">
              <h1>Nom</h1>
              <input type="text" />
            </div>
            <div className="Prénom-form">
              <h1>Prénom</h1>
              <input type="text" />
            </div>
          </div>

          <div className="date-form">
            <h1>Date de Naissance</h1>
            <input type="date" className="date-input" />
          </div>

          <div className="mail-form">
            <h1>Adresse mail</h1>
            <input type="mail" />
          </div>

          <div className="lieu-form">
            <div className="pays-form">
              <h1>Pays</h1>
              <input type="text" />
            </div>
            <div className="postale-form">
              <h1>Code postale</h1>
              <input type="text" required />
            </div>
          </div>

          <div className="mdp-form">
            <h1>Mot de passe</h1>
            <input type="password" />
            <h1 className="mdp">Confirmation mot de passe</h1>
            <input type="password" name="confirmation_mot_de_passe" required />
          </div>
      <div className="checkbox">
        <div className="conditions">
          <input type="checkbox" id="apple" name="fruit" value="apple" />
          <label for="Conditions-générales">
            J'accepte les conditions générales
          </label>
        </div>
        <div className="newsletter">
          <input type="checkbox" id="apple" name="fruit" value="apple" />
          <label for="Newsletter">
            Je ne souhaite pas être inscrit à la newsletter
          </label>
        </div>
        <button className="btn-membre">Confirmer</button>
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default DevenirMembre;