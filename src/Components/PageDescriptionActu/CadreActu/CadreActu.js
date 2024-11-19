import React from "react";
import NuitDesChoeurs from "../../../assets/imagesAvantages/NuitDesChoeurs.jpeg";
import "./CadreActu.css";

const CadreActu = () => {
  return (
    <div className="Actu">
      <div className="ContainerActu">
        <img
          src={NuitDesChoeurs}
          alt="Image NuitDesChoeurs"
          className="ImageActu"
        />
        <div className="InfoActu">
          <h1>Où ?</h1> <p>Site abbatial</p>
          <h1>Quoi ?</h1>{" "}
          <p>Spectacle - Promenade Abbaye de Villers-la-ville</p>
          <h1>Quand ?</h1> <p>Les 30 et 31 août 2024</p>
          <h1>Plus d'info ?</h1> <p>02/736.01.04 - info@nuitdeschoeurs.be</p>
          <h1>Page Web :</h1>{" "}
          <p><a href="http://www.nuitdeschoeurs.be/" className="LienActu">
            http://www.nuitdeschoeurs.be/</a></p>
          
        </div>
      </div>
    </div>
  );
};

export default CadreActu;