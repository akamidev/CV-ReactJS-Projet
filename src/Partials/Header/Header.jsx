// Importe les dépendances nécessaires
import "./style.scss" // Importe le fichier de style
import {NavLink} from "react-router-dom"; // Importe le composant NavLink de react-router-dom pour la navigation
import React, { useState } from 'react'; // Importe React et le Hook d'état 'useState'
import logo from '../../Logo/logo_m_red.png'; // Importe le logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Importe le composant FontAwesomeIcon pour utiliser les icônes
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' // Importe les icônes 'faBars' et 'faTimes'

// Définit et exporte le composant Header
export default function Header() {
  let sidemenu = document.getElementById("sidemenu"); // Obtient l'élément avec l'id 'sidemenu'
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Définit l'état 'isMenuOpen' pour gérer l'ouverture et la fermeture du menu

  // Définit la fonction pour ouvrir le menu
  const openMenu = () => {
    sidemenu = document.getElementById("sidemenu"); // Obtient à nouveau l'élément avec l'id 'sidemenu'
    setIsMenuOpen(true); // Met à jour l'état 'isMenuOpen' à true
    sidemenu.style.right = "0"; // Déplace le menu sur la droite
  };

  // Définit la fonction pour fermer le menu
  const closeMenu = () => {
    sidemenu = document.getElementById("sidemenu"); // Obtient à nouveau l'élément avec l'id 'sidemenu'
    setIsMenuOpen(false); // Met à jour l'état 'isMenuOpen' à false
    sidemenu.style.right = "-200px"; // Déplace le menu hors de l'écran sur la droite
  };

  // Rend le composant Header         
  return (
    <div id="header">
      <div className="container">
        <nav>
          <header>
            <NavLink to="/">
              <img src={logo} className="logo" alt="Logo" />
            </NavLink>
            <ul id="sidemenu" className={isMenuOpen ? 'open' : ''}>
              <li><a href="/">Home</a></li>
              <li><a href="/Competence">Compétences</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
              <FontAwesomeIcon icon={faTimes} className="fa-solid fa-xmark" onClick={() => closeMenu()} />
            </ul>
            <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" onClick={() => openMenu()} />
          </header>
        </nav>
      </div>
    </div>
  );
}
