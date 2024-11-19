import React from "react";
import "./Avantages.css";
import { useEffect } from "react";

const Avantages = () => {
    useEffect(() => {
        const accordion = document.getElementsByClassName('contentbox');
        
        const toggleActiveClass = (event) => {
            event.currentTarget.classList.toggle('active');
        };

        for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', toggleActiveClass);
        }

        // Cleanup event listeners on component unmount
        return () => {
            for (let i = 0; i < accordion.length; i++) {
                accordion[i].removeEventListener('click', toggleActiveClass);
            }
        };
    }, []);

  return (
    <div className='container'>
        <div className='accordion'>
      <h1 className="titre-av">Avantages</h1>
      <div className="contentbox">
        <div className="label">Tarif réduit avec YouCard </div>
        <div className="content">
          <p> Les partenaires bénéficient d'un tarif réduit de 14.5 sous présentation de la YouCard.</p>
          <button className="btn-av"><a href="#">Je profite de cet Avantages</a></button>
        </div>
      </div>
  
      <div className="contentbox">
        <div className="label">Avantage + </div>
        <div className="content">
          <p> Les partenaires bénéficient d'un tarif réduit de 14.5 sous présentation de la YouCard.</p>

        </div>
      </div>

      <div className="contentbox">
        <div className="label">Avantage ++ </div>
        <div className="content">
          <p> Les partenaires bénéficient d'un tarif réduit de 14.5 sous présentation de la YouCard.</p>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Avantages;