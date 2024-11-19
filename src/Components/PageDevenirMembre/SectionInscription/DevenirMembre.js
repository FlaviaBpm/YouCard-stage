import React from "react";
import "./DevenirMembre.css";
import membre from "../../../assets/imageDevenirMembre/membre.png";
import google from "../../../assets/imageDevenirMembre/google.png";

const DevenirMembre = () => {
  return (
    <div className="color">
      <div className="container-membre">
        <div className="visual-membre">
          <h1 className="titre-membre">Devenir membre</h1>
          <img src={membre} alt="image_membre" className="image-membre" />
          <p className="texte-connexion">Connexion avec :</p>
          <div className="reseau-membre">
            <img src={google} alt="" />
          </div>
        </div>

        <div className="container-form">
          <div className="id-form">
            <div className="nom-form">
              <label>Nom</label>
              <input type="text" />
            </div>
            <div className="Prénom-form">
              <label>Prénom</label>
              <input type="text" />
            </div>
          </div>

          <div className="date-form">
            <label>Date de Naissance</label>
            <input type="date" className="date-input" />
          </div>

          <div className="mail-form">
            <label>Adresse mail</label>
            <input type="mail" />
          </div>

          <div className="adress-form">
            <label>Adresse </label>
            <input type="adress" />
          </div>

          <div className="lieu-form">
            <div className="pays-form">
              <label>Pays</label>
              <input type="text" />
            </div>
            <div className="postale-form">
              <label>Code postale</label>
              <input type="text" required />
            </div>
          </div>

          <div className="mdp-form">
            <label>Mot de passe</label>
            <input type="password" />
            </div>
          <div className="conf-mdp-form">
            <label className="mdp">Confirmation mot de passe</label>
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