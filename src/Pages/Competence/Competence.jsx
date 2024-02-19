// Importation des Hooks React nécessaires et des données à partir d'un fichier de données
import React, { useState, useEffect } from "react";
import {
  competences,
  experiences,
  formations,
  languages,
  hobbies,
  technologies,
} from "../../Partials/Data/Data";

// Définition du composant Tabs
function Tabs() {
  // Utilisation du Hook useState pour créer une variable d'état activeTab et une fonction pour la mettre à jour.
  // La valeur initiale est récupérée à partir du localStorage ou définie sur 'compétences' si aucune valeur n'est stockée.
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "compétences"
  );

  // Utilisation du Hook useEffect pour mettre à jour la valeur de activeTab dans le localStorage chaque fois que activeTab change.
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  // Définition d'un tableau de tabs avec leurs noms et contenus respectifs.
  const tabs = [
    { name: "Expériences", content: experiences },
    { name: "Formations", content: formations },
    { name: "Languages  ", content: languages },
    { name: "Technologies", content: technologies },
    { name: "Autres Compétences", content: competences },
    { name: "Centres D'intérêt", content: hobbies },
  ];
  // Le composant retourne une div avec l'id "about".
  return (
    <div id="about">
      <div className="containr">
        <div className="row">
          <div className="about-col-1"></div>
          <div className="about-col-2">
            <h1 className="sub-title">Mes Compétences</h1>
            <div className="tab-titles">
              {/* // Boucle sur le tableau des onglets pour afficher chaque onglet */}
              {tabs.map((tab, index) => (
                <p

                  key={index}
                  className={`tab-links ${
                    activeTab === tab.name ? "active-link" : ""
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </p>
              ))}
            </div>

            {tabs.map((tab, index) => (
              <div
                key={index}
                 // Ajout de classes CSS à l'élément. Si l'onglet est actif, la classe 'active-tab' est ajoutée
                className={`tab-contents ${
                  activeTab === tab.name ? "active-tab" : ""
                }`}
                  // Ajout de l'id de l'onglet à l'élément
                id={tab.name}
              >
                <ul>
                {/* Création d'un élément de liste pour chaque élément du contenu */}
                  {tab.content.map((item, index) => (
                    <li key={index}>
                      <span>{item.title}</span>
                      <br />
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
