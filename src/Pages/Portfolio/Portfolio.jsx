import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import "./portfolio.scss";
// Définition de la fonction Portfolio qui gère la page du portfolio. 
// Initialisation des variables filter et setFilter avec useState. 
// Initialisation du tableau projects avec useState.
function Portfolio() { 
  const [filter, setFilter] = useState("");
const [projects] = useState([
    {
      id: 1, 
      name: "Compteur",
      technology: "HTML, JavaScript, Css",
      image: "images/Compteur.png",
      link: "https://github.com/akamidev/COMPTEUR",
      description:
        "incrementer et decrementer un compteur avec Javascript",
    },
    {
      id: 2,
      name: "Pokedex",
      technology: "HTML, ReactJs, JavaScript, Sass",
      image: "images/Pokedex.png",
      link: "https://github.com/akamidev/Pokedex",
      description:
      "API Pokémon: Explorez les Index"},
    {
      id: 3,
      name: 'Site Web Interactif',
      technology: 'HTML, CSS, JavaScript',
      image: "images/Siteweb.png",
      link: "https://github.com/akamidev/SITEWEB_INTERACTIF",
      description: "Implémenter du JavaScript sur un site statique",
    },
    {
      id: 4,
      name: "Portfolio Figma",
      technology: "HTML, Sass, ReactJs, JavaScript, NodeJs ",
      image: "images/PORTFOLIO-FIGMA.png",
      link: "https://github.com/akamidev/PORTFOLIO-FIGMA",
      description:
        "Clone de Site Figma en React",
    },
    {
      id: 5,
      name: "Drapaux Pays",
      technology: "HTML, Sass, ReactJs, JavaScript",
      image: "images/Countrys.png",
      link: "https://github.com/akamidev/COUNTRY",
      description:
        "React Explore: Infos et Drapeaux des Pays via API",
    },
    {
      id: 6,
      name: "Système de Gestion des Factures",
      technology: "HTML, CSS, JavaScript",
      image: "images/Factures.png",
      link: "https://github.com/akamidev/PROJET_FACTURE",
      description:
        "Créer, afficher, éditer et supprimer des factures",
    },
    {
      id: 7,
      name: "UI / UX Design ",
      technology: "Figma",
      image: "images/TP-UI-UX.png",
      link: "images/AKAMI-MEHDI-TP-LES-AVINEAUX.jpg",
      description:
        "Créer des maquettes interactives et des wireframes",
    },
    {
      id: 8,
      name: "Projet Cinéma: Détail Film et Liste Membres",
      technology: "PHP, MySQL",
      image: "images/ProjetPHP.png",
      link: "https://github.com/akamidev/Projet-Cin-ma-D-tail-Film-et-Liste-Membres",
      description:
      "Gestion des données via SQL",
    },
    {
      id: 8,
      name: "Projet Site Dynamique",
      technology: "PHP, MySQL",
      image: "images/PHP_Ecomerce.png",
      link: "https://github.com/akamidev/Projet-Site-Dynamique-PHP-Sans-BDD",
      description:
      "Création site web dynamique, gestion contenu via tableaux",
    },
  ]);

  const filteredProjects = projects.filter((project) => // projects est le tableau de données à filtrer
    project.name.toLowerCase().includes(filter.toLowerCase()) // données filtrées
  );

  return (
    <div id="portfolio"> 
      <div className="container">
        <h1 className="sub-title">Mes Projets</h1>
        <input
          type="text"
          placeholder="Filtrez par nom du Projet"
          onChange={(e) => setFilter(e.target.value)} //  un événement  qui est déclenché lorsque le champ est modifié
        /> 
        <div className="work-list">
          {filteredProjects.map((project) => ( // Boucle sur le tableau des projets pour afficher chaque projet
            //Ajout de l'id du projet à l'élément
            <div className="work" key={project.id}>  
              <img src={project.image} alt={project.name} />
              <div className="layer">
                <h1>{project.name}</h1> 
                <h2>{project.description}</h2>
                <h3>{project.technology}</h3>
                <a href={project.link} className="link-button">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default Portfolio;
