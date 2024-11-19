import React from 'react';
import './FormPart.css';

function FormPart() {
  return (
    <div className="PartCont">
      <div className="part-form">
        <div className="part-text">
          <h2>Information de contact</h2>
          <p>Merci de votre intérêt pour devenir partenaire!<br/> Veuillez inscrire vos informations ci-dessous pour débuter le processus.</p>
        </div>
        <form>
          <div className="form-section">
          <div className="form-row">
          <div className="form-col">
            <label>Nom</label>
            <input type="text" name="nom" placeholder="Nom" />
            <br />
            </div>
            <div className="form-col">
            <label>Prénom</label>
            <input type="text" name="prenom" placeholder="Prénom" />
            <br />
            </div>
            </div>
            <label>Adresse email</label>
            <input type="email" name="email" placeholder="Adresse email" />
            <br />
            <label>Mot de passe</label>
            <input type="password" name="password" placeholder="Mot de passe" />
            <br />
            <div className="form-row">
            <div className="form-add">
            <label>Adresse</label>
            <input type="text" name="address" placeholder="Adresse" />
            <br />
            </div>
            <div className="form-num">
            <label>Numéro</label>
            <input type="text" name="numerp" placeholder="Nr" />
            <br />
            </div>
            </div>
            <label>Pays</label>
            <input type="text" name="pays" placeholder="Pays" />
            <br />
            <div className="form-row">
            <div className="form-col">
            <label>Ville</label>
            <input type="text" name="city" placeholder="Ville" />
            <br />
            </div>
            <div className="form-col">
            <label>Code postal</label>
            <input type="text" name="codePostal" placeholder="Code postal" />
            <br />
            </div>
            </div>
            <label>Téléphone</label>
            <input type="text" name="telephone" placeholder="Téléphone" />
            <br />
            <label>Url du site</label>
            <input type="text" name="siteUrl" placeholder="Url du site" />
            <br />
            <label>Numéro de TVA</label>
            <input type="text" name="tva" placeholder="Numéro de TVA" />
            <br />
            <div>
              <input type="checkbox" name="acceptConditions" />
              <label htmlFor="acceptConditions">J'accepte les conditions générales de partenariat de YouCard</label>
            </div>
          </div>

          <div className="part-text">
            <h2>Personne de contact</h2>
            <p>Merci de votre intérêt pour devenir partenaire! Veuillez inscrire vos informations ci-dessous pour débuter le processus.</p>
          </div>
          <div className="form-section">
            <label>Nom</label>
            <input type="text" name="contactNom" placeholder="Nom" />
            <br />
            <label>Prénom</label>
            <input type="text" name="contactPrenom" placeholder="Prénom" />
            <br />
            <label>Adresse email</label>
            <input type="email" name="contactEmail" placeholder="Adresse email" />
            <br />
            <label>Téléphone</label>
            <input type="text" name="contactTelephone" placeholder="Téléphone" />
            <br />
            <button className='btn-form' type="submit">Suivant</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPart;
