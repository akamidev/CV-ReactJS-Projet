// Importe les dépendances nécessaires
import React from 'react'; // Importe React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe les composants pour le routage
import Home from './Pages/Home/Home'; // Importe le composant Home
import Competence from './Pages/Competence/Competence'; // Importe le composant Competence
import Portfolio from './Pages/Portfolio/Portfolio'; // Importe le composant Portfolio
import Contact from './Pages/Contact/Contact'; // Importe le composant Contact
import Footer from './Partials/Footer/Footer'; // Importe le composant Footer
import Header from './Partials/Header/Header'; // Importe le composant Header

// Définit et exporte le composant App
function App() {
  return (
    // Utilise le composant Router pour gérer le routage
    <Router> 
        <Header />              
        <Routes>
        <Route path="/Competence" element={<Competence />} />      
        <Route path="/Portfolio" element={<Portfolio />} />  
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/" element={<Home />} />  
    </Routes>
        <Footer />     
    </Router>
  );
}

export default App; // Exporte le composant App