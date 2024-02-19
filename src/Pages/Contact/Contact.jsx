import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faXTwitter,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.scss";
// Définition du composant Contact
function Contact() {// Utilisation du Hook useState pour gérer l'état local
    const [msg, setMsg] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
 // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();// Empêche le rechargement de la page
        setMsg(true);// Affiche le message de confirmation
        setTimeout(() => {// Définit un délai
            setMsg(false);// Cache le message de confirmation après 3 secondes
            setName("");// Réinitialise le champ Nom, email, message
            setEmail("");
            setMessage("");
        }, 3000); // 3 seconds de delai
    };

    return (  // Rendu du composant
        <>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contactez-moi</h1>
                            <p>
                                <FontAwesomeIcon icon={faPaperPlane} className="fa-solid" />{" "}
                                akamimehdi.dev@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhoneSquare} className="fa-solid" />{" "}
                                +33 6 99 85 80 05
                            </p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/mehdi-akami-1912a51a9">
                                    <FontAwesomeIcon icon={faLinkedin} className="fa-brands" />
                                </a>
                                <a href="https://github.com/akamidev/123">
                                    <FontAwesomeIcon icon={faGithub} className="fa-brands" />
                                </a>
                                <a href="https://twitter.com/home">
                                    <FontAwesomeIcon icon={faXTwitter} className="fa-brands" />
                                </a>
                                <a href="https://www.instagram.com/">
                                    <FontAwesomeIcon icon={faInstagram} className="fa-brands" />
                                </a>
                                <a href="https://www.facebook.com/">
                                    <FontAwesomeIcon icon={faFacebook} className="fa-brands" />
                                </a>
                            </div>
                            <a href="images/CV_AKAMI_Mehdi (1).pdf" className="btn btn2">
                                Téléchargez Mon CV
                            </a>
                        </div>
                        <div className="contact-right">
                            {/* // est un événement React qui est déclenché lorsque le formulaire est soumis */}
                            <form className="submit-to-google-sheet" onSubmit={handleSubmit}>
                                <input
                                    className="name"
                                    type="text"
                                    placeholder="Votre Nom"
                                    pattern="[A-Za-z\s]+"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                                <input
                                    className="email"
                                    type="email"
                                    placeholder="Votre E-mail"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                                <textarea
                                    className="message"
                                    placeholder="Votre Message"
                                    rows="6"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <button type="submit" className="btn btn2">
                                    Envoyez
                                </button>
                            </form>
                            {msg && (
                                <span className="msg" id="msg">
                                    Message envoyé avec succès !
                                </span>
                            )}
                            <div className="google-map">
               
            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10476.958965051013!2d2.2746841250599785!3d48.96796057816373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66627e3fe4405%3A0x40b82c3688b2db0!2s95210%20Saint-Gratien!5e0!3m2!1sfr!2sfr!4v1705407374987!5m2!1sfr!2sfr" 
                    width="1840"  
                    height="550" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
        </>
        
    );
}

export default Contact;
