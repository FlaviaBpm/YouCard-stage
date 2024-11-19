import React from 'react';
import './CardAgenda.css';

const cardAgData = [
  {
    title: "Les excursions en bateau ont repris au Canal du Centre",
    date: "du 08 avril 2024 au 04 mai 2024",
  },
  {
    title: "Nouvelle croisière sur le Canal du Midi",
    date: "du 10 mai 2024 au 15 juin 2024",
  },
  {
    title: "Visite guidée des écluses de Fonséranes",
    date: "du 01 juillet 2024 au 31 août 2024",
  },
  {
    title: "Découverte du patrimoine fluvial de Toulouse",
    date: "du 01 septembre 2024 au 30 septembre 2024",
  },
  {
    title: "Promenade en bateau sur la Seine",
    date: "du 01 octobre 2024 au 31 octobre 2024",
  },
  {
    title: "Excursion en bateau à Bordeaux",
    date: "du 01 novembre 2024 au 30 novembre 2024",
  },
  {
    title: "Balade en bateau à Marseille",
    date: "du 01 décembre 2024 au 31 décembre 2024",
  },
  {
    title: "Croisière en bateau sur le Rhône",
    date: "du 01 janvier 2025 au 31 janvier 2025",
  },
  {
    title: "Tour en bateau sur le lac Léman",
    date: "du 01 février 2025 au 28 février 2025",
  },
];

function CardAgenda() {
  return (
    <div className="card-agenda-container">
      {cardAgData.map((content, index) => (
        <div className="card-agenda" key={index}>
          <div className="image-placeholder"></div>
          <h3>{content.title}</h3>
          <p>{content.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CardAgenda;
